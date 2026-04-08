# Golden Craft Visual Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Phytonatus site from a functional MVP into a visually stunning, premium natural-products brand experience with cinematic animations, rich textures, glassmorphism, 3D effects, and micro-interactions.

**Architecture:** The redesign layers new visual effects on top of the existing React + Tailwind + Framer Motion stack. Reusable effect components (ScrollProgress, ParticleField, TiltCard, TextReveal, GlassCard) are created in `src/components/effects/` and composed into existing pages. Typography is upgraded from Cormorant Garamond to Fraunces (variable). CSS design tokens expand with new animations, gradients, and utility classes.

**Tech Stack:** React 19, Tailwind CSS v4, Framer Motion 12, @fontsource-variable/fraunces, lucide-react

---

## File Structure

### New files to create:
- `src/components/effects/ScrollProgress.tsx` — Golden scroll progress bar at top of page
- `src/components/effects/ParticleField.tsx` — CSS-animated floating particles for hero backgrounds
- `src/components/effects/TiltCard.tsx` — 3D tilt-on-mousemove wrapper component
- `src/components/effects/TextReveal.tsx` — Word-by-word staggered text reveal animation
- `src/components/effects/GlassCard.tsx` — Glassmorphism card with backdrop-blur and glow
- `src/components/effects/AnimatedHoneycomb.tsx` — Shared animated honeycomb SVG pattern (replaces duplicated static patterns)

### Files to modify:
- `src/index.css` — New font import, animations (shimmer, glow-pulse, tilt), gradient utilities, glassmorphism classes
- `src/lib/animations.ts` — New animation presets (textReveal, parallaxLayer, magneticHover, glowPulse)
- `src/App.tsx` — Add ScrollProgress component
- `src/components/layout/Header.tsx` — Glassmorphism on scroll, blur transition, golden glow nav indicator
- `src/components/layout/Footer.tsx` — Premium dark footer with animated golden accents
- `src/pages/Home.tsx` — Cinematic hero with ParticleField + TextReveal, GlassCards, TiltCards
- `src/pages/Institucional.tsx` — Enhanced with new effects, richer section design
- `src/pages/Marcas.tsx` — Rich dark hero, enhanced with TiltCards
- `src/components/sections/BrandSlice.tsx` — 3D tilt on image, glow effects, richer layout
- `src/pages/PrivateLabel.tsx` — Animated timeline visual, GlassCards
- `src/pages/OndeEncontrar.tsx` — GlassCards for channels, richer layout
- `src/pages/Contato.tsx` — Glassmorphism form, enhanced visual treatment
- `src/components/sections/PlaceholderImage.tsx` — Add shimmer loading animation
- `src/components/sections/QualitySeals.tsx` — Glowing seal badges with hover effects
- `src/components/sections/PrivateLabelClients.tsx` — Enhanced with glow hover

---

### Task 1: Foundation — Typography & CSS Design System

**Files:**
- Modify: `package.json` (install font)
- Modify: `src/index.css`

- [ ] **Step 1: Install Fraunces variable font**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm install @fontsource-variable/fraunces
```

- [ ] **Step 2: Update `src/index.css` — Replace font, add new animations and utilities**

Replace the entire file with:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme {
  --font-display: "Fraunces", serif;
  --font-body: "DM Sans", sans-serif;

  --color-brand-bg: #F7F4EF;
  --color-brand-surface: #FFFFFF;
  --color-brand-text: #1C1C1A;
  --color-brand-muted: #7A7873;
  --color-brand-border: #E2DDD6;
  --color-brand-warm: #FAF6F0;
  --color-brand-cream: #F0EBE3;
  --color-brand-dark: #2A2926;

  --color-mel-accent: #C18A2A;
  --color-mel-light: #F5E6C8;
  --color-nuts-accent: #B83232;
  --color-nuts-light: #F5D4D4;
  --color-gourmet-accent: #8B2020;
  --color-gourmet-light: #F0D0D0;
  --color-phyto-accent: #3D5C3A;
  --color-phyto-light: #D4E5D2;
}

/* ═══════════════════════════ GRAIN TEXTURE ═══════════════════════════ */
@layer utilities {
  .grain::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.04;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px 256px;
    mix-blend-mode: multiply;
    z-index: 1;
  }

  /* ═══════════════════════════ TEXT GRADIENTS ═══════════════════════════ */
  .text-gradient-amber {
    background: linear-gradient(135deg, #D4A03A 0%, #F0C75E 40%, #C18A2A 70%, #E5B85A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-gradient-green {
    background: linear-gradient(135deg, #3D5C3A 0%, #5A8A56 50%, #3D5C3A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ═══════════════════════════ GLASSMORPHISM ═══════════════════════════ */
  .glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px) saturate(150%);
    -webkit-backdrop-filter: blur(12px) saturate(150%);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .glass-light {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  /* ═══════════════════════════ GLOW EFFECTS ═══════════════════════════ */
  .glow-amber {
    box-shadow: 0 0 20px rgba(193, 138, 42, 0.15), 0 0 60px rgba(193, 138, 42, 0.05);
  }

  .glow-amber-strong {
    box-shadow: 0 0 30px rgba(193, 138, 42, 0.25), 0 0 80px rgba(193, 138, 42, 0.1);
  }

  /* ═══════════════════════════ SHIMMER ═══════════════════════════ */
  .shimmer {
    position: relative;
    overflow: hidden;
  }

  .shimmer::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      transparent 25%,
      rgba(255, 255, 255, 0.15) 50%,
      transparent 75%
    );
    transform: translateX(-100%);
    animation: shimmer-slide 2.5s ease-in-out infinite;
    z-index: 1;
    pointer-events: none;
  }

  /* ═══════════════════════════ UNDERLINE DRAW ═══════════════════════════ */
  .link-underline {
    position: relative;
  }

  .link-underline::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
    background: currentColor;
    transition: width 0.3s ease;
  }

  .link-underline:hover::after {
    width: 100%;
  }
}

/* ═══════════════════════════ KEYFRAMES ═══════════════════════════ */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes pulse-soft {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}

@keyframes draw-line {
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
}

@keyframes shimmer-slide {
  0% { transform: translateX(-100%); }
  60% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.4; box-shadow: 0 0 20px rgba(193, 138, 42, 0.1); }
  50% { opacity: 0.8; box-shadow: 0 0 40px rgba(193, 138, 42, 0.25); }
}

@keyframes particle-drift {
  0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) translateX(50px) scale(0.5); opacity: 0; }
}

@keyframes honeycomb-draw {
  0% { stroke-dashoffset: 400; opacity: 0; }
  50% { opacity: 0.06; }
  100% { stroke-dashoffset: 0; opacity: 0.03; }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse 35s linear infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-soft {
  animation: pulse-soft 4s ease-in-out infinite;
}

.animate-glow-pulse {
  animation: glow-pulse 3s ease-in-out infinite;
}

/* ═══════════════════════════ BASE STYLES ═══════════════════════════ */
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    background-color: var(--color-brand-bg);
    color: var(--color-brand-text);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 700;
    letter-spacing: -0.02em;
    font-variation-settings: "opsz" 72;
  }

  ::selection {
    background-color: #C18A2A;
    color: white;
  }
}

@theme inline {
  --font-sans: "DM Sans", sans-serif;
  --font-heading: "Fraunces", serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
}

:root {
  --background: #F7F4EF;
  --foreground: #1C1C1A;
  --card: #FFFFFF;
  --card-foreground: #1C1C1A;
  --popover: #FFFFFF;
  --popover-foreground: #1C1C1A;
  --primary: #3D5C3A;
  --primary-foreground: #FFFFFF;
  --secondary: #F0EBE3;
  --secondary-foreground: #1C1C1A;
  --muted: #F0EBE3;
  --muted-foreground: #7A7873;
  --accent: #F0EBE3;
  --accent-foreground: #1C1C1A;
  --destructive: #B83232;
  --border: #E2DDD6;
  --input: #E2DDD6;
  --ring: #3D5C3A;
  --radius: 0.625rem;
}
```

