import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Database, Zap, TrendingUp, BarChart3, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Intelligent Software Products | SMERP TEK',
  description:
    'Explore SMERP EDU, SMERPs Crew AI agents, SMERP Automate workflows, and SMERPs Analytics—software that clarifies operations for growing teams.',
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom text-center">
            <h1 className="text-h1 lg:text-display-lg font-bold text-text-primary mb-6">
              Products that scale with you
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto mb-8">
              From unified ERPs to AI agents, our software products are built to reduce mental load,
              surface insights, and give time back to your team.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                      <product.icon className="w-7 h-7 text-text-inverse" />
                    </div>
                    <CardTitle className="text-h2 mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-base">{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-4">{product.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-text-primary">Key features:</p>
                      <ul className="space-y-1">
                        {product.features.map((feature, i) => (
                          <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={product.href} className="w-full">
                      <Button variant="primary" size="lg" fullWidth>
                        {product.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20 bg-bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-h1 font-bold text-text-primary mb-4">Coming soon</h2>
              <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
                A sneak peek at our product pipeline. Interested in early access?
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {futureProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-bg-surface rounded-lg p-6 border border-border-default"
                >
                  <h3 className="font-bold text-text-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-text-secondary">{product.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="container-custom text-center">
            <h2 className="text-h1 font-bold text-text-primary mb-6">
              See our products in action
            </h2>
            <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a personalized demo and discover how SMERP TEK can transform your operations.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Book a Product Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
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
