import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import FeaturesBento from "@/components/features-bento"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://tracksy.me/#organization",
    name: "Tracksy",
    alternateName: "Tracksy Inc.",
    url: "https://tracksy.me",
    logo: {
      "@type": "ImageObject",
      url: "https://tracksy.me/favicon-192x192.png",
      width: 192,
      height: 192,
    },
    description: "All-in-one time tracking and business management for freelancers. Track time, manage projects, generate invoices, and grow your business.",
    foundingDate: "2024",
    email: "support@tracksy.me",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
    sameAs: [
      "https://app.tracksy.me"
    ],
  }

  // SoftwareApplication structured data
  const softwareStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://tracksy.me/#software",
    name: "Tracksy",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Time Tracking Software",
    operatingSystem: "Web, iOS, Android",
    description: "All-in-one time tracking and business management app for freelancers. Track billable hours, manage clients & projects, generate invoices.",
    url: "https://tracksy.me",
    offers: [
      {
        "@type": "Offer",
        name: "Free Plan",
        price: "0",
        priceCurrency: "CAD",
        description: "Basic time tracking with 1 client, 2 projects, 5 sessions/day",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pro Monthly",
        price: "7.99",
        priceCurrency: "CAD",
        description: "Unlimited clients, projects, sessions. PDF exports without watermark.",
        priceValidUntil: "2025-12-31",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pro Annual",
        price: "79",
        priceCurrency: "CAD",
        description: "Same as Pro Monthly, billed annually. Save 30%.",
        priceValidUntil: "2025-12-31",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Lifetime",
        price: "39.99",
        priceCurrency: "CAD",
        description: "Pay once, use forever. All Pro features included.",
        availability: "https://schema.org/InStock",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Time tracking with one-click timer",
      "Client management",
      "Project management",
      "Invoice generation",
      "PDF & CSV exports",
      "Detailed reports & analytics",
      "Multi-language support (EN/FR)",
    ],
    screenshot: "https://tracksy.me/DemoTracksy.png",
  }

  // WebSite structured data for sitelinks search
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://tracksy.me/#website",
    name: "Tracksy",
    url: "https://tracksy.me",
    description: "Time Tracking & Business Management for Freelancers",
    publisher: {
      "@id": "https://tracksy.me/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://tracksy.me/?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  // WebPage structured data
  const webPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://tracksy.me/#webpage",
    url: "https://tracksy.me",
    name: "Tracksy | Time Tracking & Business Management for Freelancers",
    description: "All-in-one time tracking app for freelancers. Track billable hours, manage clients & projects, generate invoices. Free 14-day trial.",
    isPartOf: {
      "@id": "https://tracksy.me/#website",
    },
    about: {
      "@id": "https://tracksy.me/#software",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://tracksy.me/og-image.png",
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: "en-CA",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://tracksy.me",
        },
      ],
    },
  }

  return (
    <>
      <main className="relative min-h-[100dvh] bg-transparent text-[#F2F3F5]">
        <SiteHeader />
        <Hero />
        <FeaturesBento />
        <Pricing />
        <FAQ />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />

      <Script
        id="software-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareStructuredData),
        }}
      />

      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />

      <Script
        id="webpage-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
    </>
  )
}