- [ ] **Step 3: Import font in `src/main.tsx`**

Add at the top of `src/main.tsx`, after the existing imports but before ReactDOM render:

```typescript
import "@fontsource-variable/fraunces"
```

- [ ] **Step 4: Build verification**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm run build
```

Expected: Build succeeds with zero errors.

- [ ] **Step 5: Commit**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && git add src/index.css src/main.tsx package.json package-lock.json && git commit -m "feat: upgrade typography to Fraunces, add glassmorphism/shimmer/glow CSS utilities"
```

---

### Task 2: Reusable Effect Components

**Files:**
- Create: `src/components/effects/ScrollProgress.tsx`
- Create: `src/components/effects/ParticleField.tsx`
- Create: `src/components/effects/TiltCard.tsx`
- Create: `src/components/effects/TextReveal.tsx`
- Create: `src/components/effects/GlassCard.tsx`
- Create: `src/components/effects/AnimatedHoneycomb.tsx`

- [ ] **Step 1: Create `src/components/effects/ScrollProgress.tsx`**

```tsx
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #C18A2A, #E5B85A, #C18A2A)",
        boxShadow: "0 0 10px rgba(193, 138, 42, 0.5)",
      }}
    />
  )
}
```

- [ ] **Step 2: Create `src/components/effects/ParticleField.tsx`**

```tsx
import { useMemo } from "react"

interface ParticleFieldProps {
  count?: number
  color?: string
}

export function ParticleField({ count = 30, color = "rgba(193, 138, 42, 0.3)" }: ParticleFieldProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.1,
      })),
    [count]
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            backgroundColor: color,
            opacity: p.opacity,
            animation: `particle-drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
```

- [ ] **Step 3: Create `src/components/effects/TiltCard.tsx`**

```tsx
import { useRef, type ReactNode, type CSSProperties } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  tiltDegree?: number
  glareColor?: string
}

export function TiltCard({ children, className = "", style, tiltDegree = 8, glareColor = "rgba(193, 138, 42, 0.08)" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltDegree, -tiltDegree]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltDegree, tiltDegree]), { stiffness: 200, damping: 30 })

  const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"])
  const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"])

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
      {/* Glare overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, ${glareColor}, transparent 60%)`,
        }}
        aria-hidden="true"
      />
    </motion.div>
  )
}
```

Note: The glare overlay uses CSS variable interpolation. In practice, Framer Motion's `useTransform` returns `MotionValue` which can't be used in template literals for the `background` CSS prop. The implementing agent should use `useMotionTemplate` from framer-motion instead:

```tsx
import { useMotionTemplate } from "framer-motion"

// Inside the component:
const background = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor}, transparent 60%)`
```

And then use `style={{ background }}` on the glare div.

**Corrected `glareX` and `glareY`:**
```tsx
const glareX = useTransform(mouseX, [0, 1], [0, 100])
const glareY = useTransform(mouseY, [0, 1], [0, 100])
```

- [ ] **Step 4: Create `src/components/effects/TextReveal.tsx`**

```tsx
import { motion } from "framer-motion"
import type { ReactNode } from "react"

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
  tag = "h1",
}: TextRevealProps) {
  const words = children.split(" ")
  const Tag = tag

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
```

- [ ] **Step 5: Create `src/components/effects/GlassCard.tsx`**

```tsx
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
  glowColor = "rgba(193, 138, 42, 0.15)",
  hoverGlow = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverGlow ? { y: -6 } : undefined}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md ${className}`}
      style={style}
    >
      {/* Glow effect on hover */}
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
```

- [ ] **Step 6: Create `src/components/effects/AnimatedHoneycomb.tsx`**

```tsx
interface AnimatedHoneycombProps {
  id?: string
  className?: string
  animate?: boolean
}

