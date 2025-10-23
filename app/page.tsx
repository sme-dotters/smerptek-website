import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Database, Zap, Shield, TrendingUp, Brain, Rocket, BarChart3, Users, Cloud, Lock, Star, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { FadeInWhenVisible, StaggeredFadeIn, ScaleInWhenVisible } from '@/components/animations/FadeInWhenVisible';

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
      <Navbar />
      <main className="bg-bg-primary">
        {/* Hero Section - Mobile First */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-dark via-bg-primary to-bg-secondary">
          {/* Animated background gradient mesh */}
          <div className="absolute inset-0 bg-mesh-gradient opacity-30 animate-glow-pulse" />

          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-brand-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute top-40 right-10 w-32 h-32 md:w-72 md:h-72 bg-brand-magenta rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-32 left-1/2 w-32 h-32 md:w-96 md:h-96 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24 lg:py-32">
            <div className="max-w-6xl mx-auto">
              {/* Badge */}
              <FadeInWhenVisible direction="up" delay={0.1}>
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/30 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-brand-purple" />
                    <span className="text-xs sm:text-sm font-medium text-brand-purple">AI-Powered Business Transformation</span>
                  </div>
                </div>
              </FadeInWhenVisible>

              {/* Main heading */}
              <FadeInWhenVisible direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-6 sm:mb-8 leading-tight">
                  <span className="text-text-primary block mb-2">Transform Your Business</span>
                  <span className="block bg-gradient-brand bg-clip-text text-transparent">
                    with Intelligent Automation
                  </span>
                </h1>
              </FadeInWhenVisible>

              {/* Subheading */}
              <FadeInWhenVisible direction="up" delay={0.3}>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary text-center mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4">
                  Leading digital transformation partner in the <span className="text-brand-cyan font-semibold">UAE and GCC</span>.
                  We turn scattered systems into unified, AI-powered workflows that drive <span className="text-brand-magenta font-semibold">measurable growth</span>.
                </p>
              </FadeInWhenVisible>

              {/* CTAs */}
              <FadeInWhenVisible direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12 px-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-brand-purple hover:bg-brand-purple-600 text-white shadow-glow-purple group text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                    >
                      Book a Free Demo
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/solutions" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                    >
                      Explore Solutions
                    </Button>
                  </Link>
                </div>
              </FadeInWhenVisible>

              {/* Trust badges - Mobile optimized */}
              <FadeInWhenVisible direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-text-tertiary px-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    <span>PDPL Compliant</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-border-default" />
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-success" />
                    <span>SOC 2 Certified</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-border-default" />
                  <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-brand-cyan" />
                    <span>Cloud-First</span>
                  </div>
                </div>
              </FadeInWhenVisible>

              {/* Stats Section - Mobile optimized */}
              <FadeInWhenVisible direction="up" delay={0.6}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 max-w-5xl mx-auto px-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 sm:p-6 rounded-2xl bg-bg-secondary/50 border border-border-subtle backdrop-blur-sm hover:border-brand-purple/30 transition-all duration-300">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-1 sm:mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-text-tertiary">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Value Proposition Section - Mobile First */}
        <section className="py-16 sm:py-20 lg:py-28 bg-bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary opacity-50" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12 sm:mb-16">
              <FadeInWhenVisible>
                <p className="text-xs sm:text-sm font-bold bg-gradient-brand bg-clip-text text-transparent uppercase tracking-wider mb-3 sm:mb-4">
                  WHY SMERP TEK
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
                  Built for <span className="bg-gradient-brand bg-clip-text text-transparent">Ambitious Teams</span>
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
                  We combine strategic consulting with powerful software to deliver end-to-end digital transformation
                </p>
              </FadeInWhenVisible>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              <FeatureCard
                icon={<Brain />}
                title="AI-Powered Intelligence"
                description="Deploy AI agents that handle repetitive tasks with precision. Every decision is logged and explainable."
                glowColor="purple"
              />
              <FeatureCard
                icon={<Zap />}
                title="Rapid Implementation"
                description="From assessment to deployment in 2-8 weeks. We handle integration, migration, and training."
                glowColor="magenta"
              />
              <FeatureCard
                icon={<Shield />}
                title="Regional Expertise"
                description="PDPL-compliant, multilingual-ready, built for UAE/GCC business context."
                glowColor="blue"
              />
              <FeatureCard
                icon={<TrendingUp />}
                title="Measurable ROI"
                description="40-60% reduction in repetitive tasks. Real-time analytics track efficiency gains."
                glowColor="cyan"
              />
            </div>
          </div>
        </section>

        {/* Products Section - Mobile First */}
        <section className="py-16 sm:py-20 lg:py-28 bg-bg-primary relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <FadeInWhenVisible>
                <p className="text-xs sm:text-sm font-bold bg-gradient-brand bg-clip-text text-transparent uppercase tracking-wider mb-3 sm:mb-4">
                  OUR PRODUCTS
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
                  Software That <span className="bg-gradient-brand bg-clip-text text-transparent">Works For You</span>
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
                  From unified ERPs to autonomous AI agents—our products reduce mental load and give time back to your team
                </p>
              </FadeInWhenVisible>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
              <StaggeredFadeIn staggerDelay={0.1}>
                {products.map((product, index) => (
                  <Link key={index} href={product.href} className="block group">
                    <div className="h-full bg-bg-secondary border border-border-default rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-brand-purple hover:shadow-glow-purple transform hover:-translate-y-2">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                        <product.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3 group-hover:text-brand-purple transition-all">
                        {product.name}
                      </h3>
                      <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center text-brand-purple font-medium text-sm group-hover:text-brand-cyan transition-colors">
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

        {/* How It Works - Mobile First */}
        <section className="py-16 sm:py-20 lg:py-28 bg-bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary opacity-50" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12 sm:mb-16">
              <FadeInWhenVisible>
                <p className="text-xs sm:text-sm font-bold bg-gradient-brand bg-clip-text text-transparent uppercase tracking-wider mb-3 sm:mb-4">
                  OUR PROCESS
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
                  Simple, <span className="bg-gradient-brand bg-clip-text text-transparent">Proven Process</span>
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
                  From initial assessment to full automation—delivered in weeks, not months
                </p>
              </FadeInWhenVisible>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              {steps.map((step, index) => (
                <FadeInWhenVisible key={index} direction="up" delay={index * 0.15}>
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-bg-primary border border-border-subtle rounded-2xl p-6 sm:p-8 hover:border-brand-purple/30 hover:shadow-glow-purple transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-brand rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 sm:mb-3">{step.title}</h3>
                      <p className="text-sm sm:text-base text-text-secondary mb-3 sm:mb-4 leading-relaxed">{step.description}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-brand-cyan font-medium">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>

            <div className="text-center mt-10 sm:mt-12 px-4">
              <FadeInWhenVisible delay={0.6}>
                <Link href="/solutions" className="inline-block w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-brand-purple hover:bg-brand-purple-600 text-white shadow-glow-purple text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                    Start with a Free Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Security & Compliance - Mobile First */}
        <section className="py-16 sm:py-20 lg:py-28 bg-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <ScaleInWhenVisible>
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-brand mb-4 sm:mb-6 shadow-glow-purple">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </ScaleInWhenVisible>
                <FadeInWhenVisible delay={0.2}>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
                    Trust <span className="bg-gradient-brand bg-clip-text text-transparent">By Design</span>
                  </h2>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.3}>
                  <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
                    Enterprise-grade security and compliance built into every layer of our platform
                  </p>
                </FadeInWhenVisible>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {security.map((item, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1} direction="up">
                    <div className="flex items-start gap-3 sm:gap-4 bg-bg-secondary border border-border-subtle rounded-xl p-4 sm:p-6 hover:border-brand-purple/30 transition-all duration-300 group">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-bold text-text-primary mb-1 sm:mb-2 text-base sm:text-lg">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile First */}
        <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-dark">
          <div className="absolute inset-0 bg-mesh-gradient opacity-20" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <FadeInWhenVisible>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
                Ready to <span className="bg-gradient-brand bg-clip-text text-transparent">Transform Your Business?</span>
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                Book a 30-minute consultation and discover how SMERP TEK can modernize your operations—no commitment required.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-brand-purple hover:bg-brand-purple-600 text-white shadow-glow-purple text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                  >
                    Book Your Free Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/pricing" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
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
  { value: '2-8', label: 'Weeks to Deploy' },
  { value: '24/7', label: 'AI Monitoring' },
  { value: '100%', label: 'PDPL Compliant' },
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
