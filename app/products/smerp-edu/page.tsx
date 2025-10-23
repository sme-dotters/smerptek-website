import { Metadata } from 'next';
import Link from 'next/link';
import { Database, CheckCircle2, Users, Calendar, DollarSign, BookOpen, Smartphone, ArrowRight, Play } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

export const metadata: Metadata = {
  title: 'SMERP EDU | ERP Software for Education Institutes',
  description:
    'Unified ERP for schools and training centers: admissions, scheduling, billing, attendance, and portals—built for the UAE and GCC.',
};

export default function SmerpEduPage() {
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
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-8">
                    <Database className="w-10 h-10 text-purple-400" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                    SMERP <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">EDU</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-400 mb-4">One platform for your entire institute</p>
                  <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    SMERP EDU unifies admissions, scheduling, attendance, billing, and communication for education and training institutes—reducing admin overhead and improving the student experience.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="https://edu.smerptek.com/">
                      <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105">
                        <Play className="w-5 h-5" />
                        Access Now
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="px-10 py-5 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                        Schedule Walkthrough
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Modules */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">Core Modules</h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Everything you need to run your institute efficiently
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {modules.map((module, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                        <module.icon className="w-7 h-7 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{module.title}</h3>
                      <ul className="space-y-2">
                        {module.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* What's Required */}
            <section className="py-24 bg-gradient-to-b from-transparent to-purple-500/5">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-12">
                    Simple setup, fast onboarding
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                      <h3 className="text-2xl font-semibold text-white mb-6">You provide:</h3>
                      <ul className="space-y-4">
                        {youProvide.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                      <h3 className="text-2xl font-semibold text-white mb-6">We handle:</h3>
                      <ul className="space-y-4">
                        {weHandle.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 text-center">
                    <p className="text-white font-semibold text-lg">
                      <span className="text-cyan-400">Timeline:</span> 2–3 weeks from kickoff to go-live
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-12">Pricing</h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {pricing.map((plan, index) => (
                    <div key={index} className={`p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border transition-all duration-300 hover:-translate-y-1 ${plan.recommended ? 'border-purple-500 shadow-xl shadow-purple-500/20' : 'border-white/10 hover:border-purple-500/50'}`}>
                      {plan.recommended && (
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-2 text-sm font-semibold rounded-lg mb-6">
                          Most Popular
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-white">AED {plan.price}</span>
                        {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact">
                        <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.recommended ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-xl hover:shadow-purple-500/50' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                          {plan.cta}
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center max-w-2xl mx-auto">
                  <p className="text-sm text-gray-300 mb-4">
                    <strong className="text-white">All plans include:</strong> Unlimited users (staff, teachers, parents,
                    students) • Mobile apps (iOS, Android) • Email and in-app support • Monthly product
                    updates
                  </p>
                  <p className="text-xs text-gray-400">
                    Add-ons: SMS notifications (AED 500/month) • Custom integrations (from AED 5,000) •
                    On-site training (AED 2,000/day)
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to simplify your operations?</h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Schedule a personalized walkthrough and see how SMERP EDU can transform your institute.
                  </p>
                  <Link href="/contact">
                    <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto">
                      Schedule a Walkthrough
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
const modules = [
  {
    title: 'Admissions & Enrollment',
    icon: Users,
    features: [
      'Online application forms with document uploads',
      'Automated waitlists and acceptance workflows',
      'Payment plan setup at enrollment',
      'Parent/student portal access provisioning',
    ],
  },
  {
    title: 'Timetable & Scheduling',
    icon: Calendar,
    features: [
      'Drag-and-drop timetable builder',
      'Room and resource allocation',
      'Teacher availability management',
      'Conflict detection and resolution',
    ],
  },
  {
    title: 'Attendance Tracking',
    icon: CheckCircle2,
    features: [
      'Real-time attendance capture (web, mobile, biometric)',
      'Automated parent notifications',
      'Attendance reports by class, student, or date range',
      'Integration with leave management',
    ],
  },
  {
    title: 'Billing & Invoicing',
    icon: DollarSign,
    features: [
      'Automated fee generation and reminders',
      'Payment gateway integration (local UAE banks)',
      'Partial payment and installment plans',
      'Receipt generation and accounting sync',
    ],
  },
  {
    title: 'Inventory & Resources',
    icon: BookOpen,
    features: [
      'Track books, uniforms, equipment, and supplies',
      'Issue and return workflows',
      'Low-stock alerts',
      'Vendor management',
    ],
  },
  {
    title: 'Portals',
    icon: Smartphone,
    features: [
      'Student Portal: View grades, timetables, assignments',
      'Parent Portal: Track attendance, payments, communicate',
      'Teacher Portal: Submit grades, attendance, lesson plans',
      'Admin Dashboard: Real-time KPIs, enrollment trends',
    ],
  },
];

const youProvide = [
  'Current student and staff data (Excel or CSV)',
  'Fee structures and academic calendar',
  'Branding assets (logo, colors)',
];

const weHandle = [
  'Data migration and validation',
  'System configuration (modules, permissions, workflows)',
  'Portal customization',
  'Team training (2-day workshop + video library)',
];

const pricing = [
  {
    name: 'Starter',
    description: 'Up to 200 students',
    price: '1,500',
    features: [
      'All core modules',
      'Unlimited users',
      'Mobile apps',
      'Email support (24h response)',
      'Monthly updates',
    ],
    cta: 'Start Trial',
    recommended: false,
  },
  {
    name: 'Growth',
    description: 'Up to 500 students',
    price: '3,500',
    features: [
      'Everything in Starter',
      'Priority support (4h response)',
      'SMS notifications',
      'Custom reports',
      'Quarterly business review',
    ],
    cta: 'Get Started',
    recommended: true,
  },
  {
    name: 'Business',
    description: '500+ students',
    price: 'Custom',
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Custom integrations',
      'On-site training',
      '99.9% SLA guarantee',
    ],
    cta: 'Contact Sales',
    recommended: false,
  },
];
