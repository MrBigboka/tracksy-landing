import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Users, FileText, BarChart3, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Time Tracking for Freelance Consultants",
  description: "Track every billable hour across all your consulting clients without spreadsheets or bloated tools. Tracksy is the simplest time tracking and invoicing stack built for solo consultants.",
  keywords: [
    "freelance consultant time tracking",
    "consultant time tracker",
    "solo consultant billing",
    "freelance time management",
    "consultant invoicing software",
    "billable hours tracker",
    "consulting time tracking app",
    "freelance billing software",
    "hourly rate tracker",
    "retainer tracking"
  ],
  alternates: {
    canonical: "https://tracksy.me/use-cases/freelance-consultant-time-tracking",
  },
  openGraph: {
    title: "Time Tracking for Freelance Consultants — Tracksy",
    description: "Track every billable hour across all your consulting clients. The simplest time tracking and invoicing stack built for solo consultants.",
    url: "https://tracksy.me/use-cases/freelance-consultant-time-tracking",
    type: "article",
  },
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I have to change my entire workflow to use Tracksy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You can start by tracking just one client or one project inside Tracksy. Once you're comfortable, you can move the rest of your work over."
      }
    },
    {
      "@type": "Question",
      name: "Can I still use spreadsheets if I want?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many consultants keep spreadsheets for forecasts and planning. Tracksy simply becomes the source of truth for actual hours, which you can export or reference in your existing files."
      }
    },
    {
      "@type": "Question",
      name: "Does Tracksy take screenshots or spy on me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tracksy is built for solo consultants, not for employee surveillance. There are no screenshots, no keystroke tracking, no creepy monitoring—just honest time tracking for better billing and decisions."
      }
    },
    {
      "@type": "Question",
      name: "What if I work on both hourly and fixed-fee projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly the reality Tracksy is built for. You can track time on any type of engagement and still use the data to invoice hourly work, check profitability on fixed-fee work, and make better calls on your retainers."
      }
    },
    {
      "@type": "Question",
      name: "Will this replace my accounting tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tracksy is not a full accounting suite—and that's on purpose. It focuses on tracking your time, turning it into clean invoices, and helping you see which clients/projects are profitable. Tracksy sits between your calendar, your work, and your accounting, making sure your time turns into revenue."
      }
    }
  ]
}

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Time Tracking for Freelance Consultants — Tracksy",
  description: "Track every billable hour across all your consulting clients without spreadsheets or bloated tools.",
  author: {
    "@type": "Organization",
    name: "Tracksy",
    url: "https://tracksy.me"
  },
  publisher: {
    "@type": "Organization",
    name: "Tracksy",
    logo: {
      "@type": "ImageObject",
      url: "https://tracksy.me/favicon-192x192.png"
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://tracksy.me/use-cases/freelance-consultant-time-tracking"
  }
}

