'use client';

import { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Bar } from 'react-chartjs-2';
import GlassCard from './GlassCard';

const calculatorSchema = z.object({
  purchasePrice: z.number().min(1000, 'Purchase price must be at least €1,000'),
  renovationBudget: z.number().min(0, 'Renovation budget cannot be negative'),
  holdingCosts: z.number().min(0, 'Holding costs cannot be negative').max(100, 'Holding costs cannot exceed 100%'),
  strategy: z.enum(['airbnb', 'longTerm']),
  nightlyRate: z.number().min(0, 'Nightly rate cannot be negative'),
  occupancy: z.number().min(0, 'Occupancy cannot be negative').max(100, 'Occupancy cannot exceed 100%'),
  cleaningCost: z.number().min(0, 'Cleaning cost cannot be negative'),
  platformFee: z.number().min(0, 'Platform fee cannot be negative').max(100, 'Platform fee cannot exceed 100%'),
  monthlyRent: z.number().min(0, 'Monthly rent cannot be negative'),
  vacancy: z.number().min(0, 'Vacancy cannot be negative').max(100, 'Vacancy cannot exceed 100%'),
});

type CalculatorInputs = z.infer<typeof calculatorSchema>;

interface CalculationResults {
  totalCost: number;
  grossYield: number;
  netYield: number;
  cashOnCash: number;
  payback: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  annualNetIncome: number;
}

