'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import GlassCard from './GlassCard';
import { fetchPriceData, PriceData, formatPrice, formatPricePerM2, compareToMarket } from '../lib/priceData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function PriceCharts() {
  const { t } = useTranslation();
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showComparisons, setShowComparisons] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPriceData();
        setPriceData(data);
      } catch (err) {
        setError('Failed to load price data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-white/80">Loading price data...</p>
          </GlassCard>
        </div>
      </section>
    );
  }

  if (error || !priceData) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8 text-center">
            <p className="text-red-400">Error loading price data</p>
          </GlassCard>
        </div>
      </section>
    );
  }

  const chartOptions: ChartOptions<'line' | 'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        callbacks: {
          label: function(context: TooltipItem<'line' | 'bar'>) {
            return `${context.dataset.label}: ${formatPricePerM2(context.parsed.y)}/m²`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            family: 'Inter',
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            family: 'Inter',
            size: 11,
          },
          callback: function(value) {
            return formatPricePerM2(value as number);
          }
        },
      },
    },
  };

  const trendData = {
    labels: priceData.city_avg.slice(-12).map(item => {
      const date = new Date(item.month + '-01');
      return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
    }),
    datasets: [
      {
        label: 'Zagreb Center Average',
        data: priceData.city_avg.slice(-12).map(item => item.pricePerM2),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Kvaternik / Vlaška Area',
        data: priceData.kvaternik_vlaska.slice(-12).map(item => item.pricePerM2),
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const comparisonData = {
    labels: ['Jan 2024', 'Mar 2024', 'Jun 2024', 'Sep 2024', 'Dec 2024'],
    datasets: [
      {
        label: 'Zagreb Center Avg',
        data: [3190, 3250, 3340, 3430, 3520],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
      },
      {
        label: 'Kvaternik / Vlaška',
        data: [3560, 3640, 3760, 3880, 4000],
        backgroundColor: 'rgba(168, 85, 247, 0.7)',
        borderColor: 'rgb(168, 85, 247)',
        borderWidth: 2,
      },
    ],
  };

  const currentMarketPrice = priceData.kvaternik_vlaska[priceData.kvaternik_vlaska.length - 1].pricePerM2;
  const listingComparison = compareToMarket(priceData.currentListing.pricePerM2, currentMarketPrice);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('priceContext.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Price Trend Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                📈 {t('priceContext.cityTrend')}
              </h3>
              <div className="h-80">
                <Line data={trendData} options={chartOptions} />
              </div>
            </GlassCard>
          </motion.div>

          {/* Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                📊 {t('priceContext.comparison')}
              </h3>
              <div className="h-80">
                <Bar data={comparisonData} options={chartOptions} />
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Market Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <GlassCard className="p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-400/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                💎 Excellent Value Proposition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {formatPricePerM2(priceData.currentListing.pricePerM2)}
                  </div>
                  <div className="text-white/80">Our Listing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {formatPricePerM2(currentMarketPrice)}
                  </div>
                  <div className="text-white/80">Market Average</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    -{listingComparison.percentage.toFixed(1)}%
                  </div>
                  <div className="text-white/80">Below Market</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Comparables Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">
                🏘️ Comparable Properties
              </h3>
              <button
                onClick={() => setShowComparisons(!showComparisons)}
                className="glass-button px-4 py-2 text-sm"
              >
                {showComparisons ? 'Hide' : 'Show'} Details
              </button>
            </div>
            
            {showComparisons && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="overflow-x-auto"
              >
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 text-white/80">Address</th>
                      <th className="text-right py-3 text-white/80">Size</th>
                      <th className="text-right py-3 text-white/80">Price</th>
                      <th className="text-right py-3 text-white/80">€/m²</th>
                      <th className="text-center py-3 text-white/80">Renovated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceData.comps.map((comp, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="py-3 text-white">{comp.address}</td>
                        <td className="text-right py-3 text-white/80">{comp.size}m²</td>
                        <td className="text-right py-3 text-white/80">{formatPrice(comp.price)}</td>
                        <td className="text-right py-3 text-white/80">{formatPricePerM2(comp.pricePerM2)}</td>
                        <td className="text-center py-3">
                          {comp.renovated ? '✅' : '❌'}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-b-2 border-green-400/50 bg-green-500/10">
                      <td className="py-3 text-green-400 font-semibold">
                        {priceData.currentListing.address} (Our Listing)
                      </td>
                      <td className="text-right py-3 text-green-400 font-semibold">
                        {priceData.currentListing.size}m²
                      </td>
                      <td className="text-right py-3 text-green-400 font-semibold">
                        {formatPrice(priceData.currentListing.price)}
                      </td>
                      <td className="text-right py-3 text-green-400 font-semibold">
                        {formatPricePerM2(priceData.currentListing.pricePerM2)}
                      </td>
                      <td className="text-center py-3 text-green-400">✅</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-green-400">
                {t('priceContext.compsTitle')}
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}