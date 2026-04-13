import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { LOJA_URL } from "@/lib/constants"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Institucional", href: "/institucional" },
  { label: "Marcas", href: "/marcas" },
  { label: "Private Label", href: "/private-label" },
  { label: "Clientes", href: "/onde-encontrar" },
  { label: "Contato", href: "/contato" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2.5 no-underline">
          <motion.div
            whileHover={{ rotate: 6, scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="flex size-9 items-center justify-center rounded-xl bg-phyto-accent shadow-lg shadow-phyto-accent/20"
          >
            <span className="font-display text-sm font-bold text-white">P</span>
          </motion.div>
          <span className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-brand-text" : "text-white"
          }`}>
            Phytonatus
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 no-underline ${
                location.pathname === item.href
                  ? scrolled ? "text-phyto-accent" : "text-white"
                  : scrolled ? "text-brand-muted hover:text-brand-text" : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
              {location.pathname === item.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-phyto-accent"
                  style={{ boxShadow: "0 0 8px rgba(61, 92, 58, 0.6)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-4 h-6 w-px bg-current opacity-10" aria-hidden="true" />
          <a href={LOJA_URL} target="_blank" rel="noopener noreferrer" className="ml-3">
            <Button
              variant="outline"
              size="sm"
              className={`gap-1.5 transition-all duration-300 ${
                scrolled
                  ? "border-brand-border hover:border-phyto-accent/40 hover:shadow-sm"
                  : "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              }`}
            >
              Loja Online
              <ExternalLink className="size-3.5" />
            </Button>
          </a>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menu"
                  className={scrolled ? "" : "text-white hover:bg-white/10"}
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-brand-bg">
              <SheetTitle className="font-display text-2xl font-bold">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 no-underline ${
                      location.pathname === item.href
                        ? "bg-phyto-accent/10 text-phyto-accent"
                        : "text-brand-muted hover:bg-brand-cream hover:text-brand-text"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-4 h-px bg-brand-border" />
                <a href={LOJA_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full gap-1.5">
                    Loja Online
                    <ExternalLink className="size-3.5" />
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}
