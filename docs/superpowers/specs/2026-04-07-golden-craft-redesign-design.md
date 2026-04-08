# Golden Craft Redesign — Design Spec

## Context
The Phytonatus site (React 19 + Tailwind v4 + Framer Motion + shadcn/ui) has a working MVP with all pages and content in place. The visual presentation is functional but generic — lacks dynamism, graphic richness, visual sophistication, and the premium feel expected of a natural products brand.

## Goal
Elevate the visual identity to "Luxury Natural" — the purity of natural products meets premium brand presentation. Every section should feel like a distinct visual experience, not just content blocks with padding.

## Design Direction: "Golden Craft"
Sophisticated artisanal luxury. Bold typography, cinematic animations, rich textures, and golden accents throughout.

## What Changes

### 1. Typography Upgrade
- Replace Cormorant Garamond with **Playfair Display** or **Fraunces** (bolder, more dramatic serif)
- Headings at 8xl-9xl with negative letter-spacing for visual weight
- Golden gradient text on key highlights
- Body font remains DM Sans

### 2. Cinematic Hero
- Animated particle/pollen background (CSS/SVG animated, not canvas for performance)
- Parallax scroll effect on background layers
- Word-by-word or staggered text reveal animation
- Metrics counters integrated into hero section
- Full-viewport height with scroll indicator

### 3. Rich Visual Effects Per Section
- **Glassmorphism cards** — backdrop-blur + glass borders
- **Glow hover states** — colored box-shadow matching brand accent
- **Scroll-triggered animations** — combined scale + rotate + fade
- **Parallax decorative layers** — elements at different scroll speeds
- **Grain/noise texture** — artisanal feel as background layer

### 4. SVG Graphic Elements
- Animated honeycomb pattern as section dividers (not just static)
- Organic curved lines connecting sections (path draw on scroll)
- Animated golden/amber blobs as background decoration
- Custom styled icons for key features (golden stroke style)

### 5. Section Identity
- Each section has unique background treatment (not simple light/dark alternation)
- Brands showcase: **3D card flip** or **expand-on-hover** revealing more info
- Ingredients: **hover reveal** showing ingredient texture
- Private Label: **animated timeline/process visual**
- Onde Encontrar: **interactive map-like** presentation

### 6. Micro-interactions
- Buttons: **shimmer/ripple** on hover
- Links: **underline draw animation** from left
- Cards: **subtle 3D tilt** on mouse move
- **Golden scroll progress bar** at top
- **Magnetic cursor effect** on primary CTAs

### 7. Premium Footer
- Richer visual treatment with brand storytelling
- Animated trust badges
- Better visual hierarchy

### 8. Header Enhancement
- Smoother scroll transition with blur effect
- Active nav indicator with golden glow
- Logo animation on load

## What Does NOT Change
- Tech stack (React + Tailwind + Framer Motion)
- Page structure and routes
- Text content and data (constants.ts)
- Base shadcn/ui components (internal logic)
- Mobile-first responsive approach
- Accessibility features

## Technical Constraints
- No heavy JS libraries (Three.js, GSAP) — use Framer Motion + CSS only
- Performance: all animations must respect prefers-reduced-motion
- No external API calls for visual effects
- Keep bundle size reasonable — CSS-first, JS-second for effects
- All SVG patterns inline or as components, not external files

## Success Criteria
- Site feels "premium natural brand", not "generic SPA"
- Every section has visual distinction and purpose
- Animations are smooth (60fps) and meaningful
- Mobile experience is equally polished (simplified but not stripped)
- Build compiles with zero errors
