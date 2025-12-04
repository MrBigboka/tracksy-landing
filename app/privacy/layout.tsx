import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Tracksy protects your privacy. We collect minimal data, use secure encryption, and never sell your information. Read our complete privacy policy.",
  alternates: {
    canonical: "https://tracksy.me/privacy",
  },
  openGraph: {
    title: "Privacy Policy - Tracksy",
    description: "Learn how Tracksy protects your privacy. We collect minimal data and never sell your information.",
    url: "https://tracksy.me/privacy",
    type: "website",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