export default function RoiCalculator() {
  const { t } = useTranslation();
  const pdfRef = useRef<HTMLDivElement>(null);
  
  const [inputs, setInputs] = useState<CalculatorInputs>({
    purchasePrice: 159900,
    renovationBudget: 15000,
    holdingCosts: 5,
    strategy: 'airbnb',
    nightlyRate: 65,
    occupancy: 70,
    cleaningCost: 25,
    platformFee: 15,
    monthlyRent: 800,
    vacancy: 10,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sensitivityRange, setSensitivityRange] = useState(10);

  const validateInputs = useCallback((data: Partial<CalculatorInputs>) => {
    try {
      calculatorSchema.parse(data);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path.length > 0) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  }, []);

  const updateInput = useCallback((key: keyof CalculatorInputs, value: number | string) => {
    const newInputs = { ...inputs, [key]: value };
    setInputs(newInputs);
    validateInputs(newInputs);
  }, [inputs, validateInputs]);

  const calculateResults = useCallback((): CalculationResults => {
    const totalCost = inputs.purchasePrice + inputs.renovationBudget + (inputs.purchasePrice * inputs.holdingCosts / 100);
    
    let monthlyIncome = 0;
    let monthlyExpenses = 0;

    if (inputs.strategy === 'airbnb') {
      const daysPerMonth = 30;
      const occupiedDays = (daysPerMonth * inputs.occupancy) / 100;
      const grossMonthlyIncome = occupiedDays * inputs.nightlyRate;
      const cleaningIncome = occupiedDays * inputs.cleaningCost * 0.5; // Assume 50% of cleaning goes to host
      const platformCosts = grossMonthlyIncome * (inputs.platformFee / 100);
      
      monthlyIncome = grossMonthlyIncome + cleaningIncome - platformCosts;
      monthlyExpenses = 150; // Estimated monthly expenses for Airbnb
    } else {
      const effectiveOccupancy = (100 - inputs.vacancy) / 100;
      monthlyIncome = inputs.monthlyRent * effectiveOccupancy;
      monthlyExpenses = 100; // Estimated monthly expenses for long-term rental
    }

    const netMonthlyIncome = monthlyIncome - monthlyExpenses;
    const annualNetIncome = netMonthlyIncome * 12;
    
    const grossYield = (annualNetIncome / totalCost) * 100;
    const netYield = ((annualNetIncome - (totalCost * 0.02)) / totalCost) * 100; // Subtract 2% for taxes/maintenance
    const cashOnCash = (annualNetIncome / totalCost) * 100;
    const payback = totalCost / annualNetIncome;

    return {
      totalCost,
      grossYield,
      netYield,
      cashOnCash,
      payback,
      monthlyIncome,
      monthlyExpenses,
      annualNetIncome,
    };
  }, [inputs]);

  const results = calculateResults();

  const generateSensitivityData = () => {
    const variations = [-sensitivityRange, -sensitivityRange/2, 0, sensitivityRange/2, sensitivityRange];
    const labels = variations.map(v => `${v > 0 ? '+' : ''}${v}%`);
    
    const sensitivityData = variations.map(variation => {
      const adjustedInputs = {
        ...inputs,
        nightlyRate: inputs.strategy === 'airbnb' ? inputs.nightlyRate * (1 + variation/100) : inputs.nightlyRate,
        occupancy: inputs.strategy === 'airbnb' ? Math.min(100, inputs.occupancy * (1 + variation/100)) : inputs.occupancy,
        monthlyRent: inputs.strategy === 'longTerm' ? inputs.monthlyRent * (1 + variation/100) : inputs.monthlyRent,
      };
      
      const tempInputs = inputs;
      Object.assign(inputs, adjustedInputs);
      const tempResults = calculateResults();
      Object.assign(inputs, tempInputs);
      
      return tempResults.netYield;
    });

    return {
      labels,
      datasets: [{
        label: t('common.netYield'),
        data: sensitivityData,
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
      }]
    };
  };

  const generatePDF = async () => {
    if (!pdfRef.current) return;

    try {
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#0f172a',
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      
      // Add title
      pdf.setFontSize(20);
      pdf.text('CasaVlaška ROI Analysis', 20, 20);
      
      // Add subtitle
      pdf.setFontSize(12);
      pdf.text('Vlaška 117, Zagreb - Investment Analysis', 20, 30);
      
      // Add image
      const imgWidth = 170;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 20, 40, imgWidth, Math.min(imgHeight, 200));
      
      // Add summary
      let yPos = Math.min(imgHeight, 200) + 50;
      pdf.setFontSize(14);
      pdf.text('Investment Summary:', 20, yPos);
      
      yPos += 10;
      pdf.setFontSize(10);
      pdf.text(`${t('common.totalInvestment')}: €${results.totalCost.toLocaleString()}`, 20, yPos);
      yPos += 7;
      pdf.text(`${t('common.annualNetIncome')}: €${results.annualNetIncome.toLocaleString()}`, 20, yPos);
      yPos += 7;
      pdf.text(`${t('common.netYieldPercent')}: ${results.netYield.toFixed(1)}%`, 20, yPos);
      yPos += 7;
      pdf.text(`${t('common.paybackPeriod')}: ${results.payback.toFixed(1)} years`, 20, yPos);
      
      // Add disclaimer
      yPos += 20;
      pdf.setFontSize(8);
      pdf.text(t('common.generatedBy'), 20, yPos);
      pdf.text('Contact: +1 204 620-4491 (Lorie)', 20, yPos + 5);
      
      pdf.save('casavlaska-roi-analysis.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { color: 'rgba(255, 255, 255, 0.7)' },
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { 
          color: 'rgba(255, 255, 255, 0.7)',
          callback: function(value: string | number) {
            const numValue = typeof value === 'string' ? parseFloat(value) : value;
            return `${numValue.toFixed(1)}%`;
          }
        },
      },
    },
  };

  return (
    <section className="section-spacing relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="center-content mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('calculator.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                📊 Investment Parameters
              </h3>
              
              <div className="space-y-4">
                {/* Purchase Price */}
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    {t('calculator.purchasePrice')}
                  </label>
                  <input
                    type="number"
                    value={inputs.purchasePrice}
                    onChange={(e) => updateInput('purchasePrice', Number(e.target.value))}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                  />
                  {errors.purchasePrice && (
                    <p className="text-red-400 text-xs mt-1">{errors.purchasePrice}</p>
                  )}
                </div>

                {/* Renovation Budget */}
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    {t('calculator.renovationBudget')}
                  </label>
                  <input
                    type="number"
                    value={inputs.renovationBudget}
                    onChange={(e) => updateInput('renovationBudget', Number(e.target.value))}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                  />
                </div>

                {/* Holding Costs */}
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    {t('calculator.holdingCosts')}
                  </label>
                  <input
                    type="number"
                    value={inputs.holdingCosts}
                    onChange={(e) => updateInput('holdingCosts', Number(e.target.value))}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>

                {/* Strategy */}
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    {t('calculator.strategy')}
                  </label>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => updateInput('strategy', 'airbnb')}
                      className={`flex-1 p-3 rounded-lg border transition-all ${
                        inputs.strategy === 'airbnb'
                          ? 'bg-blue-500/30 border-blue-400 text-white'
                          : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      🏨 {t('calculator.airbnb')}
                    </button>
                    <button
                      onClick={() => updateInput('strategy', 'longTerm')}
                      className={`flex-1 p-3 rounded-lg border transition-all ${
                        inputs.strategy === 'longTerm'
                          ? 'bg-blue-500/30 border-blue-400 text-white'
                          : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      🏠 {t('calculator.longTerm')}
                    </button>
                  </div>
                </div>

                {/* Strategy-specific inputs */}
                {inputs.strategy === 'airbnb' ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 text-sm mb-2">
                          {t('calculator.nightlyRate')}
                        </label>
                        <input
                          type="number"
                          value={inputs.nightlyRate}
                          onChange={(e) => updateInput('nightlyRate', Number(e.target.value))}
                          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm mb-2">
                          {t('calculator.occupancy')}
                        </label>
                        <input
                          type="number"
                          value={inputs.occupancy}
                          onChange={(e) => updateInput('occupancy', Number(e.target.value))}
                          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 text-sm mb-2">
                          {t('calculator.cleaningCost')}
                        </label>
                        <input
                          type="number"
                          value={inputs.cleaningCost}
                          onChange={(e) => updateInput('cleaningCost', Number(e.target.value))}
                          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm mb-2">
                          {t('calculator.platformFee')}
                        </label>
                        <input
                          type="number"
                          value={inputs.platformFee}
                          onChange={(e) => updateInput('platformFee', Number(e.target.value))}
                          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        {t('calculator.monthlyRent')}
                      </label>
                      <input
                        type="number"
                        value={inputs.monthlyRent}
                        onChange={(e) => updateInput('monthlyRent', Number(e.target.value))}
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        {t('calculator.vacancy')}
                      </label>
                      <input
                        type="number"
                        value={inputs.vacancy}
                        onChange={(e) => updateInput('vacancy', Number(e.target.value))}
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Results Card */}
            <GlassCard className="p-6" ref={pdfRef}>
              <h3 className="text-xl font-semibold text-white mb-6">
                💰 Investment Results
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">
                    €{results.totalCost.toLocaleString()}
                  </div>
                  <div className="text-white/80 text-sm">{t('calculator.totalCost')}</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    {results.grossYield.toFixed(1)}%
                  </div>
                  <div className="text-white/80 text-sm">{t('calculator.grossYield')}</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    {results.netYield.toFixed(1)}%
                  </div>
                  <div className="text-white/80 text-sm">{t('calculator.netYield')}</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">
                    {results.payback.toFixed(1)} yrs
                  </div>
                  <div className="text-white/80 text-sm">{t('calculator.payback')}</div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4">
                <div className="text-sm text-white/80 space-y-2">
                  <div className="flex justify-between">
                    <span>Monthly Income:</span>
                    <span>€{results.monthlyIncome.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Expenses:</span>
                    <span>-€{results.monthlyExpenses.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-white border-t border-white/20 pt-2">
                    <span>Net Monthly:</span>
                    <span>€{(results.monthlyIncome - results.monthlyExpenses).toFixed(0)}</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Sensitivity Analysis */}
            <GlassCard className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-white">📈 Sensitivity Analysis</h4>
                <select
                  value={sensitivityRange}
                  onChange={(e) => setSensitivityRange(Number(e.target.value))}
                  className="p-2 rounded bg-white/10 border border-white/20 text-white text-sm"
                >
                  <option value={10}>±10%</option>
                  <option value={20}>±20%</option>
                  <option value={30}>±30%</option>
                </select>
              </div>
              <div className="h-48">
                <Bar data={generateSensitivityData()} options={chartOptions} />
              </div>
            </GlassCard>

            {/* PDF Export */}
            <motion.button
              onClick={generatePDF}
              className="w-full glass-button text-white font-semibold py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              📄 {t('calculator.getRoiPdf')}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}