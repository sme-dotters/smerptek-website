import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield, Rocket } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'SMERP TEK | Digital Luxury Meets Innovation',
  description: 'Experience the future of business automation. AI-powered, visually stunning, incredibly powerful.',
};

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main className="relative">
        {/* HERO - Full Screen Visual Impact */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Main Headline - Huge & Bold */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold mb-8 animate-slide-up">
              <span className="block text-white mb-4">Transform Your</span>
              <span className="block bg-gradient-luxury bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Business
              </span>
            </h1>

            {/* Tagline - Professional & Targeted */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 animate-fade-in max-w-4xl mx-auto font-light">
              Enterprise-grade <span className="text-neon-purple font-semibold">AI automation</span> and <span className="text-neon-pink font-semibold">digital transformation</span> solutions designed for ambitious startups and growing SMEs
            </p>

            {/* CTA Buttons - Large & Glowing */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up mb-20">
              <Link href="/contact">
                <button className="group relative px-12 py-6 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-luxury">
                  <div className="absolute inset-0 bg-gradient-purple-pink animate-gradient bg-[length:200%_200%]" />
                  <span className="relative z-10 text-white flex items-center gap-3">
                    Schedule Consultation
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </Link>

              <Link href="#solutions">
                <button className="px-12 py-6 text-lg font-bold rounded-2xl border-2 border-white/20 backdrop-blur-xl hover:border-neon-purple hover:shadow-glow-purple transition-all duration-300 hover:scale-105">
                  <span className="bg-gradient-luxury bg-clip-text text-transparent">Our Solutions</span>
                </button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
                <div className="w-1.5 h-3 bg-gradient-purple-pink rounded-full mx-auto animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL SHOWCASE - Minimal Text, Maximum Impact */}
        <section id="showcase" className="py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6">
                <span className="bg-gradient-blue-purple bg-clip-text text-transparent">Why Choose SMERP TEK</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Enterprise-level capabilities tailored for startups and SMEs. We deliver transformation that scales with your ambition.</p>
            </div>

            {/* Visual Grid - Cards with Icons & Gradients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-luxury group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title Only - No Description */}
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-gradient-luxury group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONSULTANCY SERVICES - Professional Offerings */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6">
                <span className="bg-gradient-luxury bg-clip-text text-transparent">Consultancy Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Strategic guidance and hands-on implementation from industry experts</p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group relative p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-neon-purple/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-purple-pink opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🎯</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Strategy & Planning</h3>
                  <p className="text-gray-400 leading-relaxed">Digital transformation roadmaps aligned with your business objectives and market position</p>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-blue-cyan opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6">⚡</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Implementation</h3>
                  <p className="text-gray-400 leading-relaxed">Agile delivery with continuous integration, ensuring rapid value realization and minimal disruption</p>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-neon-pink/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-pink-orange opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🚀</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Growth & Scale</h3>
                  <p className="text-gray-400 leading-relaxed">Continuous optimization and scaling strategies that grow with your business needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS - Visual First */}
        <section id="solutions" className="py-32 relative bg-gradient-mesh">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6">
                <span className="bg-gradient-pink-orange bg-clip-text text-transparent">Complete Digital Suite</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">From education to analytics, we provide end-to-end solutions that power modern businesses</p>
            </div>

            {/* Large Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <Link key={index} href={product.href}>
                  <div className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

                    {/* Content */}
                    <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                      <div>
                        <product.icon className="w-16 h-16 text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                        <h3 className="text-4xl font-display font-bold text-white mb-4">
                          {product.name}
                        </h3>
                      </div>

                      <div className="flex items-center text-white group-hover:translate-x-4 transition-transform duration-300">
                        <span className="text-lg font-semibold mr-2">Explore</span>
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* STATS - Visual Numbers */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
                <span className="bg-gradient-luxury bg-clip-text text-transparent">Proven Track Record</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-display font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-400 font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRY EXPERTISE */}
        <section className="py-32 relative bg-gradient-mesh">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6">
                <span className="bg-gradient-blue-purple bg-clip-text text-transparent">Industry Expertise</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Deep sector knowledge across high-growth industries</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-neon-purple/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🏥</div>
                  <h3 className="text-xl font-display font-bold text-white">Healthcare</h3>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🏦</div>
                  <h3 className="text-xl font-display font-bold text-white">Financial Services</h3>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-neon-pink/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🛒</div>
                  <h3 className="text-xl font-display font-bold text-white">E-Commerce</h3>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-neon-orange/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">📚</div>
                  <h3 className="text-xl font-display font-bold text-white">Education</h3>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-neon-purple/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🏭</div>
                  <h3 className="text-xl font-display font-bold text-white">Manufacturing</h3>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🚀</div>
                  <h3 className="text-xl font-display font-bold text-white">Technology</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA - Full Width Gradient */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple via-neon-pink to-neon-orange opacity-20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8">
              Ready to Scale?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 font-light max-w-3xl mx-auto">
              Join forward-thinking startups and SMEs transforming their operations with enterprise-grade technology
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <button className="group relative px-16 py-8 text-2xl font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 shadow-luxury">
                  <div className="absolute inset-0 bg-gradient-luxury animate-gradient bg-[length:200%_200%]" />
                  <span className="relative z-10 text-white flex items-center gap-4">
                    Book Free Consultation
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="px-16 py-8 text-2xl font-bold rounded-2xl border-2 border-white/20 backdrop-blur-xl hover:border-neon-purple hover:shadow-glow-purple transition-all duration-300 hover:scale-105">
                  <span className="bg-gradient-luxury bg-clip-text text-transparent">View Case Studies</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Data
const features = [
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'AI-Driven Insights',
    gradient: 'from-blue-400 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    gradient: 'from-green-400 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Cost Efficient',
    gradient: 'from-yellow-400 to-orange-500',
  },
];

const products = [
  {
    name: 'Digital Transformation',
    href: '/solutions/transformation',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
    description: 'End-to-end modernization for legacy systems and processes',
  },
  {
    name: 'AI Automation',
    href: '/solutions/automation',
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Intelligent workflows that scale with your business',
  },
  {
    name: 'Cloud Solutions',
    href: '/solutions/cloud',
    icon: Rocket,
    gradient: 'from-pink-500 to-orange-500',
    description: 'Secure, scalable infrastructure for modern enterprises',
  },
  {
    name: 'Analytics & Insights',
    href: '/solutions/analytics',
    icon: Shield,
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Data-driven decision making for competitive advantage',
  },
];

const stats = [
  { value: '95%', label: 'Client Satisfaction' },
  { value: '3x', label: 'ROI Average' },
  { value: '24/7', label: 'Support' },
  { value: '50+', label: 'Success Stories' },
];
