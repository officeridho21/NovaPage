import { useEffect, useRef } from 'react'

/**
 * Mewarnai kata-kata satu per satu (abu-abu -> gelap) mengikuti scroll.
 * Dipakai pada kalimat besar di section "Tentang".
 */
export default function useScrollProgressText() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const words = Array.from(el.querySelectorAll('[data-word]'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const from = [180, 182, 192]
    const to = [13, 16, 32]

    const paint = (progress) => {
      const n = words.length
      words.forEach((w, i) => {
        const start = i / n
        const t = Math.min(1, Math.max(0, (progress - start) * n * 0.9))
        const c = from.map((f, k) => Math.round(f + (to[k] - f) * t))
        w.style.color = `rgb(${c[0]},${c[1]},${c[2]})`
      })
    }

    if (reduce) {
      paint(1)
      return
    }

    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.3)
      paint(Math.min(1, Math.max(0, p)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return ref
}
