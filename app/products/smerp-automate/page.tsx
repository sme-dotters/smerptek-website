import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ProductHero } from '@/components/sections/product-hero';

export const metadata: Metadata = {
  title: 'SMERP Automate | Pre-Built Workflow Automation',
  description:
    '50+ ready-to-use automation templates: quote-to-invoice, onboarding, reminders, data sync—deploy in minutes, customize as you grow.',
};

export default function SmerpAutomatePage() {
  const flows = [
    {
      name: 'Quote to Invoice',
      description: 'Convert approved quotes into invoices, send to clients, sync with accounting software.',
      timeSaved: '2 hours/week per team member',
    },
    {
      name: 'Employee Onboarding',
      description: 'Send welcome email, provision accounts, assign tasks, schedule check-ins.',
      timeSaved: '5 hours per new hire',
    },
    {
      name: 'Payment Reminders',
      description: 'Scheduled reminders for overdue invoices with customizable tone and frequency.',
      timeSaved: '20-30% faster payment',
    },
    {
      name: 'Data Sync Across Tools',
      description: 'Keep CRM, accounting, and project management data in sync automatically.',
      timeSaved: '90%+ error reduction',
    },
    {
      name: 'Lead Capture & Routing',
      description: 'New lead → enriched → scored → assigned to sales rep → CRM → follow-up task.',
      timeSaved: '<5 minute response time',
    },
    {
      name: 'Monthly Reconciliation',
      description: 'Compare transactions across systems, flag discrepancies, generate report.',
      timeSaved: '4-6 hours/month',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <ProductHero
          icon={TrendingUp}
          name="SMERP Automate"
          tagline="Automate work, not people"
          description="SMERP Automate provides 50+ pre-built workflows that eliminate repetitive tasks—from quote-to-invoice flows to employee onboarding sequences. Deploy in minutes, customize as you grow."
        />

        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <h2 className="text-h1 font-bold text-text-primary text-center mb-12">Popular Flows</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flows.map((flow, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-h4">{flow.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-text-secondary mb-4">{flow.description}</p>
                    <div className="bg-success/10 rounded px-3 py-2">
                      <p className="text-xs font-semibold text-success">
                        Time saved: {flow.timeSaved}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-secondary">
          <div className="container-custom">
            <h2 className="text-h1 font-bold text-text-primary text-center mb-12">
              Three steps to automation
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {['Choose a template', 'Customize workflow', 'Activate & monitor'].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-text-inverse font-bold text-xl mx-auto mb-4">
                    {i + 1}
                  </div>
                  <p className="font-semibold text-text-primary">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container-custom text-center">
            <h2 className="text-h1 font-bold text-text-primary mb-6">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'Starter', workflows: '10', tasks: '1,000', price: '300' },
                { name: 'Growth', workflows: '50', tasks: '10,000', price: '800' },
                { name: 'Business', workflows: 'Unlimited', tasks: '100,000', price: '2,000' },
              ].map((plan, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-text-primary">AED {plan.price}</span>
                      <span className="text-text-secondary">/month</span>
                    </div>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        {plan.workflows} active workflows
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        {plan.tasks} tasks/month
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/contact"><Button size="lg">Try Free for 14 Days</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
