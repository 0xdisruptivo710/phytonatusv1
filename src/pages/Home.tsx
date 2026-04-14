import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, ArrowRight, Leaf, Droplets, Factory, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleField } from "@/components/effects/ParticleField"
import { TextReveal } from "@/components/effects/TextReveal"
import { fadeUp, fadeUpLarge, staggerItem, pageTransition } from "@/lib/animations"
import {
  BRANDS,
  LOJA_URL,
  AMAZON_URL,
  MERCADO_LIVRE_URL,
  SUPERMARKET_CLIENTS,
  QUALITY_SEALS,
  imgIngredients,
  imgProduction,
  imgQuality,
  imgWarehouse,
} from "@/lib/constants"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const imgParallax = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <motion.div {...pageTransition}>
      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-dvh overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          style={{ y: imgParallax, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={imgIngredients}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark/80" />
        </motion.div>

        <ParticleField count={20} />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col items-center justify-center px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-sm"
          >
            <Leaf className="size-4 text-phyto-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-white/80">Desde 2014 levando pureza à sua mesa</span>
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
              com propósito
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8 max-w-xl text-pretty text-lg text-white/70 md:text-xl"
          >
            Ingrediente único, rótulo limpo, marcas com identidade.
            Conheça o grupo Phytonatus e nossas submarcas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link to="/marcas">
              <Button size="lg" className="shimmer gap-2 bg-phyto-accent text-white hover:bg-phyto-accent/90 font-medium text-base px-8 shadow-lg shadow-phyto-accent/20">
                Conheça nossas marcas
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <a href={LOJA_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-1.5 border-white/25 text-white hover:bg-white/10 hover:border-white/40 text-base px-8 backdrop-blur-sm">
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
              <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
              <div className="h-14 w-px bg-gradient-to-b from-white/40 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-20" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-16 md:h-20">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="var(--color-brand-bg)" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════ SELOS MARQUEE ═══════════════════════════════ */}
      <section className="overflow-hidden py-10 md:py-14" aria-label="Certificações">
        <div className="relative">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...QUALITY_SEALS, ...QUALITY_SEALS, ...QUALITY_SEALS, ...QUALITY_SEALS].map((seal, i) => (
              <span key={`a-${seal.name}-${i}`} className="mx-6 inline-flex items-center gap-3">
                <span className="flex h-12 items-center justify-center rounded-full border border-phyto-accent/20 bg-phyto-accent/5 px-5 py-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-phyto-accent">{seal.name}</span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ MARCAS SHOWCASE ═══════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-brand-cream/40">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUpLarge} className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">Portfólio</span>
            <h2 className="mt-4 text-balance font-display text-5xl font-bold md:text-6xl lg:text-7xl">
              Nossas Marcas
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-brand-muted">
              Cada marca carrega uma identidade única, unida pelo compromisso com ingredientes puros.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BRANDS.map((brand, i) => (
              <Link key={brand.id} to={`/marcas#${brand.id}`} className="no-underline">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-full"
                >
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={brand.image}
                      alt={`Produtos ${brand.name}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-xl font-bold text-white">{brand.name}</h3>
                      <p className="mt-1 text-sm font-medium text-white/70">{brand.category}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-brand-muted">{brand.tagline}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-phyto-accent transition-colors">
                      <span className="link-underline">Ver mais</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-14 text-center">
            <Link to="/marcas">
              <Button size="lg" variant="outline" className="shimmer gap-2 px-8">
                Ver todas as marcas
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ INGREDIENTES ═══════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <motion.div {...fadeUpLarge} className="lg:col-span-2">
              <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">Nossas marcas</span>
              <h2 className="mt-4 text-balance font-display text-4xl font-bold leading-tight md:text-5xl">
                Ingredientes puros.
                <br />
                <span className="text-brand-muted">Rótulo limpo.</span>
              </h2>
              <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-brand-muted">
                Trabalhamos com matérias-primas de origem controlada.
                Sem conservantes, sem aditivos artificiais — apenas o
                ingrediente em sua forma mais pura.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-phyto-accent/30 to-transparent" />
                <Droplets className="size-5 text-phyto-accent animate-float" aria-hidden="true" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-phyto-accent/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {BRANDS.map((brand, i) => (
                  <motion.div
                    key={brand.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="group relative overflow-hidden rounded-lg bg-brand-surface shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <span className="font-display text-sm font-bold">{brand.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ PRIVATE LABEL ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-cream/30 py-28 md:py-36">
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
                Infraestrutura completa para criação e produção de marcas próprias de produtos naturais.
              </p>
              <Link to="/private-label" className="mt-8 inline-block">
                <Button size="lg" className="shimmer gap-2 bg-phyto-accent text-white hover:bg-phyto-accent/90 px-8 shadow-lg shadow-phyto-accent/20">
                  Saiba mais
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Factory, title: "Capacidade Produtiva", desc: "Linhas automatizadas para grandes volumes com qualidade constante.", img: imgProduction },
                { icon: ShieldCheck, title: "Certificações", desc: "Processos certificados e auditados com rastreabilidade total.", img: imgQuality },
                { icon: Users, title: "Clientes Consolidados", desc: "Parceiros no varejo nacional que confiam na nossa entrega.", img: imgWarehouse },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  {...staggerItem}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-xl h-56 sm:h-64"
                >
                  <img
                    src={pillar.img}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-brand-dark/20" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-5">
                    <pillar.icon className="size-7 text-white/80 mb-2" />
                    <h3 className="font-display text-lg font-bold text-white">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CLIENTES ═══════════════════════════════ */}
      <section className="py-28 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUpLarge} className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">Distribuição</span>
            <h2 className="mt-4 text-balance font-display text-5xl font-bold md:text-6xl">Clientes</h2>
          </motion.div>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none" />
          <div className="flex whitespace-nowrap animate-marquee">
            {[...SUPERMARKET_CLIENTS, ...SUPERMARKET_CLIENTS, ...SUPERMARKET_CLIENTS, ...SUPERMARKET_CLIENTS].map((client, i) => (
              <div
                key={`client-${client.name}-${i}`}
                className="mx-4 flex h-16 w-40 shrink-0 items-center justify-center rounded-md bg-brand-surface text-sm font-semibold text-brand-muted shadow-sm transition-all duration-300 hover:shadow-md hover:text-brand-text"
              >
                {client.imagePlaceholder}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mt-16">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-phyto-accent">
              Compre também online
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Loja Phytonatus", url: LOJA_URL, desc: "Nossa loja oficial com todos os produtos" },
                { label: "Amazon", url: AMAZON_URL, desc: "Compre com entrega rápida pela Amazon" },
                { label: "Mercado Livre", url: MERCADO_LIVRE_URL, desc: "Encontre nossos produtos no Mercado Livre" },
              ].map((channel, i) => (
                <motion.a
                  key={channel.label}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group block no-underline"
                >
                  <div className="relative overflow-hidden rounded-lg bg-brand-surface p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-phyto-accent/5">
                    <div className="relative z-10">
                      <h3 className="font-display text-lg font-bold transition-colors duration-300 group-hover:text-phyto-accent">
                        {channel.label}
                      </h3>
                      <p className="mt-2 text-sm text-brand-muted">{channel.desc}</p>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-phyto-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Acessar <ExternalLink className="size-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ VÍDEO ═══════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-brand-cream/30">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div {...fadeUpLarge}>
            <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-xl shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/VTp5H6-_1cA?rel=0&modestbranding=1"
                title="Vídeo Institucional Phytonatus"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
            <p className="mt-10 font-display text-2xl font-bold text-brand-muted/60 italic md:text-3xl">
              "Conheça quem está por trás de cada produto natural que chega à sua mesa."
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
