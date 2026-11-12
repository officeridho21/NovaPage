import Icon from './Icon'
import { QUICK } from '../data/content'

function Rings({ dark }) {
  const c = dark ? 'border-white/10' : 'border-slate-200/70'
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className={`absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full border ${c}`} />
      <span className={`absolute -right-10 -top-10 h-[240px] w-[240px] rounded-full border ${c}`} />
      <span className={`absolute right-6 top-6 h-[130px] w-[130px] rounded-full border ${c}`} />
    </div>
  )
}

export default function QuickCards() {
  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-[1280px] gap-5 px-6 py-16 md:grid-cols-3 lg:px-10 lg:py-20">
        {QUICK.map((q, i) => (
          <a
            key={q.title}
            href={q.href}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className={`group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl p-5 transition duration-500 hover:-translate-y-1 lg:min-h-[400px] ${
              q.dark ? 'bg-navy text-white' : 'bg-white text-ink'
            }`}
          >
            <Rings dark={q.dark} />
            <div className="relative flex items-center gap-3">
              <span
                className={`grid h-9 w-9 place-items-center rounded-lg ${q.dark ? 'bg-white text-navy' : 'bg-navy text-white'}`}
              >
                <Icon name={q.icon} size={16} />
              </span>
              <span className="text-lg tracking-tight">{q.title}</span>
              <Icon
                name="arrow"
                size={18}
                className="ml-auto opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-60"
              />
            </div>
            <p className={`relative max-w-[260px] text-[14px] leading-relaxed ${q.dark ? 'text-white/70' : 'text-slate-500'}`}>
              {q.text}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
