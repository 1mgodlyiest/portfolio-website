"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  gradientClassName?: string
  duration?: number
  borderWidth?: number
  borderRadius?: number
  glowEffect?: boolean
}

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
  gradientClassName,
  duration = 8,
  borderWidth = 1,
  borderRadius = 12,
  glowEffect = true,
}: AnimatedGradientBorderProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("gradient-border-container")?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      id="gradient-border-container"
      className={cn("relative rounded-xl p-[1px] overflow-hidden group", containerClassName)}
      style={{ borderRadius: borderRadius }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-70 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-70",
          gradientClassName || "bg-gradient-to-r from-primary/50 via-primary to-primary/50",
        )}
        style={{
          backgroundSize: "200% 200%",
          animation: `gradient-animation ${duration}s linear infinite`,
          filter: glowEffect ? "blur(8px)" : "none",
        }}
      />
      <div
        className={cn("relative z-10 rounded-[calc(var(--radius)-1px)] bg-card", className)}
        style={{ borderRadius: borderRadius - borderWidth }}
      >
        {children}
      </div>
      <style jsx global>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  )
}
