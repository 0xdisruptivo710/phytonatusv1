import { motion } from "framer-motion"
import { fadeUp, staggerItem } from "@/lib/animations"

interface Client {
  name: string
  logo: string | null
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
          className="group flex h-20 w-36 items-center justify-center rounded-lg bg-brand-surface text-sm font-medium text-brand-muted shadow-sm transition-all duration-300 hover:shadow-md"
        >
          {client.logo ? (
            <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain" />
          ) : (
            <span>{client.name}</span>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
