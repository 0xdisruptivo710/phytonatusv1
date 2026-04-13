import { BrowserRouter } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/effects/ScrollProgress"
import { BeeCursor } from "@/components/effects/BeeCursor"
import { AppRouter } from "@/router"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-dvh flex-col">
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-phyto-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-[72px]">
          <AppRouter />
        </main>
        <Footer />
      </div>
      <BeeCursor />
      <Toaster position="bottom-right" />
    </BrowserRouter>
  )
}
