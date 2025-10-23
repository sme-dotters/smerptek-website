import { Metadata } from 'next';
import Link from 'next/link';
import { Lightbulb, Shield, MapPin, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About SMERP TEK | Our Mission, Team, and Values',
  description:
    'Learn about SMERP TEK\'s mission to modernize operations for startups and SMEs, meet our team, and explore career opportunities.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom text-center">
            <h1 className="text-h1 lg:text-display-lg font-bold text-text-primary mb-6">
              Technology that clarifies, not complicates
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              SMERP TEK was founded on a simple belief: growth shouldn't feel chaotic. We partner with
              ambitious startups and SMEs to modernize operations—transforming scattered systems into
              intelligent workflows that deliver clarity, control, and measurable outcomes.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h1 font-bold text-text-primary mb-6">Our mission</h2>
              <p className="text-body-lg text-text-secondary">
                To reduce the mental load of running a business by building technology that integrates,
                automates, and clarifies—so teams can focus on what matters: serving customers and
                growing sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-bg-secondary">
          <div className="container-custom">
            <h2 className="text-h1 font-bold text-text-primary text-center mb-12">Our values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-h3">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-h1 font-bold text-text-primary mb-6">Meet the team</h2>
              <p className="text-body-lg text-text-secondary">
                SMERP TEK is a team of engineers, designers, and operators based in Dubai. We've built
                and scaled our own startups, so we know the friction points you face—because we've lived
                them.
              </p>
            </div>

            <div className="bg-gradient-hero text-text-inverse rounded-2xl p-12 text-center max-w-4xl mx-auto">
              <p className="text-xl font-semibold mb-4">
                "We believe complexity is a choice. Every product, every interface, every line of code
                is designed to simplify—not impress with unnecessary features."
              </p>
              <p className="text-text-inverse/80">— The SMERP TEK Team</p>
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="py-20 bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h1 font-bold text-text-primary mb-6">Join us</h2>
              <p className="text-body-lg text-text-secondary mb-8">
                We're building the operating system for ambitious SMEs. If you thrive in fast-paced
                environments, care deeply about craft, and want to make a real impact, we'd love to hear
                from you.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {openRoles.map((role, index) => (
                  <div key={index} className="bg-bg-surface rounded-lg p-6 text-left">
                    <h3 className="font-bold text-text-primary mb-1">{role.title}</h3>
                    <p className="text-sm text-text-secondary">{role.location}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <p className="text-sm text-text-secondary mt-6">
                Email for inquiries:{' '}
                <a href="mailto:careers@smerptek.com" className="text-primary hover:underline">
                  careers@smerptek.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="container-custom text-center">
            <h2 className="text-h1 font-bold text-text-primary mb-6">Let's build something together</h2>
            <Link href="/contact">
              <Button size="lg">
                Get in Touch
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
