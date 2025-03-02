"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  threshold = 0.3,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once,
    amount: threshold 
  })

  // Explicitly define a type for initial and animate
  let initial: Record<string, number> = { opacity: 0 }
  let animate: Record<string, number> = { opacity: 1 }

  if (direction === "up") initial.y = distance
  if (direction === "down") initial.y = -distance
  if (direction === "left") initial.x = distance
  if (direction === "right") initial.x = -distance

  if (direction !== "none") {
    animate.x = 0
    animate.y = 0
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}