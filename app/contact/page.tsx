import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | SMERP TEK',
  description:
    'Get in touch with SMERP TEK. Book a demo, ask questions, or explore partnership opportunities. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-h1 font-bold text-text-primary mb-4">Let's talk about your operations</h1>
            <p className="text-body-lg text-text-secondary">
              Book a 30-minute demo, ask a question, or explore how SMERP TEK can help modernize
              your workflows. We respond within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Name <span className="text-error">*</span>
                        </Label>
                        <Input id="name" placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company name</Label>
                        <Input id="company" placeholder="Your company" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Work email <span className="text-error">*</span>
                        </Label>
                        <Input id="email" type="email" placeholder="you@company.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input id="phone" type="tel" placeholder="+971 XX XXX XXXX" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">
                        I'm interested in... <span className="text-error">*</span>
                      </Label>
                      <select
                        id="interest"
                        className="flex h-10 w-full rounded-md border border-border-default bg-bg-surface px-3 py-2 text-sm"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="demo">Booking a product demo</option>
                        <option value="consultancy">Discussing consultancy services</option>
                        <option value="pricing">Pricing and plans</option>
                        <option value="partnership">Partnership opportunities</option>
                        <option value="media">Media inquiries</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-error">*</span>
                      </Label>
                      <textarea
                        id="message"
                        rows={5}
                        className="flex w-full rounded-md border border-border-default bg-bg-surface px-3 py-2 text-sm"
                        placeholder="Tell us about your needs, challenges, or questions..."
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="consent" className="mt-1" required />
                      <Label htmlFor="consent" className="text-sm text-text-secondary">
                        I agree to SMERP TEK's Privacy Policy and consent to being contacted about
                        my inquiry. You may also send me occasional product updates and resources
                        (opt-out anytime).
                      </Label>
                    </div>

                    <Button type="submit" size="lg" fullWidth>
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-h4">Other ways to reach us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-text-primary">Email</p>
                      <a
                        href="mailto:hello@smerptek.com"
                        className="text-sm text-primary hover:underline"
                      >
                        hello@smerptek.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-text-primary">Phone</p>
                      <a href="tel:+97144XXXXXX" className="text-sm text-primary hover:underline">
                        +971 4 XXX XXXX
                      </a>
                      <p className="text-xs text-text-tertiary">Sun–Thu, 9am–6pm GST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-text-primary">Address</p>
                      <p className="text-sm text-text-secondary">Dubai, UAE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-h4">Quick links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="/pricing" className="block text-sm text-primary hover:underline">
                    → View pricing
                  </a>
                  <a href="/products" className="block text-sm text-primary hover:underline">
                    → Explore products
                  </a>
                  <a href="/solutions" className="block text-sm text-primary hover:underline">
                    → Learn about services
                  </a>
                  <a href="/resources/blog" className="block text-sm text-primary hover:underline">
                    → Read our blog
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
