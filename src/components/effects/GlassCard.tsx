import { motion } from "framer-motion"
import type { ReactNode, CSSProperties } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  glowColor?: string
  hoverGlow?: boolean
}

export function GlassCard({
  children,
  className = "",
  style,
  glowColor = "rgba(61, 92, 58, 0.15)",
  hoverGlow = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverGlow ? { y: -6 } : undefined}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md ${className}`}
      style={style}
    >
      {hoverGlow && (
        <div
          className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundColor: glowColor }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
