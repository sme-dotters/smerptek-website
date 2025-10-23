'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, DollarSign } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';
import { CurrencySwitcher } from '@/components/ui/CurrencySwitcher';
import { type Currency, convertPrice, formatPrice, fetchExchangeRates } from '@/lib/currency/api';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState<Currency>('AED');

  // Fetch live exchange rates on mount
  useEffect(() => {
    fetchExchangeRates().catch((error) => {
      console.error('Failed to fetch exchange rates:', error);
    });
  }, []);

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
      <div className="relative">
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
                  Clear pricing, <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">no surprises</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Choose the plan that fits your stage. All plans include core features, monthly updates,
                  and email support. Scale up (or down) anytime.
                </p>

                {/* Toggle & Currency Switcher */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
                      Monthly
                    </span>
                    <button
                      onClick={() => setIsAnnual(!isAnnual)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        isAnnual ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-white/10'
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
                    <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                      Annual <span className="text-green-400">(save 15%)</span>
                    </span>
                  </div>

                  <div className="h-8 w-px bg-white/20 hidden sm:block" />

                  <CurrencySwitcher
                    selectedCurrency={currency}
                    onCurrencyChange={setCurrency}
                  />
                </div>
              </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {plans.map((plan, index) => (
                    <div
                      key={index}
                      className={`relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border transition-all duration-300 hover:-translate-y-1 ${
                        plan.recommended
                          ? 'border-purple-500 shadow-xl shadow-purple-500/20'
                          : 'border-white/10 hover:border-purple-500/50'
                      }`}
                    >
                      {plan.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-400 mb-6">{plan.description}</p>
                        <div>
                          {plan.priceMonthly ? (
                            <>
                              <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-bold text-white">
                                  {formatPrice(
                                    convertPrice(
                                      isAnnual ? plan.priceAnnual! : plan.priceMonthly,
                                      currency
                                    ),
                                    currency
                                  )}
                                </span>
                                <span className="text-gray-400">/month</span>
                              </div>
                              {isAnnual && (
                                <p className="text-xs text-gray-400">
                                  Billed annually ({formatPrice(
                                    convertPrice(plan.priceAnnual! * 12, currency),
                                    currency
                                  )})
                                </p>
                              )}
                            </>
                          ) : (
                            <span className="text-4xl font-bold text-white">Custom</span>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/contact">
                        <button
                          className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                            plan.recommended
                              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-xl hover:shadow-purple-500/50'
                              : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <span className="flex items-center justify-center gap-2">
                            {plan.cta}
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services Pricing */}
            <section className="py-24 bg-gradient-to-b from-transparent to-purple-500/5">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Services Pricing
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
                    <div
                      key={i}
                      className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                        <DollarSign className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-400 mb-4">{service.duration}</p>
                      <p className="text-2xl font-bold text-white">AED {service.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">
                  Frequently asked questions
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                  {faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                        {faq.question}
                        <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <p className="text-gray-300 mt-4 text-sm leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-8">
                    Choose your plan and get started today
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact">
                      <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105">
                        Start Free Trial
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="px-10 py-5 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                        Book a Demo
                        <ArrowRight className="w-5 h-5" />
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
