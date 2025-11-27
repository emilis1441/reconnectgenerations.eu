import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import { PRODUCTS } from "@/lib/products"
import Checkout from "@/components/checkout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
)

const CheckIcon = () => (
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

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params
  const product = PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <header className="border-b border-[#e8e4dd] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ReconnectGenerations"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="font-serif text-lg sm:text-xl text-[#6b5d52]">ReconnectGenerations</span>
          </Link>
          <Link href="/#pricing">
            <Button variant="ghost" className="text-[#6b5d52] hover:bg-[#f5f1eb]">
              <ArrowLeftIcon />
              <span className="ml-2 hidden sm:inline">Back to pricing</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Value Props & Social Proof */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-[#3d3530]">{product.name}</h1>
              <p className="text-lg md:text-xl text-[#6b5d52] leading-relaxed mb-6">{product.description}</p>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#e8e4dd]">
                <div className="flex gap-1 text-[#c97d5d]">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="text-sm text-[#6b5d52]">
                  <span className="font-semibold">4.9</span> from <span className="font-semibold">277 families</span> on{" "}
                  <span className="font-semibold">Trustpilot</span>
                </div>
              </div>
            </div>

            <Card className="border-[#e8e4dd] bg-white">
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl mb-4 text-[#3d3530]">What's included</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#c97d5d] mt-0.5 flex-shrink-0">
                        <CheckIcon />
                      </span>
                      <span className="text-[#6b5d52]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What happens next section */}
            <Card className="border-[#c97d5d] bg-[#c97d5d]/5">
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl mb-4 text-[#3d3530]">What happens after checkout?</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c97d5d] text-white flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-[#3d3530]">Instant access</h4>
                      <p className="text-sm text-[#6b5d52]">
                        Receive your welcome email with account details and getting started guide.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c97d5d] text-white flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-[#3d3530]">Schedule your session</h4>
                      <p className="text-sm text-[#6b5d52]">
                        Book a convenient time for recording. We'll guide you through the entire process.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c97d5d] text-white flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-[#3d3530]">Start recording</h4>
                      <p className="text-sm text-[#6b5d52]">
                        Begin capturing precious stories with our thoughtful conversation prompts.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c97d5d] text-white flex items-center justify-center font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-[#3d3530]">Memories preserved forever</h4>
                      <p className="text-sm text-[#6b5d52]">
                        Your AI persona is created, and your family can access these memories anytime, anywhere.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#e8e4dd] bg-white">
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl mb-4 text-[#3d3530]">Why families trust us</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1 text-[#3d3530]">One-time payment, lifetime access</h4>
                    <p className="text-sm text-[#6b5d52]">
                      Pay once and your family's memories are preserved forever. No subscriptions, no hidden fees.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-[#3d3530]">AI persona included</h4>
                    <p className="text-sm text-[#6b5d52]">
                      Every package includes an AI persona that lets your family hear their stories anytime, keeping
                      memories alive.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-[#3d3530]">EU data protection</h4>
                    <p className="text-sm text-[#6b5d52]">
                      Your family's memories are stored securely in EU servers with full GDPR compliance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-[#3d3530]">30-day satisfaction guarantee</h4>
                    <p className="text-sm text-[#6b5d52]">
                      If you're not completely satisfied, we'll refund you in full within 30 days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#3d3530]">What families are saying</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#e8e4dd]">
                  <video controls className="w-full aspect-[9/16] bg-black" preload="metadata">
                    <source
                      src="https://storage.googleapis.com/reconnectgenerations-testimonials/Testimonial%202.mov"
                      type="video/quicktime"
                    />
                    <source
                      src="https://storage.googleapis.com/reconnectgenerations-testimonials/Testimonial%202.mov"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-3">
                    <div className="flex gap-1 text-[#c97d5d] mb-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-[#3d3530]">Lucas and Gabriel</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#e8e4dd]">
                  <video controls className="w-full aspect-[9/16] bg-black" preload="metadata">
                    <source
                      src="https://storage.googleapis.com/reconnectgenerations-testimonials/Testimonial%203.MOV"
                      type="video/quicktime"
                    />
                    <source
                      src="https://storage.googleapis.com/reconnectgenerations-testimonials/Testimonial%203.MOV"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-3">
                    <div className="flex gap-1 text-[#c97d5d] mb-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-[#3d3530]">Adi</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#e8e4dd]">
                  <video controls className="w-full aspect-[9/16] bg-black" preload="metadata">
                    <source
                      src="https://storage.googleapis.com/reconnectgenerations-testimonials/Testimonial%20Britas.mov"
                      type="video/quicktime"
                    />
                    <source
                      src="https://storage.googleapis.com/reconnectgenerations-testimonials/Testimonial%20Britas.mov"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-3">
                    <div className="flex gap-1 text-[#c97d5d] mb-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-[#3d3530]">Jacob</p>
                  </div>
                </div>
              </div>

              <Card className="border-[#e8e4dd] bg-white">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-[#c97d5d] mb-3">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="text-[#6b5d52] mb-4 italic">
                    "Recording my father's war stories was the most precious gift we could give our children. The AI
                    persona is incredible - it's like having another conversation with him whenever we need it."
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/mature-man-smiling-professional-portrait-headshot.jpg"
                      alt="Customer"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#3d3530]">Michael K.</p>
                      <p className="text-sm text-[#6b5d52]">Sydney, Australia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#e8e4dd] bg-white">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-[#c97d5d] mb-3">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="text-[#6b5d52] mb-4 italic">
                    "My mother was hesitant at first, but once we started recording, she couldn't stop sharing. Now we
                    have 15 hours of her life story that our grandchildren will treasure forever."
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/mature-woman-professional-portrait-headshot-smilin.jpg"
                      alt="Customer"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#3d3530]">Jennifer S.</p>
                      <p className="text-sm text-[#6b5d52]">Vancouver, Canada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#e8e4dd] bg-white">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-[#c97d5d] mb-3">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="text-[#6b5d52] mb-4 italic">
                    "The process was so simple and respectful. They made my father feel comfortable sharing things he'd
                    never told us before. Worth every dollar."
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/mature-woman-smiling-professional-portrait-headsho.jpg"
                      alt="Customer"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#3d3530]">Rachel P.</p>
                      <p className="text-sm text-[#6b5d52]">Auckland, New Zealand</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Checkout Form */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Card className="border-[#e8e4dd] bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h2 className="font-serif text-2xl text-[#3d3530]">Complete your order</h2>
                    <div className="text-right">
                      <div className="text-sm text-[#6b5d52] line-through mb-1">
                        ${(product.originalPriceInCents / 100).toFixed(0)}
                      </div>
                      <div className="font-serif text-3xl text-[#3d3530]">
                        ${(product.priceInCents / 100).toFixed(0)}
                      </div>
                      <div className="text-sm text-[#6b5d52]">one-time payment</div>
                      <div className="text-xs bg-[#c97d5d] text-white px-2 py-1 rounded-full inline-block mt-1">
                        Black Friday: Save {Math.round((1 - product.priceInCents / product.originalPriceInCents) * 100)}
                        %
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#6b5d52]">Secure checkout powered by Stripe</p>
                </div>
                <Checkout productId={productId} />
              </CardContent>
            </Card>

            <div className="mt-6 space-y-3 text-center text-sm text-[#6b5d52]">
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#c97d5d]">
                  <CheckIcon />
                </span>
                Secure EU-compliant payment processing
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#c97d5d]">
                  <CheckIcon />
                </span>
                30-day money-back guarantee
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#c97d5d]">
                  <CheckIcon />
                </span>
                Instant access after purchase
              </p>
              <p className="mt-4 pt-4 border-t border-[#e8e4dd]">
                By completing your purchase, you agree to our{" "}
                <Link href="/terms-of-service" className="text-[#c97d5d] hover:underline font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-[#c97d5d] hover:underline font-medium">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    productId: product.id,
  }))
}
