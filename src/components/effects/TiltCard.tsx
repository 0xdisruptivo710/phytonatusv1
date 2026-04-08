import { useRef, type ReactNode, type CSSProperties } from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  tiltDegree?: number
  glareColor?: string
}

export function TiltCard({ children, className = "", style, tiltDegree = 8, glareColor = "rgba(61, 92, 58, 0.08)" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltDegree, -tiltDegree]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltDegree, tiltDegree]), { stiffness: 200, damping: 30 })

  const glareXPercent = useTransform(mouseX, [0, 1], [0, 100])
  const glareYPercent = useTransform(mouseY, [0, 1], [0, 100])
  const background = useMotionTemplate`radial-gradient(circle at ${glareXPercent}% ${glareYPercent}%, ${glareColor}, transparent 60%)`

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        ...style,
        perspective: 800,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />
    </motion.div>
  )
}
