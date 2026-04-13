import { motion } from "framer-motion"
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BrandSlice } from "@/components/sections/BrandSlice"
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { ParticleField } from "@/components/effects/ParticleField"
import { fadeUp, fadeUpLarge, pageTransition } from "@/lib/animations"
import { BRANDS, CATALOG_PDF_URL, NUTRITION_ALL_PDF_URL, LOJA_URL } from "@/lib/constants"

export default function Marcas() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden bg-brand-dark grain flex items-center">
        <AnimatedHoneycomb id="marcas-honeycomb" />
        <ParticleField count={20} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <motion.div {...fadeUpLarge}>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-phyto-accent">Portfolio</span>
            <h1 className="text-balance font-display text-5xl font-bold text-white md:text-7xl lg:text-8xl">
              Nossas <span className="text-gradient-green">Marcas</span>
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

      {/* Brand slices */}
      {BRANDS.map((brand, i) => (
        <div key={brand.id} id={brand.id}>
          {i > 0 && (
            <div className="mx-auto max-w-7xl px-6">
              <Separator />
            </div>
          )}
          <BrandSlice
            logo={`/logos/${brand.id}.svg`}
            name={brand.name}
            tagline={brand.tagline}
            description={brand.description}
            categoryBadge={brand.category}
            accentColor={brand.accentColor}
            image={brand.image}
            nutritionPdfUrl={brand.nutritionPdfUrl}
            storeUrl={brand.storeUrl}
            reversed={i % 2 !== 0}
          />
        </div>
      ))}

      {/* Footer da pagina */}
      <section className="bg-brand-surface py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-4">
            <a href={CATALOG_PDF_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 bg-phyto-accent hover:bg-phyto-accent/90">
                <Download className="size-4" />
                Baixar Catalogo Completo (PDF)
              </Button>
            </a>
            <a href={NUTRITION_ALL_PDF_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="size-4" />
                Tabelas Nutricionais (PDF)
              </Button>
            </a>
            <a href={LOJA_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-1.5">
                Comprar produtos
                <ExternalLink className="size-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
