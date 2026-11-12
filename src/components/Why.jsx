import Icon from './Icon'
import { WHY } from '../data/content'

export default function Why() {
  return (
    <section id="kenapa" className="bg-mist">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-[760px]" data-aos="fade-up">
          <p className="text-[12px] uppercase tracking-[0.18em] text-slate-400">{WHY.label}</p>
          <h2 className="mt-5 text-balance text-[34px] font-normal leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
            {WHY.title}
          </h2>
          <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-slate-500">{WHY.text}</p>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {WHY.items.map((w, i) => (
            <li
              key={w.no}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-white p-6"
            >
              <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-[220px] w-[220px] rounded-full border border-slate-200/70" />
              <span aria-hidden="true" className="pointer-events-none absolute -right-4 -top-4 h-[110px] w-[110px] rounded-full border border-slate-200/70" />
              <div className="relative flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-white">
                  <Icon name={w.icon} size={18} />
                </span>
                <span className="text-[13px] tabular-nums text-slate-400">{w.no}</span>
              </div>
              <div className="relative">
                <h3 className="text-2xl tracking-tight">{w.title}</h3>
                <p className="mt-2 max-w-[280px] text-[14px] leading-relaxed text-slate-500">{w.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
