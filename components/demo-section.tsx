"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function DemoSection() {
  const { t } = useTranslation()

  const safeT = (key: string, fallback: string): string => {
    const translation = t(key)
    if (typeof translation === 'string' && translation !== key) {
      return translation
    }
    return fallback
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #D5FF3F 1px, transparent 1px),
            linear-gradient(to bottom, #D5FF3F 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 pb-12 mx-auto">
          <h2 className="text-xs sm:text-sm text-[#D5FF3F] font-mono font-medium tracking-wider uppercase">
            {safeT('demo.badge', 'DEMO')}
          </h2>
          <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl text-white">
            {safeT('demo.title', 'See Tracksy in action')}
          </h3>
          <p className="mt-6 text-base sm:text-lg leading-8 text-white/60 max-w-2xl mx-auto">
            {safeT('demo.subtitle', 'Discover how Tracksy simplifies time tracking, invoicing, and revenue management for freelancers and businesses.')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mx-auto grid max-w-sm grid-cols-1 gap-6 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
          
          {/* Card 1 - Time Tracking (Large) */}
          <div className="group relative items-start overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-[#D5FF3F]/30 transition-all duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D5FF3F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="font-semibold mb-2 text-[#D5FF3F] text-lg">
                {safeT('demo.card1.title', 'Precise time tracking')}
              </h3>
              <p className="text-white/70 text-sm mb-6">
                {safeT('demo.card1.description', 'Start your timer with one click and track every minute worked. Tracksy automatically records your sessions by client and project.')}
              </p>
            </div>

            {/* Browser Mockup */}
            <svg 
              width="1203" 
              height="753" 
              viewBox="0 0 1203 753" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
            >
              <g clipPath="url(#clip0)">
                <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#1a1a1a]" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#262626]" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-[#0a0a0a]" />
                <circle cx="27" cy="25" r="6" className="fill-red-500" />
                <circle cx="47" cy="25" r="6" className="fill-yellow-500" />
                <circle cx="67" cy="25" r="6" className="fill-green-500" />
                <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#1a1a1a" />
                <image href="/timer.png" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom)" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="1203" height="753" fill="white" />
                </clipPath>
                <clipPath id="roundedBottom">
                  <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/40 pointer-events-none" />
          </div>

          {/* Card 2 - Invoicing */}
          <div className="group relative items-start overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl order-3 xl:order-none hover:border-[#D5FF3F]/30 transition-all duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D5FF3F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="font-semibold mb-2 text-[#D5FF3F] text-lg">
                {safeT('demo.card2.title', 'Automated invoicing')}
              </h3>
              <p className="text-white/70 text-sm mb-6">
                {safeT('demo.card2.description', 'Generate professional invoices automatically based on your recorded time. No more manual calculations.')}
              </p>
            </div>

            <svg 
              width="1203" 
              height="753" 
              viewBox="0 0 1203 753" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
            >
              <g clipPath="url(#clip1)">
                <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#1a1a1a]" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#262626]" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-[#0a0a0a]" />
                <circle cx="27" cy="25" r="6" className="fill-red-500" />
                <circle cx="47" cy="25" r="6" className="fill-yellow-500" />
                <circle cx="67" cy="25" r="6" className="fill-green-500" />
                <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#1a1a1a" />
                <image href="/facturation.png" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom1)" />
              </g>
              <defs>
                <clipPath id="clip1">
                  <rect width="1203" height="753" fill="white" />
                </clipPath>
                <clipPath id="roundedBottom1">
                  <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/40 pointer-events-none" />
          </div>

          {/* Card 3 - Real-time Revenue (Tall) */}
          <div className="group relative items-start overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl md:row-span-2 hover:border-[#D5FF3F]/30 transition-all duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D5FF3F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="font-semibold mb-2 text-[#D5FF3F] text-lg">
                {safeT('demo.card3.title', 'Real-time revenue tracking')}
              </h3>
              <p className="text-white/70 text-sm mb-6">
                {safeT('demo.card3.description', 'Every minute worked transforms into visible revenue. Track your earnings in real-time.')}
              </p>
            </div>

            <svg 
              width="1203" 
              height="753" 
              viewBox="0 0 1203 753" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
            >
              <g clipPath="url(#clip2)">
                <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#1a1a1a]" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#262626]" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-[#0a0a0a]" />
                <circle cx="27" cy="25" r="6" className="fill-red-500" />
                <circle cx="47" cy="25" r="6" className="fill-yellow-500" />
                <circle cx="67" cy="25" r="6" className="fill-green-500" />
                <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#1a1a1a" />
                <image href="/1click.png" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom2)" />
              </g>
              <defs>
                <clipPath id="clip2">
                  <rect width="1203" height="753" fill="white" />
                </clipPath>
                <clipPath id="roundedBottom2">
                  <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/40 pointer-events-none" />
          </div>

          {/* Card 4 - Video Demo (Wide) */}
          <div className="group relative items-start overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl order-4 md:col-span-2 hover:border-[#D5FF3F]/30 transition-all duration-500 ease-out xl:order-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D5FF3F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 mb-6">
              <h3 className="font-semibold mb-2 text-[#D5FF3F] text-lg">
                {safeT('demo.card4.title', 'Watch the full demo')}
              </h3>
              <p className="text-white/70 text-sm">
                {safeT('demo.card4.description', 'See how Tracksy can transform your workflow in less than 2 minutes.')}
              </p>
            </div>

            {/* Video Thumbnail */}
            <div className="relative rounded-xl overflow-hidden bg-black/60 aspect-video group/video cursor-pointer">
              <Image 
                src="/timer.png" 
                alt="Demo video thumbnail" 
                fill
                className="object-cover opacity-60 group-hover/video:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D5FF3F] flex items-center justify-center group-hover/video:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black fill-black ml-1" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/40 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  )
}
