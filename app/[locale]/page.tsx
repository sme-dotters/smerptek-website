import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Rocket, Target, Users, TrendingUp, CheckCircle, Globe, Code, BarChart3, Cpu } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';
import { CalendlyButton } from '@/components/ui/CalendlyButton';

export const metadata: Metadata = {
  title: 'SMERP TEK | Modern Business Solutions for Startups & SMEs',
  description: 'Transform your startup or SME with intelligent automation and modern business solutions.',
};

export default function HomePage() {
  return (
    <>
      <div className="relative">
        {/* Faded Animated Background */}
        <div className="opacity-30">
          <AnimatedBackground />
        </div>

        <div className="relative z-10">
          <Navbar />

          <main className="relative">
            {/* HERO - Beautiful & Modern */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">Modernized Business Solutions</span>
                  </div>

                  {/* Main Headline - Beautiful & Bold */}
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
                    <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                      Next Generation Business Solutions
                    </span>
                  </h1>

                  {/* Tagline - Clean & Professional */}
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Cutting-edge Apps, Automations, and AI Agents that transform how businesses operate
                  </p>

                  {/* CTA Buttons - Dual Action */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                    <CalendlyButton
                      text="Schedule a Demo"
                      variant="primary"
                      size="lg"
                      location="homepage-hero"
                    />
                    <Link href="/contact">
                      <button className="group px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2 hover:scale-105">
                        Explore Solutions
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>

                  {/* Feature Tags - Beautiful Pills */}
                  <div className="flex flex-wrap gap-3 justify-center items-center text-sm">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                      <Code className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-200">Cloud Native</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                      <Cpu className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-200">AI Powered</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-200">Automated</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-200">Lightning Fast</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* WHY CHOOSE US - Beautiful Cards */}
            <section id="showcase" className="py-24 relative">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-white">
                    Why Choose SMERP TEK
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">Built for startups and SMEs who want to compete with the big players</p>
                </div>

                {/* Features Grid - Beautiful Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-purple-400" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SERVICES - Beautiful Cards */}
            <section className="py-24 relative bg-gradient-to-b from-transparent to-purple-500/5">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-white">
                    How We Help You Grow
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">From strategy to execution, we're with you every step of the way</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center mb-6">
                      <Target className="w-7 h-7 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Strategy & Planning</h3>
                    <p className="text-gray-300 leading-relaxed">Clear roadmaps that align technology with your business goals</p>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center mb-6">
                      <Code className="w-7 h-7 text-purple-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
                    <p className="text-gray-300 leading-relaxed">Fast, reliable delivery that gets you up and running quickly</p>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center mb-6">
                      <TrendingUp className="w-7 h-7 text-green-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Growth & Scale</h3>
                    <p className="text-gray-300 leading-relaxed">Solutions that adapt and grow as your business expands</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SOLUTIONS - Beautiful Product Cards */}
            <section id="solutions" className="py-24 relative">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-white">
                    Complete Solution Suite
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">Everything you need to modernize and scale your business</p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {products.map((product, index) => (
                    <Link key={index} href={product.href}>
                      <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <product.icon className="w-7 h-7 text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                              {product.description}
                            </p>
                            <div className="flex items-center text-sm text-purple-400 group-hover:gap-2 transition-all">
                              <span>Learn more</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

        {/* STATS - Clean Numbers */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-white">
                Trusted by Growing Businesses
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRY EXPERTISE */}
        <section className="py-24 relative bg-dark-400/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-white">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">Specialized solutions for diverse business sectors</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-white">Healthcare</h3>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-white">Finance</h3>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-white">Retail</h3>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <CheckCircle className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-white">Education</h3>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-white">Manufacturing</h3>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Rocket className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-white">Technology</h3>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA - Clean & Professional */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join startups and SMEs who are scaling faster with modern technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <button className="group px-8 py-4 bg-white text-dark-500 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-white/5 text-white rounded-lg font-semibold border border-white/10 hover:bg-white/10 transition-all duration-200">
                    Schedule a Demo
                  </button>
                </Link>
              </div>
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
const features = [
  {
    icon: Rocket,
    title: 'Fast Implementation',
    description: 'Get up and running in weeks, not months. Our solutions are designed for quick deployment.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    description: 'Leverage intelligent automation to handle repetitive tasks and make smarter decisions.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security at the core. Your data stays protected with industry-leading standards.',
  },
  {
    icon: TrendingUp,
    title: 'Scales With You',
    description: 'Start small and grow big. Our platform adapts to your business needs at every stage.',
  },
];

const products = [
  {
    name: 'Business Automation',
    href: '/solutions/automation',
    icon: Zap,
    description: 'Automate repetitive tasks and workflows to save time and reduce errors',
  },
  {
    name: 'AI Agents',
    href: '/solutions/ai-agents',
    icon: Cpu,
    description: 'Intelligent assistants that handle customer support, data entry, and more',
  },
  {
    name: 'Cloud Apps',
    href: '/solutions/cloud',
    icon: Globe,
    description: 'Custom applications built for your unique business needs',
  },
  {
    name: 'Data Analytics',
    href: '/solutions/analytics',
    icon: BarChart3,
    description: 'Turn your data into actionable insights with powerful analytics tools',
  },
];

const stats = [
  { value: '95%', label: 'Client Satisfaction' },
  { value: '3x', label: 'ROI Average' },
  { value: '24/7', label: 'Support' },
  { value: '50+', label: 'Success Stories' },
];
