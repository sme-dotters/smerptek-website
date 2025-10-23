import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, DollarSign } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Digital Transformation Services | SMERP TEK',
  description:
    'Consultancy packages for startups & SMEs: system audits, cloud integration, AI automation, and cybersecurity—delivered in weeks, not months.',
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom text-center">
            <h1 className="text-h1 lg:text-display-lg font-bold text-text-primary mb-6">
              Solutions designed for growth
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto mb-8">
              We partner with startups and SMEs to modernize operations through integrated
              consultancy packages—delivered in weeks, with clear milestones and measurable
              outcomes.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Discuss Your Needs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                OUR SERVICES
              </p>
              <h2 className="text-h1 font-bold text-text-primary mb-4">
                Consultancy packages that deliver
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {servicePackages.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-h3 mb-2">{service.name}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-text-secondary">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="font-semibold text-text-primary mb-2">What's included:</p>
                      <ul className="space-y-2">
                        {service.included.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border-default">
                      <p className="text-sm font-semibold text-text-primary mb-1">Outcome:</p>
                      <p className="text-sm text-text-secondary">{service.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Timeline */}
        <section className="py-20 bg-bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-h1 font-bold text-text-primary mb-4">
                What a typical engagement looks like
              </h2>
              <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
                Timelines flex based on complexity. We provide milestone-based pricing and weekly
                check-ins.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {timeline.map((phase, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-text-inverse">{phase.weeks}</div>
                        <div className="text-sm text-text-inverse/80">{phase.timeframe}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-bold text-text-primary mb-2">{phase.phase}</h3>
                    <p className="text-text-secondary mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose SMERP TEK */}
        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <h2 className="text-h1 font-bold text-text-primary text-center mb-12">
              Why choose SMERP TEK
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChoose.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-h4 font-bold text-text-primary mb-2">{reason.title}</h3>
                  <p className="text-sm text-text-secondary">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-dark text-text-inverse">
          <div className="container-custom text-center">
            <h2 className="text-h1 font-bold mb-6">Let's map your roadmap</h2>
            <p className="text-body-lg text-text-inverse/90 mb-8 max-w-2xl mx-auto">
              Schedule a free 30-minute strategy call to discuss your challenges and explore how we
              can help.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-text-primary hover:bg-accent-hover">
                Schedule a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
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
const servicePackages = [
  {
    name: 'Assess — Digital Transformation Audit',
    duration: '2 weeks',
    price: 'From AED 15,000',
    included: [
      'Current-state system inventory',
      'Pain point analysis (manual processes, data silos, bottlenecks)',
      'Integration opportunity mapping',
      'Prioritized roadmap with effort estimates',
    ],
    outcome: 'Clear 90-day action plan with ROI projections.',
  },
  {
    name: 'Integrate — System Integration & Cloud Migration',
    duration: '2–4 weeks',
    price: 'From AED 30,000',
    included: [
      'API integration between existing tools (CRM, ERP, accounting, etc.)',
      'Cloud migration (AWS, Azure, Google Cloud)',
      'Data migration and validation',
      'Workflow automation setup',
    ],
    outcome: 'Unified data flow, reduced manual entry, real-time sync.',
  },
  {
    name: 'Automate — Intelligent Automation Deployment',
    duration: '2–6 weeks',
    price: 'From AED 25,000',
    included: [
      'AI agent configuration (SMERPs Crew)',
      'Pre-built automation flows (SMERP Automate)',
      'Approval workflows and escalation rules',
      'Team training and documentation',
    ],
    outcome: '40–60% reduction in repetitive tasks, faster turnaround times.',
  },
  {
    name: 'Secure — Cybersecurity Assessment & Hardening',
    duration: 'Parallel or standalone',
    price: 'From AED 20,000',
    included: [
      'Vulnerability scanning and penetration testing',
      'Security policy drafting (PDPL-aligned)',
      'Access control and MFA setup',
      'Incident response planning',
    ],
    outcome: 'Hardened infrastructure, compliance readiness, peace of mind.',
  },
];

const timeline = [
  {
    weeks: 'Week 1–2',
    timeframe: '2 weeks',
    phase: 'Assess',
    description:
      'Discovery workshops, system audit, roadmap finalized with clear priorities and timelines.',
    deliverables: ['System Inventory', 'Roadmap', 'ROI Analysis'],
  },
  {
    weeks: 'Week 3–6',
    timeframe: '4 weeks',
    phase: 'Integrate + Secure',
    description:
      'API connections, cloud setup, security hardening running in parallel for efficiency.',
    deliverables: ['API Integration', 'Cloud Migration', 'Security Audit'],
  },
  {
    weeks: 'Week 7–10',
    timeframe: '4 weeks',
    phase: 'Automate',
    description: 'AI agent deployment, workflow testing, team training with ongoing optimization.',
    deliverables: ['AI Agents', 'Automations', 'Training'],
  },
  {
    weeks: 'Week 11+',
    timeframe: 'Ongoing',
    phase: 'Optimize',
    description: 'Ongoing support, refinement, and expansion based on your evolving needs.',
    deliverables: ['Support', 'Optimization', 'Expansion'],
  },
];

const whyChoose = [
  {
    icon: Clock,
    title: 'Fast',
    description: 'Weeks, not months. We use proven frameworks and pre-built components.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparent',
    description: 'Fixed milestones, clear deliverables, no scope creep.',
  },
  {
    icon: DollarSign,
    title: 'Flexible',
    description: 'Pay per package or bundle for savings. Cancel anytime after current phase.',
  },
  {
    icon: ArrowRight,
    title: 'Local',
    description: 'UAE-based team, PDPL expertise, GCC market knowledge.',
  },
];
