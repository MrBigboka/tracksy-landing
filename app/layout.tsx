import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Plasma from "@/components/plasma"
import { TranslationProvider } from "@/components/translation-provider"
import { SplashScreen } from "@/components/splash-screen"
import { ClientWrapper } from "@/components/client-wrapper"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Tracksy | Track your time. Simplify your business.",
  description:
    "All-in-one time tracking and business management for freelancers. Track time, manage projects, generate invoices, and grow your business.",
  generator: "Next.js",
  metadataBase: new URL("https://tracksy.me"),
  openGraph: {
    title: "Tracksy | Track your time. Simplify your business.",
    description: "All-in-one time tracking and business management for freelancers. Track time, manage projects, generate invoices, and grow your business.",
    url: "https://tracksy.me",
    siteName: "Tracksy",
    images: [
      {
        url: "/favicon-192x192.png",
        width: 192,
        height: 192,
        alt: "Tracksy Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracksy | Track your time. Simplify your business.",
    description: "All-in-one time tracking and business management for freelancers. Track time, manage projects, generate invoices, and grow your business.",
    images: ["/favicon-192x192.png"],
  },
  alternates: {
    canonical: "https://tracksy.me",
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
        <meta name="theme-color" content="#D5FF3F" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Tracksy" />

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
              <Plasma
                color="#C8D64F"
                speed={0.8}
                direction="forward"
                scale={1.5}
                opacity={0.3}
                mouseInteractive={true}
              />
            </div>
            <div className="relative z-10">{children}</div>
          </ClientWrapper>
        </TranslationProvider>
      </body>
    </html>
  )
}
