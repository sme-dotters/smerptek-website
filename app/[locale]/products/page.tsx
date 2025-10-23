import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Database, Zap, TrendingUp, BarChart3, Sparkles, Rocket } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

export const metadata: Metadata = {
  title: 'Intelligent Software Products | SMERP TEK',
  description:
    'Explore SMERP EDU, SMERPs Crew AI agents, SMERP Automate workflows, and SMERPs Analytics—software that clarifies operations for growing teams.',
};

export default function ProductsPage() {
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
                  Products that <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">scale</span> with you
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  From unified ERPs to AI agents, our software products are built to reduce mental load,
                  surface insights, and give time back to your team.
                </p>
              </div>
            </section>

            {/* Product Grid */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {products.map((product, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{background: product.gradient}}>
                          <product.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                        <p className="text-purple-400 font-semibold mb-4">{product.tagline}</p>
                        <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm font-semibold text-white mb-3">Key features:</p>
                        <ul className="space-y-2">
                          {product.features.map((feature, i) => (
                            <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href={product.href}>
                        <button className="w-full py-4 rounded-xl font-semibold transition-all duration-300" style={{background: product.gradient}}>
                          <span className="flex items-center justify-center gap-2 text-white">
                            {product.cta}
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Coming Soon */}
            <section className="py-24 bg-gradient-to-b from-transparent to-purple-500/5">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-8">
                    <Sparkles className="w-10 h-10 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Coming soon</h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    A sneak peek at our product pipeline. Interested in early access?
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                  {futureProducts.map((product, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-yellow-500/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <Rocket className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <h3 className="font-bold text-white">{product.name}</h3>
                      </div>
                      <p className="text-sm text-gray-300 ml-8">{product.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                      Join the Waitlist
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    See our products in action
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Book a personalized demo and discover how SMERP TEK can transform your operations.
                  </p>
                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                      Book a Product Demo
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
const products = [
  {
    name: 'SMERP EDU',
    tagline: 'One platform for your entire institute',
    description:
      'Unified ERP for education and training institutes. Manage admissions, scheduling, attendance, billing, and parent portals—all in one platform.',
    features: [
      'Student lifecycle management',
      'Automated billing and invoicing',
      'Staff and resource scheduling',
      'Mobile-friendly portals',
    ],
    icon: Database,
    gradient: 'linear-gradient(135deg, rgb(168, 85, 247), rgb(59, 130, 246))',
    href: '/products/smerp-edu',
    cta: 'Explore SMERP EDU',
  },
  {
    name: 'SMERPs Crew',
    tagline: 'Meet your new team members',
    description:
      'Function-specific AI agents that automate repetitive workflows across Sales, Finance, Operations, HR, Support, and Marketing.',
    features: [
      'Pre-trained for common business tasks',
      'Human-in-the-loop approval workflows',
      'Audit logs for every decision',
      'Integrates with your existing tools',
    ],
    icon: Zap,
    gradient: 'linear-gradient(135deg, rgb(6, 182, 212), rgb(59, 130, 246))',
    href: '/products/smerps-crew',
    cta: 'Meet the Crew',
  },
  {
    name: 'SMERP Automate',
    tagline: 'Automate work, not people',
    description:
      'Pre-built automation flows: quote-to-invoice, employee onboarding, payment reminders, and data reconciliation across your tools.',
    features: [
      'Drag-and-drop workflow builder',
      '50+ pre-built templates',
      'Conditional logic and branching',
      'Real-time monitoring and alerts',
    ],
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, rgb(236, 72, 153), rgb(249, 115, 22))',
    href: '/products/smerp-automate',
    cta: 'Explore Flows',
  },
  {
    name: 'SMERPs Analytics',
    tagline: 'Insights that drive action',
    description:
      'Autonomous analytics platform that connects your tools, builds dashboards, flags anomalies, and recommends actions—without manual setup.',
    features: [
      'Cross-tool data aggregation',
      'Anomaly detection and alerts',
      'Daily AI-generated insights brief',
      'Recommended actions with one-click execution',
    ],
    icon: BarChart3,
    gradient: 'linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129))',
    href: '/products/smerps-analytics',
    cta: 'See Insights',
  },
];

const futureProducts = [
  {
    name: 'Invoice Guard',
    description: 'AI validation to catch billing errors before sending',
  },
  {
    name: 'Lead Qualifier',
    description: 'Automated lead scoring and routing',
  },
  {
    name: 'Stock Whisperer',
    description: 'Predictive inventory alerts',
  },
  {
    name: 'CX Summarizer',
    description: 'Automatic customer feedback synthesis',
  },
  {
    name: 'Contract Checker',
    description: 'Clause risk analysis for agreements',
  },
  {
    name: 'Ops Daily',
    description: 'Morning operations brief with priorities',
  },
  {
    name: 'Collections Nudge',
    description: 'Smart payment reminder automation',
  },
  {
    name: 'Recruit Assist',
    description: 'CV screening and interview scheduling',
  },
  {
    name: 'Service Desk Brain',
    description: 'AI-powered ticket triage and resolution',
  },
];
