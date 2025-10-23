import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | SMERP TEK',
  description:
    'Get in touch with SMERP TEK. Book a demo, ask questions, or explore partnership opportunities. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <div className="relative">
        <div className="opacity-30">
          <AnimatedBackground />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main className="pt-24 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Hero */}
              <div className="max-w-2xl mx-auto text-center mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                  Let's talk about your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">operations</span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Book a 30-minute demo, ask a question, or explore how SMERP TEK can help modernize
                  your workflows. We respond within 24 hours.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
                      <p className="text-gray-400">
                        Fill out the form below and we'll get back to you shortly.
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-white">
                            Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            required
                            className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-white">
                            Company name
                          </label>
                          <input
                            id="company"
                            type="text"
                            placeholder="Your company"
                            className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-white">
                            Work email <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            required
                            className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-white">
                            Phone number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            placeholder="+971 XX XXX XXXX"
                            className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="interest" className="text-sm font-medium text-white">
                          I'm interested in... <span className="text-red-400">*</span>
                        </label>
                        <select
                          id="interest"
                          required
                          className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        >
                          <option value="" className="bg-gray-900">Select an option</option>
                          <option value="demo" className="bg-gray-900">Booking a product demo</option>
                          <option value="consultancy" className="bg-gray-900">Discussing consultancy services</option>
                          <option value="pricing" className="bg-gray-900">Pricing and plans</option>
                          <option value="partnership" className="bg-gray-900">Partnership opportunities</option>
                          <option value="media" className="bg-gray-900">Media inquiries</option>
                          <option value="other" className="bg-gray-900">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-white">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          placeholder="Tell us about your needs, challenges, or questions..."
                          className="flex w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                        />
                      </div>

                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="mt-1 rounded border-white/10 bg-white/5 text-purple-500 focus:ring-2 focus:ring-purple-500"
                        />
                        <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed">
                          I agree to SMERP TEK's Privacy Policy and consent to being contacted about
                          my inquiry. You may also send me occasional product updates and resources
                          (opt-out anytime).
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="group w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                      >
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6">Other ways to reach us</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white mb-1">Email</p>
                          <a
                            href="mailto:hello@smerptek.com"
                            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            hello@smerptek.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white mb-1">Phone</p>
                          <a
                            href="tel:+97144XXXXXX"
                            className="text-sm text-purple-400 hover:text-purple-300 transition-colors block"
                          >
                            +971 4 XXX XXXX
                          </a>
                          <p className="text-xs text-gray-400 mt-1">Sun–Thu, 9am–6pm GST</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white mb-1">Address</p>
                          <p className="text-sm text-gray-300">Dubai, UAE</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">Quick links</h3>
                    <div className="space-y-3">
                      <a
                        href="/pricing"
                        className="block text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        → View pricing
                      </a>
                      <a
                        href="/products"
                        className="block text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        → Explore products
                      </a>
                      <a
                        href="/solutions"
                        className="block text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        → Learn about services
                      </a>
                      <a
                        href="/resources/blog"
                        className="block text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        → Read our blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
