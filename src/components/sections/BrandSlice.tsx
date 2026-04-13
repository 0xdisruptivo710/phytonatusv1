import { motion } from "framer-motion"
import { Download, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/effects/TiltCard"
import { fadeUp } from "@/lib/animations"

interface BrandSliceProps {
  logo: string
  name: string
  tagline: string
  description: string
  categoryBadge: string
  accentColor: string
  image: string
  nutritionPdfUrl: string
  storeUrl: string
  reversed?: boolean
}

export function BrandSlice({
  name,
  tagline,
  description,
  categoryBadge,
  accentColor,
  image,
  nutritionPdfUrl,
  storeUrl,
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
            {/* Logo placeholder */}
            <motion.div
              whileHover={{ rotate: 3, scale: 1.05 }}
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
            <p
              className="mt-2 font-display text-xl italic"
              style={{ color: accentColor }}
            >
              "{tagline}"
            </p>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-brand-muted">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={storeUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="gap-1.5 rounded-full" style={{ backgroundColor: accentColor }}>
                  <ExternalLink className="size-3.5" />
                  Visitar loja
                </Button>
              </a>
              <a href={nutritionPdfUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5 rounded-full">
                  <Download className="size-3.5" />
                  Tabela Nutricional
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div {...fadeUp} transition={{ delay: 0.15 }} style={{ direction: "ltr" }} className="relative">
            <TiltCard tiltDegree={5} glareColor={`${accentColor}10`}>
              <div className="absolute -inset-4 rounded-3xl opacity-10 blur-2xl" style={{ backgroundColor: accentColor }} aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-brand-border shadow-lg transition-shadow duration-500 hover:shadow-xl">
                <img
                  src={image}
                  alt={`Produtos ${name}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
