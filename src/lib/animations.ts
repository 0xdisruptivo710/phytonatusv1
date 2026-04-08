import type { Easing } from "framer-motion"

const ease: Easing = [0.25, 0.1, 0.25, 1]
const smoothEase: Easing = [0.22, 1, 0.36, 1]

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

const duration = prefersReducedMotion ? 0 : 0.5
const shortDuration = prefersReducedMotion ? 0 : 0.4
const y = prefersReducedMotion ? 0 : 24

export const fadeUp = {
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration, ease },
} as const

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration, ease },
} as const

export const fadeUpLarge = {
  initial: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: prefersReducedMotion ? 0 : 0.7, ease: smoothEase },
} as const

export const scaleIn = {
  initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: smoothEase },
} as const

export const staggerContainer = {
  whileInView: {
    transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
  },
} as const

export const staggerItem = {
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: shortDuration, ease },
} as const

export const cardHover = {
  whileHover: prefersReducedMotion ? {} : { scale: 1.02 },
  transition: { duration: 0.2 },
} as const

export const cardHoverLift = {
  whileHover: prefersReducedMotion ? {} : { y: -8, scale: 1.01 },
  transition: { duration: 0.3, ease: smoothEase },
} as const

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: prefersReducedMotion ? 0 : 0.3 },
} as const
