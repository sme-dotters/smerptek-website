import { Metadata } from 'next';
import Link from 'next/link';
import { Database, CheckCircle2, Users, Calendar, DollarSign, BookOpen, Smartphone } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ProductHero } from '@/components/sections/product-hero';

export const metadata: Metadata = {
  title: 'SMERP EDU | ERP Software for Education Institutes',
  description:
    'Unified ERP for schools and training centers: admissions, scheduling, billing, attendance, and portals—built for the UAE and GCC.',
};

export default function SmerpEduPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <ProductHero
          icon={Database}
          name="SMERP EDU"
          tagline="One platform for your entire institute"
          description="SMERP EDU unifies admissions, scheduling, attendance, billing, and communication for education and training institutes—reducing admin overhead and improving the student experience."
        />

        {/* Core Modules */}
        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-h1 font-bold text-text-primary mb-4">Core modules</h2>
              <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
                Everything you need to run your institute efficiently
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-h4">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Required */}
        <section className="py-20 bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h1 font-bold text-text-primary text-center mb-12">
                Simple setup, fast onboarding
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-h3 font-bold text-text-primary mb-4">You provide:</h3>
                  <ul className="space-y-3">
                    {youProvide.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-h3 font-bold text-text-primary mb-4">We handle:</h3>
                  <ul className="space-y-3">
                    {weHandle.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
                <p className="text-text-primary font-semibold">
                  <span className="text-accent">Timeline:</span> 2–3 weeks from kickoff to go-live
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <h2 className="text-h1 font-bold text-text-primary text-center mb-12">Pricing</h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <Card key={index} className={plan.recommended ? 'border-2 border-primary' : ''}>
                  {plan.recommended && (
                    <div className="bg-primary text-text-inverse text-center py-2 text-sm font-semibold rounded-t-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-text-primary">AED {plan.price}</span>
                      <span className="text-text-secondary">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        variant={plan.recommended ? 'primary' : 'secondary'}
                        fullWidth
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-sm text-text-secondary mb-4">
                <strong>All plans include:</strong> Unlimited users (staff, teachers, parents,
                students) • Mobile apps (iOS, Android) • Email and in-app support • Monthly product
                updates
              </p>
              <p className="text-xs text-text-tertiary">
                Add-ons: SMS notifications (AED 500/month) • Custom integrations (from AED 5,000) •
                On-site training (AED 2,000/day)
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-dark text-text-inverse">
          <div className="container-custom text-center">
            <h2 className="text-h1 font-bold mb-6">Ready to simplify your operations?</h2>
            <p className="text-body-lg text-text-inverse/90 mb-8 max-w-2xl mx-auto">
              Schedule a personalized walkthrough and see how SMERP EDU can transform your institute.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-text-primary hover:bg-accent-hover">
                Schedule a Walkthrough
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
