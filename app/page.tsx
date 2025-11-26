"use client"

import React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

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

const ArrowRightIcon = () => (
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
    <polyline points="20 6 9 17 4 12" />
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

const Play = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
)

const Heart = () => (
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
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
)

const MessageCircle = () => (
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
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
)

const Globe = () => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

const Star = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21 12 17.77 5.82 21 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

function PlayIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function SampleMemoryExperience() {
  const stories = [
    {
      question: "Her secret apple pie recipe",
      audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reconnect%20Generations-ERfDvMErr0Bffa132Z7lGubhaStai8.mp3",
      date: "Recorded 2025-10-12",
      type: "file" as const,
    },
    {
      question: "What was your childhood like during the war?",
      audio: "/audio/childhood-during-war.mp3",
      date: "Recorded 2024-03-15",
      type: "file" as const,
    },
    {
      question: "How did you meet grandpa?",
      audio: "/audio/love-story.mp3",
      date: "Recorded 2024-06-22",
      type: "file" as const,
    },
    {
      question: "What life advice can you give me grandma?",
      audio: "https://soundcloud.com/emilis-585379406/life-advice",
      date: "Recorded 2024-08-10",
      type: "soundcloud" as const,
    },
  ]

  const [currentStory, setCurrentStory] = React.useState(stories[0])

  const handleStoryClick = (story: (typeof stories)[0]) => {
    setCurrentStory(story)
    if (story.type === "file") {
      // Give React time to update the DOM, then play
      setTimeout(() => {
        const audioElement = document.querySelector("#story-player") as HTMLAudioElement
        if (audioElement) {
          audioElement.load()
          audioElement.play().catch((err) => console.log("[v0] Play prevented:", err))
        }
      }, 100)
    }
  }

  return (
    <section id="how" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Experience Sample
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl mb-3">Meet Sofia's grandmother, Maria</h3>
            <p className="text-muted-foreground">See how her family preserved her stories for generations to come</p>
          </div>

          <div className="space-y-6">
            {/* Single Shared Audio Player */}
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <p className="text-sm text-primary font-medium">Now Playing</p>
              </div>
              <p className="font-medium mb-2 text-lg">{currentStory.question}</p>
              <p className="text-sm text-muted-foreground mb-4">{currentStory.date}</p>

              {currentStory.type === "soundcloud" ? (
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(currentStory.audio)}&color=%23b88b74&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
                  className="rounded-lg"
                ></iframe>
              ) : (
                <audio
                  id="story-player"
                  key={currentStory.audio}
                  controls
                  className="w-full rounded-lg"
                  preload="metadata"
                >
                  <source src={currentStory.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>

            {/* Story Selection Buttons */}
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <p className="font-medium mb-4">Listen to Maria's stories:</p>
              <div className="space-y-2">
                {stories.map((story, index) => (
                  <button
                    key={index}
                    onClick={() => handleStoryClick(story)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all hover:border-primary/50 hover:bg-primary/5 ${
                      currentStory.audio === story.audio
                        ? "border-primary bg-primary/10"
                        : "border-border bg-background"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex-shrink-0 ${currentStory.audio === story.audio ? "text-primary" : "text-muted-foreground"}`}
                      >
                        {currentStory.audio === story.audio ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`font-medium ${currentStory.audio === story.audio ? "text-primary" : "text-foreground"}`}
                      >
                        {story.question}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* AI Persona Questions */}
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <p className="font-medium mb-4">Ask Maria's AI persona anything:</p>
              <div className="space-y-3">
                <div className="bg-accent/10 rounded-lg p-3 text-sm">
                  "Tell me about your favorite family tradition"
                </div>
                <div className="bg-accent/10 rounded-lg p-3 text-sm">"What was life like when you were my age?"</div>
                <div className="bg-accent/10 rounded-lg p-3 text-sm">
                  "Can you tell me more about that apple pie recipe?"
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
  )
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const additionalStories = [
    {
      question: "What was your childhood like during the war?",
      date: "Recorded 2025-09-03",
      audio: "/audio/childhood-during-war.mp3",
    },
    {
      question: "How did you meet grandpa?",
      date: "Recorded 2025-09-10",
      audio: "/audio/love-story.mp3",
    },
    {
      question: "What life advice can you give me grandma?",
      date: "Recorded 2025-09-18",
      audio: "/audio/life-advice.mp3",
    },
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <ExitIntentPopup />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8e4dd] bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.png"
              alt="ReconnectGenerations"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="font-serif text-base sm:text-lg md:text-xl text-[#6b5d52]">ReconnectGenerations</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#how" className="text-sm lg:text-base text-[#6b5d52] hover:text-[#3d3530] transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm lg:text-base text-[#6b5d52] hover:text-[#3d3530] transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm lg:text-base text-[#6b5d52] hover:text-[#3d3530] transition-colors">
              FAQ
            </a>
            <Button
              className="rounded-full bg-[#c97d5d] hover:bg-[#b76d4d] text-white text-sm lg:text-base px-4 lg:px-6"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Preserving
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#6b5d52]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e8e4dd] bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col p-4 space-y-3">
              <a
                href="#how"
                className="text-base text-[#6b5d52] hover:text-[#3d3530] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-base text-[#6b5d52] hover:text-[#3d3530] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-base text-[#6b5d52] hover:text-[#3d3530] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Button
                className="rounded-full bg-[#c97d5d] hover:bg-[#b76d4d] text-white w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Start Preserving
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-balance tracking-tight leading-[1.1] sm:leading-[1.05] text-foreground px-2">
              Preserve Your Parents' Stories Forever
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance font-light px-4">
              Record their voices, capture their memories, and let your family hear their stories anytime—even years
              from now.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 sm:gap-6 pt-2 sm:pt-4">
            <Button
              size="lg"
              className="rounded-full text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 h-12 sm:h-14 md:h-16 bg-[#c97d5d] hover:bg-[#b76d4d] text-white shadow-lg hover:shadow-xl transition-all w-auto"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Preserving Now
              <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <div className="flex flex-col items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  <span className="font-medium text-foreground">4.9/5 from 277 families</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span className="font-semibold text-foreground">Trustpilot</span>
              </div>
              <span className="px-4 py-1.5 bg-[#c97d5d]/10 text-[#c97d5d] rounded-full font-medium text-sm sm:text-base">
                60% Off Black Friday Sale
              </span>
            </div>
          </div>

          <button
            onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base underline underline-offset-4 mt-4"
          >
            See how it works
          </button>
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
      <SampleMemoryExperience />

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

      <section id="pricing" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-balance tracking-tight">
              Choose your memory journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              One-time payment. Lifetime access. Every package includes an AI persona that lets your family hear their
              stories anytime.
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-accent/20 border-2 border-[#c97d5d] rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="font-semibold text-base sm:text-lg">🎉 Black Friday Special</span>
                  <span className="text-base sm:text-lg">Save 60%</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">Limited time offer</p>
              </div>
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
              All plans include lifetime access • European data protection standards • 30-day money-back guarantee
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
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3d3530] text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="ReconnectGenerations" width={32} height={32} className="w-8 h-8" />
              <span className="font-serif text-lg">ReconnectGenerations</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Preserving family stories for future generations across Europe.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how" className="text-white/70 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-sm text-white/70">
          <p>&copy; 2025 ReconnectGenerations. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
