import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';

export const metadata: Metadata = {
  title: 'Terms of Service | SMERP TEK',
  description:
    'Terms governing the use of SMERP TEK products and services, including licensing, acceptable use, and liability.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-h1 font-bold text-text-primary mb-4">Terms of Service</h1>
            <p className="text-text-secondary">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-text-secondary">
                By accessing or using SMERP TEK's products and services ("Services"), you agree to be
                bound by these Terms of Service ("Terms"). If you do not agree, do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">2. License Grant</h2>
              <p className="text-text-secondary">
                SMERP TEK grants you a limited, non-exclusive, non-transferable license to access and use
                the Services for your internal business purposes, subject to your chosen plan and these
                Terms.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">3. Payment & Billing</h2>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>You agree to pay all fees associated with your chosen plan</li>
                <li>Monthly plans bill on the same day each month</li>
                <li>Annual plans bill upfront</li>
                <li>If payment fails, we may suspend your account after 15 days' notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">4. Acceptable Use</h2>
              <p className="text-text-secondary mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Violate laws or regulations</li>
                <li>Infringe intellectual property rights</li>
                <li>Upload malware or malicious code</li>
                <li>Harass, abuse, or harm others</li>
                <li>Overload or disrupt our infrastructure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">5. Data Ownership</h2>
              <p className="text-text-secondary">
                You retain ownership of all data you submit to the Services ("Customer Data"). We may
                access Customer Data to provide support, prevent abuse, or comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">6. Limitation of Liability</h2>
              <p className="text-text-secondary">
                To the maximum extent permitted by law, SMERP TEK is not liable for indirect, incidental,
                or consequential damages. Our total liability for any claim is limited to the amount you
                paid in the 12 months prior.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">7. Termination</h2>
              <p className="text-text-secondary">
                You can cancel anytime via account settings. We may suspend or terminate your account for
                breach of these Terms, non-payment, or legal requirements. You have 60 days
                post-termination to export your data.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">8. Contact</h2>
              <p className="text-text-secondary">
                For questions about these Terms:<br />
                <strong>Email:</strong> <a href="mailto:legal@smerptek.com" className="text-primary hover:underline">legal@smerptek.com</a><br />
                <strong>Address:</strong> Dubai, UAE
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
