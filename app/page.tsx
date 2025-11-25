"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Simple inline icon components
const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const Menu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const X = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/images/main-20logo.png"
              alt="ReconnectGenerations"
              width={32}
              height={32}
              className="object-contain sm:w-10 sm:h-10"
            />
            <span className="font-serif text-base sm:text-xl tracking-tight text-foreground">ReconnectGenerations</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#how" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-transparent"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              <Link
                href="#about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#how"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </Link>
              <Link
                href="#pricing"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button
                variant="outline"
                className="w-full rounded-full bg-transparent"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <Image
              src="/elderly-hands-holding-vintage-family-photograph-al.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background opacity-25" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 text-balance tracking-tight leading-[1.1]">
            Preserve the voices that matter most
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            Record, protect, and share your family's stories. Their wisdom, their laughter, their legacy—forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Preserving Memories
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 bg-transparent"
              onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })}
            >
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <p className="font-serif text-2xl sm:text-3xl md:text-5xl text-center leading-relaxed text-balance mb-8 sm:mb-12 md:mb-16">
            Every family has stories worth remembering. Moments that shaped who they are. Wisdom earned through a
            lifetime of experience.
          </p>
          <p className="text-base sm:text-lg text-center text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We help you capture these irreplaceable memories before time takes them away, creating a legacy that
            connects generations.
          </p>
        </div>
      </section>

      {/* How It Works - Enhanced with Interactive Demo */}
      <section id="how" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 text-balance tracking-tight">
            See how it works
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto">
            Experience how we transform conversations into lasting legacies
          </p>

          {/* Interactive Steps */}
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-24">
            <div className="space-y-4 sm:space-y-6">
              <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-primary/20">01</div>
              <h3 className="font-serif text-2xl sm:text-3xl">Record</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Through guided conversations, capture their stories, memories, and the moments that defined their life.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-primary/20">02</div>
              <h3 className="font-serif text-2xl sm:text-3xl">Enrich</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Add photographs, family contributions, and context that brings the full story to life.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-primary/20">03</div>
              <h3 className="font-serif text-2xl sm:text-3xl">Preserve</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Keep everything safe in your private family archive, accessible whenever you need to feel close.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/5 to-secondary/10 rounded-2xl p-8 sm:p-12 border border-primary/10">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Experience Sample
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl mb-3">Meet Sofia's grandmother, Maria</h3>
              <p className="text-muted-foreground">See how her family preserved her stories for generations to come</p>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <p className="font-medium mb-2">Her secret apple pie recipe</p>
                    <p className="text-sm text-muted-foreground mb-3">Recorded April 2024</p>
                    <audio controls className="w-full" preload="metadata">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reconnect%20Generations-ERfDvMErr0Bffa132Z7lGubhaStai8.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>

              {/* AI Persona Questions */}
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <p className="font-medium mb-4">Ask Maria's AI persona anything:</p>
                <div className="space-y-3">
                  <div className="bg-accent/10 rounded-lg p-3 text-sm">
                    "What was your childhood like during the war?"
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 text-sm">"How did you meet grandpa?"</div>
                  <div className="bg-accent/10 rounded-lg p-3 text-sm">
                    &quot;What life advice can you give me grandma?&quot;
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  The AI persona learns from recorded conversations to answer questions in Maria's own voice and style
                </p>
              </div>

              {/* Memory Collection */}
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <p className="font-medium mb-4">Memory collection includes:</p>
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    12 audio recordings
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    47 photographs
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Written stories
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Family recipes
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Start your family's legacy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center mb-16 sm:mb-24 md:mb-32">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-balance">Hear their voice again</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Audio recordings preserve not just what they said, but how they said it. The laughter, the pauses, the
                warmth in their voice that made them who they were.
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image
                src="/vintage-microphone-warm-lighting-nostalgic-recordi.jpg"
                alt="Voice recording"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="/old-family-photo-album-open-pages-memories-sepia.jpg"
                alt="Memory collection"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-balance">
                Stories that connect generations
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Your children and grandchildren will know where they came from. The struggles, triumphs, and love that
                built your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
          <div className="flex gap-4 sm:gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-muted">
                <Image
                  src="/mature-woman-smiling-professional-portrait-headsho.jpg"
                  alt="Elena M."
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="border-l-2 border-primary pl-4 sm:pl-6 md:pl-8">
              <p className="font-serif text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 leading-relaxed text-balance">
                I wish I had done this years ago. Now my children can hear their grandfather tell stories about his
                childhood, in his own words. It's the most precious gift.
              </p>
              <cite className="text-sm sm:text-base text-muted-foreground not-italic">— Elena M., Barcelona</cite>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-muted">
                <Image
                  src="/mature-man-smiling-professional-portrait-headshot.jpg"
                  alt="Klaus R."
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="border-l-2 border-primary pl-4 sm:pl-6 md:pl-8">
              <p className="font-serif text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 leading-relaxed text-balance">
                When my mother passed, we had hours of her stories preserved. It brought comfort to the entire family
                during the hardest time.
              </p>
              <cite className="text-sm sm:text-base text-muted-foreground not-italic">— Klaus R., Berlin</cite>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-muted">
                <Image
                  src="/mature-woman-professional-portrait-headshot-smilin.jpg"
                  alt="Sophie L."
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="border-l-2 border-primary pl-4 sm:pl-6 md:pl-8">
              <p className="font-serif text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 leading-relaxed text-balance">
                My father never talked much about his past. This gave him the space to finally share everything. I
                learned things I never knew.
              </p>
              <cite className="text-sm sm:text-base text-muted-foreground not-italic">— Sophie L., Paris</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Updated pricing section with new copy, structure, and pricing */}
      <section id="pricing" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-balance tracking-tight">
              Choose your memory journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              One-time payment. Lifetime access. Every package includes an AI persona that lets your family hear their
              stories anytime.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full">
              <span className="font-semibold text-sm sm:text-base">🎉 Black Friday Special</span>
              <span className="text-sm sm:text-base">Save 60% • Limited time only</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Cherished Moments */}
            <div className="bg-background border border-border rounded-2xl p-6 sm:p-8 flex flex-col">
              <div className="mb-6 sm:mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl mb-2">Cherished Moments</h3>
                <p className="text-sm text-muted-foreground mb-4 sm:mb-6">5 hours of memories</p>
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground line-through">€190</span>
                  <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-semibold">
                    Save 60%
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-5xl sm:text-6xl">€76</span>
                  <span className="text-sm sm:text-base text-muted-foreground">one-time</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect for capturing the most important stories</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">5 hours of recorded conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">AI persona to revisit memories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Private family memory space</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Photo and story collection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Unlimited family access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Secure storage forever</span>
                </li>
              </ul>

              <Link href="/checkout/cherished-moments">
                <Button variant="outline" className="w-full rounded-full h-12 bg-transparent">
                  Start preserving
                </Button>
              </Link>
            </div>

            {/* Life's Journey - Featured */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 sm:p-8 flex flex-col relative border-2 border-primary shadow-xl md:scale-105">
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                Most popular
              </div>

              <div className="mb-6 sm:mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl mb-2">Life's Journey</h3>
                <p className="text-sm opacity-90 mb-4 sm:mb-6">15 hours of memories</p>
                <div className="mb-2">
                  <span className="text-sm opacity-75 line-through">€450</span>
                  <span className="ml-2 text-xs bg-background text-foreground px-2 py-1 rounded-full font-semibold">
                    Save 60%
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-4xl sm:text-5xl">€180</span>
                  <span className="text-sm sm:text-base opacity-90">one-time</span>
                </div>
                <p className="text-sm opacity-90">Tell the full story across different chapters of life</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">15 hours of recorded conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Advanced AI persona with deeper context</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Private family memory space</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Photo and story collection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Unlimited family access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Secure storage forever</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Priority support</span>
                </li>
              </ul>

              <Link href="/checkout/lifes-journey">
                <Button
                  variant="secondary"
                  className="w-full rounded-full h-12 bg-background text-foreground hover:bg-background/90"
                >
                  Start preserving
                </Button>
              </Link>
            </div>

            {/* Complete Legacy */}
            <div className="bg-background border border-border rounded-2xl p-6 sm:p-8 flex flex-col">
              <div className="mb-6 sm:mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl mb-2">Complete Legacy</h3>
                <p className="text-sm text-muted-foreground mb-4 sm:mb-6">30 hours of memories</p>
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground line-through">€750</span>
                  <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-semibold">
                    Save 60%
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-4xl sm:text-5xl">€300</span>
                  <span className="text-sm sm:text-base text-muted-foreground">one-time</span>
                </div>
                <p className="text-sm text-muted-foreground">Preserve a lifetime of wisdom and memories</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">30 hours of recorded conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Rich AI persona with full life context</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Private family memory space</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Photo and story collection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Unlimited family access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Secure storage forever</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Family guide sessions</span>
                </li>
              </ul>

              <Link href="/checkout/complete-legacy">
                <Button variant="outline" className="w-full rounded-full h-12 bg-transparent">
                  Start preserving
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust and reassurance messaging below pricing */}
          <div className="mt-12 sm:mt-16 space-y-8">
            <p className="text-center text-sm text-muted-foreground">
              All plans include lifetime access • EU servers & GDPR compliant • 30-day money-back guarantee
            </p>

            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="font-medium mb-2">Your data, your control</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All memories stored on secure EU servers. You own your data, always.
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">♾️</div>
                <h4 className="font-medium mb-2">Lifetime access guaranteed</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  One payment, forever access. No subscriptions, no recurring fees.
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-medium mb-2">Risk-free guarantee</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Not satisfied? Full refund within 30 days, no questions asked.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-12 p-8 bg-accent/10 rounded-2xl">
              <h4 className="font-serif text-2xl mb-4 text-center">How it works</h4>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">1. Choose your plan</strong> – Select the package that fits your
                  family's story
                </p>
                <p>
                  <strong className="text-foreground">2. Set up your space</strong> – Create your private family memory
                  space in minutes
                </p>
                <p>
                  <strong className="text-foreground">3. Start recording</strong> – Use our guided questions or simply
                  have a conversation
                </p>
                <p>
                  <strong className="text-foreground">4. Preserve forever</strong> – Share with family and revisit
                  memories anytime, anywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-language support section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 text-balance">
              We speak your family's language
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Record and preserve memories in any of 24 EU languages. Our AI understands and responds naturally in your
              native tongue.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇧🇬</div>
              <p className="text-sm font-medium">Bulgarian</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇭🇷</div>
              <p className="text-sm font-medium">Croatian</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇨🇿</div>
              <p className="text-sm font-medium">Czech</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇩🇰</div>
              <p className="text-sm font-medium">Danish</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇳🇱</div>
              <p className="text-sm font-medium">Dutch</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇪🇪</div>
              <p className="text-sm font-medium">Estonian</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇫🇮</div>
              <p className="text-sm font-medium">Finnish</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇫🇷</div>
              <p className="text-sm font-medium">French</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇩🇪</div>
              <p className="text-sm font-medium">German</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇬🇷</div>
              <p className="text-sm font-medium">Greek</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇭🇺</div>
              <p className="text-sm font-medium">Hungarian</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇮🇪</div>
              <p className="text-sm font-medium">Irish</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇮🇹</div>
              <p className="text-sm font-medium">Italian</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇱🇻</div>
              <p className="text-sm font-medium">Latvian</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇱🇹</div>
              <p className="text-sm font-medium">Lithuanian</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇲🇹</div>
              <p className="text-sm font-medium">Maltese</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇵🇱</div>
              <p className="text-sm font-medium">Polish</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇵🇹</div>
              <p className="text-sm font-medium">Portuguese</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇷🇴</div>
              <p className="text-sm font-medium">Romanian</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇸🇰</div>
              <p className="text-sm font-medium">Slovak</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇸🇮</div>
              <p className="text-sm font-medium">Slovenian</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇪🇸</div>
              <p className="text-sm font-medium">Spanish</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🇸🇪</div>
              <p className="text-sm font-medium">Swedish</p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 italic">More languages coming soon</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="sm:py-32 px-6 bg-background py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl text-balance mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need to know about preserving your family's memories
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How does the recording process work?",
                answer:
                  "Our platform makes it simple. After purchasing, you'll receive a personal recording guide with conversation starters and prompts. You can record directly through our secure web platform or upload existing recordings. Our AI then organizes these memories into a beautiful, searchable family archive.",
              },
              {
                question: "What is the AI persona feature?",
                answer:
                  "The AI persona learns from your loved one's stories, speech patterns, and memories to create an interactive experience. Family members can ask questions and hear responses in a voice and style that reflects your loved one's personality. It's a meaningful way to keep their wisdom and stories alive for future generations.",
              },
              {
                question: "Is my family's data secure and private?",
                answer:
                  "Absolutely. We use EU-based servers with bank-level encryption. Your family's memories are stored securely and privately - only people you invite can access them. We comply with GDPR regulations and never share or sell your data. You maintain full ownership and control of all content.",
              },
              {
                question: "Can I upgrade or change my plan later?",
                answer:
                  "Yes! You can upgrade to a larger plan at any time by paying the difference. Your existing recordings and memories will carry over seamlessly. Just contact our support team, and we'll help you upgrade.",
              },
              {
                question: "What if I need more recording hours?",
                answer:
                  "You can purchase additional recording hours at any time through your account dashboard. We also offer custom packages for families with extensive storytelling needs. Contact us for personalized options.",
              },
              {
                question: "How long does it take to set up the AI persona?",
                answer:
                  "Once you've uploaded your recordings, our AI typically processes them within 24-48 hours. You'll receive an email when your family's memory space and AI persona are ready to explore.",
              },
              {
                question: "Can multiple family members contribute recordings?",
                answer:
                  "Yes! You can invite unlimited family members to access and contribute to the memory space. This creates a richer, more complete family history with different perspectives and stories.",
              },
              {
                question: "What languages are supported?",
                answer:
                  "Currently, we support all major European languages including English, German, French, Spanish, Italian, Dutch, and more. The AI persona can interact in the same language as the original recordings.",
              },
              {
                question: "What happens if I'm not satisfied?",
                answer:
                  "We offer a 30-day money-back guarantee. If you're not completely satisfied with the service, contact us within 30 days of purchase for a full refund. Your family's satisfaction and trust are our top priorities.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-semibold text-base sm:text-lg text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a href="mailto:support@reconnectgenerations.eu" className="text-primary hover:underline font-medium">
              Contact our support team
            </a>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="px-6 bg-foreground text-background py-[55px]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-12 text-balance">Why this matters</h2>
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="opacity-90">
              Our parents won't be here forever. The stories they carry, the lessons they learned, the voice that
              comforted us—these things fade unless we act.
            </p>
            <p className="opacity-90">
              This isn't about technology. It's about love. About ensuring that the people who shaped us are never truly
              gone.
            </p>
            <p className="opacity-90">
              Start now. While there's still time. While their memories are still clear and their voices still strong.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="px-6 py-[43px]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-3xl mb-6">Your family's privacy is sacred</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Every memory space is completely private to your family</p>
            <p>European data protection standards • Encrypted storage • You own your data</p>
            <p>No advertising. No sharing. Just you and your memories.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Tomorrow they'll wish you started today</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Every conversation matters. Every story deserves to be remembered.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="rounded-full text-lg px-8 h-14 py-0 my-[29px]"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Begin Your Family's Legacy
              <ArrowRight />
            </Button>
          </div>
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
                <Link href="#faq" className="block hover:text-foreground transition-colors">
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
