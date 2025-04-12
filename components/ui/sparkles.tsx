"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useMousePosition } from "@/hooks/use-mouse-position"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
  particleOpacity?: number
  hoverEffect?: boolean
  opacity?: number
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = "#FFF",
  particleDensity = 100,
  opacity = 0.5,
  hoverEffect = false,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useMousePosition()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [particles, setParticles] = useState<any[]>([])
  const [hoveredParticle, setHoveredParticle] = useState<number | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")
      if (ctx) ctx.clearRect(0, 0, dimensions.width, dimensions.height)
    }

    const handleResize = () => {
      if (canvasRef.current) {
        setDimensions({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const newParticles = []
    for (let i = 0; i < particleDensity; i++) {
      const x = Math.random() * dimensions.width
      const y = Math.random() * dimensions.height
      const size = Math.random() * (maxSize - minSize) + minSize
      const color = particleColor
      const opacity = Math.random() * 0.8 + 0.2
      const directionX = (Math.random() - 0.5) * speed
      const directionY = (Math.random() - 0.5) * speed

      newParticles.push({
        x,
        y,
        size,
        color,
        opacity,
        directionX,
        directionY,
      })
    }

    setParticles(newParticles)
  }, [dimensions, minSize, maxSize, particleColor, particleDensity, speed])

  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      particles.forEach((particle, i) => {
        // Update particle position
        particle.x += particle.directionX
        particle.y += particle.directionY

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.directionX *= -1
        }

        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.directionY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Draw connections
        if (hoverEffect && mousePosition.x && mousePosition.y) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = 1 - distance / 120
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(mousePosition.x, mousePosition.y)
            ctx.strokeStyle = `${particle.color}${Math.floor(opacity * 50)
              .toString(16)
              .padStart(2, "0")}`
            ctx.stroke()
          }
        }
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [particles, dimensions, mousePosition, hoverEffect])

  return (
    <canvas
      id={id}
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className={cn("absolute inset-0", className)}
      style={{
        background,
        opacity,
      }}
    />
  )
}
