"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Bar } from "react-chartjs-2";
import GlassCard from "./GlassCard";

const calculatorSchema = z.object({
  purchasePrice: z.number().min(1000, "Purchase price must be at least €1,000"),
  renovationBudget: z.number().min(0, "Renovation budget cannot be negative"),
  holdingCosts: z
    .number()
    .min(0, "Holding costs cannot be negative")
    .max(100, "Holding costs cannot exceed 100%"),
  strategy: z.enum(["airbnb", "longTerm"]),
  nightlyRate: z.number().min(0, "Nightly rate cannot be negative"),
  occupancy: z
    .number()
    .min(0, "Occupancy cannot be negative")
    .max(100, "Occupancy cannot exceed 100%"),
  cleaningCost: z.number().min(0, "Cleaning cost cannot be negative"),
  platformFee: z
    .number()
    .min(0, "Platform fee cannot be negative")
    .max(100, "Platform fee cannot exceed 100%"),
  monthlyRent: z.number().min(0, "Monthly rent cannot be negative"),
  vacancy: z
    .number()
    .min(0, "Vacancy cannot be negative")
    .max(100, "Vacancy cannot exceed 100%"),
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

  const [inputs, setInputs] = useState<CalculatorInputs>({
    purchasePrice: 159900,
    renovationBudget: 15000,
    holdingCosts: 5,
    strategy: "airbnb",
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

  const updateInput = useCallback(
    (key: keyof CalculatorInputs, value: number | string) => {
      const newInputs = { ...inputs, [key]: value };
      setInputs(newInputs);
      validateInputs(newInputs);
    },
    [inputs, validateInputs],
  );

  const calculateResults = useCallback((): CalculationResults => {
    const totalCost =
      inputs.purchasePrice +
      inputs.renovationBudget +
      (inputs.purchasePrice * inputs.holdingCosts) / 100;

    let monthlyIncome = 0;
    let monthlyExpenses = 0;

    if (inputs.strategy === "airbnb") {
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
    const netYield = ((annualNetIncome - totalCost * 0.02) / totalCost) * 100; // Subtract 2% for taxes/maintenance
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
    const variations = [
      -sensitivityRange,
      -sensitivityRange / 2,
      0,
      sensitivityRange / 2,
      sensitivityRange,
    ];
    const labels = variations.map((v) => `${v > 0 ? "+" : ""}${v}%`);

    const sensitivityData = variations.map((variation) => {
      const adjustedInputs = {
        ...inputs,
        nightlyRate:
          inputs.strategy === "airbnb"
            ? inputs.nightlyRate * (1 + variation / 100)
            : inputs.nightlyRate,
        occupancy:
          inputs.strategy === "airbnb"
            ? Math.min(100, inputs.occupancy * (1 + variation / 100))
            : inputs.occupancy,
        monthlyRent:
          inputs.strategy === "longTerm"
            ? inputs.monthlyRent * (1 + variation / 100)
            : inputs.monthlyRent,
      };

      const tempInputs = inputs;
      Object.assign(inputs, adjustedInputs);
      const tempResults = calculateResults();
      Object.assign(inputs, tempInputs);

      return tempResults.netYield;
    });

    return {
      labels,
      datasets: [
        {
          label: t("common.netYield"),
          data: sensitivityData,
          backgroundColor: "rgba(59, 130, 246, 0.7)",
          borderColor: "rgb(59, 130, 246)",
          borderWidth: 2,
        },
      ],
    };
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
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: { color: "rgba(255, 255, 255, 0.7)" },
      },
      y: {
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
          callback: function (value: string | number) {
            const numValue =
              typeof value === "string" ? parseFloat(value) : value;
            return `${numValue.toFixed(1)}%`;
          },
        },
      },
    },
  };

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-8 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="center-content mb-16"
      >
        <h2 className="gradient-text mb-6 text-4xl font-bold md:text-5xl">
          {t("calculator.title")}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8">
        {/* Input Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="border-2 border-blue-400/30 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-4 shadow-xl sm:p-6 lg:p-8">
            <motion.h3 
              className="mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-black text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              {t("calculator.investmentParameters")}
            </motion.h3>

            <div className="space-y-4">
              {/* Purchase Price */}
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  {t("calculator.purchasePrice")}
                </label>
                <input
                  type="number"
                  value={inputs.purchasePrice}
                  onChange={(e) =>
                    updateInput("purchasePrice", Number(e.target.value))
                  }
                  className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                />
                {errors.purchasePrice && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.purchasePrice}
                  </p>
                )}
              </div>

              {/* Renovation Budget */}
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  {t("calculator.renovationBudget")}
                </label>
                <input
                  type="number"
                  value={inputs.renovationBudget}
                  onChange={(e) =>
                    updateInput("renovationBudget", Number(e.target.value))
                  }
                  className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                />
              </div>

              {/* Holding Costs */}
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  {t("calculator.holdingCosts")}
                </label>
                <input
                  type="number"
                  value={inputs.holdingCosts}
                  onChange={(e) =>
                    updateInput("holdingCosts", Number(e.target.value))
                  }
                  className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>

              {/* Strategy */}
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  {t("calculator.strategy")}
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => updateInput("strategy", "airbnb")}
                    className={`flex-1 rounded-lg border p-3 transition-all ${
                      inputs.strategy === "airbnb"
                        ? "border-blue-400 bg-blue-500/30 text-white"
                        : "border-white/20 bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    🏨 {t("calculator.airbnb")}
                  </button>
                  <button
                    onClick={() => updateInput("strategy", "longTerm")}
                    className={`flex-1 rounded-lg border p-3 transition-all ${
                      inputs.strategy === "longTerm"
                        ? "border-blue-400 bg-blue-500/30 text-white"
                        : "border-white/20 bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    🏠 {t("calculator.longTerm")}
                  </button>
                </div>
              </div>

              {/* Strategy-specific inputs */}
              {inputs.strategy === "airbnb" ? (
                <>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-white/80">
                        {t("calculator.nightlyRate")}
                      </label>
                      <input
                        type="number"
                        value={inputs.nightlyRate}
                        onChange={(e) =>
                          updateInput("nightlyRate", Number(e.target.value))
                        }
                        className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-white/80">
                        {t("calculator.occupancy")}
                      </label>
                      <input
                        type="number"
                        value={inputs.occupancy}
                        onChange={(e) =>
                          updateInput("occupancy", Number(e.target.value))
                        }
                        className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-white/80">
                        {t("calculator.cleaningCost")}
                      </label>
                      <input
                        type="number"
                        value={inputs.cleaningCost}
                        onChange={(e) =>
                          updateInput("cleaningCost", Number(e.target.value))
                        }
                        className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-white/80">
                        {t("calculator.platformFee")}
                      </label>
                      <input
                        type="number"
                        value={inputs.platformFee}
                        onChange={(e) =>
                          updateInput("platformFee", Number(e.target.value))
                        }
                        className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-white/80">
                      {t("calculator.monthlyRent")}
                    </label>
                    <input
                      type="number"
                      value={inputs.monthlyRent}
                      onChange={(e) =>
                        updateInput("monthlyRent", Number(e.target.value))
                      }
                      className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-white/80">
                      {t("calculator.vacancy")}
                    </label>
                    <input
                      type="number"
                      value={inputs.vacancy}
                      onChange={(e) =>
                        updateInput("vacancy", Number(e.target.value))
                      }
                      className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
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
          <GlassCard className="border-2 border-green-400/30 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-4 shadow-xl sm:p-6 lg:p-8">
            <motion.h3 
              className="mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-2xl font-black text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              {t("calculator.investmentResults")}
            </motion.h3>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <motion.div 
                className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-4 text-center backdrop-blur-sm border border-white/10 sm:p-6"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-3 text-3xl font-black text-emerald-400">
                  €{results.totalCost.toLocaleString()}
                </div>
                <div className="text-sm font-medium text-white/90">
                  {t("calculator.totalCost")}
                </div>
              </motion.div>
              <motion.div 
                className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-4 text-center backdrop-blur-sm border border-white/10 sm:p-6"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-3 text-3xl font-black text-green-400">
                  {results.grossYield.toFixed(1)}%
                </div>
                <div className="text-sm font-medium text-white/90">
                  {t("calculator.grossYield")}
                </div>
              </motion.div>
              <motion.div 
                className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-4 text-center backdrop-blur-sm border border-white/10 sm:p-6"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-3 text-3xl font-black text-blue-400">
                  {results.netYield.toFixed(1)}%
                </div>
                <div className="text-sm font-medium text-white/90">
                  {t("calculator.netYield")}
                </div>
              </motion.div>
              <motion.div 
                className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-4 text-center backdrop-blur-sm border border-white/10 sm:p-6"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-3 text-3xl font-black text-amber-400">
                  {results.payback.toFixed(1)} yrs
                </div>
                <div className="text-sm font-medium text-white/90">
                  {t("calculator.payback")}
                </div>
              </motion.div>
            </div>

            <div className="border-t border-white/20 pt-4">
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>{t("calculator.monthlyIncome")}</span>
                  <span>€{results.monthlyIncome.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("calculator.monthlyExpenses")}</span>
                  <span>-€{results.monthlyExpenses.toFixed(0)}</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2 font-semibold text-white">
                  <span>{t("calculator.netMonthly")}</span>
                  <span>
                    €
                    {(results.monthlyIncome - results.monthlyExpenses).toFixed(
                      0,
                    )}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Sensitivity Analysis */}
          <GlassCard className="border-2 border-amber-400/30 bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-4 shadow-xl sm:p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between">
              <motion.h4 
                className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-xl font-black text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                {t("calculator.sensitivityAnalysis")}
              </motion.h4>
              <select
                value={sensitivityRange}
                onChange={(e) => setSensitivityRange(Number(e.target.value))}
                className="rounded border border-white/20 bg-white/10 p-2 text-sm text-white"
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
        </motion.div>
      </div>
    </section>
  );
}