export function AnimatedHoneycomb({
  id = "honeycomb",
  className = "absolute inset-0 size-full opacity-[0.03]",
  animate = true,
}: AnimatedHoneycombProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2)"
        >
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            style={
              animate
                ? {
                    strokeDasharray: 400,
                    animation: "honeycomb-draw 3s ease forwards",
                  }
                : undefined
            }
          />
          <path
            d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            style={
              animate
                ? {
                    strokeDasharray: 400,
                    animation: "honeycomb-draw 3s ease 0.5s forwards",
                  }
                : undefined
            }
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
```

- [ ] **Step 7: Build verification**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm run build
```

Expected: Build succeeds with zero errors.

- [ ] **Step 8: Commit**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && git add src/components/effects/ && git commit -m "feat: create reusable effect components (ScrollProgress, ParticleField, TiltCard, TextReveal, GlassCard, AnimatedHoneycomb)"
```

---

### Task 3: Enhanced Animation Presets

**Files:**
- Modify: `src/lib/animations.ts`

- [ ] **Step 1: Rewrite `src/lib/animations.ts`**

Replace the entire file with:

```typescript
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

export const glowHover = {
  whileHover: prefersReducedMotion
    ? {}
    : {
        boxShadow: "0 0 30px rgba(193, 138, 42, 0.25), 0 0 80px rgba(193, 138, 42, 0.1)",
      },
  transition: { duration: 0.4 },
} as const

export const parallaxSlow = {
  style: { willChange: "transform" },
  transition: { duration: 0 },
} as const
```

- [ ] **Step 2: Build verification**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm run build
```

Expected: Build succeeds with zero errors.

- [ ] **Step 3: Commit**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && git add src/lib/animations.ts && git commit -m "feat: add enhanced animation presets (fadeUpLarge, scaleIn, cardHoverLift, glowHover)"
```

---

### Task 4: App Shell — ScrollProgress + Header Glassmorphism

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Add ScrollProgress to `src/App.tsx`**

Add the import at the top of App.tsx:

```typescript
import { ScrollProgress } from "@/components/effects/ScrollProgress"
```

Add `<ScrollProgress />` right after the opening `<div>` and before the skip-to-content link:

```tsx
<BrowserRouter>
  <div className="flex min-h-dvh flex-col">
    <ScrollProgress />
    <a
      href="#main-content"
      ...
