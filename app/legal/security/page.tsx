import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security | SMERP TEK',
  description: 'SMERP TEK security practices, vulnerability disclosure policy, and commitment to protecting your data.',
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Security</h1>
        <p className="text-sm text-slate-600 mb-8">Last Updated: October 23, 2025</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Our Commitment to Security</h2>
            <p>
              At SMERP TEK, security is fundamental to everything we do. We implement industry-leading security
              practices to protect your data and ensure the integrity, availability, and confidentiality of our
              services. This page outlines our security measures and provides information for security researchers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">2. Security Framework</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">2.1 Data Encryption</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>In Transit:</strong> All data transmitted to and from SMERP TEK is encrypted using TLS 1.3</li>
                  <li><strong>At Rest:</strong> All stored data is encrypted using AES-256 encryption</li>
                  <li><strong>Database:</strong> Database connections use encrypted channels</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">2.2 Access Controls</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Multi-factor authentication (MFA) required for all administrative access</li>
                  <li>Role-based access control (RBAC) with principle of least privilege</li>
                  <li>Regular access reviews and audit logging</li>
                  <li>Secure session management with automatic timeout</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">2.3 Infrastructure Security</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>UAE-based data centers with SOC 2 Type II compliance</li>
                  <li>Network segmentation and firewalls</li>
                  <li>Intrusion detection and prevention systems</li>
                  <li>DDoS protection and rate limiting</li>
                  <li>Regular security patches and updates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">2.4 Application Security</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Content Security Policy (CSP) headers</li>
                  <li>CSRF protection on all forms</li>
                  <li>Input validation and sanitization</li>
                  <li>SQL injection prevention</li>
                  <li>XSS protection</li>
                  <li>Security headers (HSTS, X-Frame-Options, etc.)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. Security Operations</h2>
            <div className="space-y-3">
              <p><strong>3.1 Monitoring:</strong> 24/7 security monitoring and alerting</p>
              <p><strong>3.2 Incident Response:</strong> Dedicated security incident response team</p>
              <p><strong>3.3 Vulnerability Management:</strong> Regular security scanning and penetration testing</p>
              <p><strong>3.4 Backups:</strong> Encrypted daily backups with 30-day retention</p>
              <p><strong>3.5 Disaster Recovery:</strong> Business continuity plan with RTO &lt; 4 hours</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. Compliance</h2>
            <p className="mb-3">SMERP TEK maintains compliance with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>UAE Personal Data Protection Law (PDPL)</li>
              <li>ISO 27001 security controls (implementation in progress)</li>
              <li>OWASP Top 10 security guidelines</li>
              <li>SOC 2 Type II (through infrastructure providers)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. Responsible Disclosure Policy</h2>
            <p className="mb-4">
              We welcome reports from security researchers who discover vulnerabilities in our systems.
              We are committed to working with the security community to verify, reproduce, and respond to
              legitimate security issues.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">How to Report a Vulnerability</h3>
              <p className="mb-3">If you believe you&apos;ve found a security vulnerability, please:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Email us at <strong>security@smerptek.com</strong> with details of the vulnerability</li>
                <li>Include steps to reproduce the issue</li>
                <li>Provide your contact information for follow-up</li>
                <li>Allow us reasonable time to investigate and address the issue before public disclosure</li>
              </ol>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">What We Ask From Researchers</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Make a good faith effort to avoid privacy violations, data destruction, and service interruption</li>
                <li>Do not access or modify data belonging to others</li>
                <li>Do not perform attacks that could harm the reliability or integrity of our services</li>
                <li>Provide us with a reasonable amount of time to fix the issue before public disclosure</li>
                <li>Do not exploit the vulnerability for personal gain</li>
              </ul>
            </div>

            <div className="space-y-3 mt-4">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">What We Promise</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your report within 72 hours</li>
                <li>Keep you informed of our progress</li>
                <li>Credit you for the discovery (unless you prefer to remain anonymous)</li>
                <li>Not pursue legal action against researchers who follow these guidelines</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">6. Scope</h2>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">In Scope</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>smerptek.com (main website)</li>
                <li>API endpoints at smerptek.com/api/*</li>
                <li>Web applications hosted on smerptek.com subdomains</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-slate-800 mt-4">Out of Scope</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Social engineering attacks</li>
                <li>Physical security testing</li>
                <li>Third-party services we use</li>
                <li>Denial of Service (DoS) attacks</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">7. Security Best Practices for Users</h2>
            <p className="mb-3">We recommend our users follow these security practices:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use strong, unique passwords for your SMERP TEK account</li>
              <li>Enable multi-factor authentication when available</li>
              <li>Keep your software and browsers up to date</li>
              <li>Be cautious of phishing emails claiming to be from SMERP TEK</li>
              <li>Report suspicious activity to security@smerptek.com</li>
              <li>Log out when using shared devices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">8. Security Certifications</h2>
            <p className="mb-3">Current and planned certifications:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Completed:</strong> OWASP secure development training</li>
              <li><strong>In Progress:</strong> ISO 27001 certification</li>
              <li><strong>Planned:</strong> Annual third-party penetration testing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">9. Incident History</h2>
            <p className="mb-3">
              We maintain transparency about security incidents. As of October 23, 2025:
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-900 font-semibold">No security incidents to report.</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              This page will be updated in the event of any security incidents affecting user data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">10. Contact Security Team</h2>
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <p className="mb-2"><strong>Security Team Contact:</strong></p>
              <p>Email: security@smerptek.com</p>
              <p>General Inquiries: smerptek.com/contact</p>
              <p className="mt-3 text-sm text-slate-600">
                For security vulnerabilities, please use security@smerptek.com. For privacy concerns,
                use privacy@smerptek.com.
              </p>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              This security page follows RFC 9116 (security.txt) principles and demonstrates our commitment
              to transparency and responsible security practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
