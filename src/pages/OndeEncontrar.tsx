import { motion } from "framer-motion"
import { ExternalLink, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { ParticleField } from "@/components/effects/ParticleField"
import { fadeUp, fadeUpLarge, staggerItem, pageTransition } from "@/lib/animations"
import {
  LOJA_URL,
  AMAZON_URL,
  MERCADO_LIVRE_URL,
  SUPERMARKET_CLIENTS,
} from "@/lib/constants"

const digitalChannels = [
  {
    name: "Loja Phytonatus",
    url: LOJA_URL,
    description: "Nossa loja oficial com todos os produtos",
  },
  {
    name: "Amazon",
    url: AMAZON_URL,
    description: "Compre com entrega rapida pela Amazon",
  },
  {
    name: "Mercado Livre",
    url: MERCADO_LIVRE_URL,
    description: "Encontre nossos produtos no Mercado Livre",
  },
]

export default function OndeEncontrar() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-brand-dark py-24 md:py-36">
        <AnimatedHoneycomb id="onde-honeycomb" />
        <ParticleField count={20} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-phyto-accent">
              Pontos de venda
            </span>
            <h1 {...fadeUpLarge} className="font-display text-6xl font-bold text-balance text-brand-cream md:text-7xl">
              Encontre nossos
              <br />
              <span className="text-gradient-green">produtos</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-brand-cream/60">
              Estamos presentes nas principais redes de varejo e tambem online.
              Escolha o canal mais conveniente para voce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Supermarket grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-phyto-accent">
              <MapPin className="size-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Varejo fisico
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold text-balance md:text-6xl">
              Pontos de Venda
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-muted">
              Encontre nossos produtos nas melhores redes de supermercados do Brasil.
            </p>
          </motion.div>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3">
            {SUPERMARKET_CLIENTS.map((client, i) => (
              <motion.div
                key={client.name}
                {...staggerItem}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex h-28 items-center justify-center rounded-2xl border border-brand-border bg-brand-surface text-sm font-semibold text-brand-muted transition-all duration-300 hover:border-phyto-accent/30 hover:shadow-lg hover:shadow-phyto-accent/5"
              >
                {/* TODO: substituir por logo real */}
                <span className="transition-colors duration-300 group-hover:text-brand-text">
                  {client.imagePlaceholder}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-xs font-semibold uppercase tracking-widest text-phyto-accent">
            Compre online
          </span>
          <Separator className="flex-1" />
        </div>
      </div>

      {/* Digital channels */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {digitalChannels.map((channel, i) => (
              <motion.div
                key={channel.name}
                {...staggerItem}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline"
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-surface p-8 text-center transition-all duration-300 hover:border-phyto-accent/30 hover:shadow-xl hover:shadow-phyto-accent/5">
                    {/* Accent glow on hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-phyto-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-balance text-brand-text transition-colors duration-300 group-hover:text-phyto-accent">
                        {channel.name}
                      </h3>
                      <p className="mt-2 text-sm text-pretty text-brand-muted">
                        {channel.description}
                      </p>
                      <div className="mt-5">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1.5 pointer-events-none border-phyto-accent/20 transition-colors duration-300 group-hover:border-phyto-accent/50 group-hover:text-phyto-accent"
                        >
                          Acessar
                          <ExternalLink className="size-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-pretty text-brand-muted">
            A disponibilidade de produtos pode variar por ponto de venda.
          </p>
        </div>
      </section>
    </motion.div>
  )
}
