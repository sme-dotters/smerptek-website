import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | SMERP TEK',
  description:
    'How SMERP TEK collects, uses, and protects your personal data in compliance with UAE PDPL and international standards.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-h1 font-bold text-text-primary mb-4">Privacy Policy</h1>
            <p className="text-text-secondary">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">Introduction</h2>
              <p className="text-text-secondary">
                SMERP TEK ("we," "our," "us") respects your privacy and is committed to protecting your
                personal data. This Privacy Policy explains how we collect, use, share, and safeguard
                information in compliance with the UAE Personal Data Protection Law (PDPL) and applicable
                international standards.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">1. Information We Collect</h2>
              <h3 className="text-h3 font-semibold text-text-primary mb-2 mt-4">
                1.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Contact details (name, email, phone, company name)</li>
                <li>Account credentials (email, password, profile info)</li>
                <li>Payment information (processed by third-party payment providers)</li>
                <li>Content you submit (forms, messages, uploads)</li>
                <li>Preferences and settings</li>
              </ul>

              <h3 className="text-h3 font-semibold text-text-primary mb-2 mt-4">
                1.2 Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Device and browser information (IP address, user agent, OS)</li>
                <li>Usage data (pages viewed, clicks, time spent, features used)</li>
                <li>Cookies and tracking technologies (see Cookie Policy)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-text-secondary mb-4">
                We process personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Provide, operate, and maintain our products and services</li>
                <li>Process transactions and send confirmations</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send service updates, security alerts, and administrative messages</li>
                <li>Deliver newsletters and marketing content (with your consent)</li>
                <li>Analyze usage patterns to improve products and user experience</li>
                <li>Comply with legal obligations and enforce our Terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">3. Data Sharing & Disclosure</h2>
              <p className="text-text-secondary mb-4">
                We do not sell your personal data. We share information only in these circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who assist with hosting,
                  analytics, payment processing, customer support, and email delivery
                </li>
                <li>
                  <strong>Business Transfers:</strong> If SMERP TEK is acquired or merged, your data may
                  be transferred to the new entity
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose data to comply with legal
                  obligations, court orders, or government requests
                </li>
                <li>
                  <strong>With Your Consent:</strong> We share data with third parties when you
                  explicitly authorize it
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">4. Your Rights (PDPL)</h2>
              <p className="text-text-secondary mb-4">Under UAE PDPL, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li><strong>Access:</strong> Request a copy of personal data we hold about you</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal retention requirements)</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Opt out of marketing communications</li>
              </ul>
              <p className="text-text-secondary mt-4">
                To exercise your rights, contact: <a href="mailto:privacy@smerptek.com" className="text-primary hover:underline">privacy@smerptek.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">5. Data Security</h2>
              <p className="text-text-secondary">
                We implement industry-standard security measures to protect your data including AES-256
                encryption at rest, TLS 1.3 in transit, role-based access controls, multi-factor
                authentication, real-time threat detection, and daily encrypted backups.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-bold text-text-primary mb-4">6. Contact Us</h2>
              <p className="text-text-secondary">
                For questions or concerns about this Privacy Policy or your data:<br />
                <strong>Email:</strong> <a href="mailto:privacy@smerptek.com" className="text-primary hover:underline">privacy@smerptek.com</a><br />
                <strong>Phone:</strong> +971 4 XXX XXXX<br />
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
