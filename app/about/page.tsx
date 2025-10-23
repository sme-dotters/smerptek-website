import { Metadata } from 'next';
import Link from 'next/link';
import { Lightbulb, Shield, MapPin, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

export const metadata: Metadata = {
  title: 'About SMERP TEK | Our Mission, Team, and Values',
  description:
    'Learn about SMERP TEK\'s mission to modernize operations for startups and SMEs, meet our team, and explore career opportunities.',
};

export default function AboutPage() {
  return (
    <>
      <div className="relative">
        {/* Faded Animated Background */}
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
                  Technology that <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">clarifies</span>, not complicates
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  SMERP TEK was founded on a simple belief: growth shouldn't feel chaotic. We partner with
                  ambitious startups and SMEs to modernize operations—transforming scattered systems into
                  intelligent workflows that deliver clarity, control, and measurable outcomes.
                </p>
              </div>
            </section>

            {/* Mission */}
            <section className="py-20 lg:py-32">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To reduce the mental load of running a business by building technology that integrates,
                    automates, and clarifies—so teams can focus on what matters: serving customers and
                    growing sustainably.
                  </p>
                </div>
              </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gradient-to-b from-transparent to-purple-500/5">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-12">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {values.map((value, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                        <value.icon className="w-7 h-7 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Team */}
            <section className="py-20 lg:py-32">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Meet the Team</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    SMERP TEK is a team of engineers, designers, and operators based in Dubai. We've built
                    and scaled our own startups, so we know the friction points you face—because we've lived
                    them.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-12 text-center max-w-4xl mx-auto">
                  <p className="text-xl sm:text-2xl font-semibold text-white mb-4 leading-relaxed">
                    "We believe complexity is a choice. Every product, every interface, every line of code
                    is designed to simplify—not impress with unnecessary features."
                  </p>
                  <p className="text-gray-400">— The SMERP TEK Team</p>
                </div>
              </div>
            </section>

            {/* Careers */}
            <section className="py-20 bg-gradient-to-b from-transparent to-purple-500/5">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Join Us</h2>
                  <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                    We're building the operating system for ambitious SMEs. If you thrive in fast-paced
                    environments, care deeply about craft, and want to make a real impact, we'd love to hear
                    from you.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-12">
                    {openRoles.map((role, index) => (
                      <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-left">
                        <h3 className="font-semibold text-white mb-1">{role.title}</h3>
                        <p className="text-sm text-gray-400">{role.location}</p>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                      View Open Positions
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  <p className="text-sm text-gray-400 mt-6">
                    Email for inquiries:{' '}
                    <a href="mailto:careers@smerptek.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      careers@smerptek.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-32">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's build something together</h2>
                <Link href="/contact">
                  <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                    Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

const values = [
  {
    title: 'Clarity First',
    icon: Lightbulb,
    description:
      'We believe complexity is a choice. Every product, every interface, every line of code is designed to simplify—not impress with unnecessary features.',
  },
  {
    title: 'Trust Through Transparency',
    icon: Shield,
    description:
      'Our AI agents explain their decisions. Our dashboards show you the data behind insights. Our contracts have no hidden clauses. Trust is earned through openness.',
  },
  {
    title: 'Built for the Region',
    icon: MapPin,
    description:
      'We understand the UAE and GCC market: PDPL compliance, bilingual needs, local payment methods, and the pace of growth here. We are not adapting a Western product—we are building for you.',
  },
];

const openRoles = [
  { title: 'Senior Full-Stack Engineer', location: 'Dubai' },
  { title: 'Product Designer', location: 'Remote-friendly' },
  { title: 'Customer Success Manager', location: 'Dubai' },
  { title: 'Sales Development Representative', location: 'Dubai' },
];
