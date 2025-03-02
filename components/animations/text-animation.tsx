"use client"

import { JSX, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextAnimationProps {
  text: string
  className?: string
  wordClassName?: string
  charClassName?: string
  type?: "words" | "chars"
  staggerChildren?: number
  threshold?: number
  once?: boolean
  delay?: number
  tag?: keyof JSX.IntrinsicElements
  wordTag?: keyof JSX.IntrinsicElements
  charTag?: keyof JSX.IntrinsicElements
}

export function TextAnimation({
  text,
  className,
  wordClassName,
  charClassName,
  type = "words",
  staggerChildren = 0.03,
  threshold = 0.5,
  once = true,
  delay = 0,
  tag = "div",
  wordTag = "span",
  charTag = "span",
}: TextAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const words = text.split(" ")

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerChildren, 
        delayChildren: delay,
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  // Create the container element with the specified tag
  const MotionTag = motion[tag as keyof typeof motion] as any
  const WordTag = motion[wordTag as keyof typeof motion] as any
  const CharTag = motion[charTag as keyof typeof motion] as any

  return (
    <MotionTag
      ref={ref}
      className={cn("inline", className)}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {type === "words" ? (
        words.map((word, index) => (
          <WordTag
            key={index}
            className={cn("inline-block", wordClassName)}
            variants={child}
          >
            {word}{" "}
          </WordTag>
        ))
      ) : (
        words.map((word, index) => (
          <span key={index} className="inline-block">
            {Array.from(word).map((char, charIndex) => (
              <CharTag
                key={charIndex}
                className={cn("inline-block", charClassName)}
                variants={child}
              >
                {char}
              </CharTag>
            ))}
            <span>&nbsp;</span>
          </span>
        ))
      )}
    </MotionTag>
  )
}