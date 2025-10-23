import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Users, DollarSign, FileText, Headphones, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

export const metadata: Metadata = {
  title: 'SMERPs Crew | AI Agents for Business Automation',
  description:
    'Function-specific AI agents for Sales, Finance, Ops, HR, Support, and Marketing—automate repetitive tasks while keeping humans in the loop.',
};

export default function SmerpsCrewPage() {
  const agents = [
    {
      name: 'Sales Agent',
      icon: TrendingUp,
      tasks: ['Qualify inbound leads', 'Draft follow-up emails', 'Update CRM records', 'Schedule demo calls'],
      approval: 'Contract terms, pricing negotiations',
    },
    {
      name: 'Finance Agent',
      icon: DollarSign,
      tasks: ['Match invoices to POs', 'Flag anomalous transactions', 'Send payment reminders', 'Generate reports'],
      approval: 'Payment releases, policy exceptions',
    },
    {
      name: 'Operations Agent',
      icon: FileText,
      tasks: ['Monitor inventory levels', 'Process vendor requests', 'Update project status', 'Generate summaries'],
      approval: 'Supplier changes, budget overruns',
    },
    {
      name: 'HR Agent',
      icon: Users,
      tasks: ['Screen CVs', 'Schedule interviews', 'Onboard new hires', 'Answer policy questions'],
      approval: 'Final hiring decisions, contract offers',
    },
    {
      name: 'Support Agent',
      icon: Headphones,
      tasks: ['Triage tickets', 'Provide instant FAQ answers', 'Escalate complex issues', 'Generate satisfaction reports'],
      approval: 'Refunds, SLA breaches, escalations',
    },
    {
      name: 'Marketing Agent',
      icon: TrendingUp,
      tasks: ['Draft social posts', 'A/B test emails', 'Segment audiences', 'Generate performance summaries'],
      approval: 'Brand messaging, crisis comms',
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
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-8">
                    <Zap className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                    SMERPs <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Crew</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-400 mb-4">Meet your new team members</p>
                  <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    SMERPs Crew is a suite of AI agents designed to handle repetitive workflows across your business functions—freeing your team to focus on strategy, creativity, and growth.
                  </p>

                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </section>

            {/* The Crew */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">The Crew</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {agents.map((agent, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                        <agent.icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{agent.name}</h3>
                      <p className="text-sm font-semibold text-gray-300 mb-3">What it does:</p>
                      <ul className="space-y-2 mb-4">
                        {agent.tasks.map((task, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            {task}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-gray-400 pt-3 border-t border-white/10">
                        <strong className="text-gray-300">Human approval required for:</strong> {agent.approval}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Trust Features */}
            <section className="py-24 bg-gradient-to-b from-transparent to-cyan-500/5">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">AI that earns trust</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                  {['Audit logs', 'Human-in-the-loop', 'Confidence scoring', 'Rollback capability'].map((feature, i) => (
                    <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                      <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-3" />
                      <p className="font-semibold text-white">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Pricing</h2>
                  <p className="text-xl text-white mb-4">Per Agent: <span className="font-bold">AED 500/month</span> (billed annually)</p>
                  <p className="text-gray-300 mb-8">Bundle: 3 agents for AED 1,200/month | 6 agents for AED 2,400/month</p>
                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
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
