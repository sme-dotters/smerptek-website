import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, DollarSign, Target, Zap, Shield, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

export const metadata: Metadata = {
  title: 'Digital Transformation Services | SMERP TEK',
  description:
    'Consultancy packages for startups & SMEs: system audits, cloud integration, AI automation, and cybersecurity—delivered in weeks, not months.',
};

export default function SolutionsPage() {
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
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                  Solutions designed for <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">growth</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                  We partner with startups and SMEs to modernize operations through integrated
                  consultancy packages—delivered in weeks, with clear milestones and measurable
                  outcomes.
                </p>
                <Link href="/contact">
                  <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                    Discuss Your Needs
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </section>

            {/* Service Packages */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <p className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">
                    OUR SERVICES
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    Consultancy packages that deliver
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {servicePackages.map((service, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                      <div className="mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                          <service.icon className="w-7 h-7 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-3">{service.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-purple-400" />
                            {service.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-green-400" />
                            {service.price}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="font-semibold text-white mb-3">What's included:</p>
                        <ul className="space-y-2">
                          {service.included.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm font-semibold text-white mb-2">Outcome:</p>
                        <p className="text-sm text-gray-300">{service.outcome}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sample Timeline */}
            <section className="py-24 bg-gradient-to-b from-transparent to-purple-500/5">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    What a typical engagement looks like
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Timelines flex based on complexity. We provide milestone-based pricing and weekly
                    check-ins.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                  {timeline.map((phase, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">{phase.weeks}</div>
                            <div className="text-xs text-white/80">{phase.timeframe}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{phase.phase}</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose SMERP TEK */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">
                  Why choose SMERP TEK
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {whyChoose.map((reason, index) => (
                    <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <reason.icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's map your roadmap</h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Schedule a free 30-minute strategy call to discuss your challenges and explore how we
                    can help.
                  </p>
                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                      Schedule a Strategy Call
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

// Data
const servicePackages = [
  {
    name: 'Assess — Digital Transformation Audit',
    icon: Target,
    duration: '2 weeks',
    price: 'From AED 15,000',
    included: [
      'Current-state system inventory',
      'Pain point analysis (manual processes, data silos, bottlenecks)',
      'Integration opportunity mapping',
      'Prioritized roadmap with effort estimates',
    ],
    outcome: 'Clear 90-day action plan with ROI projections.',
  },
  {
    name: 'Integrate — System Integration & Cloud Migration',
    icon: TrendingUp,
    duration: '2–4 weeks',
    price: 'From AED 30,000',
    included: [
      'API integration between existing tools (CRM, ERP, accounting, etc.)',
      'Cloud migration (AWS, Azure, Google Cloud)',
      'Data migration and validation',
      'Workflow automation setup',
    ],
    outcome: 'Unified data flow, reduced manual entry, real-time sync.',
  },
  {
    name: 'Automate — Intelligent Automation Deployment',
    icon: Zap,
    duration: '2–6 weeks',
    price: 'From AED 25,000',
    included: [
      'AI agent configuration (SMERPs Crew)',
      'Pre-built automation flows (SMERP Automate)',
      'Approval workflows and escalation rules',
      'Team training and documentation',
    ],
    outcome: '40–60% reduction in repetitive tasks, faster turnaround times.',
  },
  {
    name: 'Secure — Cybersecurity Assessment & Hardening',
    icon: Shield,
    duration: 'Parallel or standalone',
    price: 'From AED 20,000',
    included: [
      'Vulnerability scanning and penetration testing',
      'Security policy drafting (PDPL-aligned)',
      'Access control and MFA setup',
      'Incident response planning',
    ],
    outcome: 'Hardened infrastructure, compliance readiness, peace of mind.',
  },
];

const timeline = [
  {
    weeks: 'Week 1–2',
    timeframe: '2 weeks',
    phase: 'Assess',
    description:
      'Discovery workshops, system audit, roadmap finalized with clear priorities and timelines.',
    deliverables: ['System Inventory', 'Roadmap', 'ROI Analysis'],
  },
  {
    weeks: 'Week 3–6',
    timeframe: '4 weeks',
    phase: 'Integrate + Secure',
    description:
      'API connections, cloud setup, security hardening running in parallel for efficiency.',
    deliverables: ['API Integration', 'Cloud Migration', 'Security Audit'],
  },
  {
    weeks: 'Week 7–10',
    timeframe: '4 weeks',
    phase: 'Automate',
    description: 'AI agent deployment, workflow testing, team training with ongoing optimization.',
    deliverables: ['AI Agents', 'Automations', 'Training'],
  },
  {
    weeks: 'Week 11+',
    timeframe: 'Ongoing',
    phase: 'Optimize',
    description: 'Ongoing support, refinement, and expansion based on your evolving needs.',
    deliverables: ['Support', 'Optimization', 'Expansion'],
  },
];

const whyChoose = [
  {
    icon: Clock,
    title: 'Fast',
    description: 'Weeks, not months. We use proven frameworks and pre-built components.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparent',
    description: 'Fixed milestones, clear deliverables, no scope creep.',
  },
  {
    icon: DollarSign,
    title: 'Flexible',
    description: 'Pay per package or bundle for savings. Cancel anytime after current phase.',
  },
  {
    icon: ArrowRight,
    title: 'Local',
    description: 'UAE-based team, PDPL expertise, GCC market knowledge.',
  },
];
