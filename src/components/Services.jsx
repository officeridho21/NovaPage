import Icon from './Icon'
import { SERVICES } from '../data/content'

export default function Services() {
  return (
    <section id="layanan" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div data-aos="fade-up">
            <p className="text-[12px] uppercase tracking-[0.18em] text-slate-400">{SERVICES.label}</p>
            <h2 className="mt-5 text-balance text-[32px] font-normal leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[44px]">
              {SERVICES.title}
            </h2>
          </div>

          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {SERVICES.items.map((s, i) => (
              <li key={s.no} data-aos="fade-up" data-aos-delay={i * 80}>
                <article className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 py-7 transition-colors hover:bg-mist/70 sm:gap-8 sm:px-4">
                  <span className="pt-1 text-[13px] tabular-nums text-slate-400">{s.no}</span>
                  <div>
                    <h3 className="text-2xl tracking-tight">{s.title}</h3>
                    <p className="mt-2 max-w-[460px] text-[14px] leading-relaxed text-slate-500">{s.text}</p>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white transition duration-300 group-hover:rotate-45">
                    <Icon name={s.icon} size={18} />
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
