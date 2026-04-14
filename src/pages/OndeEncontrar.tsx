import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeUp, fadeUpLarge, pageTransition } from "@/lib/animations"
import {
  LOJA_URL,
  AMAZON_URL,
  MERCADO_LIVRE_URL,
  SUPERMARKET_CLIENTS,
  imgWarehouse,
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
    description: "Compre com entrega rápida pela Amazon",
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
      <section className="relative overflow-hidden py-24 md:py-36">
        <img src={imgWarehouse} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/65 via-brand-dark/45 to-brand-dark/75" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-phyto-accent">
              Distribuição
            </span>
            <h1 {...fadeUpLarge} className="font-display text-6xl font-bold text-balance text-brand-cream md:text-7xl">
              Nossos
              <br />
              <span className="text-gradient-green">Clientes</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-brand-cream/60">
              Estamos presentes nas principais redes de varejo e também online.
              Escolha o canal mais conveniente para você.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients horizontal scrolling bar */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-phyto-accent">
              Varejo fisico
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-balance md:text-6xl">
              Clientes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-muted">
              Nossos produtos estao presentes nas melhores redes do Brasil.
            </p>
          </motion.div>
        </div>

        {/* Infinite horizontal scroll */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none" />
          <div className="flex whitespace-nowrap animate-marquee">
            {[...SUPERMARKET_CLIENTS, ...SUPERMARKET_CLIENTS, ...SUPERMARKET_CLIENTS, ...SUPERMARKET_CLIENTS].map((client, i) => (
              <div
                key={`client-${client.name}-${i}`}
                className="mx-4 flex h-20 w-44 shrink-0 items-center justify-center rounded-md bg-brand-surface text-base font-semibold text-brand-muted shadow-sm transition-all duration-300 hover:shadow-md hover:text-brand-text"
              >
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-8 w-auto object-contain" />
                ) : (
                  <span>{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-brand-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-phyto-accent">
            Compre online
          </span>
          <div className="flex-1 h-px bg-brand-border" />
        </div>
      </div>

      {/* Digital channels */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {digitalChannels.map((channel, i) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline"
                >
                  <div className="group relative overflow-hidden rounded-lg bg-brand-surface p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-phyto-accent/5">
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
