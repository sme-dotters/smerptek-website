import { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, CheckCircle2, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ProductHero } from '@/components/sections/product-hero';

export const metadata: Metadata = {
  title: 'SMERPs Analytics | Autonomous Business Intelligence',
  description:
    'Cross-tool dashboards, anomaly detection, daily insights, and recommended actions—analytics that drive decisions, not just report them.',
};

export default function SmerpsAnalyticsPage() {
  const capabilities = [
    {
      title: 'Cross-Tool Dashboards',
      icon: BarChart3,
      description:
        'Aggregate data from CRM, accounting, marketing, operations, and HR into unified dashboards. No manual CSV exports.',
      examples: ['Revenue by channel/product/region', 'Customer acquisition cost and lifetime value', 'Team performance and utilization'],
    },
    {
      title: 'Anomaly Detection',
      icon: AlertCircle,
      description:
        'AI monitors metrics in real time and alerts you to unexpected changes: revenue dips, cost spikes, churn signals.',
      examples: ['Email, Slack, SMS alerts', 'Smart filtering to reduce false positives', 'Historical pattern analysis'],
    },
    {
      title: 'Daily Insights Brief',
      icon: Lightbulb,
      description:
        'Every morning, receive a personalized summary: key metrics, trends, issues flagged, and recommended actions.',
      examples: ['Key metrics vs yesterday/last week', 'Trends worth noting', 'One-click recommended actions'],
    },
    {
      title: 'Recommended Actions',
      icon: TrendingUp,
      description:
        'Analytics don\'t just report—they suggest what to do next with one-click execution where possible.',
      examples: ['Launch promotions', 'Assign overflow tasks', 'Review burn rate'],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <ProductHero
          icon={BarChart3}
          name="SMERPs Analytics"
          tagline="Insights that drive action"
          description="SMERPs Analytics connects your tools, builds dashboards automatically, flags anomalies, and recommends next actions—so you spend less time in spreadsheets and more time making decisions."
        />

        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <h2 className="text-h1 font-bold text-text-primary text-center mb-12">Core Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-3">
                      <capability.icon className="w-6 h-6 text-success" />
                    </div>
                    <CardTitle className="text-h3">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-4">{capability.description}</p>
                    <ul className="space-y-1">
                      {capability.examples.map((example, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-secondary">
          <div className="container-custom">
            <h2 className="text-h1 font-bold text-text-primary text-center mb-12">Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { role: 'Founders', use: 'Morning brief with revenue, burn rate, runway, and top priorities' },
                { role: 'Finance', use: 'Cash flow forecasts, P&L variance analysis, expense anomaly alerts' },
                { role: 'Sales', use: 'Pipeline health, conversion rates by stage, rep performance, at-risk deals' },
                { role: 'Marketing', use: 'Campaign ROI, channel performance, funnel drop-off analysis' },
                { role: 'Operations', use: 'Project timelines, resource utilization, bottleneck detection' },
              ].map((useCase, i) => (
                <div key={i} className="bg-bg-surface rounded-lg p-6">
                  <p className="font-bold text-primary mb-2">For {useCase.role}</p>
                  <p className="text-sm text-text-secondary">{useCase.use}</p>
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
                { name: 'Starter', sources: '3', dashboards: '5', price: '500' },
                { name: 'Growth', sources: '10', dashboards: '20', price: '1,200', popular: true },
                { name: 'Business', sources: 'Unlimited', dashboards: 'Unlimited', price: '3,000' },
              ].map((plan, i) => (
                <Card key={i} className={plan.popular ? 'border-2 border-primary' : ''}>
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
                        {plan.sources} data sources
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        {plan.dashboards} dashboards
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/contact"><Button size="lg">Start Your Free Trial</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
