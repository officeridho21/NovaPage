import heroImg from '../assets/hero.svg'
import Icon from './Icon'
import { HERO, waLink } from '../data/content'

export default function Hero() {
  return (
    <section id="beranda" className="relative isolate min-h-[100svh] overflow-hidden bg-navy text-white">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/55 via-transparent to-navy/70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/60 via-navy/10 to-transparent" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="mx-auto h-full max-w-[1280px] px-6 lg:px-10">
          <div className="relative h-full border-x border-white/15" />
        </div>
        <div className="absolute inset-x-0 top-[72px] border-t border-white/15 lg:top-[84px]" />
        <div className="absolute inset-x-0 bottom-[132px] border-t border-white/15 sm:bottom-[112px]" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-[1280px] flex-col px-6 pb-[156px] pt-[120px] sm:pb-[140px] lg:px-10 lg:pt-[150px]">
        <div className="max-w-[760px] lg:pl-0">
          <p className="animate-rise text-[11px] uppercase tracking-[0.18em] text-white/80">{HERO.eyebrow}</p>
          <h1
            className="animate-rise mt-5 text-balance text-[44px] font-normal leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-[76px]"
            style={{ animationDelay: '120ms' }}
          >
            {HERO.title}
          </h1>
          <p
            className="animate-rise mt-6 max-w-[460px] text-[14px] leading-relaxed text-white/80 sm:text-[15px]"
            style={{ animationDelay: '240ms' }}
          >
            {HERO.text}
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="animate-rise group mt-9 inline-flex items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-[13px] font-medium text-navy transition hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,.5)]"
            style={{ animationDelay: '360ms' }}
          >
            {HERO.cta}
            <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-white transition group-hover:rotate-45">
              <Icon name="arrow" size={16} />
            </span>
          </a>
        </div>

        <dl className="mt-auto grid grid-cols-2 gap-x-6 gap-y-6 pt-20 sm:grid-cols-4">
          {HERO.stats.map((s, i) => (
            <div key={i} className="animate-rise" style={{ animationDelay: `${480 + i * 90}ms` }}>
              <dd className="text-[34px] font-normal leading-none tracking-tight sm:text-[38px]">{s.value}</dd>
              <dt className="mt-2 text-[12px] leading-snug text-white/75">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#tentang"
        aria-label="Scroll ke bawah"
        className="absolute bottom-[132px] left-1/2 hidden h-[60px] w-[60px] -translate-x-1/2 translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-[11px] backdrop-blur-md transition hover:bg-white/20 sm:bottom-[112px] sm:grid"
      >
        <span className="animate-floaty">Scroll down</span>
      </a>
    </section>
  )
}
