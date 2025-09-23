import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import Features from "@/components/features"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://tracksy.app/#pricing",
    name: "Pricing Plans",
    description: "Tracksy pricing plans - Free Trial, Pro, and Business packages for freelancers and teams",
    url: "https://tracksy.app/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Time Tracking & Business Management",
      description: "Professional time tracking and business management for freelancers",
      offers: [
        {
          "@type": "Offer",
          name: "Free Trial",
          price: "0",
          priceCurrency: "CAD",
          description: "14-day free trial with full features",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "19",
          priceCurrency: "CAD",
          description: "Complete freelance management solution",
        },
        {
          "@type": "Offer",
          name: "Business Plan",
          price: "49",
          priceCurrency: "CAD",
          description: "Team collaboration and advanced features",
        },
      ],
    },
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://tracksy.app/",
    name: "Tracksy | Track your time. Simplify your business.",
    description:
      "All-in-one time tracking and business management for freelancers. Track time, manage projects, generate invoices, and grow your business.",
    url: "https://tracksy.app/",
    mainEntity: {
      "@type": "Organization",
      name: "Tracksy",
      url: "https://tracksy.app",
      description: "Time tracking and business management for freelancers",
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://tracksy.app/#pricing",
        name: "Pricing Section",
        url: "https://tracksy.app/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="relative min-h-[100dvh] bg-transparent text-[#F2F3F5]">
        <SiteHeader />
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
