import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Database, Zap, Shield, TrendingUp, Brain, Rocket, BarChart3, Users, Cloud, Lock, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { FadeInWhenVisible, StaggeredFadeIn, ScaleInWhenVisible } from '@/components/animations/FadeInWhenVisible';
import { StarlightBackground } from '@/components/effects/StarlightBackground';

export const metadata: Metadata = {
  title: 'SMERP TEK | Digital Transformation UAE | AI Automation Dubai | Cloud Solutions GCC',
  description:
    'Transform your business with AI-powered automation and intelligent workflows. Leading digital transformation partner for startups and SMEs in UAE & GCC. PDPL compliant, SOC 2 certified.',
  keywords: [
    'digital transformation UAE',
    'AI automation Dubai',
    'cloud solutions GCC',
    'business automation Middle East',
    'ERP system UAE',
    'intelligent workflows',
    'PDPL compliance',
    'SME digital solutions',
    'AI agents Dubai',
    'system integration UAE',
  ],
  openGraph: {
    title: 'SMERP TEK - Digital Transformation Solutions for UAE & GCC',
    description: 'Transform your business with AI-powered automation and intelligent workflows',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <StarlightBackground />
      <Navbar />
      <main className="bg-bg-primary relative">
        {/* Hero Section - Chrome Metallic */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Gradient accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial-accent opacity-50 blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 sm:py-32 lg:py-40">
            <div className="max-w-6xl mx-auto">
              {/* Badge */}
              <FadeInWhenVisible direction="up" delay={0.1}>
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-accent bg-bg-surface/50 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-text-secondary">AI-Powered Business Transformation</span>
                  </div>
                </div>
              </FadeInWhenVisible>

              {/* Main heading - Bold & Metallic */}
              <FadeInWhenVisible direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center mb-8 leading-[1.1]">
                  <span className="text-text-primary block mb-3">Transform Your Business</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
                    with Intelligent Automation
                  </span>
                </h1>
              </FadeInWhenVisible>

              {/* Subheading */}
              <FadeInWhenVisible direction="up" delay={0.3}>
                <p className="text-lg sm:text-xl md:text-2xl text-text-secondary text-center mb-12 max-w-4xl mx-auto leading-relaxed">
                  Leading digital transformation partner in the <span className="text-text-primary font-semibold">UAE and GCC</span>.
                  We turn scattered systems into unified, AI-powered workflows.
                </p>
              </FadeInWhenVisible>

              {/* CTAs */}
              <FadeInWhenVisible direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-accent text-white shadow-glow hover:shadow-glow-lg group"
                    >
                      Book a Free Demo
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/solutions" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-full sm:w-auto"
                    >
                      Explore Solutions
                    </Button>
                  </Link>
                </div>
              </FadeInWhenVisible>

              {/* Trust badges */}
              <FadeInWhenVisible direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 text-sm text-text-muted border-t border-border-chrome pt-8">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    <span>PDPL Compliant</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-border-steel" />
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-success" />
                    <span>SOC 2 Certified</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-border-steel" />
                  <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-accent" />
                    <span>Cloud-First Architecture</span>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-text-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-24 lg:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeInWhenVisible>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  WHY SMERP TEK
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                  Built for Ambitious Teams
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
                  We combine strategic consulting with powerful software to deliver end-to-end digital transformation
                </p>
              </FadeInWhenVisible>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <StaggeredFadeIn staggerDelay={0.1}>
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </StaggeredFadeIn>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 lg:py-32 bg-bg-secondary/30 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeInWhenVisible>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  OUR PRODUCTS
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                  Software That Works For You
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
                  From unified ERPs to autonomous AI agents—our products reduce mental load and give time back to your team
                </p>
              </FadeInWhenVisible>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <StaggeredFadeIn staggerDelay={0.1}>
                {products.map((product, index) => (
                  <Link key={index} href={product.href} className="block group">
                    <div className="h-full bg-bg-surface/50 border border-border-chrome rounded-2xl p-8 transition-all duration-300 hover:border-accent hover:shadow-glow transform hover:-translate-y-1 backdrop-blur-sm">
                      <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-chrome">
                        <product.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-1 transition-transform">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </StaggeredFadeIn>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 lg:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeInWhenVisible>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  OUR PROCESS
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                  Simple, Proven Process
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
                  From initial assessment to full automation—delivered in weeks, not months
                </p>
              </FadeInWhenVisible>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {steps.map((step, index) => (
                <FadeInWhenVisible key={index} direction="up" delay={index * 0.15}>
                  <div className="flex flex-col sm:flex-row items-start gap-6 bg-bg-surface/50 border border-border-chrome rounded-2xl p-8 hover:border-accent transition-all duration-300 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-chrome">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-text-primary mb-3">{step.title}</h3>
                      <p className="text-base text-text-secondary mb-4 leading-relaxed">{step.description}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-accent font-medium">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>

            <div className="text-center mt-12">
              <FadeInWhenVisible delay={0.6}>
                <Link href="/solutions">
                  <Button size="lg" className="bg-gradient-accent text-white shadow-glow hover:shadow-glow-lg">
                    Start with a Free Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-24 lg:py-32 bg-bg-secondary/30 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <ScaleInWhenVisible>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-accent mb-6 shadow-glow">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </ScaleInWhenVisible>
                <FadeInWhenVisible delay={0.2}>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                    Trust By Design
                  </h2>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.3}>
                  <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
                    Enterprise-grade security and compliance built into every layer of our platform
                  </p>
                </FadeInWhenVisible>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {security.map((item, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1} direction="up">
                    <div className="flex items-start gap-4 bg-bg-surface/50 border border-border-chrome rounded-xl p-6 hover:border-accent transition-all duration-300 backdrop-blur-sm">
                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-text-primary mb-2 text-lg">{item.title}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial-accent opacity-30" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeInWhenVisible>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Ready to Transform Your Business?
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <p className="text-lg sm:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                Book a 30-minute consultation and discover how SMERP TEK can modernize your operations—no commitment required.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-accent text-white shadow-glow-lg hover:shadow-glow-lg"
                  >
                    Book Your Free Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="secondary"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Data
const stats = [
  { value: '40-60%', label: 'Task Reduction' },
  { value: '2-8 weeks', label: 'To Deploy' },
  { value: '24/7', label: 'AI Monitoring' },
  { value: '100%', label: 'PDPL Compliant' },
];

const features = [
  {
    icon: <Brain />,
    title: 'AI-Powered Intelligence',
    description: 'Deploy AI agents that handle repetitive tasks with precision. Every decision is logged and explainable.',
  },
  {
    icon: <Zap />,
    title: 'Rapid Implementation',
    description: 'From assessment to deployment in 2-8 weeks. We handle integration, migration, and training.',
  },
  {
    icon: <Shield />,
    title: 'Regional Expertise',
    description: 'PDPL-compliant, multilingual-ready, built for UAE/GCC business context.',
  },
  {
    icon: <TrendingUp />,
    title: 'Measurable ROI',
    description: '40-60% reduction in repetitive tasks. Real-time analytics track efficiency gains.',
  },
];

const products = [
  {
    name: 'SMERP EDU',
    description:
      'Unified ERP for education institutions. From admissions to billing, attendance to student portals—everything in one intelligent platform.',
    href: '/products/smerp-edu',
    icon: Database,
  },
  {
    name: 'SMERPs Crew',
    description:
      'AI agents for Sales, Finance, Operations, HR, Support, and Marketing. Automate repetitive workflows while you focus on strategy.',
    href: '/products/smerps-crew',
    icon: Users,
  },
  {
    name: 'SMERP Automate',
    description:
      'Pre-built workflow automations: quote-to-invoice, onboarding flows, payment reminders, and seamless data sync across all your tools.',
    href: '/products/smerp-automate',
    icon: Rocket,
  },
  {
    name: 'SMERPs Analytics',
    description:
      'Autonomous dashboards that surface insights, flag anomalies, and recommend next actions—powered by AI, optimized for decisions.',
    href: '/products/smerps-analytics',
    icon: BarChart3,
  },
];

const steps = [
  {
    title: 'Assess (2 weeks)',
    description:
      'Comprehensive audit of your current systems. We identify friction points, map integration opportunities, and deliver a prioritized roadmap with clear timelines.',
    deliverable: 'Digital transformation roadmap with ROI projections',
  },
  {
    title: 'Integrate (2–4 weeks)',
    description:
      'Seamless connection of your existing tools. We handle data migration, workflow configuration, and system synchronization. You review and approve at every milestone.',
    deliverable: 'Unified data flow with real-time synchronization',
  },
  {
    title: 'Automate (2–6 weeks)',
    description:
      'Deploy AI agents and intelligent automations tailored to your operations. Comprehensive training included with ongoing optimization support.',
    deliverable: '40-60% reduction in repetitive manual tasks',
  },
];

const security = [
  {
    title: 'PDPL Compliant',
    description: 'Full UAE data residency options, explicit consent mechanisms, transparent processing logs, and comprehensive audit trails.',
  },
  {
    title: 'SOC 2 Type II Certified',
    description: 'Third-party audited security controls covering availability, processing integrity, confidentiality, and privacy.',
  },
  {
    title: 'Enterprise Encryption',
    description: 'AES-256 encryption at rest, TLS 1.3 in transit. All data encrypted end-to-end with zero-knowledge architecture.',
  },
  {
    title: 'Automated Backups',
    description: 'Daily encrypted snapshots with 30-day retention. One-click restore and disaster recovery procedures tested monthly.',
  },
  {
    title: 'Access Controls',
    description: 'Role-based permissions, multi-factor authentication, SSO integration, and comprehensive activity logging.',
  },
  {
    title: 'Continuous Monitoring',
    description: '24/7 threat detection, automated security scanning, vulnerability assessments, and instant breach notifications.',
  },
];
