"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface PlasmaProps {
  color?: string
  speed?: number
  direction?: "forward" | "reverse" | "pingpong"
  scale?: number
  opacity?: number
  mouseInteractive?: boolean
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [0.784, 0.839, 0.310] // Default to #C8D64F
  return [
    Number.parseInt(result[1], 16) / 255,
    Number.parseInt(result[2], 16) / 255,
    Number.parseInt(result[3], 16) / 255,
  ]
}

const vertexShader = `
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
`

const fragmentShader = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec3 u_color;
  uniform float u_speed;
  uniform float u_direction;
  uniform float u_scale;
  uniform float u_opacity;
  uniform vec2 u_mouse;
  uniform float u_mouseInteractive;

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv = (uv - 0.5) * u_scale + 0.5;
    
    // Mouse interaction
    if (u_mouseInteractive > 0.5) {
      vec2 mouse = u_mouse / u_resolution.xy;
      float dist = distance(uv, mouse);
      uv += (mouse - uv) * 0.1 * exp(-dist * 5.0);
    }
    
    float time = u_time * u_speed * u_direction;
    
    // Plasma effect
    float x = uv.x;
    float y = uv.y;
    
    float v = 0.0;
    v += sin((x + time) * 10.0);
    v += sin((y + time / 2.0) * 10.0);
    v += sin((x + y + time / 2.0) * 10.0);
    
    float cx = x + 0.5 * sin(time / 5.0);
    float cy = y + 0.5 * cos(time / 3.0);
    v += sin(sqrt(100.0 * (cx * cx + cy * cy)) + time);
    
    v = v / 4.0;
    
    // Create smooth plasma colors
    vec3 col = vec3(
      sin(v * 3.14159),
      sin(v * 3.14159 + 2.0 * 3.14159 / 3.0),
      sin(v * 3.14159 + 4.0 * 3.14159 / 3.0)
    );
    
    // Apply custom color tint
    col = mix(col, col * u_color, 0.8);
    col = abs(col);
    
    gl_FragColor = vec4(col * u_opacity, u_opacity * 0.8);
  }
`

export const Plasma: React.FC<PlasmaProps> = ({
  color = "#C8D64F",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 0.3,
  mouseInteractive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    if (!gl) {
      console.warn("WebGL not supported")
      return
    }

    // Create shader program
    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      
      return shader
    }

    const createProgram = (gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) => {
      const program = gl.createProgram()
      if (!program) return null
      
      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)
      
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program link error:", gl.getProgramInfoLog(program))
        gl.deleteProgram(program)
        return null
      }
      
      return program
    }

    const vShader = createShader(gl, gl.VERTEX_SHADER, vertexShader)
    const fShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader)
    
    if (!vShader || !fShader) return

    const program = createProgram(gl, vShader, fShader)
    if (!program) return

    // Create geometry (full screen quad)
    const positions = new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ])

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, "position")
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution")
    const timeLocation = gl.getUniformLocation(program, "u_time")
    const colorLocation = gl.getUniformLocation(program, "u_color")
    const speedLocation = gl.getUniformLocation(program, "u_speed")
    const directionLocation = gl.getUniformLocation(program, "u_direction")
    const scaleLocation = gl.getUniformLocation(program, "u_scale")
    const opacityLocation = gl.getUniformLocation(program, "u_opacity")
    const mouseLocation = gl.getUniformLocation(program, "u_mouse")
    const mouseInteractiveLocation = gl.getUniformLocation(program, "u_mouseInteractive")

    // Resize handler
    const resize = () => {
      const displayWidth = canvas.clientWidth
      const displayHeight = canvas.clientHeight
      
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth
        canvas.height = displayHeight
      }
      
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    // Mouse handler
    const handleMouseMove = (event: MouseEvent) => {
      if (!mouseInteractive) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: rect.height - (event.clientY - rect.top), // Flip Y coordinate
      }
    }

    // Setup
    resize()
    window.addEventListener("resize", resize)
    if (mouseInteractive) {
      canvas.addEventListener("mousemove", handleMouseMove)
    }

    // Animation loop
    const startTime = Date.now()
    const animate = () => {
      const currentTime = (Date.now() - startTime) / 1000
      
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

      gl.useProgram(program)

      // Set uniforms
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, currentTime)
      
      const [r, g, b] = hexToRgb(color)
      gl.uniform3f(colorLocation, r, g, b)
      
      gl.uniform1f(speedLocation, speed)
      gl.uniform1f(directionLocation, direction === "reverse" ? -1 : direction === "pingpong" ? Math.sin(currentTime * 0.5) : 1)
      gl.uniform1f(scaleLocation, scale)
      gl.uniform1f(opacityLocation, opacity)
      gl.uniform2f(mouseLocation, mouseRef.current.x, mouseRef.current.y)
      gl.uniform1f(mouseInteractiveLocation, mouseInteractive ? 1 : 0)

      // Set attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resize)
      if (mouseInteractive) {
        canvas.removeEventListener("mousemove", handleMouseMove)
      }
      
      // Cleanup WebGL resources
      gl.deleteProgram(program)
      gl.deleteShader(vShader)
      gl.deleteShader(fShader)
      gl.deleteBuffer(positionBuffer)
    }
  }, [color, speed, direction, scale, opacity, mouseInteractive])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ 
        display: 'block',
        width: '100%',
        height: '100%'
      }}
    />
  )
}

export default Plasma