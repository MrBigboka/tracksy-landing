import { Metadata } from "next"
import Script from "next/script"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Tracksy - the all-in-one time tracking and business management app built for freelancers. Our mission is to help you track time, manage clients, and grow your business.",
  alternates: {
    canonical: "https://tracksy.me/about",
  },
  openGraph: {
    title: "About Tracksy - Time Tracking for Freelancers",
    description: "Learn about Tracksy - the all-in-one time tracking app built for freelancers. Our mission is to simplify your business.",
    url: "https://tracksy.me/about",
    type: "website",
  },
}

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tracksy",
    alternateName: "Tracksy Inc.",
    url: "https://tracksy.me",
    logo: "https://tracksy.me/favicon-192x192.png",
    description:
      "Tracksy is a time tracking and business management platform designed for freelancers and independent professionals worldwide.",
    foundingDate: "2024",
    email: "support@tracksy.me",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
    sameAs: [
      "https://app.tracksy.me",
    ],
    areaServed: [
      { "@type": "Place", name: "Canada" },
      { "@type": "Place", name: "United States" },
      { "@type": "Place", name: "France" },
      { "@type": "Place", name: "United Kingdom" },
      { "@type": "Place", name: "Worldwide" },
    ],
  }

  return (
    <>
      {/* SEO Schema for Google + LLMs */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-[#D5FF3F]">Tracksy</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Empowering freelancers to track their time and grow their business.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-[#0a0a0a] text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "One-Click Time Tracking",
              desc: "Start and stop your timer with a single click. Track billable hours effortlessly.",
            },
            {
              title: "Client & Project Management",
              desc: "Organize all your clients and projects in one place. Never lose track of work.",
            },
            {
              title: "Professional Invoicing",
              desc: "Generate beautiful PDF invoices with your tracked hours automatically calculated.",
            },
            {
              title: "Detailed Reports",
              desc: "Visualize your productivity with charts and analytics. Know where your time goes.",
            },
            {
              title: "Multi-Language Support",
              desc: "Available in English and French. More languages coming soon.",
            },
            {
              title: "Built for Freelancers",
              desc: "Every feature is designed with freelancers and independent professionals in mind.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 hover:border-[#D5FF3F]/30 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#D5FF3F]">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            At Tracksy, we believe that freelancers deserve tools that are simple, powerful, and affordable.
            Our mission is to help independent professionals spend less time on administrative tasks and more time doing what they love.
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            Whether you're a designer, developer, consultant, or creative professional, Tracksy gives you everything you need to track your time, manage your clients, and grow your business.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a] text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Simplify Your Business?
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Join thousands of freelancers who trust Tracksy to manage their time.
        </p>
        <a
          href="https://app.tracksy.me"
          className="inline-block bg-[#D5FF3F] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#C8D64F] transition-all"
        >
          Start Free Trial
        </a>
      </section>

      <AppverseFooter />
    </>
  )
}
