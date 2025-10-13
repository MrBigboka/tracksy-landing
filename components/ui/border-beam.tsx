"use client"

import { cn } from "@/lib/utils"

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  delay = 0,
  colorFrom = "#D5FF3F",
  colorTo = "#C8D64F",
  borderWidth = 2,
}: BorderBeamProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}>
      <div
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          padding: `${borderWidth}px`,
          background: `linear-gradient(90deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          backgroundSize: `${size}% 100%`,
          animation: `border-beam ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <style jsx>{`
        @keyframes border-beam {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>
    </div>
  )
}
