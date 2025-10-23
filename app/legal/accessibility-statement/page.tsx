import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | SMERP TEK',
  description: 'SMERP TEK\'s commitment to web accessibility and WCAG 2.1 AA compliance.',
};

export default function AccessibilityStatementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Accessibility Statement</h1>
        <p className="text-sm text-slate-600 mb-8">Last Updated: October 23, 2025</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Our Commitment</h2>
            <p>
              SMERP TEK is committed to ensuring digital accessibility for people with disabilities. We are
              continually improving the user experience for everyone and applying the relevant accessibility
              standards to ensure we provide equal access to all of our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">2. Conformance Status</h2>
            <p className="mb-4">
              The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers
              to improve accessibility for people with disabilities. It defines three levels of conformance:
              Level A, Level AA, and Level AAA.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-semibold text-blue-900">
                SMERP TEK is working toward WCAG 2.1 Level AA conformance.
              </p>
              <p className="text-sm mt-2 text-blue-800">
                This website is currently being evaluated and remediated to meet these standards.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. Accessibility Features</h2>
            <p className="mb-3">Our website includes the following accessibility features:</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.1 Keyboard Navigation</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All interactive elements are keyboard accessible</li>
                  <li>Logical tab order throughout the site</li>
                  <li>Visible focus indicators on all interactive elements</li>
                  <li>Skip navigation links for screen reader users</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.2 Visual Design</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sufficient color contrast ratios (minimum 4.5:1 for normal text)</li>
                  <li>Text can be resized up to 200% without loss of functionality</li>
                  <li>Content is readable and functional in portrait and landscape orientations</li>
                  <li>No content relies solely on color to convey information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.3 Screen Reader Support</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Semantic HTML5 elements used throughout</li>
                  <li>ARIA labels and landmarks where appropriate</li>
                  <li>Alternative text for all meaningful images</li>
                  <li>Clear heading hierarchy (H1-H6)</li>
                  <li>Descriptive link text (no &quot;click here&quot; links)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.4 Forms and Interactions</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All form fields have associated labels</li>
                  <li>Error messages are clear and descriptive</li>
                  <li>Required fields are clearly indicated</li>
                  <li>Form validation provides helpful feedback</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.5 Multilingual Support</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Language of page is properly declared (lang attribute)</li>
                  <li>Right-to-left (RTL) support for Arabic language</li>
                  <li>Language switcher accessible via keyboard and screen readers</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. Known Limitations</h2>
            <p className="mb-3">
              Despite our best efforts to ensure accessibility, there may be some limitations. Below are
              known issues we are working to address:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Animated backgrounds:</strong> Some decorative animations may cause discomfort for users
                with vestibular disorders. We are implementing a &quot;reduced motion&quot; option that respects
                the prefers-reduced-motion system setting.
              </li>
              <li>
                <strong>Third-party content:</strong> Some embedded third-party content may not be fully accessible.
                We are working with our partners to ensure their content meets accessibility standards.
              </li>
              <li>
                <strong>PDF documents:</strong> Older PDF documents may not be fully accessible. We are in the
                process of remediating these documents.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. Ongoing Efforts</h2>
            <p className="mb-3">We are actively working on:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Conducting regular accessibility audits using automated and manual testing</li>
              <li>Training our development team on accessibility best practices</li>
              <li>Incorporating accessibility into our design and development process</li>
              <li>Testing with assistive technologies (screen readers, keyboard-only navigation)</li>
              <li>Gathering feedback from users with disabilities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">6. Compatible Technologies</h2>
            <p className="mb-3">Our website is designed to be compatible with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Keyboard navigation</li>
              <li>Voice recognition software</li>
              <li>Screen magnification software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">7. Technical Specifications</h2>
            <p className="mb-3">Accessibility of SMERP TEK relies on the following technologies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (with graceful degradation)</li>
              <li>WAI-ARIA (where appropriate)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">8. Assessment Approach</h2>
            <p className="mb-3">
              SMERP TEK assessed the accessibility of this website using the following methods:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Self-evaluation:</strong> Internal accessibility reviews</li>
              <li><strong>Automated testing:</strong> Using tools like axe DevTools and Lighthouse</li>
              <li><strong>Manual testing:</strong> Keyboard navigation and screen reader testing</li>
              <li><strong>User testing:</strong> Feedback from users with disabilities (ongoing)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">9. Feedback and Contact</h2>
            <p className="mb-4">
              We welcome your feedback on the accessibility of SMERP TEK. If you encounter any accessibility
              barriers on our website, please let us know:
            </p>

            <div className="bg-slate-50 p-6 rounded border border-slate-200 space-y-3">
              <div>
                <p className="font-semibold mb-1">Email:</p>
                <p>accessibility@smerptek.com</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Contact Form:</p>
                <p>smerptek.com/contact</p>
              </div>
              <div>
                <p className="font-semibold mb-1">What to Include:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Page URL where you experienced the issue</li>
                  <li>Description of the problem</li>
                  <li>Assistive technology you were using (if applicable)</li>
                  <li>Browser and operating system</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              We aim to respond to accessibility feedback within 5 business days and will work with you to
              provide the information or service you are seeking through an alternative communication method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">10. Formal Complaints</h2>
            <p className="mb-3">
              If you are not satisfied with our response to your accessibility concerns, you may:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact our senior management at management@smerptek.com</li>
              <li>File a complaint with the UAE Telecommunications and Digital Government Regulatory Authority</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">11. Third-Party Content</h2>
            <p>
              Some content on our website is provided by third parties. We cannot always control the accessibility
              of third-party content, but we work with our partners to ensure content meets accessibility standards
              where possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">12. Updates to This Statement</h2>
            <p>
              This accessibility statement was created on October 23, 2025, and will be reviewed and updated
              regularly as we continue to improve accessibility and as standards evolve.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              This accessibility statement follows the W3C Accessibility Statement Generator recommendations
              and demonstrates our ongoing commitment to digital accessibility and inclusion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
