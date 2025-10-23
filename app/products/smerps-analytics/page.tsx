import { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, CheckCircle2, TrendingUp, AlertCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

export const metadata: Metadata = {
  title: 'SMERPs Analytics | Autonomous Business Intelligence',
  description:
    'Cross-tool dashboards, anomaly detection, daily insights, and recommended actions—analytics that drive decisions, not just report them.',
};

export default function SmerpsAnalyticsPage() {
  const capabilities = [
    {
      title: 'Cross-Tool Dashboards',
      icon: BarChart3,
      description:
        'Aggregate data from CRM, accounting, marketing, operations, and HR into unified dashboards. No manual CSV exports.',
      examples: ['Revenue by channel/product/region', 'Customer acquisition cost and lifetime value', 'Team performance and utilization'],
    },
    {
      title: 'Anomaly Detection',
      icon: AlertCircle,
      description:
        'AI monitors metrics in real time and alerts you to unexpected changes: revenue dips, cost spikes, churn signals.',
      examples: ['Email, Slack, SMS alerts', 'Smart filtering to reduce false positives', 'Historical pattern analysis'],
    },
    {
      title: 'Daily Insights Brief',
      icon: Lightbulb,
      description:
        'Every morning, receive a personalized summary: key metrics, trends, issues flagged, and recommended actions.',
      examples: ['Key metrics vs yesterday/last week', 'Trends worth noting', 'One-click recommended actions'],
    },
    {
      title: 'Recommended Actions',
      icon: TrendingUp,
      description:
        'Analytics don\'t just report—they suggest what to do next with one-click execution where possible.',
      examples: ['Launch promotions', 'Assign overflow tasks', 'Review burn rate'],
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="opacity-30">
          <AnimatedBackground />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main className="pt-24 pb-20">
            {/* Hero */}
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-8">
                    <BarChart3 className="w-10 h-10 text-green-400" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                    SMERPs <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Analytics</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-400 mb-4">Insights that drive action</p>
                  <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    SMERPs Analytics connects your tools, builds dashboards automatically, flags anomalies, and recommends next actions—so you spend less time in spreadsheets and more time making decisions.
                  </p>

                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                      Request Demo
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">Core Capabilities</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
                        <capability.icon className="w-7 h-7 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{capability.description}</p>
                      <ul className="space-y-2">
                        {capability.examples.map((example, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-gradient-to-b from-transparent to-green-500/5">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">
                  How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {[
                    {title: 'Connect', desc: 'Link your CRM, accounting, and other tools'},
                    {title: 'Configure', desc: 'Set thresholds and preferences'},
                    {title: 'Act', desc: 'Receive insights and take action'}
                  ].map((step, i) => (
                    <div key={i} className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                        {i + 1}
                      </div>
                      <h3 className="font-semibold text-white text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Pricing</h2>
                  <p className="text-xl text-white mb-4"><span className="font-bold">AED 1,500/month</span> (up to 5 connected tools)</p>
                  <p className="text-gray-300 mb-8">Unlimited dashboards • Real-time anomaly detection • Daily insights • Priority support</p>
                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
