import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/main-20logo.png"
              alt="ReconnectGenerations"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-serif text-xl tracking-tight">ReconnectGenerations</span>
          </Link>
          <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Back to home
          </Link>
        </div>
      </nav>

      {/* Contact Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">Contact Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            If you have questions about your plan, the recording process, data privacy, or anything else, you can reach
            us any time. We'll get back to you as soon as possible.
          </p>
        </div>

        {/* Email Section */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-4 text-center">Email</h2>
          <a
            href="mailto:support@reconnectgenerations.eu"
            className="text-xl md:text-2xl text-primary hover:underline block text-center font-medium"
          >
            support@reconnectgenerations.eu
          </a>
        </div>

        {/* Common Reasons */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-8">Common reasons people contact us</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Help setting up their family memory space",
              "Questions about recording or AI personas",
              "Payment or invoice questions",
              "Data export or deletion requests",
              "Upgrading from one plan to another",
              "General feedback",
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-muted-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-accent/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">Support hours</h2>
          <p className="text-lg text-muted-foreground mb-2">We respond Monday–Friday.</p>
          <p className="text-lg text-muted-foreground mb-6">Most messages get a reply within 24 hours.</p>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            If something feels unclear or you need help with any part of the product, just write to us. We're here to
            make the experience simple for you and your family.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-serif text-xl mb-4">ReconnectGenerations</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Preserving family stories for future generations
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm">Company</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/about" className="block hover:text-foreground transition-colors">
                  About us
                </Link>
                <Link href="/contact" className="block hover:text-foreground transition-colors">
                  Contact
                </Link>
                <Link href="/privacy-policy" className="block hover:text-foreground transition-colors">
                  Privacy policy
                </Link>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm">Support</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/#faq" className="block hover:text-foreground transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="block hover:text-foreground transition-colors">
                  Help center
                </Link>
                <Link href="/terms-of-service" className="block hover:text-foreground transition-colors">
                  Terms of service
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 ReconnectGenerations. Made with care in Europe.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
