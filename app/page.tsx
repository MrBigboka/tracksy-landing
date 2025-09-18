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
      {/* Pure yellow-lime animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B0E12]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D5FF3F] rounded-full blur-3xl animate-pulse" style={{animationDuration: '3s'}}></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#B9E832] rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#D5FF3F] rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
      
      <main className="relative min-h-[100dvh] bg-transparent text-[#F2F3F5] z-10">
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