```

- [ ] **Step 2: Rewrite Header with glassmorphism, blur transition, and golden glow indicator**

Replace `src/components/layout/Header.tsx` with:

```tsx
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { LOJA_URL } from "@/lib/constants"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Institucional", href: "/institucional" },
  { label: "Marcas", href: "/marcas" },
  { label: "Private Label", href: "/private-label" },
  { label: "Onde Encontrar", href: "/onde-encontrar" },
  { label: "Contato", href: "/contato" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5 no-underline">
          <motion.div
            whileHover={{ rotate: 6, scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="flex size-9 items-center justify-center rounded-xl bg-phyto-accent shadow-lg shadow-phyto-accent/20"
          >
            <span className="font-display text-sm font-bold text-white">P</span>
          </motion.div>
          <span className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-brand-text" : "text-white"
          }`}>
            Phytonatus
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 no-underline ${
                location.pathname === item.href
                  ? scrolled ? "text-mel-accent" : "text-white"
                  : scrolled ? "text-brand-muted hover:text-brand-text" : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
              {location.pathname === item.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-mel-accent"
                  style={{ boxShadow: "0 0 8px rgba(193, 138, 42, 0.6)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-4 h-6 w-px bg-current opacity-10" aria-hidden="true" />
          <a href={LOJA_URL} target="_blank" rel="noopener noreferrer" className="ml-3">
            <Button
              variant="outline"
              size="sm"
              className={`gap-1.5 transition-all duration-300 ${
                scrolled
                  ? "border-brand-border hover:border-mel-accent/40 hover:shadow-sm"
                  : "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              }`}
            >
              Loja Online
              <ExternalLink className="size-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menu"
                  className={scrolled ? "" : "text-white hover:bg-white/10"}
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-brand-bg">
              <SheetTitle className="font-display text-2xl font-bold">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 no-underline ${
                      location.pathname === item.href
                        ? "bg-mel-accent/10 text-mel-accent glow-amber"
                        : "text-brand-muted hover:bg-brand-cream hover:text-brand-text"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-4 h-px bg-brand-border" />
                <a href={LOJA_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full gap-1.5">
                    Loja Online
                    <ExternalLink className="size-3.5" />
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}
```

- [ ] **Step 3: Build verification**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm run build
```

- [ ] **Step 4: Commit**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && git add src/App.tsx src/components/layout/Header.tsx && git commit -m "feat: add scroll progress bar, glassmorphism header with blur transition"
```

---

### Task 5: Home Page — Cinematic Hero Redesign

**Files:**
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Rewrite `src/pages/Home.tsx`**

Replace the entire file. Key changes:
- Import ParticleField, TextReveal, GlassCard, TiltCard, AnimatedHoneycomb
- Hero: ParticleField + TextReveal for word-by-word title animation, stronger parallax
- Brand marquee: dual-row with reverse direction
- Ingredients: TiltCard on each item with glow hover
- Brands showcase: GlassCard with hover glow effects
- Metrics: integrated into a more dramatic layout with golden accents
- Private Label: GlassCards for features
- Onde Encontrar: glass-styled channel cards
- Video CTA: enhanced cinematic styling

```tsx
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Play, ArrowRight, Leaf, Droplets, Factory, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/sections/PlaceholderImage"
import { ParticleField } from "@/components/effects/ParticleField"
import { TextReveal } from "@/components/effects/TextReveal"
import { GlassCard } from "@/components/effects/GlassCard"
import { TiltCard } from "@/components/effects/TiltCard"
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { fadeUp, fadeUpLarge, staggerItem, pageTransition } from "@/lib/animations"
import { BRANDS, LOJA_URL, AMAZON_URL, MERCADO_LIVRE_URL, SUPERMARKET_CLIENTS } from "@/lib/constants"

const ingredients = [
  { name: "Mel", placeholder: "Textura de mel", color: "#C18A2A", icon: "🍯" },
  { name: "Cacau em Pó", placeholder: "Textura de cacau", color: "#5C3A1E", icon: "🫘" },
  { name: "Coco", placeholder: "Textura de coco", color: "#8B7355", icon: "🥥" },
  { name: "Sal Rosa", placeholder: "Textura de sal rosa", color: "#C4756E", icon: "🧂" },
]

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <motion.span
        className="block font-display text-5xl font-bold text-mel-accent md:text-6xl"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {value}
      </motion.span>
      <span className="mt-2 block text-sm font-medium uppercase tracking-widest text-brand-muted">
        {label}
      </span>
    </div>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <motion.div {...pageTransition}>
      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-dvh overflow-hidden bg-brand-dark grain">
        <AnimatedHoneycomb id="hero-honeycomb" />
        <ParticleField count={40} />

        {/* Organic blobs - more dramatic */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 -top-40 size-[500px] rounded-full bg-mel-accent/10 blur-[100px]"
          aria-hidden="true"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -right-40 bottom-0 size-[400px] rounded-full bg-phyto-accent/10 blur-[100px]"
          aria-hidden="true"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute left-1/2 top-1/3 size-[300px] -translate-x-1/2 rounded-full bg-mel-accent/5 blur-[80px]"
          aria-hidden="true"
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col items-center justify-center px-6 text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm"
          >
            <Leaf className="size-4 text-mel-accent animate-glow-pulse" aria-hidden="true" />
            <span className="text-sm font-medium text-white/70">Desde 2014 levando pureza a sua mesa</span>
          </motion.div>

          {/* Title with word-by-word reveal */}
          <div className="max-w-5xl">
            <TextReveal
              tag="h1"
              className="text-balance font-display text-6xl font-bold leading-[1.02] text-white md:text-8xl lg:text-9xl"
              delay={0.3}
              staggerDelay={0.06}
            >
              Produtos naturais
            </TextReveal>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-2 block font-display text-6xl font-bold leading-[1.02] md:text-8xl lg:text-9xl text-gradient-amber"
            >
              com proposito
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8 max-w-xl text-pretty text-lg text-white/50 md:text-xl"
          >
            Ingrediente unico, rotulo limpo, marcas com identidade.
            Conheca o grupo Phytonatus e nossas submarcas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link to="/marcas">
              <Button size="lg" className="shimmer gap-2 bg-mel-accent text-brand-dark hover:bg-mel-accent/90 font-medium text-base px-8 shadow-lg shadow-mel-accent/20 transition-shadow hover:shadow-xl hover:shadow-mel-accent/30">
                Conheca nossas marcas
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <a href={LOJA_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-1.5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-base px-8 backdrop-blur-sm transition-all duration-300">
                Loja online
                <ExternalLink className="size-4" />
              </Button>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-widest text-white/30">Scroll</span>
              <div className="h-14 w-px bg-gradient-to-b from-mel-accent/40 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-16 md:h-20">
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
              fill="var(--color-brand-bg)"
            />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════ BRAND MARQUEE ═══════════════════════════════════ */}
      <section className="overflow-hidden py-12 md:py-16" aria-label="Nossas marcas">
        <div className="relative space-y-4">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
              <span key={`a-${brand.id}-${i}`} className="mx-8 inline-flex items-center gap-3 text-3xl md:text-4xl">
                <span className="inline-block size-3 rounded-full animate-glow-pulse" style={{ backgroundColor: brand.accentColor }} aria-hidden="true" />
                <span className="font-display font-bold text-brand-text/15">{brand.name}</span>
              </span>
            ))}
          </div>
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
              <span key={`b-${brand.id}-${i}`} className="mx-8 inline-flex items-center gap-3 text-xl md:text-2xl">
                <span className="inline-block size-2 rounded-full" style={{ backgroundColor: brand.accentColor, opacity: 0.3 }} aria-hidden="true" />
                <span className="font-display font-semibold text-brand-text/8 italic">{brand.tagline}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ INGREDIENTES ═══════════════════════════════ */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div {...fadeUpLarge}>
              <span className="text-sm font-medium uppercase tracking-widest text-mel-accent">
                Materias-primas
              </span>
              <h2 className="mt-4 text-balance font-display text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Ingredientes puros.
                <br />
                <span className="text-brand-muted">Rotulo limpo.</span>
              </h2>
              <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-brand-muted">
                Trabalhamos com materias-primas de origem controlada.
                Sem conservantes, sem aditivos artificiais — apenas o
                ingrediente em sua forma mais pura.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-mel-accent/30 to-transparent" />
                <Droplets className="size-5 text-mel-accent animate-float" aria-hidden="true" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-mel-accent/30 to-transparent" />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {ingredients.map((item, i) => (
                <TiltCard key={item.name} className="group" tiltDegree={6} glareColor={`${item.color}15`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl border border-brand-border bg-brand-surface transition-shadow duration-500 hover:shadow-xl"
                    style={{ boxShadow: `0 0 0 rgba(0,0,0,0)` }}
                  >
                    <div className="aspect-square">
                      <PlaceholderImage label={item.placeholder} aspectRatio="aspect-square" className="rounded-none border-0" />
                    </div>
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: `linear-gradient(to top, ${item.color}30, transparent 60%)` }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl drop-shadow-lg" aria-hidden="true">{item.icon}</span>
                        <span className="font-display text-lg font-bold">{item.name}</span>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ MARCAS SHOWCASE ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-dark py-32 md:py-40 grain">
        <AnimatedHoneycomb id="brands-honeycomb" />
        <ParticleField count={15} color="rgba(193, 138, 42, 0.15)" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div {...fadeUpLarge} className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-mel-accent">
              Portfolio
            </span>
            <h2 className="mt-4 text-balance font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Nossas Marcas
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-white/40">
              Cada marca carrega uma identidade unica, unida pelo compromisso com ingredientes puros.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BRANDS.map((brand, i) => (
              <GlassCard key={brand.id} glowColor={`${brand.accentColor}20`} className="p-0">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="p-8"
                >
                  {/* Accent glow */}
                  <div
                    className="absolute -right-8 -top-8 size-32 rounded-full opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: brand.accentColor }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.08 }}
                      className="mb-6 flex size-14 items-center justify-center rounded-xl text-white text-xl font-bold font-display shadow-lg"
                      style={{
                        backgroundColor: brand.accentColor,
                        boxShadow: `0 8px 24px ${brand.accentColor}30`,
                      }}
                    >
                      {brand.name.charAt(0)}
                    </motion.div>

                    <h3 className="font-display text-xl font-bold text-white">
                      {brand.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium" style={{ color: brand.accentColor }}>
                      {brand.category}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/40">
                      {brand.tagline}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/30 transition-colors group-hover:text-white/60">
                      <span className="link-underline">Ver mais</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </GlassCard>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-14 text-center">
            <Link to="/marcas">
              <Button size="lg" variant="outline" className="shimmer gap-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 backdrop-blur-sm transition-all duration-300">
                Ver todas as marcas
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ METRICAS ═══════════════════════════════ */}
      <section className="relative py-28 md:py-36">
        {/* Subtle amber gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mel-light/20 to-transparent" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-mel-accent">
              Numeros
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-bold md:text-5xl">
              Dados que <span className="text-gradient-amber">falam por nos</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            <AnimatedCounter value="10+" label="Anos de mercado" />
            <AnimatedCounter value="50+" label="Produtos ativos" />
            <AnimatedCounter value="200+" label="Clientes B2B" />
            <AnimatedCounter value="1000+" label="Tons / mes" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ PRIVATE LABEL ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-surface py-28 md:py-36">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-mel-accent/30 to-transparent" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div {...fadeUpLarge}>
              <span className="text-sm font-medium uppercase tracking-widest text-mel-accent">
                Private Label
              </span>
              <h2 className="mt-4 text-balance font-display text-5xl font-bold leading-tight md:text-6xl">
                Produza sua marca
                <br />
                <span className="text-gradient-amber">com a nossa estrutura</span>
              </h2>
              <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-brand-muted">
                Infraestrutura completa para criacao e producao de marcas proprias
                de produtos naturais.
              </p>
              <Link to="/contato?dest=comercial" className="mt-8 inline-block">
                <Button size="lg" className="shimmer gap-2 bg-mel-accent text-brand-dark hover:bg-mel-accent/90 px-8 shadow-lg shadow-mel-accent/20 transition-shadow hover:shadow-xl hover:shadow-mel-accent/30">
                  Falar com o comercial
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Factory, title: "Capacidade Produtiva", desc: "Linhas automatizadas para grandes volumes com qualidade constante." },
                { icon: ShieldCheck, title: "Certificacoes", desc: "Processos certificados e auditados com rastreabilidade total." },
                { icon: Users, title: "Clientes Consolidados", desc: "Parceiros no varejo nacional que confiam na nossa entrega." },
                { icon: Leaf, title: "Rotulo Limpo", desc: "Formulacoes com ingrediente unico, sem aditivos artificiais." },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  {...staggerItem}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl border border-brand-border bg-brand-bg p-6 transition-all duration-400 hover:border-mel-accent/30 hover:shadow-lg hover:shadow-mel-accent/5"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-mel-accent/0 blur-xl transition-all duration-500 group-hover:bg-mel-accent/10" aria-hidden="true" />
                    <pillar.icon className="relative size-8 text-mel-accent transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-pretty leading-relaxed text-brand-muted">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ ONDE ENCONTRAR ═══════════════════════════════ */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUpLarge} className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-mel-accent">
              Distribuicao
            </span>
            <h2 className="mt-4 text-balance font-display text-5xl font-bold md:text-6xl">
              Onde Encontrar
            </h2>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {SUPERMARKET_CLIENTS.slice(0, 4).map((client, i) => (
              <motion.div
                key={client.name}
                {...staggerItem}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex h-20 w-40 items-center justify-center rounded-xl border border-brand-border bg-brand-surface text-sm font-medium text-brand-muted transition-all duration-300 hover:border-mel-accent/30 hover:shadow-lg hover:shadow-mel-accent/5"
              >
                {client.imagePlaceholder}
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-16">
            <div className="mx-auto max-w-2xl rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-sm">
              <p className="mb-6 text-center font-display text-lg font-bold">
                Compre tambem online
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Loja Phytonatus", url: LOJA_URL },
                  { label: "Amazon", url: AMAZON_URL },
                  { label: "Mercado Livre", url: MERCADO_LIVRE_URL },
                ].map((channel) => (
                  <a key={channel.label} href={channel.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-1.5 hover:border-mel-accent/30 transition-all duration-300 hover:shadow-sm">
                      {channel.label}
                      <ExternalLink className="size-3.5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ VIDEO CTA ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-dark py-32 md:py-40 grain">
        <AnimatedHoneycomb id="video-honeycomb" />
        <ParticleField count={20} color="rgba(193, 138, 42, 0.12)" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div {...fadeUpLarge}>
            <div className="group relative mx-auto aspect-video max-w-3xl cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-mel-accent/20 hover:shadow-2xl hover:shadow-mel-accent/10">
              <div className="absolute inset-0 bg-gradient-to-br from-mel-accent/5 via-transparent to-phyto-accent/5" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="flex size-20 items-center justify-center rounded-full bg-mel-accent shadow-xl shadow-mel-accent/30 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-mel-accent/40"
                >
                  <Play className="size-8 fill-white text-white ml-1" />
                </motion.div>
                <span className="text-sm font-medium uppercase tracking-widest text-white/40">
                  Video institucional
                </span>
              </div>
            </div>
            <p className="mt-10 font-display text-2xl font-bold text-white/60 italic md:text-3xl">
              "Conheca quem esta por tras de cada produto natural que chega a sua mesa."
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
```

- [ ] **Step 2: Build verification**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm run build
```

Expected: Build succeeds with zero errors.

- [ ] **Step 3: Commit**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && git add src/pages/Home.tsx && git commit -m "feat: cinematic Home redesign with particles, text reveal, glass cards, tilt effects"
```

---

### Task 6: Secondary Pages — Institucional & Marcas

**Files:**
- Modify: `src/pages/Institucional.tsx`
- Modify: `src/pages/Marcas.tsx`
- Modify: `src/components/sections/BrandSlice.tsx`

- [ ] **Step 1: Update `src/pages/Institucional.tsx`**

Key changes:
- Replace local HoneycombPattern with imported AnimatedHoneycomb
- Import ParticleField for hero
- Use fadeUpLarge for headings
- Add particle effects to dark sections
- Enhance gallery cards with hover glow shadows
- Add TiltCard to gallery items

Add new imports at top:
```typescript
import { ParticleField } from "@/components/effects/ParticleField"
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { fadeUp, fadeUpLarge, pageTransition } from "@/lib/animations"
```

Remove the local `HoneycombPattern` function (lines 22-56).

Replace `<HoneycombPattern />` with `<AnimatedHoneycomb id="inst-honeycomb" />` (in the hero section).

Add `<ParticleField count={25} />` after the AnimatedHoneycomb in the hero.

Replace `{...fadeUp}` on the hero h1 with `{...fadeUpLarge}`.

In the video section, replace the local `<HoneycombPattern />` with `<AnimatedHoneycomb id="inst-video-honeycomb" />` and add `<ParticleField count={15} color="rgba(193, 138, 42, 0.12)" />`.

Update heading font weights from `font-semibold` to `font-bold` throughout.

Add `font-variation-settings: "opsz" 72` equivalent by ensuring headings use `font-display` class (Fraunces handles this via CSS).

- [ ] **Step 2: Update `src/pages/Marcas.tsx`**

Key changes:
- Dark hero matching other pages style
- Add AnimatedHoneycomb and ParticleField to hero
- Enhance hero typography with larger sizes and gradient text

Replace the hero section with:
```tsx
{/* Hero */}
<section className="relative min-h-[60vh] overflow-hidden bg-brand-dark grain flex items-center">
  <AnimatedHoneycomb id="marcas-honeycomb" />
  <ParticleField count={20} />
  <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
    <motion.div {...fadeUpLarge}>
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-mel-accent">
        Portfolio
      </span>
      <h1 className="text-balance font-display text-5xl font-bold text-white md:text-7xl lg:text-8xl">
        Nossas <span className="text-gradient-amber">Marcas</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-white/50">
        Cada marca do grupo Phytonatus carrega uma identidade unica, unida pelo compromisso com ingredientes puros e rotulo limpo.
      </p>
    </motion.div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 z-20" aria-hidden="true">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-16 md:h-20">
      <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="var(--color-brand-bg)" />
    </svg>
  </div>
</section>
```

Add imports at top:
```typescript
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { ParticleField } from "@/components/effects/ParticleField"
import { fadeUpLarge } from "@/lib/animations"
```

- [ ] **Step 3: Update `src/components/sections/BrandSlice.tsx`**

Key changes:
- Import TiltCard, wrap image in TiltCard for 3D effect
- Enhance the logo placeholder with hover animation and glow
- Larger heading sizes
- Add shimmer class to download button

Replace the file with:
```tsx
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "./PlaceholderImage"
import { TiltCard } from "@/components/effects/TiltCard"
import { fadeUp } from "@/lib/animations"

interface BrandSliceProps {
  logo: string
  name: string
  tagline: string
  description: string
  categoryBadge: string
  accentColor: string
  imagePlaceholder: string
  nutritionPdfUrl: string
  reversed?: boolean
}

export function BrandSlice({
  name,
  tagline,
  description,
  categoryBadge,
  accentColor,
  imagePlaceholder,
  nutritionPdfUrl,
  reversed = false,
}: BrandSliceProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Accent side line */}
      <div
        className={`absolute top-0 bottom-0 w-1 ${reversed ? "right-0" : "left-0"}`}
        style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}40, transparent)` }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className={`grid items-center gap-12 lg:grid-cols-2 ${reversed ? "lg:direction-rtl" : ""}`}
          style={{ direction: reversed ? "rtl" : "ltr" }}
        >
          {/* Text content */}
          <motion.div {...fadeUp} style={{ direction: "ltr" }}>
            <motion.div
              whileHover={{ rotate: 6, scale: 1.08 }}
              className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl text-white text-2xl font-bold font-display shadow-lg"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 8px 32px ${accentColor}30`,
              }}
            >
              {name.charAt(0)}
            </motion.div>

            <Badge
              variant="secondary"
              className="mb-4 rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wider"
              style={{ borderColor: `${accentColor}40`, color: accentColor, backgroundColor: `${accentColor}10` }}
            >
              {categoryBadge}
            </Badge>

            <h2 className="text-balance font-display text-5xl font-bold leading-tight md:text-6xl">
              {name}
            </h2>
            <p className="mt-2 font-display text-xl italic" style={{ color: accentColor }}>
              "{tagline}"
            </p>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-brand-muted">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={nutritionPdfUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5 rounded-full transition-all duration-300 hover:shadow-sm" style={{ borderColor: `${accentColor}30` }}>
                  <Download className="size-3.5" />
                  Tabela Nutricional
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Image with 3D tilt */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.15 }}
            style={{ direction: "ltr" }}
            className="relative"
          >
            <TiltCard tiltDegree={5} glareColor={`${accentColor}10`}>
              <div
                className="absolute -inset-4 rounded-3xl opacity-10 blur-2xl"
                style={{ backgroundColor: accentColor }}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-brand-border shadow-lg transition-shadow duration-500 hover:shadow-xl">
                <PlaceholderImage label={imagePlaceholder} />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Build verification**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm run build
```

- [ ] **Step 5: Commit**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && git add src/pages/Institucional.tsx src/pages/Marcas.tsx src/components/sections/BrandSlice.tsx && git commit -m "feat: enhance Institucional, Marcas pages and BrandSlice with particles, tilt, glass effects"
```

---

### Task 7: Secondary Pages — PrivateLabel, OndeEncontrar, Contato

**Files:**
- Modify: `src/pages/PrivateLabel.tsx`
- Modify: `src/pages/OndeEncontrar.tsx`
- Modify: `src/pages/Contato.tsx`

- [ ] **Step 1: Update `src/pages/PrivateLabel.tsx`**

Key changes:
- Replace local HoneycombPattern with AnimatedHoneycomb
- Add ParticleField to hero and CTA sections
- Import fadeUpLarge, use for main headings
- Add glow hover effects to capability cards (enhance existing hover styles)
- Add shimmer to CTA button

Add imports:
```typescript
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { ParticleField } from "@/components/effects/ParticleField"
import { fadeUp, fadeUpLarge, staggerItem, pageTransition } from "@/lib/animations"
```

Remove local `HoneycombPattern` function.

Replace `<HoneycombPattern />` in hero with `<AnimatedHoneycomb id="pl-hero-honeycomb" />` and add `<ParticleField count={25} />` after it.

Replace `<HoneycombPattern />` in CTA section with `<AnimatedHoneycomb id="pl-cta-honeycomb" />` and add `<ParticleField count={15} color="rgba(193, 138, 42, 0.12)" />`.

Change the CTA Button to include `shimmer` class.

Replace `{...fadeUp}` with `{...fadeUpLarge}` on main page heading elements.

- [ ] **Step 2: Update `src/pages/OndeEncontrar.tsx`**

Key changes:
- Replace local HoneycombPattern with AnimatedHoneycomb
- Add ParticleField to hero
- Import fadeUpLarge
- Enhance digital channel cards with glow hover

Add imports:
```typescript
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { ParticleField } from "@/components/effects/ParticleField"
import { fadeUp, fadeUpLarge, staggerItem, pageTransition } from "@/lib/animations"
```

Remove local `HoneycombPattern` function.

Replace `<HoneycombPattern />` with `<AnimatedHoneycomb id="onde-honeycomb" />` and add `<ParticleField count={20} />`.

Replace `{...fadeUp}` with `{...fadeUpLarge}` on the hero heading.

- [ ] **Step 3: Update `src/pages/Contato.tsx`**

Key changes:
- Replace local HoneycombPattern with AnimatedHoneycomb
- Add ParticleField to hero
- Add glassmorphism effect to form card (bg-white/80 backdrop-blur-xl)
- Enhanced submit button with shimmer
- Import fadeUpLarge

Add imports:
```typescript
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { ParticleField } from "@/components/effects/ParticleField"
```

Remove local `HoneycombPattern` function.

Replace `<HoneycombPattern />` with `<AnimatedHoneycomb id="contato-honeycomb" />` and add `<ParticleField count={20} />`.

On the form element, add/change: `className="relative overflow-hidden rounded-2xl border border-brand-border bg-white/80 backdrop-blur-xl shadow-xl shadow-brand-dark/5"`

Add `shimmer` class to the submit Button.

- [ ] **Step 4: Build verification**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm run build
```

- [ ] **Step 5: Commit**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && git add src/pages/PrivateLabel.tsx src/pages/OndeEncontrar.tsx src/pages/Contato.tsx && git commit -m "feat: enhance PrivateLabel, OndeEncontrar, Contato with particles, glass, glow effects"
```

---

### Task 8: Enhanced Section Components + Footer

**Files:**
- Modify: `src/components/sections/PlaceholderImage.tsx`
- Modify: `src/components/sections/QualitySeals.tsx`
- Modify: `src/components/sections/PrivateLabelClients.tsx`
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Update `src/components/sections/PlaceholderImage.tsx` — Add shimmer loading animation**

Replace with:
```tsx
interface PlaceholderImageProps {
  label: string
  className?: string
  aspectRatio?: string
}

export function PlaceholderImage({
  label,
  className = "",
  aspectRatio = "aspect-video",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`shimmer w-full ${aspectRatio} rounded-xl flex items-center justify-center text-stone-400 text-sm font-medium border border-stone-200 ${className}`}
      style={{
        background: "linear-gradient(135deg, #F5F0E8 0%, #EDE7DD 50%, #F5F0E8 100%)",
      }}
    >
      {label}
    </div>
  )
}
```

- [ ] **Step 2: Update `src/components/sections/QualitySeals.tsx` — Add glow hover effect**

Replace with:
```tsx
import { motion } from "framer-motion"
import { fadeUp, staggerItem } from "@/lib/animations"

interface Seal {
  name: string
  imagePlaceholder: string
}

interface QualitySealsProps {
  seals: Seal[]
}

export function QualitySeals({ seals }: QualitySealsProps) {
  return (
    <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-8">
      {seals.map((seal, i) => (
        <motion.div
          key={seal.name}
          {...staggerItem}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group flex flex-col items-center gap-3"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-mel-accent/0 blur-xl transition-all duration-500 group-hover:bg-mel-accent/15" aria-hidden="true" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-border bg-brand-surface text-xs font-medium text-brand-muted transition-all duration-300 group-hover:border-mel-accent/40 group-hover:shadow-lg group-hover:shadow-mel-accent/10">
              {seal.imagePlaceholder}
            </div>
          </div>
          <span className="text-sm font-bold text-brand-text transition-colors duration-300 group-hover:text-mel-accent">
            {seal.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}
```

- [ ] **Step 3: Update `src/components/sections/PrivateLabelClients.tsx` — Add glow hover**

Replace with:
```tsx
import { motion } from "framer-motion"
import { fadeUp, staggerItem } from "@/lib/animations"

interface Client {
  name: string
  imagePlaceholder: string
}

interface PrivateLabelClientsProps {
  clients: Client[]
}

export function PrivateLabelClients({ clients }: PrivateLabelClientsProps) {
  return (
    <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-6">
      {clients.map((client, i) => (
        <motion.div
          key={client.name}
          {...staggerItem}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group flex h-20 w-36 items-center justify-center rounded-xl border border-brand-border bg-brand-surface text-sm font-medium text-brand-muted transition-all duration-300 hover:border-mel-accent/30 hover:shadow-lg hover:shadow-mel-accent/5"
        >
          {client.imagePlaceholder}
        </motion.div>
      ))}
    </motion.div>
  )
}
```

- [ ] **Step 4: Update `src/components/layout/Footer.tsx` — Premium dark footer with golden accents**

Replace with:
```tsx
import { Link } from "react-router-dom"
import { ExternalLink, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { LOJA_URL } from "@/lib/constants"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Institucional", href: "/institucional" },
  { label: "Marcas", href: "/marcas" },
  { label: "Private Label", href: "/private-label" },
  { label: "Onde Encontrar", href: "/onde-encontrar" },
  { label: "Contato", href: "/contato" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-brand-dark">
      <AnimatedHoneycomb id="footer-honeycomb" className="absolute inset-0 size-full opacity-[0.015]" animate={false} />

      {/* Ambient golden glow */}
      <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-mel-accent/20 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="group flex items-center gap-2.5 no-underline">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.08 }}
                className="flex size-9 items-center justify-center rounded-xl bg-phyto-accent shadow-lg shadow-phyto-accent/20"
              >
                <span className="font-display text-sm font-bold text-white">P</span>
              </motion.div>
              <span className="font-display text-xl font-bold text-white">
                Phytonatus
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-pretty leading-relaxed text-white/35">
              Produtos naturais com ingrediente unico, rotulo limpo e marcas com identidade.
            </p>
            <div className="mt-4 flex items-center gap-2 text-white/20">
              <Leaf className="size-4 text-mel-accent/50" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest">Desde 2014</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/40">
              Navegacao
            </h3>
            <nav aria-label="Rodape" className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="link-underline w-fit text-sm text-white/35 transition-colors hover:text-white no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Loja */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/40">
              Loja Online
            </h3>
            <p className="mt-4 text-sm text-white/35">
              Compre diretamente em nossa loja virtual.
            </p>
            <a
              href={LOJA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20 no-underline"
            >
              Acessar loja
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Golden divider */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-mel-accent/15 to-transparent" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Phytonatus &middot; Todos os direitos reservados
          </p>
          <p className="text-xs text-white/15">
            Ingrediente unico &middot; Rotulo limpo
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 5: Build verification**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm run build
```

- [ ] **Step 6: Commit**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && git add src/components/sections/PlaceholderImage.tsx src/components/sections/QualitySeals.tsx src/components/sections/PrivateLabelClients.tsx src/components/layout/Footer.tsx && git commit -m "feat: enhance section components with shimmer/glow, premium footer with golden accents"
```

---

### Task 9: Final Build Verification & Cleanup

**Files:**
- All modified files

- [ ] **Step 1: Full build check**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm run build
```

Expected: Build succeeds with zero errors and zero warnings.

- [ ] **Step 2: Fix any TypeScript errors**

If build fails, fix import errors, unused variables, or type mismatches. Common issues:
- Unused imports from previous code (remove them)
- Missing imports for new components (add them)
- Type mismatches in motion component props (fix types)

- [ ] **Step 3: Start dev server and verify visually**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && npm run dev
```

Verify that the dev server starts without errors.

- [ ] **Step 4: Final commit if any cleanup was needed**

```bash
cd /c/Users/Usuario/Desktop/Projetos/phytonatus-site && git add -A && git commit -m "fix: cleanup unused imports and final build verification"
```
