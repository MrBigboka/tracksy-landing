import { cn } from "@/lib/utils"

const getColorValue = (color: string) => {
  const colors: Record<string, string> = {
    blue: "#60a5fa",
    purple: "#a78bfa",
    green: "#4ade80",
    orange: "#fb923c",
    pink: "#f472b6",
    cyan: "#22d3ee",
    yellow: "#facc15",
    indigo: "#818cf8",
  }
  return colors[color] || "#60a5fa"
}

interface SessionCardProps {
  client: string
  project: string
  duration: string
  revenue: string
  status: "active" | "completed" | "paused"
  color?: string
  className?: string
}

export function SessionCard({
  client,
  project,
  duration,
  revenue,
  status,
  color = "blue",
  className,
}: SessionCardProps) {
  const statusColors = {
    active: "bg-green-400",
    completed: "bg-blue-400",
    paused: "bg-yellow-400",
  }

  return (
    <div
      className={cn(
        "flex-shrink-0 w-[280px] bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={cn("w-2 h-2 rounded-full", statusColors[status], status === "active" && "animate-pulse")} />
          <span className="text-white/70 text-xs font-medium uppercase tracking-wide">
            {status === "active" ? "En cours" : status === "completed" ? "Terminé" : "Pause"}
          </span>
        </div>
        <span className="text-[#D5FF3F] font-bold text-sm">{revenue}</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: getColorValue(color) }}
          />
          <span className="text-white font-semibold text-sm truncate">{client}</span>
        </div>
        <div className="text-white/60 text-xs truncate pl-4">{project}</div>
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <span className="text-white/40 text-xs">Durée</span>
          <span className="text-white font-mono text-sm">{duration}</span>
        </div>
      </div>
    </div>
  )
}
