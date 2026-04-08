import { motion } from "framer-motion"
import { fadeUp, staggerItem } from "@/lib/animations"

interface Client {
  name: string
  imagePlaceholder: string
}

interface PrivateLabelClientsProps {
  clients: Client[]
}

export function PrivateLabelClients({ clients }: PrivateLabelClientsProps) {
  return (
    <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-6">
      {clients.map((client, i) => (
        <motion.div
          key={client.name}
          {...staggerItem}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group flex h-20 w-36 items-center justify-center rounded-xl border border-brand-border bg-brand-surface text-sm font-medium text-brand-muted transition-all duration-300 hover:border-mel-accent/30 hover:shadow-lg hover:shadow-mel-accent/5"
        >
          {client.imagePlaceholder}
        </motion.div>
      ))}
    </motion.div>
  )
}
