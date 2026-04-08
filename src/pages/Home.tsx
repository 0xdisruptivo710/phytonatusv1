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
  { name: "Mel", placeholder: "Textura de mel", color: "#C18A2A", icon: "\u{1F36F}" },
  { name: "Cacau em Po", placeholder: "Textura de cacau", color: "#5C3A1E", icon: "\u{1FAD8}" },
  { name: "Coco", placeholder: "Textura de coco", color: "#8B7355", icon: "\u{1F965}" },
  { name: "Sal Rosa", placeholder: "Textura de sal rosa", color: "#C4756E", icon: "\u{1F9C2}" },
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

        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 -top-40 size-[500px] rounded-full bg-phyto-accent/10 blur-[100px]"
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
          className="absolute left-1/2 top-1/3 size-[300px] -translate-x-1/2 rounded-full bg-phyto-accent/5 blur-[80px]"
          aria-hidden="true"
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col items-center justify-center px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm"
          >
            <Leaf className="size-4 text-phyto-accent animate-glow-pulse" aria-hidden="true" />
            <span className="text-sm font-medium text-white/70">Desde 2014 levando pureza a sua mesa</span>
          </motion.div>

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
              className="mt-2 block font-display text-6xl font-bold leading-[1.02] md:text-8xl lg:text-9xl text-gradient-green"
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
              <Button size="lg" className="shimmer gap-2 bg-phyto-accent text-brand-dark hover:bg-phyto-accent/90 font-medium text-base px-8 shadow-lg shadow-phyto-accent/20 transition-shadow hover:shadow-xl hover:shadow-phyto-accent/30">
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
              <div className="h-14 w-px bg-gradient-to-b from-phyto-accent/40 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-20" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-16 md:h-20">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="var(--color-brand-bg)" />
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
              <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">Materias-primas</span>
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
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-phyto-accent/30 to-transparent" />
                <Droplets className="size-5 text-phyto-accent animate-float" aria-hidden="true" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-phyto-accent/30 to-transparent" />
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
        <ParticleField count={15} color="rgba(61, 92, 58, 0.15)" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div {...fadeUpLarge} className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">Portfolio</span>
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
                  <div
                    className="absolute -right-8 -top-8 size-32 rounded-full opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: brand.accentColor }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.08 }}
                      className="mb-6 flex size-14 items-center justify-center rounded-xl text-white text-xl font-bold font-display shadow-lg"
                      style={{ backgroundColor: brand.accentColor, boxShadow: `0 8px 24px ${brand.accentColor}30` }}
                    >
                      {brand.name.charAt(0)}
                    </motion.div>
                    <h3 className="font-display text-xl font-bold text-white">{brand.name}</h3>
                    <p className="mt-1 text-sm font-medium" style={{ color: brand.accentColor }}>{brand.category}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/40">{brand.tagline}</p>
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-phyto-light/20 to-transparent" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">Numeros</span>
            <h2 className="mt-4 text-balance font-display text-4xl font-bold md:text-5xl">
              Dados que <span className="text-gradient-green">falam por nos</span>
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
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-phyto-accent/30 to-transparent" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div {...fadeUpLarge}>
              <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">Private Label</span>
              <h2 className="mt-4 text-balance font-display text-5xl font-bold leading-tight md:text-6xl">
                Produza sua marca
                <br />
                <span className="text-gradient-green">com a nossa estrutura</span>
              </h2>
              <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-brand-muted">
                Infraestrutura completa para criacao e producao de marcas proprias de produtos naturais.
              </p>
              <Link to="/contato?dest=comercial" className="mt-8 inline-block">
                <Button size="lg" className="shimmer gap-2 bg-phyto-accent text-brand-dark hover:bg-phyto-accent/90 px-8 shadow-lg shadow-phyto-accent/20 transition-shadow hover:shadow-xl hover:shadow-phyto-accent/30">
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
                  className="group rounded-2xl border border-brand-border bg-brand-bg p-6 transition-all duration-300 hover:border-phyto-accent/30 hover:shadow-lg hover:shadow-phyto-accent/5"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-phyto-accent/0 blur-xl transition-all duration-500 group-hover:bg-phyto-accent/10" aria-hidden="true" />
                    <pillar.icon className="relative size-8 text-phyto-accent transition-transform duration-300 group-hover:scale-110" />
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
            <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">Distribuicao</span>
            <h2 className="mt-4 text-balance font-display text-5xl font-bold md:text-6xl">Onde Encontrar</h2>
          </motion.div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {SUPERMARKET_CLIENTS.slice(0, 4).map((client, i) => (
              <motion.div
                key={client.name}
                {...staggerItem}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex h-20 w-40 items-center justify-center rounded-xl border border-brand-border bg-brand-surface text-sm font-medium text-brand-muted transition-all duration-300 hover:border-phyto-accent/30 hover:shadow-lg hover:shadow-phyto-accent/5"
              >
                {client.imagePlaceholder}
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-16">
            <div className="mx-auto max-w-2xl rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-sm">
              <p className="mb-6 text-center font-display text-lg font-bold">Compre tambem online</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Loja Phytonatus", url: LOJA_URL },
                  { label: "Amazon", url: AMAZON_URL },
                  { label: "Mercado Livre", url: MERCADO_LIVRE_URL },
                ].map((channel) => (
                  <a key={channel.label} href={channel.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-1.5 hover:border-phyto-accent/30 transition-all duration-300 hover:shadow-sm">
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
        <ParticleField count={20} color="rgba(61, 92, 58, 0.12)" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div {...fadeUpLarge}>
            <div className="group relative mx-auto aspect-video max-w-3xl cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-phyto-accent/20 hover:shadow-2xl hover:shadow-phyto-accent/10">
              <div className="absolute inset-0 bg-gradient-to-br from-phyto-accent/5 via-transparent to-phyto-accent/5" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="flex size-20 items-center justify-center rounded-full bg-phyto-accent shadow-xl shadow-phyto-accent/30 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-phyto-accent/40"
                >
                  <Play className="size-8 fill-white text-white ml-1" />
                </motion.div>
                <span className="text-sm font-medium uppercase tracking-widest text-white/40">Video institucional</span>
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
