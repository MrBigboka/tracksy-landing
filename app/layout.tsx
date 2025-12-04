import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import PlasmaSimple from "@/components/plasma-simple"
import { TranslationProvider } from "@/components/translation-provider"
import { SplashScreen } from "@/components/splash-screen"
import { ClientWrapper } from "@/components/client-wrapper"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#D5FF3F",
}

export const metadata: Metadata = {
  title: {
    default: "Tracksy | Time Tracking & Business Management for Freelancers",
    template: "%s | Tracksy"
  },
  description: "All-in-one time tracking app for freelancers. Track billable hours, manage clients & projects, generate invoices, and grow your business. Free 14-day trial.",
  keywords: [
    "time tracking",
    "freelancer time tracker",
    "time tracking app",
    "billable hours tracker",
    "project management",
    "invoice generator",
    "freelance business management",
    "time tracker for freelancers",
    "productivity app",
    "work hours tracker",
    "client management",
    "freelance tools",
    "time logging software",
    "business management app"
  ],
  authors: [{ name: "Tracksy Inc.", url: "https://tracksy.me" }],
  creator: "Tracksy Inc.",
  publisher: "Tracksy Inc.",
  generator: "Next.js",
  applicationName: "Tracksy",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://tracksy.me"),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tracksy | Time Tracking & Business Management for Freelancers",
    description: "All-in-one time tracking app for freelancers. Track billable hours, manage clients & projects, generate invoices. Free 14-day trial, no credit card required.",
    url: "https://tracksy.me",
    siteName: "Tracksy",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracksy | Time Tracking for Freelancers",
    description: "All-in-one time tracking app for freelancers. Track billable hours, manage clients & projects, generate invoices. Free 14-day trial!",
    creator: "@tracksy_app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tracksy.me",
    languages: {
      "en-CA": "https://tracksy.me",
      "fr-CA": "https://tracksy.me",
    },
  },
  category: "productivity",
  classification: "Business Software",
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  other: {
    "msapplication-TileColor": "#D5FF3F",
    "apple-mobile-web-app-title": "Tracksy",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Favicon et icônes - Format optimisé pour Google */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body>
        <TranslationProvider defaultLanguage="en">
          <ClientWrapper>
            <div className="fixed inset-0 z-0 bg-black">
              <div className="absolute inset-0 opacity-40" style={{
                background: `
                  radial-gradient(circle at 20% 30%, #8B9A3F40 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, #8B9A3F35 0%, transparent 60%),
                  radial-gradient(circle at 40% 90%, #8B9A3F45 0%, transparent 45%),
                  radial-gradient(circle at 60% 50%, #8B9A3F38 0%, transparent 40%),
                  radial-gradient(circle at 10% 70%, #8B9A3F32 0%, transparent 50%)
                `
              }}></div>
            </div>
            <div className="relative z-10">
              {children}
            </div>
            <Analytics />
          </ClientWrapper>
        </TranslationProvider>
      </body>
    </html>
  )
}
