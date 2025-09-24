"use client"

import React from 'react'
import './Plasma.css'

interface PlasmaProps {
  color?: string
  speed?: number
  opacity?: number
}

// PLASMA SIMPLE QUI MARCHE TOUJOURS !
export const PlasmaSimple: React.FC<PlasmaProps> = ({ 
  color = '#C8D64F', 
  opacity = 0.6, 
  speed = 1 
}) => {
  console.log('🎨 PLASMA SIMPLE: RENDERING WITH COLOR', color)
  
  return (
    <div className="plasma-container">
      {/* Layer 1 - Base glow */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${color}40 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${color}35 0%, transparent 60%),
            radial-gradient(circle at 40% 90%, ${color}45 0%, transparent 45%)
          `,
          animation: `plasma-float-1 ${20/speed}s ease-in-out infinite alternate`,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
      
      {/* Layer 2 - Moving patterns */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 60% 50%, ${color}38 0%, transparent 40%),
            radial-gradient(circle at 10% 70%, ${color}32 0%, transparent 50%),
            radial-gradient(circle at 85% 15%, ${color}28 0%, transparent 60%)
          `,
          animation: `plasma-float-2 ${15/speed}s ease-in-out infinite alternate-reverse`,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
      
      {/* Layer 3 - Accent highlights */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 30% 80%, ${color}42 0%, transparent 35%),
            radial-gradient(circle at 70% 10%, ${color}36 0%, transparent 55%),
            radial-gradient(circle at 90% 60%, ${color}30 0%, transparent 45%)
          `,
          animation: `plasma-float-3 ${25/speed}s ease-in-out infinite alternate`,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes plasma-float-1 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(-15px, -8px) rotate(1deg) scale(1.08); }
          50% { transform: translate(-6px, -15px) rotate(2deg) scale(0.92); }
          75% { transform: translate(10px, -4px) rotate(0.8deg) scale(1.05); }
          100% { transform: translate(4px, -10px) rotate(-0.5deg) scale(0.95); }
        }
        @keyframes plasma-float-2 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(8px, -6px) rotate(-0.8deg) scale(1.03); }
          66% { transform: translate(-4px, 10px) rotate(1.5deg) scale(0.97); }
          100% { transform: translate(-10px, 3px) rotate(-1.2deg) scale(1.06); }
        }
        @keyframes plasma-float-3 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          40% { transform: translate(-5px, 8px) rotate(0.6deg) scale(1.02); }
          80% { transform: translate(7px, -3px) rotate(-0.9deg) scale(0.98); }
          100% { transform: translate(-2px, -7px) rotate(0.3deg) scale(1.04); }
        }
      `}</style>
    </div>
  )
}

export default PlasmaSimple