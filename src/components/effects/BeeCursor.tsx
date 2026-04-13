import { useEffect, useRef } from "react"

const BEE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28">
  <!-- wings -->
  <ellipse cx="22" cy="20" rx="10" ry="7" fill="rgba(255,255,255,0.6)" stroke="#aaa" stroke-width="0.5"/>
  <ellipse cx="42" cy="20" rx="10" ry="7" fill="rgba(255,255,255,0.6)" stroke="#aaa" stroke-width="0.5"/>
  <!-- body -->
  <ellipse cx="32" cy="34" rx="12" ry="16" fill="#F1BE48"/>
  <!-- stripes -->
  <rect x="20" y="28" width="24" height="4" rx="2" fill="#2D2114"/>
  <rect x="20" y="36" width="24" height="4" rx="2" fill="#2D2114"/>
  <rect x="22" y="44" width="20" height="3" rx="1.5" fill="#2D2114"/>
  <!-- head -->
  <circle cx="32" cy="19" r="7" fill="#2D2114"/>
  <!-- eyes -->
  <circle cx="29" cy="17" r="2" fill="white"/>
  <circle cx="35" cy="17" r="2" fill="white"/>
  <circle cx="29.5" cy="17.5" r="0.8" fill="#2D2114"/>
  <circle cx="35.5" cy="17.5" r="0.8" fill="#2D2114"/>
  <!-- antennae -->
  <line x1="29" y1="13" x2="25" y2="7" stroke="#2D2114" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="35" y1="13" x2="39" y2="7" stroke="#2D2114" stroke-width="1.2" stroke-linecap="round"/>
  <circle cx="25" cy="6" r="1.5" fill="#F1BE48"/>
  <circle cx="39" cy="6" r="1.5" fill="#F1BE48"/>
  <!-- stinger -->
  <polygon points="32,50 30,54 34,54" fill="#2D2114"/>
</svg>`

export function BeeCursor() {
  const beeRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })
  const raf = useRef<number>(0)

  useEffect(() => {
    // Only show on non-touch devices
    const mq = window.matchMedia("(pointer: fine)")
    if (!mq.matches) return

    function onMove(e: MouseEvent) {
      target.current = { x: e.clientX, y: e.clientY }
    }

    function animate() {
      pos.current.x += (target.current.x - pos.current.x) * 0.15
      pos.current.y += (target.current.y - pos.current.y) * 0.15

      if (beeRef.current) {
        beeRef.current.style.left = `${pos.current.x}px`
        beeRef.current.style.top = `${pos.current.y}px`
      }
      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={beeRef}
      className="bee-cursor hidden md:block"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: BEE_SVG }}
    />
  )
}
