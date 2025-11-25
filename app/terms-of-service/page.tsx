import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Terms of Service | ReconnectGenerations",
  description: "Terms of Service for ReconnectGenerations memory preservation service",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="ReconnectGenerations" className="h-8 w-8" />
            <span className="font-serif text-xl">ReconnectGenerations</span>
          </Link>
          <Link href="/">
            <Button variant="ghost">Back to Home</Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            These Terms of Service explain how you can use ReconnectGenerations. By creating an account, buying a
            package, or using the service, you agree to these terms.
          </p>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">1. What ReconnectGenerations Provides</h2>
            <p className="leading-relaxed mb-4">
              ReconnectGenerations is a digital service that helps you record, store, and revisit family stories.
            </p>
            <p className="leading-relaxed mb-4">Your account gives you access to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Guided audio recording tools</li>
              <li>A private family memory space</li>
              <li>AI-generated personas based on your submitted data</li>
              <li>Storage and playback of recordings, photos, and text</li>
              <li>Lifetime access to the plan you purchased</li>
            </ul>
            <p className="leading-relaxed">
              The service is not therapy, legal advice, medical support, or professional counselling.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">2. Who Can Use the Service</h2>
            <p className="leading-relaxed mb-4">To use ReconnectGenerations you must:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Be at least 18 years old</li>
              <li>Have permission from the person you're recording</li>
              <li>Provide accurate information during signup</li>
            </ul>
            <p className="leading-relaxed">
              If you create an account for an older family member, you are fully responsible for their consent and
              lawful use.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">3. Your Data and Privacy</h2>
            <p className="leading-relaxed mb-4">Your recordings, uploads, and family data belong to you.</p>
            <p className="leading-relaxed mb-4">
              We store all data on secure servers located in the European Union. We follow GDPR rules for processing,
              access, and deletion of personal data.
            </p>
            <p className="leading-relaxed mb-4">You can:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Download your data</li>
              <li>Request deletion at any time</li>
              <li>Manage access for family members</li>
              <li>Withdraw consent for processing</li>
            </ul>
            <p className="leading-relaxed mb-4">We never sell or share your data with advertisers.</p>
            <p className="leading-relaxed">For full details, read our Privacy Policy.</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">4. Payments and Refunds</h2>
            <p className="leading-relaxed mb-4">
              ReconnectGenerations uses a one-time payment model with lifetime access.
            </p>
            <h3 className="font-serif text-xl mb-3">Payments</h3>
            <p className="leading-relaxed mb-4">
              Payments are handled through Stripe. When you buy a plan, you agree to Stripe's terms.
            </p>
            <h3 className="font-serif text-xl mb-3">Refunds</h3>
            <p className="leading-relaxed mb-4">
              You have a 30-day money-back guarantee from the moment of purchase. After 30 days, payments are
              non-refundable.
            </p>
            <h3 className="font-serif text-xl mb-3">Price Changes</h3>
            <p className="leading-relaxed mb-4">
              We may update pricing for future customers. Your one-time purchase will not change.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">5. Recording Content and Consent</h2>
            <p className="leading-relaxed mb-4">By uploading content or recording someone, you confirm:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You have permission to record them</li>
              <li>The person understands they are being recorded</li>
              <li>The content does not violate the rights of others</li>
            </ul>
            <p className="leading-relaxed mb-4">
              You are fully responsible for obtaining consent from family members, especially older adults who may need
              help understanding the process.
            </p>
            <p className="leading-relaxed">We reserve the right to remove content that is illegal or abusive.</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">6. AI Persona Features</h2>
            <p className="leading-relaxed mb-4">Some plans include an AI persona created from your submitted data.</p>
            <p className="leading-relaxed mb-4">You understand that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The persona is generated by algorithms</li>
              <li>It may contain inaccuracies or imperfect interpretations</li>
              <li>It should not be treated as a replacement for the real person</li>
              <li>The persona is designed only for memory preservation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">7. Acceptable Use</h2>
            <p className="leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Share harmful, violent, or illegal content</li>
              <li>Attempt to hack, damage, or overload the system</li>
              <li>Misuse another person's private data</li>
              <li>Use the service for commercial recording or research without permission</li>
            </ul>
            <p className="leading-relaxed">We may suspend accounts that break these rules.</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">8. Family Access and Sharing</h2>
            <p className="leading-relaxed mb-4">You can invite family members to join your memory space.</p>
            <p className="leading-relaxed mb-4">You decide who can:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Upload recordings</li>
              <li>View content</li>
              <li>Edit or delete memories</li>
              <li>Manage AI persona settings</li>
            </ul>
            <p className="leading-relaxed">You are responsible for managing these permissions.</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">9. Service Availability</h2>
            <p className="leading-relaxed mb-4">
              We aim to provide stable, long-term service with lifetime access. But we may update, improve, or change
              features over time.
            </p>
            <p className="leading-relaxed mb-4">We are not responsible for outages caused by:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Internet failures</li>
              <li>Third-party services (hosting, payment, email providers)</li>
              <li>Maintenance or security updates</li>
            </ul>
            <p className="leading-relaxed">We will always try to communicate changes clearly.</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">10. Intellectual Property</h2>
            <p className="leading-relaxed mb-4">
              The ReconnectGenerations platform, branding, software, and design belong to us.
            </p>
            <p className="leading-relaxed mb-4">Your recordings and uploads belong to you.</p>
            <p className="leading-relaxed mb-4">
              You grant us a limited license to store, process, and display your content so the service can function.
            </p>
            <p className="leading-relaxed">
              You don't grant us permission to use your content for marketing unless you give explicit written consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">11. Termination</h2>
            <p className="leading-relaxed mb-4">
              You can delete your account at any time. Deleting your account removes all your data permanently unless
              you ask us to export it.
            </p>
            <p className="leading-relaxed mb-4">We may terminate accounts that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Break these terms</li>
              <li>Abuse the service</li>
              <li>Violate privacy or intellectual property laws</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">12. Liability</h2>
            <p className="leading-relaxed mb-4">ReconnectGenerations is provided "as is."</p>
            <p className="leading-relaxed mb-4">We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Loss of data caused by your own actions</li>
              <li>Incorrect or incomplete recordings</li>
              <li>Misuse of data by family members you invited</li>
              <li>Emotional reactions to hearing past memories</li>
              <li>Decisions made based on AI persona outputs</li>
            </ul>
            <p className="leading-relaxed">Our total liability is limited to the amount you paid for your plan.</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">13. Changes to These Terms</h2>
            <p className="leading-relaxed mb-4">We may update these Terms over time.</p>
            <p className="leading-relaxed mb-4">
              If changes affect your rights, we will notify you by email or inside your dashboard. Your continued use of
              the service means you accept the updated terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">14. Contact Us</h2>
            <p className="leading-relaxed mb-4">If you have questions about these Terms, contact:</p>
            <p className="leading-relaxed">
              <strong>ReconnectGenerations Support</strong>
              <br />
              support@reconnectgenerations.eu
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/">
            <Button size="lg">Return to Home</Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 ReconnectGenerations. Made with care in Europe.</p>
        </div>
      </footer>
    </div>
  )
}
