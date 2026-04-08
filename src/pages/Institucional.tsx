import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { PlaceholderImage } from "@/components/sections/PlaceholderImage"
import { QualitySeals } from "@/components/sections/QualitySeals"
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { ParticleField } from "@/components/effects/ParticleField"
import { fadeUp, pageTransition } from "@/lib/animations"
import { QUALITY_SEALS } from "@/lib/constants"

const metrics = [
  { value: "10+", label: "Anos de mercado" },
  { value: "50+", label: "Produtos ativos" },
  { value: "200+", label: "Clientes B2B" },
  { value: "1000+", label: "Tons/mes de capacidade" },
]

const galleryItems = [
  { label: "Area de producao", rotate: -2 },
  { label: "Linha de envase", rotate: 1.5 },
  { label: "Laboratorio de qualidade", rotate: -1 },
  { label: "Estoque e logistica", rotate: 2 },
]

function AnimatedCounter({
  value,
  label,
  delay = 0,
}: {
  value: string
  label: string
  delay?: number
}) {
  return (
    <div className="text-center">
      <motion.span
        className="block font-display text-5xl font-bold text-phyto-accent md:text-6xl"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {value}
      </motion.span>
      <span className="mt-3 block text-xs font-medium uppercase tracking-widest text-brand-muted">
        {label}
      </span>
    </div>
  )
}

