"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowClassName?: string
}

export function GlowCard({ children, className, glowClassName }: GlowCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate position relative to the card
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })

    // Fade in the glow effect
    setOpacity(0.8)
  }

  const handleMouseLeave = () => {
    // Fade out the glow effect
    setOpacity(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden rounded-xl bg-card border border-border/40", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={cn("pointer-events-none absolute -inset-px opacity-0 transition duration-300", glowClassName)}
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(52, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  )
}
