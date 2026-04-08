import { lazy, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const Home = lazy(() => import("@/pages/Home"))
const Institucional = lazy(() => import("@/pages/Institucional"))
const Marcas = lazy(() => import("@/pages/Marcas"))
const PrivateLabel = lazy(() => import("@/pages/PrivateLabel"))
const OndeEncontrar = lazy(() => import("@/pages/OndeEncontrar"))
const Contato = lazy(() => import("@/pages/Contato"))

function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-border border-t-phyto-accent" />
    </div>
  )
}

export function AppRouter() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/private-label" element={<PrivateLabel />} />
          <Route path="/onde-encontrar" element={<OndeEncontrar />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}
