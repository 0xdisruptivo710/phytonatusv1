import { motion } from "framer-motion"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
  tag?: "h1" | "h2" | "h3" | "p" | "span"
}

export function TextReveal({
  children,
  className = "",
  delay = 0.2,
  staggerDelay = 0.04,
  tag: Tag = "h1",
}: TextRevealProps) {
  const words = children.split(" ")

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 30, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </Tag>
  )
}
