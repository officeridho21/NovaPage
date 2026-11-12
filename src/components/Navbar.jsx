import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Icon from './Icon'
import { NAV, waLink } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // kunci scroll body + tutup dengan Esc saat sidebar terbuka
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-navy/85 shadow-[0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="relative mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:h-[84px] lg:px-10">
          <a href="#beranda" aria-label="NovaPage — beranda" className="relative z-10 shrink-0">
            <img src={logo} alt="NovaPage" className="h-8 w-auto lg:h-9" />
          </a>

          {/* menu desktop: pill kaca di tengah */}
          <nav
            aria-label="Menu utama"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-2.5 backdrop-blur-xl lg:flex"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-5 py-1.5 text-[13px] text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-white px-6 py-3 text-[13px] font-medium text-navy transition hover:bg-white/90 sm:inline-block"
            >
              Hubungi kami
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20 lg:hidden"
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-navy-900/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* sidebar: masuk dari kanan ke kiri */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[60] flex h-full w-[84%] max-w-[360px] flex-col bg-navy px-7 pb-8 pt-6 text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,.8,.2,1)] lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <img src={logo} alt="NovaPage" className="h-7 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Tutup menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <nav aria-label="Menu mobile" className="mt-12 flex flex-1 flex-col">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${150 + i * 60}ms` : '0ms' }}
              className={`flex items-center justify-between border-b border-white/10 py-5 text-2xl tracking-tight transition-all duration-500 ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
              }`}
            >
              {n.label}
              <Icon name="arrow" size={20} className="text-white/40" />
            </a>
          ))}
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="mt-8 rounded-full bg-white py-4 text-center text-sm font-medium text-navy"
        >
          Hubungi kami
        </a>
      </aside>
    </>
  )
}
