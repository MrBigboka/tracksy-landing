import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Pricing — Simple Time Tracking Plans for Freelancers",
  description: "Start free with Tracksy. Upgrade to Pro for unlimited clients, projects, and PDF exports. Transparent pricing, no hidden fees. 14-day free trial included.",
  keywords: [
    "time tracking pricing",
    "freelancer time tracker cost",
    "free time tracking app",
    "affordable time tracker",
    "tracksy pricing",
    "time tracking subscription"
  ],
  openGraph: {
    title: "Tracksy Pricing — Free & Pro Plans for Freelancers",
    description: "Start free with Tracksy. Upgrade to Pro for unlimited clients, projects, and PDF exports. 14-day free trial included.",
    url: "https://tracksy.me/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracksy Pricing — Free & Pro Plans",
    description: "Start free with Tracksy. Upgrade to Pro for unlimited features. 14-day free trial included.",
  },
  alternates: {
    canonical: "https://tracksy.me/pricing",
  },
}

export default function PricingPage() {
  // Product structured data with pricing offers
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tracksy",
    "description": "Simple time tracking app for freelancers. Track billable hours, manage clients, generate PDF reports.",
    "brand": {
      "@type": "Brand",
      "name": "Tracksy"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Plan (Founder Key)",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Basic time tracking with 1 client, 2 projects, 5 sessions/day. PDF with watermark.",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31",
        "url": "https://tracksy.me/pricing"
      },
      {
        "@type": "Offer",
        "name": "Pro Monthly",
        "price": "7.99",
        "priceCurrency": "USD",
        "description": "Unlimited clients, projects, sessions. PDF without watermark. CSV export. Priority support.",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31",
        "url": "https://tracksy.me/pricing"
      },
      {
        "@type": "Offer",
        "name": "Pro Annual",
        "price": "79",
        "priceCurrency": "USD",
        "description": "Same as Pro Monthly, billed annually. Save 30%.",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31",
        "url": "https://tracksy.me/pricing"
      },
      {
        "@type": "Offer",
        "name": "Lifetime",
        "price": "39.99",
        "priceCurrency": "USD",
        "description": "Pay once, use forever. All Pro features included. All future updates.",
        "availability": "https://schema.org/InStock",
        "url": "https://tracksy.me/pricing"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tracksy.me"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": "https://tracksy.me/pricing"
      }
    ]
  }

  return (
    <>
      <main className="relative min-h-[100dvh] bg-transparent text-[#F2F3F5]">
        <SiteHeader />
        
        {/* Hero Section */}
        <section className="pt-24 pb-8 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Start free forever. Upgrade when you need more power. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Pricing Section with H2 */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="sr-only">Tracksy Pricing Plans</h2>
            <Pricing />
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Why Choose Tracksy?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D5FF3F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-white/60 text-sm">Start tracking in seconds. No complex setup required.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D5FF3F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">PDF Reports</h3>
                <p className="text-white/60 text-sm">Generate professional reports for your clients instantly.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D5FF3F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No Lock-in</h3>
                <p className="text-white/60 text-sm">Export your data anytime. Cancel whenever you want.</p>
              </div>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />

      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
    </>
  )
}
