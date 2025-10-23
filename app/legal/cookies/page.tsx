import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | SMERP TEK',
  description: 'Learn how SMERP TEK uses cookies and similar technologies to improve your experience on our website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Cookie Policy</h1>
        <p className="text-sm text-slate-600 mb-8">Last Updated: October 23, 2025</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Introduction</h2>
            <p>
              This Cookie Policy explains how SMERP TEK (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies
              when you visit our website at smerptek.com (the &quot;Site&quot;). This policy is designed to comply with the UAE Personal
              Data Protection Law (PDPL) and international best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used
              to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. Types of Cookies We Use</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.1 Essential Cookies</h3>
                <p className="mb-2">
                  These cookies are necessary for the website to function and cannot be switched off in our systems.
                  They are usually only set in response to actions made by you which amount to a request for services.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Authentication cookies (for admin access)</li>
                  <li>Security cookies</li>
                  <li>Session management cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.2 Performance Cookies</h3>
                <p className="mb-2">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the
                  performance of our site.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Analytics cookies (privacy-respecting, no personal data)</li>
                  <li>Page load performance monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.3 Functional Cookies</h3>
                <p className="mb-2">
                  These cookies enable the website to provide enhanced functionality and personalization.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Language preference (English/Arabic)</li>
                  <li>Currency preference</li>
                  <li>User interface preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. Cookie Duration</h2>
            <div className="space-y-2">
              <p><strong>Session Cookies:</strong> Deleted when you close your browser</p>
              <p><strong>Persistent Cookies:</strong> Remain on your device for a set period (maximum 12 months)</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. Third-Party Cookies</h2>
            <p>
              We do not use third-party advertising cookies. Any third-party services we use (such as analytics)
              are configured to respect user privacy and comply with PDPL requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">6. Your Cookie Choices</h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights
              by setting your preferences in the cookie consent banner that appears when you first visit our site.
            </p>
            <p className="mb-4">
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to
              reject cookies, you may still use our website, though your access to some functionality may be restricted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">7. How to Manage Cookies</h2>
            <div className="space-y-2">
              <p><strong>Browser Settings:</strong> Most browsers allow you to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>See what cookies you have and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from particular sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">8. Data Protection</h2>
            <p>
              All data collected through cookies is processed in accordance with our Privacy Policy and the UAE
              Personal Data Protection Law (PDPL). We implement appropriate technical and organizational measures
              to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">9. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with
              an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">10. Contact Us</h2>
            <p className="mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <p><strong>SMERP TEK</strong></p>
              <p>Email: privacy@smerptek.com</p>
              <p>Website: smerptek.com/contact</p>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              This Cookie Policy is compliant with the UAE Personal Data Protection Law (PDPL) and follows
              international best practices for cookie consent and transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
