import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Tracksy's Terms of Service. Understand your rights and responsibilities when using our time tracking and business management platform.",
  alternates: {
    canonical: "https://tracksy.me/terms",
  },
  openGraph: {
    title: "Terms of Service - Tracksy",
    description: "Read Tracksy's Terms of Service. Understand your rights and responsibilities when using our platform.",
    url: "https://tracksy.me/terms",
    type: "website",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
