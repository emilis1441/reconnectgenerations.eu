import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us - ReconnectGenerations",
  description: "Learn about our mission to help families preserve their stories and memories for future generations.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/images/main-20logo.png"
              alt="ReconnectGenerations"
              width={32}
              height={32}
              className="object-contain sm:w-10 sm:h-10"
            />
            <span className="font-serif text-base sm:text-xl tracking-tight text-foreground">ReconnectGenerations</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6 text-balance">About Us</h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            ReconnectGenerations helps you preserve your parents' and grandparents' stories while you still can. The
            focus is simple: keep their voice, their memories, and their life experience alive for the people who will
            come after them.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl mb-8 text-center">Why we built this</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="leading-relaxed">
              We built this product because every family has the same problem. Memories fade. Stories get lost. Someone
              passes away and suddenly you realise you never recorded the things that mattered most. Their laugh. Their
              childhood stories. Their advice. Their way of speaking. Their personality.
            </p>
            <p className="leading-relaxed font-semibold text-foreground text-center text-xl">
              Most people regret not doing it sooner.
            </p>
            <p className="leading-relaxed">ReconnectGenerations gives you a way to fix that.</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl mb-8 text-center">What we do</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
            We give families a private space where they can record, store, and revisit the stories of the people who
            shaped them.
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12">
            <h3 className="font-serif text-2xl mb-6">You get:</h3>
            <ul className="space-y-4">
              {[
                "Guided conversations for easy recording",
                "A secure family archive",
                "An AI persona built from your recordings",
                "Lifetime access, no subscription",
                "EU-based storage and GDPR protection",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-foreground font-medium italic">
              Everything is built around one idea: your family's history should stay with your family.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl mb-8 text-center">Why we started this</h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed text-lg">
              Older generations carry decades of experience. They've lived through challenges, changes, and moments that
              shaped who you are today. But most of these stories disappear because nobody captures them in time.
            </p>
            <p className="leading-relaxed text-lg">We wanted to create a product that makes it effortless.</p>
            <div className="space-y-3 text-lg pl-6 border-l-2 border-primary/20">
              <p>Something that even an 80-year-old could use.</p>
              <p>Something that gives you peace of mind.</p>
              <p>Something that helps you act now, instead of wishing you did later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-8">Our mission</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Help families reconnect through stories.</p>
            <p>Help adults preserve the voices of the people they love.</p>
            <p>Give future generations a way to understand where they came from.</p>
          </div>
          <p className="mt-12 text-xl font-serif text-foreground italic">
            This is not about technology.
            <br />
            It's about memory, identity, and love.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl mb-8 text-center">How we work</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
            We keep the product simple, private, and human:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {["You own your data", "No ads", "No tracking", "No hidden fees", "One-time payment, lifetime use"].map(
              (principle, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="font-medium text-foreground">{principle}</p>
                </div>
              ),
            )}
          </div>

          <p className="mt-8 text-center text-muted-foreground leading-relaxed">
            We store everything securely on EU servers and follow the strictest data protection standards.
          </p>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-8">What we believe</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>Stories are part of your family's identity.</p>
            <p>Voices carry meaning that text alone can't replace.</p>
            <p>And the moments you record today will matter even more tomorrow.</p>
          </div>
          <p className="mt-12 text-xl font-serif text-foreground">
            ReconnectGenerations exists to help you keep those memories alive.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-balance">
            Ready to preserve your family's stories?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Start capturing the memories that matter most.
          </p>
          <Link href="/#pricing">
            <Button size="lg" className="text-base px-8 py-6">
              View Pricing
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6">
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
                <a href="/#" className="block hover:text-foreground transition-colors">
                  Contact
                </a>
                <Link href="/privacy-policy" className="block hover:text-foreground transition-colors">
                  Privacy policy
                </Link>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm">Support</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="/#faq" className="block hover:text-foreground transition-colors">
                  FAQ
                </a>
                <a href="/#" className="block hover:text-foreground transition-colors">
                  Help center
                </a>
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
