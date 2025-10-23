import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Users, DollarSign, FileText, Headphones, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ProductHero } from '@/components/sections/product-hero';

export const metadata: Metadata = {
  title: 'SMERPs Crew | AI Agents for Business Automation',
  description:
    'Function-specific AI agents for Sales, Finance, Ops, HR, Support, and Marketing—automate repetitive tasks while keeping humans in the loop.',
};

export default function SmerpsCrewPage() {
  const agents = [
    {
      name: 'Sales Agent',
      icon: TrendingUp,
      tasks: ['Qualify inbound leads', 'Draft follow-up emails', 'Update CRM records', 'Schedule demo calls'],
      approval: 'Contract terms, pricing negotiations',
    },
    {
      name: 'Finance Agent',
      icon: DollarSign,
      tasks: ['Match invoices to POs', 'Flag anomalous transactions', 'Send payment reminders', 'Generate reports'],
      approval: 'Payment releases, policy exceptions',
    },
    {
      name: 'Operations Agent',
      icon: FileText,
      tasks: ['Monitor inventory levels', 'Process vendor requests', 'Update project status', 'Generate summaries'],
      approval: 'Supplier changes, budget overruns',
    },
    {
      name: 'HR Agent',
      icon: Users,
      tasks: ['Screen CVs', 'Schedule interviews', 'Onboard new hires', 'Answer policy questions'],
      approval: 'Final hiring decisions, contract offers',
    },
    {
      name: 'Support Agent',
      icon: Headphones,
      tasks: ['Triage tickets', 'Provide instant FAQ answers', 'Escalate complex issues', 'Generate satisfaction reports'],
      approval: 'Refunds, SLA breaches, escalations',
    },
    {
      name: 'Marketing Agent',
      icon: TrendingUp,
      tasks: ['Draft social posts', 'A/B test emails', 'Segment audiences', 'Generate performance summaries'],
      approval: 'Brand messaging, crisis comms',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <ProductHero
          icon={Zap}
          name="SMERPs Crew"
          tagline="Meet your new team members"
          description="SMERPs Crew is a suite of AI agents designed to handle repetitive workflows across your business functions—freeing your team to focus on strategy, creativity, and growth."
        />

        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <h2 className="text-h1 font-bold text-text-primary text-center mb-12">The Crew</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                      <agent.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-h4">{agent.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-text-primary mb-2">What it does:</p>
                    <ul className="space-y-1 mb-4">
                      {agent.tasks.map((task, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          {task}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-text-tertiary">
                      <strong>Human approval required for:</strong> {agent.approval}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-secondary">
          <div className="container-custom text-center">
            <h2 className="text-h1 font-bold text-text-primary mb-6">AI that earns trust</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {['Audit logs', 'Human-in-the-loop', 'Confidence scoring', 'Rollback capability'].map((feature, i) => (
                <div key={i} className="text-center">
                  <CheckCircle2 className="w-8 h-8 text-success mx-auto mb-2" />
                  <p className="font-semibold text-text-primary">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container-custom text-center">
            <h2 className="text-h1 font-bold text-text-primary mb-6">Pricing</h2>
            <p className="text-body-lg text-text-secondary mb-8">Per Agent: AED 500/month (billed annually)</p>
            <p className="text-text-secondary mb-8">Bundle: 3 agents for AED 1,200/month | 6 agents for AED 2,400/month</p>
            <Link href="/contact"><Button size="lg">Start Free Trial</Button></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
