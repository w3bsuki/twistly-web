"use client"

import { FC, ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string | string[]
  className?: string
  once?: boolean
  delay?: number
}

export const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  className = "",
  once = false,
  delay = 0,
}) => {
  const words = Array.isArray(text) ? text : [text]

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
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

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={child}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  )
} 