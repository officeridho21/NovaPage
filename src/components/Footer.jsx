import logo from '../assets/logo.png'
import { NAV, SITE } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-mist px-6 pb-6 lg:px-10">
      <div className="mx-auto max-w-[1280px] rounded-3xl bg-navy-900 px-7 py-12 text-white sm:px-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <img src={logo} alt="NovaPage" className="h-9 w-auto" />
            <p className="mt-4 text-[14px] text-white/60">{SITE.tagline}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-white/70">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-[12px] text-white/50">
          © {new Date().getFullYear()} {SITE.name}. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  )
}
