import { motion } from "framer-motion"


import { QualitySeals } from "@/components/sections/QualitySeals"
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { ParticleField } from "@/components/effects/ParticleField"
import { fadeUp, pageTransition } from "@/lib/animations"
import { QUALITY_SEALS, imgWarehouse, imgProduction, imgQuality, imgAllProducts } from "@/lib/constants"

const galleryItems = [
  { label: "Area de producao", image: imgProduction },
  { label: "Controle de qualidade", image: imgQuality },
  { label: "Estoque e logistica", image: imgWarehouse },
  { label: "Nossos produtos", image: imgAllProducts },
]

export default function Institucional() {
  return (
    <motion.div {...pageTransition}>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative min-h-[80vh] overflow-hidden bg-brand-dark grain">
        <AnimatedHoneycomb id="inst-honeycomb" />
        <ParticleField count={25} />

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
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-phyto-accent/30 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-12">
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

              <motion.p
                {...fadeUp}
                transition={{ delay: 0.3 }}
                className="mt-10 max-w-md font-display text-xl italic text-brand-muted/70 md:text-2xl"
              >
                "Ingrediente unico, rotulo limpo, marcas com identidade."
              </motion.p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div
                  className="absolute -right-3 -bottom-3 h-full w-full rounded-xl border border-phyto-accent/15"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={imgQuality}
                    alt="Controle de qualidade na fabrica Phytonatus"
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ GALERIA FABRICA (cards retos) ═══════════════════════════════ */}
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

          {/* Straight gallery cards (no rotation) */}
          <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative overflow-hidden rounded-xl bg-brand-bg shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

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
            <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl border border-white/6 shadow-2xl shadow-phyto-accent/10">
              <iframe
                src="https://www.youtube.com/embed/VTp5H6-_1cA?rel=0&modestbranding=1"
                title="Video Institucional Phytonatus"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>

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
    </motion.div>
  )
}
