import { useState } from "react"
import { Link } from "react-router-dom"
import { ExternalLink, Leaf, Send } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LOJA_URL } from "@/lib/constants"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Institucional", href: "/institucional" },
  { label: "Marcas", href: "/marcas" },
  { label: "Private Label", href: "/private-label" },
  { label: "Clientes", href: "/onde-encontrar" },
  { label: "Contato", href: "/contato" },
]

export function Footer() {
  const [formData, setFormData] = useState({ nome: "", contato: "", mensagem: "" })
  const [sending, setSending] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.nome || !formData.contato || !formData.mensagem) {
      toast.error("Preencha todos os campos.")
      return
    }
    setSending(true)
    // TODO: integrar com backend de e-mail
    console.log("Footer form submitted:", formData)
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso!", {
        description: "Retornaremos o contato em breve.",
      })
      setFormData({ nome: "", contato: "", mensagem: "" })
      setSending(false)
    }, 500)
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-brand-dark">
      <AnimatedHoneycomb id="footer-honeycomb" className="absolute inset-0 size-full opacity-[0.015]" animate={false} />

      <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-phyto-accent/20 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Link to="/" className="group flex items-center gap-2.5 no-underline">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.08 }}
                className="flex size-9 items-center justify-center rounded-xl bg-phyto-accent shadow-lg shadow-phyto-accent/20"
              >
                <span className="font-display text-sm font-bold text-white">P</span>
              </motion.div>
              <span className="font-display text-xl font-bold text-white">Phytonatus</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-pretty leading-relaxed text-white/35">
              Produtos naturais com ingrediente único, rótulo limpo e marcas com identidade.
            </p>
            <div className="mt-4 flex items-center gap-2 text-white/20">
              <Leaf className="size-4 text-phyto-accent/50" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest">Desde 2014</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/40">Navegacao</h3>
            <nav aria-label="Rodape" className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="link-underline w-fit text-sm text-white/35 transition-colors hover:text-white no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/40">Loja Online</h3>
              <a
                href={LOJA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20 no-underline"
              >
                Acessar loja
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/40">Fale conosco</h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <Input
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-phyto-accent/40"
                />
                <Input
                  placeholder="E-mail ou telefone"
                  value={formData.contato}
                  onChange={(e) => setFormData(prev => ({ ...prev, contato: e.target.value }))}
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-phyto-accent/40"
                />
              </div>
              <Textarea
                placeholder="Sua mensagem..."
                rows={3}
                value={formData.mensagem}
                onChange={(e) => setFormData(prev => ({ ...prev, mensagem: e.target.value }))}
                className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-phyto-accent/40 resize-none"
              />
              <Button
                type="submit"
                disabled={sending}
                className="gap-2 bg-phyto-accent hover:bg-phyto-accent/90 text-white"
              >
                <Send className="size-3.5" />
                {sending ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-phyto-accent/15 to-transparent" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Phytonatus &middot; Todos os direitos reservados
          </p>
          <p className="text-xs text-white/15">Ingrediente único &middot; Rótulo limpo</p>
        </div>
      </div>
    </footer>
  )
}
