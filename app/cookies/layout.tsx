import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn about how Tracksy uses cookies. We use essential cookies for functionality and analytics cookies only with your consent.",
  alternates: {
    canonical: "https://tracksy.me/cookies",
  },
  openGraph: {
    title: "Cookie Policy - Tracksy",
    description: "Learn about how Tracksy uses cookies. Essential cookies for functionality, analytics only with consent.",
    url: "https://tracksy.me/cookies",
    type: "website",
  },
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
