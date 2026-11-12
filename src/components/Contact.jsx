import Icon from './Icon'
import markImg from '../assets/logo-mark.png'
import { CTA, SITE, waLink } from '../data/content'

export default function Contact() {
  return (
    <section id="kontak" className="bg-mist px-6 pb-6 lg:px-10">
      <div
        data-aos="fade-up"
        className="relative mx-auto max-w-[1280px] overflow-hidden rounded-3xl bg-navy px-7 py-20 text-white sm:px-14 lg:py-28"
      >
        <span aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full border border-white/10" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-[460px] w-[460px] rounded-full border border-white/10" />
        <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full border border-white/10" />
        <img
          src={markImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -right-6 w-[260px] opacity-[0.07] sm:w-[360px]"
        />

        <div className="relative max-w-[720px]">
          <h2 className="text-balance text-[36px] font-normal leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[64px]">
            {CTA.title}
          </h2>
          <p className="mt-6 max-w-[500px] text-[15px] leading-relaxed text-white/70">{CTA.text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-[13px] font-medium text-navy"
            >
              {CTA.button}
              <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-white transition group-hover:rotate-45">
                <Icon name="arrow" size={16} />
              </span>
            </a>
            {SITE.email && (
              <a href={`mailto:${SITE.email}`} className="text-[14px] text-white/70 underline-offset-4 hover:text-white hover:underline">
                {SITE.email}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