export default function Institucional() {
  return (
    <motion.div {...pageTransition}>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative min-h-[80vh] overflow-hidden bg-brand-dark grain">
        <AnimatedHoneycomb id="inst-honeycomb" />
        <ParticleField count={25} />

        {/* Ambient glows */}
        <div
          className="absolute -left-40 -top-40 size-[500px] rounded-full bg-phyto-accent/8 blur-3xl animate-pulse-soft"
          aria-hidden="true"
        />
        <div
          className="absolute -right-32 bottom-0 size-96 rounded-full bg-phyto-accent/8 blur-3xl animate-pulse-soft"
          style={{ animationDelay: "2s" }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-block text-xs font-medium uppercase tracking-widest text-phyto-accent"
          >
            Institucional
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-5xl text-balance font-display text-6xl font-bold leading-[1.05] text-white md:text-7xl lg:text-8xl"
          >
            Conheca a{" "}
            <span className="text-gradient-green">Phytonatus</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-2xl font-display text-xl italic text-white/50 md:text-2xl"
          >
            Tradicao, qualidade e compromisso com a natureza em cada produto que
            produzimos.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-widest text-white/30">
                Scroll
              </span>
              <div className="h-12 w-px bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="block h-16 w-full md:h-20"
          >
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
              fill="var(--color-brand-bg)"
            />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════ HISTORIA ═══════════════════════════════ */}
      <section className="relative py-28 md:py-36">
        {/* Decorative accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-phyto-accent/30 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            {/* Left: asymmetric editorial text */}
            <motion.div {...fadeUp} className="lg:col-span-7">
              <span className="text-xs font-medium uppercase tracking-widest text-phyto-accent">
                Nossa Historia
              </span>

              <h2 className="mt-6 text-balance font-display text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Nascemos do desejo de levar{" "}
                <span className="text-gradient-green">pureza</span> a mesa dos
                brasileiros.
              </h2>

              <div className="mt-8 flex items-start gap-6">
                {/* Decorative vertical bar */}
                <div
                  className="mt-2 hidden w-px shrink-0 self-stretch bg-gradient-to-b from-phyto-accent/60 to-transparent md:block"
                  aria-hidden="true"
                />
                <div className="space-y-5">
                  <p className="max-w-lg text-pretty text-lg leading-relaxed text-brand-muted">
                    A Phytonatus nasceu do desejo de levar produtos naturais de
                    qualidade para a mesa dos brasileiros. Desde o inicio, nossa
                    missao tem sido trabalhar com ingredientes puros, processos
                    transparentes e respeito a origem de cada materia-prima.
                  </p>
                  <p className="max-w-lg text-pretty text-lg leading-relaxed text-brand-muted">
                    Ao longo dos anos, expandimos nossa linha de produtos e
                    criamos marcas com identidades proprias, cada uma atendendo a
                    um segmento especifico do mercado de alimentos naturais.
                    Hoje, somos referencia no setor, atendendo redes de varejo em
                    todo o pais.
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <motion.p
                {...fadeUp}
                transition={{ delay: 0.3 }}
                className="mt-10 max-w-md font-display text-xl italic text-brand-muted/70 md:text-2xl"
              >
                "Ingrediente unico, rotulo limpo, marcas com identidade."
              </motion.p>
            </motion.div>

            {/* Right: photo */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                {/* Decorative frame offset */}
                <div
                  className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border-2 border-phyto-accent/20"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-2xl">
                  <PlaceholderImage label="Foto fabrica / equipe" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ GALERIA FABRICA ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-surface py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-phyto-accent">
              Estrutura
            </span>
            <h2 className="mt-4 text-balance font-display text-5xl font-bold md:text-6xl lg:text-7xl">
              Nossa{" "}
              <span className="text-gradient-green">Infraestrutura</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-brand-muted">
              Infraestrutura completa para producao com qualidade e escala
            </p>
          </motion.div>

          {/* Overlapping gallery cards */}
          <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotate: item.rotate,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: item.rotate * 0.5,
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{
                  rotate: 0,
                  scale: 1.03,
                  y: -8,
                  zIndex: 10,
                }}
                className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-bg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                style={{
                  marginTop: i % 2 !== 0 ? "2rem" : "0",
                }}
              >
                <PlaceholderImage label={item.label} />

                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Label on hover */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-lg font-bold text-white">
                    {item.label}
                  </p>
                </div>

                {/* Static label below */}
                <p className="p-4 text-center text-sm font-medium text-brand-muted group-hover:opacity-0 transition-opacity duration-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ VIDEO ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-dark py-28 md:py-36 grain">
        <AnimatedHoneycomb id="inst-video-honeycomb" />
        <ParticleField count={15} color="rgba(61, 92, 58, 0.12)" />

        {/* Ambient glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-phyto-accent/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-phyto-accent">
              Assista
            </span>
            <h2 className="mt-4 text-balance font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Video Institucional
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="mt-12">
            {/* Cinematic video placeholder */}
            <div className="group relative mx-auto aspect-video max-w-4xl cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {/* Subtle inner gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-phyto-accent/5 via-transparent to-phyto-accent/5"
                aria-hidden="true"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex size-20 items-center justify-center rounded-full bg-phyto-accent/90 shadow-lg shadow-phyto-accent/20 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-phyto-accent/30"
                >
                  <Play className="ml-1 size-8 fill-white text-white" />
                </motion.div>
                <span className="text-sm font-medium uppercase tracking-widest text-white/50">
                  Video institucional
                </span>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-phyto-accent/0 transition-colors duration-500 group-hover:border-phyto-accent/20" />
            </div>

            {/* Quote underneath */}
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-10 max-w-2xl text-center font-display text-xl italic text-white/40 md:text-2xl"
            >
              "Conheca quem esta por tras de cada produto natural que chega a sua
              mesa."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ SELOS DE QUALIDADE ═══════════════════════════════ */}
      <section className="relative py-28 md:py-36">
        {/* Subtle decorative elements */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-phyto-accent/20 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-phyto-accent">
              Certificacoes
            </span>
            <h2 className="mt-4 text-balance font-display text-5xl font-bold md:text-6xl lg:text-7xl">
              Selos de{" "}
              <span className="text-gradient-green">Qualidade</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-brand-muted">
              Certificacoes que garantem a excelencia dos nossos processos
            </p>
          </motion.div>
          <QualitySeals seals={QUALITY_SEALS} />
        </div>
      </section>

      {/* ═══════════════════════════════ METRICAS ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-surface py-28 md:py-36">
        {/* Background honeycomb at very low opacity */}
        <svg
          className="absolute inset-0 size-full opacity-[0.02]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="honeycomb-metrics"
              x="0"
              y="0"
              width="56"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1.5)"
            >
              <path
                d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb-metrics)" />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-phyto-accent">
              Numeros
            </span>
            <h2 className="mt-4 text-balance font-display text-5xl font-bold md:text-6xl lg:text-7xl">
              Dados que{" "}
              <span className="text-gradient-green">falam por nos</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8">
            {metrics.map((metric, i) => (
              <AnimatedCounter
                key={metric.label}
                value={metric.value}
                label={metric.label}
                delay={i * 0.15}
              />
            ))}
          </div>

          {/* Decorative divider */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-16 flex max-w-xs items-center gap-4"
          >
            <div className="h-px flex-1 bg-brand-border" />
            <div className="size-2 rotate-45 bg-phyto-accent/40" />
            <div className="h-px flex-1 bg-brand-border" />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
