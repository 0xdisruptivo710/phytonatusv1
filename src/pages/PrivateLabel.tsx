import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Factory, CheckCircle, Package, Leaf, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QualitySeals } from "@/components/sections/QualitySeals"
import { PrivateLabelClients } from "@/components/sections/PrivateLabelClients"
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { ParticleField } from "@/components/effects/ParticleField"
import { fadeUp, fadeUpLarge, staggerItem, pageTransition } from "@/lib/animations"
import { QUALITY_SEALS, SUPERMARKET_CLIENTS, imgProduction, imgWarehouse, imgQuality } from "@/lib/constants"

const capabilities = [
  {
    icon: Factory,
    title: "Capacidade Produtiva",
    description:
      "Parque industrial completo com linhas de envase automatizadas, capaz de atender grandes volumes com consistência e agilidade.",
  },
  {
    icon: CheckCircle,
    title: "Certificações de Qualidade",
    description:
      "Processos certificados e auditados regularmente, garantindo segurança alimentar e rastreabilidade total.",
  },
  {
    icon: Package,
    title: "Desenvolvimento Completo",
    description:
      "Do conceito à gôndola: formulação, embalagem, rotulagem e logística. Sua marca pronta para o mercado.",
  },
]

export default function PrivateLabel() {
  return (
    <motion.div {...pageTransition}>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative min-h-[80vh] overflow-hidden flex items-center">
        <img src={imgProduction} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/75" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:py-36">
          <motion.div {...fadeUpLarge} className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2"
            >
              <Leaf className="size-4 text-phyto-accent" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/60">
                Private Label
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl"
            >
              Produza sua marca
              <br />
              <span className="text-gradient-green">com quem entende</span>
              <br />
              de natural
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl"
            >
              Infraestrutura, qualidade e mais de uma década de experiência para
              desenvolver sua marca própria de produtos naturais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <Link to="/contato?dest=comercial">
                <Button
                  size="lg"
                  className="shimmer gap-2 bg-phyto-accent text-brand-dark hover:bg-phyto-accent/90 font-medium text-base px-8"
                >
                  Falar com o comercial
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Decorative vertical line */}
          <div
            className="absolute right-12 top-1/4 hidden h-1/2 w-px bg-gradient-to-b from-transparent via-phyto-accent/20 to-transparent lg:block"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ═══════════════════════════════ INDUSTRY PHOTOS ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-cream py-28 md:py-36">
        {/* Decorative blob behind grid */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-phyto-accent/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">
              Nossa Estrutura
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-balance md:text-6xl">
              Conheça o parque industrial
            </h2>
          </motion.div>

          {/* Editorial grid with real images */}
          <div className="grid gap-4 md:grid-cols-12 md:gap-6">
            {/* Large left image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative md:col-span-7 md:row-span-2"
            >
              <div className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src={imgProduction}
                  alt="Linha de produção"
                  className="w-full h-full object-cover aspect-[4/3] transition-all duration-700 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl border border-transparent transition-colors duration-500 group-hover:border-phyto-accent/20" />
              </div>
              <div
                className="absolute -bottom-6 -left-6 -z-10 size-32 rounded-full bg-phyto-accent/10 blur-2xl"
                aria-hidden="true"
              />
            </motion.div>

            {/* Top right image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group relative md:col-span-5"
            >
              <div className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={imgQuality}
                  alt="Controle de qualidade"
                  className="w-full h-auto object-cover aspect-video transition-all duration-700 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl border border-transparent transition-colors duration-500 group-hover:border-phyto-accent/20" />
              </div>
            </motion.div>

            {/* Bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative md:col-span-5 md:-mt-8"
            >
              <div className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={imgWarehouse}
                  alt="Estoque e logística"
                  className="w-full h-auto object-cover aspect-video transition-all duration-700 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl border border-transparent transition-colors duration-500 group-hover:border-phyto-accent/20" />
              </div>
              <div
                className="absolute -right-8 -top-8 -z-10 size-40 rounded-full bg-phyto-accent/10 blur-2xl"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CAPABILITIES ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-surface py-28 md:py-36">
        {/* Decorative side accent */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-phyto-accent/20 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">
              Diferenciais
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-balance md:text-6xl">
              Capacidade & Diferenciais
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-brand-muted">
              Tudo o que sua marca precisa para chegar ao mercado com excelência.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                {...staggerItem}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative rounded-lg bg-brand-bg p-10 text-center shadow-sm transition-all duration-500 hover:shadow-md hover:shadow-phyto-accent/5"
              >
                {/* Accent glow behind icon on hover */}
                <div
                  className="absolute left-1/2 top-8 -translate-x-1/2 size-16 rounded-full bg-phyto-accent/0 blur-2xl transition-all duration-500 group-hover:bg-phyto-accent/15"
                  aria-hidden="true"
                />

                <div className="relative mx-auto flex size-16 items-center justify-center rounded-xl bg-phyto-accent/10 transition-all duration-500 group-hover:bg-phyto-accent/20 group-hover:scale-110">
                  <cap.icon className="size-8 text-phyto-accent transition-transform duration-500 group-hover:scale-110" />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-balance">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm text-pretty leading-relaxed text-brand-muted">
                  {cap.description}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full bg-phyto-accent/50 transition-all duration-500 group-hover:w-1/2"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ QUALITY SEALS ═══════════════════════════════ */}
      <section className="relative overflow-hidden py-28 md:py-36">
        {/* Subtle background decoration */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 size-80 rounded-full bg-phyto-accent/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">
              Garantia
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-balance md:text-6xl">
              Selos de Qualidade
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-brand-muted">
              Certificações que atestam nosso compromisso com segurança e excelência.
            </p>
          </motion.div>
          <QualitySeals seals={QUALITY_SEALS} />
        </div>
      </section>

      {/* ═══════════════════════════════ CLIENTS ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-surface py-28 md:py-36">
        {/* Decorative side line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-phyto-accent/20 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-phyto-accent">
              Confiança
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-balance md:text-6xl">
              Nossos Clientes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-brand-muted">
              Marcas que confiam na nossa capacidade de produção e qualidade.
            </p>
          </motion.div>
          <PrivateLabelClients clients={SUPERMARKET_CLIENTS} />
        </div>
      </section>

      {/* ═══════════════════════════════ CTA ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-dark grain py-28 md:py-36">
        <AnimatedHoneycomb id="pl-cta-honeycomb" />
        <ParticleField count={15} color="rgba(61, 92, 58, 0.12)" />

        {/* Ambient blobs */}
        <div
          className="absolute -right-20 -top-20 size-80 rounded-full bg-phyto-accent/8 blur-3xl animate-pulse-soft"
          aria-hidden="true"
        />
        <div
          className="absolute -left-20 -bottom-20 size-60 rounded-full bg-phyto-accent/8 blur-3xl animate-pulse-soft"
          style={{ animationDelay: "2s" }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl font-bold text-white md:text-6xl">
              Vamos construir
              <br />
              <span className="text-gradient-green">algo extraordinário?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/50">
              Entre em contato com nosso time comercial e descubra como podemos
              produzir sua marca com excelência.
            </p>

            <p className="mt-3 text-sm text-white/30">
              Você será direcionado ao nosso time comercial.
            </p>

            <Link to="/contato?dest=comercial" className="mt-10 inline-block">
              <Button
                size="lg"
                className="shimmer gap-2 bg-phyto-accent text-brand-dark hover:bg-phyto-accent/90 font-medium text-base px-10 py-6 text-lg shadow-lg shadow-phyto-accent/20 transition-shadow hover:shadow-xl hover:shadow-phyto-accent/30"
              >
                Falar com o comercial
                <ArrowRight className="size-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
