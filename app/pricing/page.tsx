'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'For teams just getting started',
      priceMonthly: 1500,
      priceAnnual: 1275,
      features: [
        '1 product (choose SMERP EDU, Automate, or Analytics)',
        'Up to 200 users/students or 1,000 tasks/month',
        'Email support (24-hour response)',
        'Mobile app access',
        'Monthly product updates',
      ],
      cta: 'Start Free Trial',
      recommended: false,
    },
    {
      name: 'Growth',
      description: 'For scaling teams',
      priceMonthly: 3500,
      priceAnnual: 2975,
      features: [
        '2 products (mix and match)',
        'Up to 500 users/students or 10,000 tasks/month',
        'Priority email + chat support (4-hour response)',
        'Mobile app access',
        'Daily insights brief (Analytics)',
        'Quarterly business review',
      ],
      cta: 'Book a Demo',
      recommended: true,
    },
    {
      name: 'Business',
      description: 'For established enterprises',
      priceMonthly: null,
      priceAnnual: null,
      features: [
        'All products (unlimited)',
        'Unlimited users/students, custom task limits',
        'Dedicated account manager',
        'Phone + Slack support (1-hour response)',
        'Custom integrations and workflows',
        'On-site training and workshops',
        '99.9% SLA guarantee',
      ],
      cta: 'Contact Sales',
      recommended: false,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom text-center">
            <h1 className="text-h1 lg:text-display-lg font-bold text-text-primary mb-6">
              Clear pricing, no surprises
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto mb-8">
              Choose the plan that fits your stage. All plans include core features, monthly updates,
              and email support. Scale up (or down) anytime.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-text-primary' : 'text-text-secondary'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-primary' : 'bg-border-default'
                }`}
                role="switch"
                aria-checked={isAnnual}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-text-primary' : 'text-text-secondary'}`}>
                Annual <span className="text-success">(save 15%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.recommended ? 'border-2 border-primary shadow-lg' : ''}`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-text-inverse px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-h3">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-6">
                      {plan.priceMonthly ? (
                        <>
                          <span className="text-4xl font-bold text-text-primary">
                            AED {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                          </span>
                          <span className="text-text-secondary">/month</span>
                          {isAnnual && (
                            <p className="text-xs text-text-tertiary mt-1">
                              Billed annually (AED {plan.priceAnnual! * 12})
                            </p>
                          )}
                        </>
                      ) : (
                        <span className="text-4xl font-bold text-text-primary">Custom</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button
                        variant={plan.recommended ? 'primary' : 'secondary'}
                        size="lg"
                        fullWidth
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Pricing */}
        <section className="py-20 bg-bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-h1 font-bold text-text-primary mb-4">Services Pricing</h2>
              <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
                Add-on consultancy packages. Bundle 2+ services and save 10%.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { name: 'Assess', duration: '2 weeks', price: '15,000' },
                { name: 'Integrate', duration: '2-4 weeks', price: 'From 30,000' },
                { name: 'Automate', duration: '2-6 weeks', price: 'From 25,000' },
                { name: 'Secure', duration: 'Ongoing', price: 'From 20,000' },
              ].map((service, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-h4">{service.name}</CardTitle>
                    <CardDescription>{service.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">AED {service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <h2 className="text-h1 font-bold text-text-primary text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-bg-surface rounded-lg p-6 group">
                  <summary className="font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-text-secondary mt-4 text-sm">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-dark text-text-inverse">
          <div className="container-custom text-center">
            <h2 className="text-h1 font-bold mb-6">Choose your plan and get started today</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent text-text-primary hover:bg-accent-hover">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-transparent text-text-inverse border-text-inverse/30">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const faqs = [
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. Monthly plans cancel anytime with 30 days\' notice. Annual plans are non-refundable but you retain access through the term.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer:
      'You can export all data in standard formats (CSV, JSON) for 60 days post-cancellation. We permanently delete data after 90 days.',
  },
  {
    question: 'Do you offer discounts for nonprofits or education?',
    answer:
      'Yes. Nonprofits and accredited schools receive 20% off all plans. Contact sales with proof of status.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'Credit card (Visa, Mastercard, Amex), bank transfer (UAE local or international), and PayPal.',
  },
  {
    question: 'Can I upgrade or downgrade mid-contract?',
    answer:
      'Yes. Upgrades take effect immediately with prorated billing. Downgrades apply at next renewal.',
  },
];
