import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { CheckCircle2, XCircle, ArrowRight, Target, Zap, Infinity, Clock, FileText, Users, Briefcase, Globe, Download, Settings, Puzzle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Tracksy vs Toggl Track — Best Minimalist Time Tracking Alternative",
  description: "Looking for a simple Toggl alternative? Tracksy is the minimalist time tracker for freelancers. No bloat, just fast time tracking with PDF exports. Compare features now.",
  keywords: [
    "Toggl alternative",
    "Toggl Track alternative",
    "simple time tracker",
    "freelancer time tracking",
    "minimalist time tracker",
    "time tracking app",
    "Toggl vs Tracksy",
    "best time tracker for freelancers",
    "easy time tracking",
    "lightweight time tracker"
  ],
  openGraph: {
    title: "Tracksy vs Toggl Track — The Simple Alternative (2025)",
    description: "Looking for a simple Toggl alternative? Tracksy is the minimalist time tracker for freelancers. No bloat, just fast time tracking.",
    url: "https://tracksy.me/toggl-alternative",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracksy vs Toggl Track — Simple Time Tracking Alternative",
    description: "Looking for a simple Toggl alternative? Tracksy is the minimalist time tracker for freelancers.",
  },
  alternates: {
    canonical: "https://tracksy.me/toggl-alternative",
  },
}

// Comparison data
const comparisonFeatures = [
  { feature: "One-click time tracking", tracksy: true, toggl: true },
  { feature: "Free plan available", tracksy: true, toggl: true },
  { feature: "PDF report exports", tracksy: true, toggl: false, note: "Toggl requires paid plan" },
  { feature: "Simple, clean interface", tracksy: true, toggl: false },
  { feature: "No learning curve", tracksy: true, toggl: false },
  { feature: "Client management", tracksy: true, toggl: true },
  { feature: "Project tracking", tracksy: true, toggl: true },
  { feature: "Lifetime pricing option", tracksy: true, toggl: false },
  { feature: "Bilingual (EN/FR)", tracksy: true, toggl: false },
  { feature: "CSV export", tracksy: true, toggl: true },
  { feature: "Team features", tracksy: false, toggl: true, note: "Coming soon to Tracksy" },
  { feature: "100+ integrations", tracksy: false, toggl: true },
]

export default function TogglAlternativePage() {
  // Article structured data for SEO
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tracksy vs Toggl Track — 2025 Comparison (The Simple Alternative)",
    "description": "A detailed comparison between Tracksy and Toggl Track for freelancers looking for simple time tracking.",
    "author": {
      "@type": "Organization",
      "name": "Tracksy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tracksy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tracksy.me/favicon-192x192.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://tracksy.me/toggl-alternative"
    }
  }

  // Comparison structured data
  const comparisonStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tracksy vs Toggl Track Comparison",
    "description": "Compare Tracksy and Toggl Track features side by side. Find the best time tracking solution for freelancers.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "position": 1,
          "name": "Tracksy",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "SoftwareApplication",
          "position": 2,
          "name": "Toggl Track",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web"
        }
      ]
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
        "name": "Toggl Alternative",
        "item": "https://tracksy.me/toggl-alternative"
      }
    ]
  }

  return (
    <>
      <main className="relative min-h-[100dvh] bg-transparent text-[#F2F3F5]">
        <SiteHeader />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-[#D5FF3F]/20 text-[#D5FF3F] text-sm font-medium px-4 py-1 rounded-full mb-6">
              2025 Comparison
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Tracksy vs Toggl Track — The Simple Alternative
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Looking for a <strong className="text-white">Toggl alternative</strong> that&apos;s actually simple? 
              Tracksy is the minimalist <strong className="text-white">time tracker for freelancers</strong> who want 
              to track time, not manage software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#D5FF3F] text-black hover:bg-[#C8D64F] font-semibold rounded-full px-8">
                <a href="https://app.tracksy.me">Try Tracksy Free</a>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                <a href="#comparison">See Comparison</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Comparison Section - Simplified */}
        <section id="comparison" className="py-20 px-4 sm:px-6 md:px-8 scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why Freelancers Choose Tracksy
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Simple comparison: what you get with each tool
              </p>
            </div>
            
            {/* Single Comparison Card */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-[#D5FF3F]/30 to-transparent rounded-3xl blur opacity-40"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-3 border-b border-white/10">
                  <div className="p-4 text-white/60 text-sm font-medium">Feature</div>
                  <div className="p-4 text-center bg-[#D5FF3F]/10 border-x border-white/10">
                    <span className="text-[#D5FF3F] font-bold">Tracksy</span>
                  </div>
                  <div className="p-4 text-center text-white/40 font-medium">Toggl</div>
                </div>
                
                {/* Rows */}
                {comparisonFeatures.slice(0, 8).map((row, index) => (
                  <div key={index} className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <div className="p-4 text-white/80 text-sm">{row.feature}</div>
                    <div className="p-4 flex justify-center bg-[#D5FF3F]/5 border-x border-white/5">
                      {row.tracksy ? (
                        <CheckCircle2 className="w-5 h-5 text-[#D5FF3F]" />
                      ) : (
                        <XCircle className="w-5 h-5 text-white/20" />
                      )}
                    </div>
                    <div className="p-4 flex justify-center">
                      {row.toggl ? (
                        <CheckCircle2 className="w-5 h-5 text-white/40" />
                      ) : (
                        <XCircle className="w-5 h-5 text-white/20" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits - Inline */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-[#D5FF3F]" />
                <span className="text-white/80 text-sm">No bloat</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <FileText className="w-4 h-4 text-[#D5FF3F]" />
                <span className="text-white/80 text-sm">PDF exports</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Infinity className="w-4 h-4 text-[#D5FF3F]" />
                <span className="text-white/80 text-sm">Lifetime option</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-[#D5FF3F]" />
                <span className="text-white/80 text-sm">EN/FR bilingual</span>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-16 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              See Tracksy in Action
            </h2>
            <p className="text-white/60 mb-8">
              No complex setup, no learning curve.
            </p>
            {/* Interactive Arcade Demo */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D5FF3F]/20 via-[#D5FF3F]/10 to-[#D5FF3F]/20 rounded-2xl blur-xl opacity-60"></div>
              <div className="relative rounded-2xl overflow-hidden border border-[#D5FF3F]/20 bg-black/40 backdrop-blur-sm p-1">
                <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: 'calc(49.6484375% + 41px)' }}>
                  <iframe
                    src="https://demo.arcade.software/ipJQTkzCnEgNaXaHCS3z?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
                    title="Tracksy Demo - Simple Toggl Alternative"
                    frameBorder={0}
                    loading="lazy"
                    allowFullScreen
                    allow="clipboard-write"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    style={{ colorScheme: 'light' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <Script
        id="comparison-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(comparisonStructuredData),
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