export default function FreelanceConsultantPage() {
  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      <main className="relative min-h-[100dvh] bg-transparent text-[#F2F3F5]">
        <SiteHeader />
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#D5FF3F] text-sm font-medium mb-4 uppercase tracking-wider">
              Use case · Freelance / solo consultants
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Time tracking made for freelance consultants, <span className="text-[#D5FF3F]">not agencies</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Stop rebuilding your week from memory in spreadsheets. Tracksy helps solo consultants capture every billable hour, see exactly where their time goes, and turn it into clean invoices in a few clicks.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Users className="w-4 h-4 text-[#D5FF3F]" />
                <span className="text-sm">Freelance & solo consultants</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Clock className="w-4 h-4 text-[#D5FF3F]" />
                <span className="text-sm">Hourly, retainers & fixed-fee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <BarChart3 className="w-4 h-4 text-[#D5FF3F]" />
                <span className="text-sm">Clearer profitability</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-[#D5FF3F] text-black hover:bg-[#C8D64F] font-semibold px-8 py-6 rounded-full text-lg">
                <a href="https://app.tracksy.me">Start free trial</a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg">
                <Link href="/#demo-section">Watch interactive demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stop losing hours to memory and manual logs
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Most consultants don't lose money on their <strong className="text-white">rate</strong>.<br />
              They lose it on <strong className="text-[#D5FF3F]">untracked time</strong>.
            </p>

            <p className="text-white/70 mb-6">Rebuilding your week from emails, calls, and DMs leads to:</p>
            <ul className="space-y-3 mb-10">
              {[
                "quick calls that never get logged",
                "short \"can we just jump on Zoom?\" meetings that stay off the invoice",
                "vague \"I think it was 3 hours\" line items at the end of the month"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="text-red-400 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-white/70 mb-6">With Tracksy, you replace this with a simple, repeatable system:</p>
            <ul className="space-y-3">
              {[
                "start a timer in one click when you jump into client work",
                "capture ad-hoc tasks with fast manual entries",
                "get gentle reminders when you haven't logged time in a while"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#D5FF3F] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg text-white/60 italic">
              You don't need a giant timesheet.<br />
              You need a tool that makes logging <strong className="text-white">the next minute of work</strong> effortless.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Track every client, project, and task in one place
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Juggling multiple clients is normal in consulting.<br />
              The hard part is knowing <strong className="text-white">where your day actually went</strong>.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { title: "Clients", desc: "each company or person you work with" },
                { title: "Projects", desc: "engagements, retainers, or major workstreams" },
                { title: "Tasks/Tags", desc: "calls, workshops, strategy, implementation, etc." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-[#D5FF3F] font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-white/70 mb-4">You can:</p>
            <ul className="space-y-3 mb-8">
              {[
                "switch between clients all day without losing track of your time",
                "see, at a glance, how many hours you've done per project this week or month",
                "keep admin, prep, and delivery separated so you see what really drives revenue"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#D5FF3F] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-white/60 italic">
              No more digging through emails to explain "where the time went".<br />
              It's all logged as you go.
            </p>
          </div>
        </section>

        {/* Billing Models Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Bill accurately for hourly, fixed-fee, and retainer work
            </h2>
            <p className="text-xl text-white/70 mb-12">
              However you price your consulting, you win when your <strong className="text-white">time tracking matches your billing model</strong>.
            </p>

            <div className="space-y-10">
              {/* Hourly */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-[#D5FF3F] mb-4">Hourly engagements</h3>
                <ul className="space-y-2">
                  {[
                    "log every call, meeting, and async work against the right client",
                    "apply the correct hourly rate automatically when you invoice",
                    "avoid the classic \"I forgot to add that extra call\" problem"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#D5FF3F] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fixed-fee */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-[#D5FF3F] mb-4">Fixed-fee projects</h3>
                <ul className="space-y-2">
                  {[
                    "track time even if the client pays a flat fee",
                    "see how many hours a project is actually taking vs what you planned",
                    "use real numbers to adjust your scope or pricing next time"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#D5FF3F] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Retainers */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-[#D5FF3F] mb-4">Retainers</h3>
                <ul className="space-y-2">
                  {[
                    "track hours against a monthly cap (e.g. 10h / 20h / 40h)",
                    "see when a client is close to using their retainer",
                    "decide if you upsell, roll over, or reset based on data"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#D5FF3F] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-10 text-white/60 italic text-center">
              Time tracking isn't just about billing more.<br />
              It's about making sure fixed-fee work and retainers don't quietly eat your margins.
            </p>
          </div>
        </section>

        {/* Client Reports Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Show clients exactly how you spent their budget
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Clients don't just want an invoice.<br />
              They want to feel confident that their money was well spent.
            </p>

            <p className="text-white/70 mb-6">Tracksy helps you generate <strong className="text-white">client-friendly time reports</strong>:</p>
            <ul className="space-y-3 mb-8">
              {[
                "grouped by client, project, and task",
                "with clear descriptions they can actually understand",
                "covering the exact period you're invoicing for"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <FileText className="w-5 h-5 text-[#D5FF3F] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-white/70 mb-4">You can:</p>
            <ul className="space-y-3 mb-8">
              {[
                "attach a report to your invoice for full transparency",
                "use it as a talking point in monthly review calls",
                "reduce back-and-forth about \"why this invoice is higher this month\""
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#D5FF3F] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-white/60 italic">
              When your time tracking is clean, conversations about money get easier.
            </p>
          </div>
        </section>

        {/* Weekly Example */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              How Tracksy fits into a real consulting week
            </h2>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-[#D5FF3F] font-semibold mb-2">Monday</h3>
                <p className="text-white/70">Start a timer when you jump into Client A's strategy doc; log a quick 30-minute call with Client B using a fast manual entry.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-[#D5FF3F] font-semibold mb-2">Wednesday</h3>
                <p className="text-white/70">Switch between three clients in the same afternoon; Tracksy keeps your hours cleanly separated by client and project.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-[#D5FF3F] font-semibold mb-2">Friday</h3>
                <p className="text-white/70">Open Tracksy and instantly see:</p>
                <ul className="mt-2 space-y-1 text-white/60">
                  <li>• how many hours you've done per client</li>
                  <li>• which retainers are close to their cap</li>
                  <li>• which projects are going over what you estimated</li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-lg text-white/60 italic text-center">
              At the end of the month, your invoices are <strong className="text-white">built from actual time</strong>, not guesswork.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Try Tracksy on your next consulting project
            </h2>
            <p className="text-xl text-white/70 mb-8">
              You don't need to rebuild your entire workflow to see if Tracksy fits.<br />
              Just run <strong className="text-white">your next project or retainer</strong> through it and compare:
            </p>

            <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
              {[
                "how many hours you would have forgotten",
                "how much easier it is to build the invoice",
                "how clear your view of profitability becomes"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#D5FF3F] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-[#D5FF3F] text-black hover:bg-[#C8D64F] font-semibold px-8 py-6 rounded-full text-lg">
                <a href="https://app.tracksy.me">Start free trial</a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg">
                <Link href="/#demo-section">Watch interactive demo</Link>
              </Button>
            </div>

            <p className="mt-8 text-white/50">
              By the end of the week, you'll know exactly how many <strong className="text-[#D5FF3F]">billable hours you recovered</strong>.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              FAQ – Time tracking for freelance consultants
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Do I have to change my entire workflow to use Tracksy?",
                  a: "No. You can start by tracking just one client or one project inside Tracksy. Once you're comfortable, you can move the rest of your work over."
                },
                {
                  q: "Can I still use spreadsheets if I want?",
                  a: "Yes. Many consultants keep spreadsheets for forecasts and planning. Tracksy simply becomes the source of truth for actual hours, which you can export or reference in your existing files."
                },
                {
                  q: "Does Tracksy take screenshots or spy on me?",
                  a: "No. Tracksy is built for solo consultants, not for employee surveillance. There are no screenshots, no keystroke tracking, no creepy monitoring—just honest time tracking for better billing and decisions."
                },
                {
                  q: "What if I work on both hourly and fixed-fee projects?",
                  a: "That's exactly the reality Tracksy is built for. You can track time on any type of engagement and still use the data to: invoice hourly work, check profitability on fixed-fee work, and make better calls on your retainers."
                },
                {
                  q: "Will this replace my accounting tool?",
                  a: "No. Tracksy is not a full accounting suite—and that's on purpose. It focuses on: tracking your time, turning it into clean invoices, and helping you see which clients/projects are profitable. Tracksy sits between your calendar, your work, and your accounting, making sure your time turns into revenue."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-white/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What to do next
            </h2>
            <p className="text-lg text-white/70 mb-8">
              If any of this feels familiar:
            </p>
            <ul className="text-left max-w-lg mx-auto space-y-3 mb-10 text-white/70">
              <li>• you're guessing how many hours you worked last month</li>
              <li>• you're underbilling because you forget "small" tasks</li>
              <li>• you're not sure which clients are truly worth your time</li>
            </ul>
            <p className="text-xl text-white mb-10">Then Tracksy is designed for you.</p>

            <div className="bg-white/5 border border-[#D5FF3F]/30 rounded-2xl p-8 max-w-lg mx-auto mb-10">
              <ol className="text-left space-y-4">
                <li className="flex gap-4">
                  <span className="bg-[#D5FF3F] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <span className="text-white/80"><strong className="text-white">Start a free trial</strong> and add your current clients</span>
                </li>
                <li className="flex gap-4">
                  <span className="bg-[#D5FF3F] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <span className="text-white/80"><strong className="text-white">Track one full week</strong> of consulting work inside Tracksy</span>
                </li>
                <li className="flex gap-4">
                  <span className="bg-[#D5FF3F] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <span className="text-white/80"><strong className="text-white">Compare</strong> your invoice and your numbers with what you used to do</span>
                </li>
              </ol>
            </div>

            <p className="text-white/60 mb-8">
              If Tracksy helps you recover even <strong className="text-[#D5FF3F]">one lost hour per month</strong>, it more than pays for itself.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-[#D5FF3F] text-black hover:bg-[#C8D64F] font-semibold px-8 py-6 rounded-full text-lg">
                <a href="https://app.tracksy.me">
                  Start free trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg">
                <Link href="/#demo-section">Watch interactive demo</Link>
              </Button>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>
    </>
  )
}
