export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  originalPriceInCents: number // Added original price for discount display
  hours: number
  features: string[]
}

// This is the source of truth for all products.
// All UI to display products should pull from this array.
// IDs passed to the checkout session should be the same as IDs from this array.
export const PRODUCTS: Product[] = [
  {
    id: "cherished-moments",
    name: "Cherished Moments",
    description: "5 hours of memories - Perfect for capturing the most important stories",
    priceInCents: 100, // €1 for testing (was €76)
    originalPriceInCents: 19000, // €190 original price
    hours: 5,
    features: [
      "5 hours of recorded conversations",
      "AI persona to revisit memories",
      "Private family memory space",
      "Photo and story collection",
      "Unlimited family access",
      "Secure storage forever",
    ],
  },
  {
    id: "lifes-journey",
    name: "Life's Journey",
    description: "15 hours of memories - Tell the full story across different chapters of life",
    priceInCents: 18000, // €180 Black Friday price (60% off)
    originalPriceInCents: 45000, // €450 original price
    hours: 15,
    features: [
      "15 hours of recorded conversations",
      "Advanced AI persona with deeper context",
      "Private family memory space",
      "Photo and story collection",
      "Unlimited family access",
      "Secure storage forever",
      "Priority support",
    ],
  },
  {
    id: "complete-legacy",
    name: "Complete Legacy",
    description: "30 hours of memories - Preserve a lifetime of wisdom and memories",
    priceInCents: 30000, // €300 Black Friday price (60% off)
    originalPriceInCents: 75000, // €750 original price
    hours: 30,
    features: [
      "30 hours of recorded conversations",
      "Rich AI persona with full life context",
      "Private family memory space",
      "Photo and story collection",
      "Unlimited family access",
      "Secure storage forever",
      "Priority support",
      "Family guide sessions",
    ],
  },
]
