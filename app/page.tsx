import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Database, Zap, Shield, TrendingUp, Brain, Rocket, BarChart3, Users, Cloud, Lock } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { DigitalBloomLogo } from '@/components/brand/DigitalBloomLogo';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { HeroTechBackground } from '@/components/effects/TechBackground';
import { FadeInWhenVisible, StaggeredFadeIn, ScaleInWhenVisible } from '@/components/animations/FadeInWhenVisible';

export const metadata: Metadata = {
  title: 'SMERP TEK | Digital Transformation UAE | AI Agents Dubai | Cloud Solutions GCC',
  description:
    'Leading digital transformation partner in UAE & GCC. AI-powered automation, cloud integration, and intelligent workflows for ambitious startups and SMEs. PDPL compliant, SOC 2 certified.',
  keywords: [
    'digital transformation UAE',
    'AI agents Dubai',
    'cloud solutions GCC',
    'business automation Middle East',
    'ERP system UAE',
    'intelligent workflows',
    'PDPL compliance',
    'SME digital solutions',
    'AI automation Dubai',
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
      <Navbar />
      <main className="bg-bg-primary">
        {/* Hero Section - Digital Bloom */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Tech background with particles */}
          <HeroTechBackground />

          {/* Digital Bloom logo background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <DigitalBloomLogo size="hero" animated />
          </div>

          <div className="container-custom relative z-10 py-32">
            <div className="max-w-5xl mx-auto text-center">
              <FadeInWhenVisible direction="up" delay={0.2}>
                <div className="inline-block mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-card border border-primary/20 text-sm font-medium text-primary">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Powered by Digital Bloom Technology
                  </span>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible direction="up" delay={0.4}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                  <span className="text-text-primary">Transform Your Business with</span>
                  <br />
                  <span className="text-gradient-bloom text-glow-bloom">
                    Intelligent Automation
                  </span>
                </h1>
              </FadeInWhenVisible>

              <FadeInWhenVisible direction="up" delay={0.6}>
                <p className="text-xl lg:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
                  Leading digital transformation partner in the <strong className="text-text-primary">UAE and GCC</strong>.
                  We turn scattered systems into unified, AI-powered workflows that drive <strong className="text-primary">measurable growth</strong>.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible direction="up" delay={0.8}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link href="/contact">
                    <Button size="lg" variant="primary" className="group hover-glow-bloom">
                      Book a Free Demo
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/solutions">
                    <Button size="lg" variant="secondary">
                      Explore Solutions
                    </Button>
                  </Link>
                </div>
              </FadeInWhenVisible>

              {/* Trust indicators */}
              <FadeInWhenVisible direction="up" delay={1.0}>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-tertiary">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    <span>PDPL Compliant</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-border-default" />
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-success" />
                    <span>SOC 2 Certified</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-border-default" />
                  <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-primary" />
                    <span>Cloud-First Architecture</span>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-24 lg:py-32 bg-bg-surface relative overflow-hidden">
          {/* Tech pattern background */}
          <div className="absolute inset-0 bg-tech-pattern opacity-20" />

          <div className="container-custom relative">
            <div className="text-center mb-16">
              <FadeInWhenVisible>
                <p className="text-sm font-bold text-gradient-bloom uppercase tracking-wider mb-4">
                  WHY SMERP TEK
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                  Built for <span className="text-gradient-bloom">Ambitious Teams</span>
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  We combine strategic consulting with powerful software to deliver end-to-end digital transformation
                </p>
              </FadeInWhenVisible>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Brain />}
                title="AI-Powered Intelligence"
                description="Deploy AI agents that handle repetitive tasks with precision. Every decision is logged, explainable, and keeps humans in control."
                glowColor="cyan"
              />
              <FeatureCard
                icon={<Zap />}
                title="Rapid Implementation"
                description="From assessment to deployment in 2-8 weeks. We handle integration, migration, and training—you focus on your business."
                glowColor="magenta"
              />
              <FeatureCard
                icon={<Shield />}
                title="Regional Expertise"
                description="PDPL-compliant, multilingual-ready, and built for UAE/GCC business context. We understand local compliance and market dynamics."
                glowColor="violet"
              />
              <FeatureCard
                icon={<TrendingUp />}
                title="Measurable ROI"
                description="40-60% reduction in repetitive tasks. Real-time analytics track efficiency gains, cost savings, and productivity improvements."
                glowColor="orange"
              />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 lg:py-32 bg-bg-primary relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <FadeInWhenVisible>
                <p className="text-sm font-bold text-gradient-bloom uppercase tracking-wider mb-4">
                  OUR PRODUCTS
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                  Software That <span className="text-gradient-bloom">Works For You</span>
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  From unified ERPs to autonomous AI agents—our products reduce mental load and give time back to your team
                </p>
              </FadeInWhenVisible>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StaggeredFadeIn staggerDelay={0.15}>
                {products.map((product, index) => (
                  <Link key={index} href={product.href} className="block group">
                    <div className="h-full bg-bg-surface border border-border-default rounded-xl p-6 transition-all duration-300 hover:border-primary hover-glow-bloom transform hover:-translate-y-2">
                      <div className="w-14 h-14 rounded-lg bg-gradient-bloom flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <product.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-gradient-bloom transition-all">
                        {product.name}
                      </h3>
                      <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:text-cyan transition-colors">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </StaggeredFadeIn>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 lg:py-32 bg-bg-surface relative overflow-hidden">
          {/* Circuit pattern */}
          <div className="absolute inset-0 bg-circuit opacity-30" />

          <div className="container-custom relative">
            <div className="text-center mb-16">
              <FadeInWhenVisible>
                <p className="text-sm font-bold text-gradient-bloom uppercase tracking-wider mb-4">
                  OUR PROCESS
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                  Simple, <span className="text-gradient-bloom">Proven Process</span>
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  From initial assessment to full automation—delivered in weeks, not months
                </p>
              </FadeInWhenVisible>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, index) => (
                <FadeInWhenVisible key={index} direction="left" delay={index * 0.2}>
                  <div className="flex items-start gap-6 bg-bg-primary border border-border-subtle rounded-xl p-8 hover:border-primary/30 hover-glow-bloom transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-bloom rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-glow-cyan">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-text-primary mb-3">{step.title}</h3>
                      <p className="text-text-secondary mb-4 leading-relaxed">{step.description}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-primary font-medium">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>

            <div className="text-center mt-12">
              <FadeInWhenVisible delay={0.8}>
                <Link href="/solutions">
                  <Button size="lg" className="hover-glow-bloom">
                    Start with a Free Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-24 lg:py-32 bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <ScaleInWhenVisible>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-bloom mb-6 shadow-glow-bloom">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </ScaleInWhenVisible>
                <FadeInWhenVisible delay={0.2}>
                  <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                    Trust <span className="text-gradient-bloom">By Design</span>
                  </h2>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.3}>
                  <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                    Enterprise-grade security and compliance built into every layer of our platform
                  </p>
                </FadeInWhenVisible>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {security.map((item, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1} direction="up">
                    <div className="flex items-start gap-4 bg-bg-surface border border-border-subtle rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group">
                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
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
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-bloom opacity-10" />
          <div className="absolute inset-0 bg-circuit opacity-20" />

          <div className="container-custom text-center relative">
            <FadeInWhenVisible>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                Ready to <span className="text-gradient-bloom">Transform Your Business?</span>
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                Book a 30-minute consultation and discover how SMERP TEK can modernize your operations—no commitment required.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="primary" className="hover-glow-bloom text-lg px-8">
                    Book Your Free Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
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
    deliverable: 'Deliverable: Digital transformation roadmap with ROI projections',
  },
  {
    title: 'Integrate (2–4 weeks)',
    description:
      'Seamless connection of your existing tools. We handle data migration, workflow configuration, and system synchronization. You review and approve at every milestone.',
    deliverable: 'Deliverable: Unified data flow with real-time synchronization',
  },
  {
    title: 'Automate (2–6 weeks)',
    description:
      'Deploy AI agents and intelligent automations tailored to your operations. Comprehensive training included with ongoing optimization support.',
    deliverable: 'Deliverable: 40-60% reduction in repetitive manual tasks',
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
