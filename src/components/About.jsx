import useScrollProgressText from '../hooks/useScrollProgressText'
import Icon from './Icon'
import { ABOUT, WORKS } from '../data/content'

const avatarIcons = ['target', 'smartphone', 'trending']

export default function About() {
  const ref = useScrollProgressText()
  const words = ABOUT.statement.split(' ')

  return (
    <section id="tentang" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 pb-10 pt-24 lg:px-10 lg:pt-32">
        <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-slate-400">{ABOUT.label}</p>
        <h2
          ref={ref}
          className="max-w-[1000px] text-balance text-[34px] font-normal leading-[1.1] tracking-[-0.03em] sm:text-5xl lg:text-[60px]"
        >
          {words.map((w, i) => (
            <span key={i} data-word style={{ color: 'rgb(180,182,192)' }} className="transition-colors duration-200">
              {w}{' '}
            </span>
          ))}
        </h2>

        <div className="mt-16 flex flex-col items-start justify-between gap-10 lg:mt-24 lg:flex-row lg:items-end">
          <div data-aos="fade-up">
            <div className="flex -space-x-3">
              {avatarIcons.map((n, i) => (
                <span
                  key={n}
                  className="grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-navy-700 to-navy text-white shadow-md"
                  style={{ zIndex: 3 - i }}
                >
                  <Icon name={n} size={18} />
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-[420px] text-[14px] leading-relaxed text-slate-500">{ABOUT.text}</p>
          </div>

          <a
            href="#kenapa"
            data-aos="zoom-in"
            className="grid h-[132px] w-[132px] shrink-0 place-items-center rounded-full bg-navy px-6 text-center text-[13px] leading-snug text-white transition duration-500 hover:scale-105 hover:bg-navy-700"
          >
            {ABOUT.cta}
          </a>
        </div>

        {/* tiga prinsip */}
        <ul className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
          {ABOUT.pillars.map((p, i) => (
            <li key={p.title} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white p-7 lg:p-9">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-white">
                <Icon name={avatarIcons[i]} size={18} />
              </span>
              <h3 className="mt-10 text-xl tracking-tight">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* marquee jenis karya (pengganti logo klien) */}
      <div
        className="relative mx-auto mt-16 max-w-[1280px] overflow-hidden px-6 pb-24 lg:px-10"
        style={{
          WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
          maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
        }}
        aria-label="Jenis karya NovaPage"
      >
        <ul className="flex w-max animate-marquee items-center gap-16">
          {[...WORKS, ...WORKS].map((w, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-400">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-300 text-white">
                <Icon name={['landing', 'company', 'invite', 'card', 'portfolio', 'globe'][i % 6]} size={16} />
              </span>
              <span className="whitespace-nowrap text-xl font-medium tracking-tight">{w}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
