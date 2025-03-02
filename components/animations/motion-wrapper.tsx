"use client"

import { ReactNode } from "react"
import { motion, MotionProps, Variant } from "framer-motion"
import { cn } from "@/lib/utils"

type AnimationVariant = "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "slideUp" | "slideDown" | "staggered"

interface MotionWrapperProps extends MotionProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  staggerChildren?: number
  staggerDelay?: number
}

const variants: Record<AnimationVariant, (props: Partial<MotionWrapperProps>) => Record<string, Variant>> = {
  fadeIn: ({ duration = 0.5, delay = 0 }) => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration, delay, ease: "easeOut" }
    }
  }),
  fadeInUp: ({ duration = 0.5, delay = 0 }) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration, delay, ease: "easeOut" }
    }
  }),
  fadeInDown: ({ duration = 0.5, delay = 0 }) => ({
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration, delay, ease: "easeOut" }
    }
  }),
  fadeInLeft: ({ duration = 0.5, delay = 0 }) => ({
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration, delay, ease: "easeOut" }
    }
  }),
  fadeInRight: ({ duration = 0.5, delay = 0 }) => ({
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration, delay, ease: "easeOut" }
    }
  }),
  zoomIn: ({ duration = 0.5, delay = 0 }) => ({
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration, delay, ease: "easeOut" }
    }
  }),
  slideUp: ({ duration = 0.5, delay = 0 }) => ({
    hidden: { y: 100 },
    visible: { 
      y: 0,
      transition: { duration, delay, ease: "easeOut" }
    }
  }),
  slideDown: ({ duration = 0.5, delay = 0 }) => ({
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { duration, delay, ease: "easeOut" }
    }
  }),
  staggered: ({ duration = 0.5, delay = 0, staggerChildren = 0.1 }) => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration, 
        delay,
        staggerChildren,
        delayChildren: delay,
      }
    }
  }),
}

export function MotionWrapper({
  children,
  className,
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3,
  staggerChildren = 0.1,
  staggerDelay = 0,
  ...props
}: MotionWrapperProps) {
  const selectedVariant = variants[variant]({ delay, duration, staggerChildren })

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={selectedVariant}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// For use with staggered animations
export function MotionItem({ 
  children, 
  className,
  delay = 0,
  duration = 0.5,
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration, delay, ease: "easeOut" }
        }
      }}
    >
      {children}
    </motion.div>
  )
}