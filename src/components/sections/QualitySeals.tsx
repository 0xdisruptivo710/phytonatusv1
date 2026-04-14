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
    <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-12">
      {seals.map((seal, i) => (
        <motion.div
          key={seal.name}
          {...staggerItem}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group flex flex-col items-center gap-4"
        >
          <div className="flex h-36 w-36 items-center justify-center rounded-2xl bg-brand-surface p-4 shadow-sm transition-all duration-300 group-hover:shadow-md">
            <img src={seal.image} alt={seal.name} className="h-28 w-28 object-contain" />
          </div>
          <span className="text-base font-bold text-brand-text transition-colors duration-300 group-hover:text-phyto-accent">
            {seal.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}
