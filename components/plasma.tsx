"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Renderer, Program, Mesh, Triangle } from 'ogl'
import './Plasma.css'

interface PlasmaProps {
  color?: string
  speed?: number
  direction?: 'forward' | 'reverse' | 'pingpong'
  scale?: number
  opacity?: number
  mouseInteractive?: boolean
}

// Device detection utilities
const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const isOldSafari = () => {
  if (typeof window === 'undefined') return false
  const userAgent = navigator.userAgent.toLowerCase()
  const isActuallySafari = /^((?!chrome|android).)*safari/i.test(userAgent)
  const versionMatch = userAgent.match(/version\/([0-9]+)/)
  return isActuallySafari && versionMatch && parseInt(versionMatch[1]) < 14
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [1, 0.5, 0.2]
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
}

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`

// Optimized mobile plasma - still beautiful but performant
const OptimizedMobilePlasma: React.FC<PlasmaProps> = ({ color = '#C8D64F', opacity = 0.6, speed = 1 }) => {
  return (
    <div className="plasma-container">
      {/* Multiple gradient layers for depth */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${color}12 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${color}08 0%, transparent 60%),
            radial-gradient(circle at 40% 90%, ${color}15 0%, transparent 45%),
            radial-gradient(circle at 90% 80%, ${color}06 0%, transparent 55%)
          `,
          animation: `plasma-float-1 ${20/speed}s ease-in-out infinite alternate`
        }}
      />
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          background: `
            radial-gradient(circle at 60% 50%, ${color}10 0%, transparent 40%),
            radial-gradient(circle at 10% 70%, ${color}08 0%, transparent 50%)
          `,
          animation: `plasma-float-2 ${15/speed}s ease-in-out infinite alternate-reverse`
        }}
      />
      
      <style jsx>{`
        @keyframes plasma-float-1 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(-8px, -4px) rotate(0.5deg) scale(1.02); }
          50% { transform: translate(-3px, -8px) rotate(1deg) scale(0.98); }
          75% { transform: translate(5px, -2px) rotate(0.3deg) scale(1.01); }
          100% { transform: translate(2px, -6px) rotate(-0.2deg) scale(0.99); }
        }
        @keyframes plasma-float-2 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(4px, -3px) rotate(-0.4deg) scale(1.01); }
          66% { transform: translate(-2px, 5px) rotate(0.8deg) scale(0.99); }
          100% { transform: translate(-6px, 1px) rotate(-0.6deg) scale(1.02); }
        }
      `}</style>
    </div>
  )
}

export const Plasma: React.FC<PlasmaProps> = ({
  color = '#C8D64F',
  speed = 1,
  direction = 'forward',
  scale = 1,
  opacity = 0.6,
  mouseInteractive = true
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const [shouldUseFallback, setShouldUseFallback] = useState(false)
  const [isCheckingCompatibility, setIsCheckingCompatibility] = useState(true)
  const [webglSupported, setWebglSupported] = useState(false)

  // Check device capabilities on mount
  useEffect(() => {
    const checkCompatibility = () => {
      // Use optimized version for mobile (but still animated!)
      if (isMobile()) {
        setShouldUseFallback(true)
        setIsCheckingCompatibility(false)
        return
      }

      // Use fallback only for very old Safari
      if (isOldSafari()) {
        setShouldUseFallback(true)
        setIsCheckingCompatibility(false)
        return
      }

      // Test WebGL2 support for desktop
      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl2')
        const hasWebGL2 = !!gl
        
        setWebglSupported(hasWebGL2)
        setShouldUseFallback(!hasWebGL2)
        setIsCheckingCompatibility(false)
      } catch (error) {
        console.warn('WebGL check failed, using mobile version:', error)
        setShouldUseFallback(true)
        setIsCheckingCompatibility(false)
      }
    }

    checkCompatibility()
  }, [])

  // WebGL effect - only runs when not using fallback
  useEffect(() => {
    if (shouldUseFallback || !containerRef.current) return

    try {
      const useCustomColor = color ? 1.0 : 0.0
      const customColorRgb = color ? hexToRgb(color) : [1, 1, 1]

      const directionMultiplier = direction === 'reverse' ? -1.0 : 1.0

      const renderer = new Renderer({
        webgl: 2,
        alpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 2)
      })
    const gl = renderer.gl
    const canvas = gl.canvas as HTMLCanvasElement
    canvas.style.display = 'block'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    containerRef.current.appendChild(canvas)

    const geometry = new Triangle(gl)

    const program = new Program(gl, {
      vertex: vertex,
      fragment: fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uCustomColor: { value: new Float32Array(customColorRgb) },
        uUseCustomColor: { value: useCustomColor },
        uSpeed: { value: speed * 0.4 },
        uDirection: { value: directionMultiplier },
        uScale: { value: scale },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0, 0]) },
        uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 }
      }
    })

    const mesh = new Mesh(gl, { geometry, program })

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteractive) return
      const rect = containerRef.current!.getBoundingClientRect()
      mousePos.current.x = e.clientX - rect.left
      mousePos.current.y = e.clientY - rect.top
      const mouseUniform = program.uniforms.uMouse.value as Float32Array
      mouseUniform[0] = mousePos.current.x
      mouseUniform[1] = mousePos.current.y
    }

    if (mouseInteractive) {
      containerRef.current.addEventListener('mousemove', handleMouseMove)
    }

    const setSize = () => {
      const rect = containerRef.current!.getBoundingClientRect()
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))
      renderer.setSize(width, height)
      const res = program.uniforms.iResolution.value as Float32Array
      res[0] = gl.drawingBufferWidth
      res[1] = gl.drawingBufferHeight
    }

    const ro = new ResizeObserver(setSize)
    ro.observe(containerRef.current)
    setSize()

    let raf = 0
    const t0 = performance.now()
    const loop = (t: number) => {
      let timeValue = (t - t0) * 0.001

      if (direction === 'pingpong') {
        const cycle = Math.sin(timeValue * 0.5) * directionMultiplier
        ;(program.uniforms.uDirection as any).value = cycle
      }

      ;(program.uniforms.iTime as any).value = timeValue
      renderer.render({ scene: mesh })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      if (mouseInteractive && containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove)
      }
      try {
        containerRef.current?.removeChild(canvas)
      } catch {}
    }
    } catch (error) {
      console.warn('WebGL Plasma failed, falling back to CSS animation:', error)
      // Force fallback on error
      setShouldUseFallback(true)
    }
  }, [color, speed, direction, scale, opacity, mouseInteractive])

  // Show loading state while checking compatibility
  if (isCheckingCompatibility) {
    return <div className="plasma-container"><div className="absolute inset-0 bg-black/20" /></div>
  }

  // Use optimized mobile plasma instead of WebGL for fallback cases
  if (shouldUseFallback) {
    return <OptimizedMobilePlasma color={color} opacity={opacity} speed={speed} />
  }

  // Render WebGL container for desktop
  return <div ref={containerRef} className="plasma-container" />
}

export default Plasma