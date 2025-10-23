import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Processing Addendum | SMERP TEK',
  description: 'Data Processing Addendum for SMERP TEK business customers, ensuring PDPL compliance and data protection.',
};

export default function DPAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Data Processing Addendum</h1>
        <p className="text-sm text-slate-600 mb-8">Last Updated: October 23, 2025</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Introduction</h2>
            <p>
              This Data Processing Addendum (&quot;DPA&quot;) forms part of the agreement between SMERP TEK (&quot;Processor&quot;)
              and the business customer (&quot;Controller&quot;) for the provision of ERP and business automation services.
              This DPA ensures compliance with the UAE Personal Data Protection Law (PDPL) and establishes the terms
              under which SMERP TEK processes personal data on behalf of the Controller.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">2. Definitions</h2>
            <dl className="space-y-3">
              <div>
                <dt className="font-semibold">Personal Data:</dt>
                <dd className="ml-4">Any information relating to an identified or identifiable natural person.</dd>
              </div>
              <div>
                <dt className="font-semibold">Processing:</dt>
                <dd className="ml-4">Any operation performed on personal data, including collection, storage, use, disclosure, or deletion.</dd>
              </div>
              <div>
                <dt className="font-semibold">Controller:</dt>
                <dd className="ml-4">The business customer that determines the purposes and means of processing personal data.</dd>
              </div>
              <div>
                <dt className="font-semibold">Processor:</dt>
                <dd className="ml-4">SMERP TEK, which processes personal data on behalf of the Controller.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. Scope of Processing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.1 Nature and Purpose</h3>
                <p>
                  SMERP TEK processes personal data solely for the purpose of providing ERP, workforce management,
                  analytics, and automation services as specified in the service agreement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.2 Types of Personal Data</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Employee data (names, contact information, employment records)</li>
                  <li>Student data (for EDU product users)</li>
                  <li>Business contact information</li>
                  <li>Operational and analytics data</li>
                  <li>System usage logs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3.3 Data Subjects</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Controller&apos;s employees</li>
                  <li>Controller&apos;s customers</li>
                  <li>Students (where applicable)</li>
                  <li>Business contacts</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. Processor Obligations</h2>
            <div className="space-y-3">
              <p><strong>4.1</strong> Process personal data only on documented instructions from the Controller.</p>
              <p><strong>4.2</strong> Ensure that persons authorized to process personal data have committed to confidentiality.</p>
              <p><strong>4.3</strong> Implement appropriate technical and organizational measures to ensure data security.</p>
              <p><strong>4.4</strong> Assist the Controller in responding to data subject requests.</p>
              <p><strong>4.5</strong> Notify the Controller of any personal data breach within 72 hours of discovery.</p>
              <p><strong>4.6</strong> Delete or return all personal data upon termination of services.</p>
              <p><strong>4.7</strong> Make available all information necessary to demonstrate compliance.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. Security Measures</h2>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">5.1 Technical Measures</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Encryption of data in transit (TLS 1.3)</li>
                <li>Encryption of data at rest (AES-256)</li>
                <li>Multi-factor authentication for system access</li>
                <li>Regular security updates and patching</li>
                <li>Intrusion detection and prevention systems</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-slate-800 mt-4">5.2 Organizational Measures</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access controls based on role and need-to-know</li>
                <li>Staff training on data protection</li>
                <li>Incident response procedures</li>
                <li>Regular security audits</li>
                <li>Data protection impact assessments</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">6. Sub-Processing</h2>
            <p className="mb-4">
              The Controller authorizes SMERP TEK to engage sub-processors for specific processing activities.
              Current sub-processors include:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Cloud hosting providers (UAE-based data centers)</li>
              <li>Email service providers</li>
              <li>Analytics services (privacy-respecting only)</li>
            </ul>
            <p>
              SMERP TEK will notify the Controller of any intended changes concerning the addition or replacement
              of sub-processors, giving the Controller the opportunity to object.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">7. Data Subject Rights</h2>
            <p className="mb-4">
              SMERP TEK will assist the Controller in fulfilling data subject requests, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">8. Data Breach Notification</h2>
            <p>
              In the event of a personal data breach, SMERP TEK will:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              <li>Notify the Controller within 72 hours of becoming aware of the breach</li>
              <li>Provide details of the nature of the breach, categories and approximate number of affected data subjects</li>
              <li>Describe the likely consequences of the breach</li>
              <li>Outline measures taken or proposed to address the breach</li>
              <li>Provide contact information for further inquiries</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">9. Data Location and Transfers</h2>
            <p className="mb-4">
              <strong>9.1 Data Residency:</strong> All personal data is stored in UAE-based data centers, ensuring
              compliance with PDPL requirements for data localization where applicable.
            </p>
            <p>
              <strong>9.2 International Transfers:</strong> Any transfer of personal data outside the UAE will only
              occur with the Controller&apos;s prior written consent and with appropriate safeguards in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">10. Data Retention and Deletion</h2>
            <p className="mb-4">
              <strong>10.1 Retention:</strong> Personal data will be retained only for as long as necessary to provide
              the services or as required by law.
            </p>
            <p>
              <strong>10.2 Deletion:</strong> Upon termination of services, SMERP TEK will:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Delete all personal data within 30 days, or</li>
              <li>Return all personal data to the Controller in a commonly used format, or</li>
              <li>Retain data only as required by applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">11. Audit Rights</h2>
            <p>
              The Controller has the right to audit SMERP TEK&apos;s compliance with this DPA, subject to reasonable
              notice and confidentiality obligations. SMERP TEK will provide all necessary cooperation and access
              to relevant information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">12. Liability</h2>
            <p>
              Each party&apos;s liability under this DPA is subject to the limitations and exclusions set out in the
              main service agreement. SMERP TEK shall be liable only for damages caused by failure to comply with
              its obligations under this DPA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">13. Term and Termination</h2>
            <p>
              This DPA remains in effect for the duration of the service agreement and will automatically terminate
              upon termination of the service agreement, subject to the data retention and deletion obligations outlined above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">14. Governing Law</h2>
            <p>
              This DPA is governed by the laws of the United Arab Emirates and the UAE Personal Data Protection Law (PDPL).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">15. Contact Information</h2>
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <p className="mb-2"><strong>Data Protection Contact:</strong></p>
              <p>SMERP TEK</p>
              <p>Email: privacy@smerptek.com</p>
              <p>Website: smerptek.com/contact</p>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              This Data Processing Addendum is compliant with the UAE Personal Data Protection Law (PDPL) and
              follows international best practices for business-to-business data processing agreements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
