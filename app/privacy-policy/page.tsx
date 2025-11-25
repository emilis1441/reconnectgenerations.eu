import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <header className="border-b border-[#E5DDD1] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="ReconnectGenerations" className="h-10 w-10" />
            <span className="font-serif text-xl text-[#6B5545]">ReconnectGenerations</span>
          </Link>
          <Link href="/" className="text-[#6B5545] hover:text-[#B67B5C] transition-colors text-sm">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-[#6B5545] mb-4">Privacy Policy</h1>
        <p className="text-[#8B7355] mb-12">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-[#6B5545] leading-relaxed mb-8">
            This Privacy Policy explains how ReconnectGenerations collects, uses, stores, and protects your personal
            data. We follow the General Data Protection Regulation (GDPR) and use EU-based servers.
          </p>
          <p className="text-[#6B5545] leading-relaxed mb-12">
            By using our service, you agree to how we handle data as described below.
          </p>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">1. Who We Are</h2>
            <p className="text-[#6B5545] leading-relaxed mb-4">
              ReconnectGenerations ("we", "us", "our") provides a digital platform for recording, storing, and
              preserving family memories.
            </p>
            <p className="text-[#6B5545] leading-relaxed mb-2">If you have questions about your data, contact:</p>
            <p className="text-[#6B5545] leading-relaxed">
              ReconnectGenerations Support
              <br />
              support@reconnectgenerations.eu
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">2. What Data We Collect</h2>
            <p className="text-[#6B5545] leading-relaxed mb-6">
              We collect only the data needed to provide the service.
            </p>

            <h3 className="font-serif text-xl text-[#6B5545] mb-3">Account Data</h3>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Password (encrypted)</li>
              <li>Billing information (processed by Stripe)</li>
            </ul>

            <h3 className="font-serif text-xl text-[#6B5545] mb-3">Memory Content</h3>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>Audio recordings</li>
              <li>Photos</li>
              <li>Text contributions</li>
              <li>Uploaded documents</li>
              <li>Metadata (timestamps, session info)</li>
            </ul>
            <p className="text-[#6B5545] leading-relaxed mb-6">All uploaded content belongs to you.</p>

            <h3 className="font-serif text-xl text-[#6B5545] mb-3">AI Persona Data</h3>
            <p className="text-[#6B5545] leading-relaxed mb-3">If you use an AI persona plan, we collect:</p>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>Your submitted recordings</li>
              <li>Story transcripts</li>
              <li>Text you enter describing the person</li>
              <li>Optional family context</li>
            </ul>
            <p className="text-[#6B5545] leading-relaxed mb-6">This data builds the AI persona.</p>

            <h3 className="font-serif text-xl text-[#6B5545] mb-3">Technical Data</h3>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>IP address</li>
              <li>Device type</li>
              <li>Basic analytics (pages visited, session duration)</li>
              <li>Cookies (functional only)</li>
            </ul>
            <p className="text-[#6B5545] leading-relaxed">We do not use advertising cookies.</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">3. How We Use Your Data</h2>
            <p className="text-[#6B5545] leading-relaxed mb-3">We use your data to:</p>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>Provide guided recording tools</li>
              <li>Generate and maintain your AI persona</li>
              <li>Store and display your memory archive</li>
              <li>Allow family members to access shared content</li>
              <li>Process payments</li>
              <li>Improve the service and fix bugs</li>
              <li>Communicate important updates</li>
            </ul>
            <p className="text-[#6B5545] leading-relaxed">
              We do not sell your data, share it with advertisers, or use it to profile you for marketing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-[#6B5545] leading-relaxed mb-3">We process your data based on:</p>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>
                <strong>Contract</strong> — to provide the service you purchased
              </li>
              <li>
                <strong>Consent</strong> — for recordings, uploads, and AI persona generation
              </li>
              <li>
                <strong>Legitimate Interest</strong> — security, fraud prevention
              </li>
              <li>
                <strong>Legal Obligation</strong> — accounting and tax records
              </li>
            </ul>
            <p className="text-[#6B5545] leading-relaxed">You may withdraw consent at any time.</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">5. How Long We Keep Data</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-lg text-[#6B5545] mb-2">Memory content (audio, photos, text)</h3>
                <p className="text-[#6B5545] leading-relaxed">
                  Stored indefinitely unless you delete it or ask us to delete it.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#6B5545] mb-2">Account and billing data</h3>
                <p className="text-[#6B5545] leading-relaxed">
                  Kept for as long as your account exists. Billing records follow EU accounting laws.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#6B5545] mb-2">AI persona data</h3>
                <p className="text-[#6B5545] leading-relaxed">Kept for as long as you keep the persona active.</p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#6B5545] mb-2">Deleted content</h3>
                <p className="text-[#6B5545] leading-relaxed">Fully removed from active systems within 30 days.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">6. Who Can Access Your Data</h2>
            <p className="text-[#6B5545] leading-relaxed mb-3">Access is limited to:</p>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>You</li>
              <li>Family members you invite</li>
              <li>Our technical team (strictly on a need-to-access basis)</li>
              <li>Third-party processors essential to the service</li>
            </ul>

            <h3 className="font-serif text-xl text-[#6B5545] mb-3">Third-party processors</h3>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>Stripe (payments)</li>
              <li>EU-based hosting providers (storage and infrastructure)</li>
              <li>Email delivery services</li>
            </ul>
            <p className="text-[#6B5545] leading-relaxed">All processors follow GDPR requirements.</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">7. Your Rights (GDPR)</h2>
            <p className="text-[#6B5545] leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>Access your data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and all content</li>
              <li>Export your recordings, photos, and transcripts</li>
              <li>Withdraw consent</li>
              <li>Limit processing</li>
              <li>Object to certain uses</li>
              <li>File a complaint with your local Data Protection Authority</li>
            </ul>
            <p className="text-[#6B5545] leading-relaxed">
              To use these rights, email: support@reconnectgenerations.eu
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">8. Security</h2>
            <p className="text-[#6B5545] leading-relaxed mb-3">We use:</p>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>Encrypted storage</li>
              <li>HTTPS for all connections</li>
              <li>EU-based servers</li>
              <li>Access controls and audit logs</li>
              <li>Regular security reviews</li>
            </ul>
            <p className="text-[#6B5545] leading-relaxed">
              No online service is perfect, but we work hard to protect your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">9. Children's Data</h2>
            <p className="text-[#6B5545] leading-relaxed mb-4">
              ReconnectGenerations is designed for adults. Users must be 18+.
            </p>
            <p className="text-[#6B5545] leading-relaxed">
              Recordings of minors may be stored only when a parent or legal guardian manages the account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">10. AI Persona Safety</h2>
            <p className="text-[#6B5545] leading-relaxed mb-4">
              The AI persona is built from your submitted data. It may produce inaccurate or imperfect responses.
            </p>
            <p className="text-[#6B5545] leading-relaxed mb-3">It must not be used:</p>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>For medical advice</li>
              <li>For legal decisions</li>
              <li>To impersonate someone for harmful use</li>
            </ul>
            <p className="text-[#6B5545] leading-relaxed">
              You are responsible for sharing the persona only with trusted family members.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">11. International Transfers</h2>
            <p className="text-[#6B5545] leading-relaxed">
              Your data is stored in the European Union. We do not transfer data outside the EU unless required for
              technical redundancy, and only with GDPR-compliant safeguards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">12. Cookies</h2>
            <p className="text-[#6B5545] leading-relaxed mb-3">We use minimal cookies needed for functionality:</p>
            <ul className="list-disc pl-6 mb-6 text-[#6B5545] space-y-2">
              <li>Login session cookies</li>
              <li>Language preference</li>
              <li>Basic analytics</li>
            </ul>
            <p className="text-[#6B5545] leading-relaxed">We do not use tracking or advertising cookies.</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">13. Changes to This Policy</h2>
            <p className="text-[#6B5545] leading-relaxed">
              If we update this Privacy Policy, we'll notify you through email or your dashboard. Your continued use of
              the service means you accept the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#6B5545] mb-4">14. Contact</h2>
            <p className="text-[#6B5545] leading-relaxed mb-2">If you have questions or requests:</p>
            <p className="text-[#6B5545] leading-relaxed">
              ReconnectGenerations Support
              <br />
              support@reconnectgenerations.eu
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5DDD1] bg-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-[#8B7355]">© 2025 ReconnectGenerations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
