import { Metadata } from 'next';
import Link from 'next/link';
import { Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

export const metadata: Metadata = {
  title: 'SMERP Automate | Pre-Built Workflow Automation',
  description:
    '50+ ready-to-use automation templates: quote-to-invoice, onboarding, reminders, data sync—deploy in minutes, customize as you grow.',
};

export default function SmerpAutomatePage() {
  const flows = [
    {
      name: 'Quote to Invoice',
      description: 'Convert approved quotes into invoices, send to clients, sync with accounting software.',
      timeSaved: '2 hours/week per team member',
    },
    {
      name: 'Employee Onboarding',
      description: 'Send welcome email, provision accounts, assign tasks, schedule check-ins.',
      timeSaved: '5 hours per new hire',
    },
    {
      name: 'Payment Reminders',
      description: 'Scheduled reminders for overdue invoices with customizable tone and frequency.',
      timeSaved: '20-30% faster payment',
    },
    {
      name: 'Data Sync Across Tools',
      description: 'Keep CRM, accounting, and project management data in sync automatically.',
      timeSaved: '90%+ error reduction',
    },
    {
      name: 'Lead Capture & Routing',
      description: 'New lead → enriched → scored → assigned to sales rep → CRM → follow-up task.',
      timeSaved: '<5 minute response time',
    },
    {
      name: 'Monthly Reconciliation',
      description: 'Compare transactions across systems, flag discrepancies, generate report.',
      timeSaved: '4-6 hours/month',
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
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-8">
                    <Rocket className="w-10 h-10 text-pink-400" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                    SMERP <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Automate</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-400 mb-4">Automate work, not people</p>
                  <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    SMERP Automate provides 50+ pre-built workflows that eliminate repetitive tasks—from quote-to-invoice flows to employee onboarding sequences. Deploy in minutes, customize as you grow.
                  </p>

                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Popular Flows */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">Popular Flows</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {flows.map((flow, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{flow.name}</h3>
                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">{flow.description}</p>
                      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl px-4 py-3">
                        <p className="text-xs font-semibold text-green-400">
                          Time saved: {flow.timeSaved}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Three Steps */}
            <section className="py-24 bg-gradient-to-b from-transparent to-pink-500/5">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">
                  Three steps to automation
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {['Choose a template', 'Customize workflow', 'Activate & monitor'].map((step, i) => (
                    <div key={i} className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                        {i + 1}
                      </div>
                      <p className="font-semibold text-white text-lg">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-white/10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Simple Pricing</h2>
                  <p className="text-xl text-white mb-4"><span className="font-bold">AED 800/month</span> per workflow (up to 10 workflows)</p>
                  <p className="text-gray-300 mb-8">Unlimited executions • Custom integrations • Priority support</p>
                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                      Start Free Trial
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
