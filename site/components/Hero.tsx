import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { cta, hero, persoon } from "@/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-24 lg:flex lg:min-h-[calc(100dvh-68px)] lg:items-center lg:pt-14"
    >
      {/* Warme gloed rechtsboven, in dezelfde familie als de foto */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-15%] h-[520px] w-[520px] rounded-full bg-forest-tint blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p
              data-hero-step
              className="flex items-center gap-3 text-sm font-medium tracking-[0.14em] text-forest uppercase"
            >
              <span aria-hidden className="h-px w-8 bg-forest/40" />
              {hero.merkregel}
            </p>

            <h1
              data-hero-step
              className="mt-6 font-display text-[2.5rem] leading-[1.04] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.4rem]"
            >
              {hero.titel}
            </h1>

            <p
              data-hero-step
              className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted"
            >
              {hero.tekst}
            </p>

            <div
              data-hero-step
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-medium text-bone transition-colors duration-200 hover:bg-forest-deep active:scale-[0.98]"
              >
                {cta.contact}
                <ArrowRight
                  size={17}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#ervaring"
                className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-6 py-3.5 font-medium text-ink transition-colors duration-200 hover:border-forest/40 hover:text-forest active:scale-[0.98]"
              >
                {cta.ervaring}
              </a>
            </div>
          </div>

          <div data-hero-step className="lg:col-span-6">
            <div className="relative mx-auto max-w-[480px] lg:mr-0 lg:ml-auto">
              {/* Zacht groen vlak achter de foto, geeft de hero diepte */}
              <div
                aria-hidden
                className="absolute -top-4 -right-4 bottom-8 left-10 rounded-3xl bg-forest-tint"
              />
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-forest-tint shadow-[0_28px_60px_-30px_rgba(23,33,28,0.45)]">
                <Image
                  data-parallax
                  src={persoon.foto}
                  alt={persoon.fotoAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="scale-110 object-cover object-[center_18%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
