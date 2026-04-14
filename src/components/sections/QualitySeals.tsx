import { motion } from "framer-motion"
import { fadeUp, staggerItem } from "@/lib/animations"

interface Seal {
  name: string
  image: string
}

interface QualitySealsProps {
  seals: Seal[]
}

export function QualitySeals({ seals }: QualitySealsProps) {
  return (
    <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-8">
      {seals.map((seal, i) => (
        <motion.div
          key={seal.name}
          {...staggerItem}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group flex flex-col items-center gap-3"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-phyto-accent/0 blur-xl transition-all duration-500 group-hover:bg-phyto-accent/15" aria-hidden="true" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-brand-border bg-brand-surface transition-all duration-300 group-hover:border-phyto-accent/40 group-hover:shadow-lg group-hover:shadow-phyto-accent/10">
              <img src={seal.image} alt={seal.name} className="h-20 w-20 object-contain" />
            </div>
          </div>
          <span className="text-sm font-bold text-brand-text transition-colors duration-300 group-hover:text-phyto-accent">
            {seal.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}
