"use client"

import { ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxScrollProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  offset?: [number, number]
}

export function ParallaxScroll({
  children,
  className,
  speed = 0.5,
  direction = "up",
  offset = [-100, 100],
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Determine which transform to use based on direction
  let transform
  if (direction === "up" || direction === "down") {
    const yRange = direction === "up" ? offset : [offset[1], offset[0]]
    transform = useTransform(scrollYProgress, [0, 1], yRange)
  } else {
    const xRange = direction === "left" ? offset : [offset[1], offset[0]]
    transform = useTransform(scrollYProgress, [0, 1], xRange)
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{
          [direction === "up" || direction === "down" ? "y" : "x"]: transform,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}