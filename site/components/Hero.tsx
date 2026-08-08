import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { cta, hero, persoon } from "@/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-9 pb-12 sm:pt-14 sm:pb-16 md:pt-20 md:pb-24 lg:flex lg:min-h-[calc(100dvh-68px)] lg:items-center lg:pt-14"
    >
      {/* Warme gloed rechtsboven, in dezelfde familie als de foto */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-15%] h-[520px] w-[520px] rounded-full bg-forest-tint blur-3xl"
      />

      <div className="shell relative">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16">
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
              className="mt-4 font-display text-[clamp(2.25rem,1.4rem+4vw,2.625rem)] leading-[1.04] font-semibold tracking-tight text-balance text-ink sm:mt-6 sm:text-5xl lg:text-[3.4rem]"
            >
              {hero.titel}
            </h1>

            <p
              data-hero-step
              className="mt-4 max-w-[46ch] text-[17px] leading-[1.5] text-muted sm:mt-6 sm:text-lg sm:leading-relaxed"
            >
              {hero.tekst}
            </p>

            <div
              data-hero-step
              className="mt-6 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-[17px] font-medium text-bone transition-colors duration-200 hover:bg-forest-deep active:scale-[0.98] sm:py-3.5 sm:text-base"
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
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-[17px] font-medium text-ink transition-colors duration-200 hover:border-forest/40 hover:text-forest active:scale-[0.98] sm:py-3.5 sm:text-base"
              >
                {cta.ervaring}
              </a>
            </div>
          </div>

          <div data-hero-step className="lg:col-span-6">
            <div className="relative mx-auto max-w-[16rem] sm:max-w-[480px] lg:mr-0 lg:ml-auto">
              {/* Zacht groen vlak achter de foto, geeft de hero diepte. Alleen
                  vanaf sm, want daar staat de foto staand in een rechthoek. */}
              <div
                aria-hidden
                className="absolute -top-4 -right-4 bottom-8 left-10 hidden rounded-3xl bg-forest-tint sm:block"
              />
              {/* Op telefoons een kleinere ronde pasfoto met een zachte groene
                  rand, in dezelfde tint als het vlak op desktop. Vanaf sm weer
                  het staande formaat met afgeronde hoeken. */}
              <div className="relative aspect-square overflow-hidden rounded-full bg-forest-tint shadow-[0_28px_60px_-30px_rgba(23,33,28,0.45)] ring-8 ring-forest-tint sm:aspect-4/5 sm:rounded-3xl sm:ring-0">
                <Image
                  data-parallax
                  src={persoon.foto}
                  alt={persoon.fotoAlt}
                  fill
                  priority
                  sizes="(max-width: 639px) 272px, (max-width: 1024px) 90vw, 480px"
                  // De foto is vierkant, dus in de ronde uitsnede doet
                  // object-position niets en bepaalt het zoompunt de
                  // beeldvulling. Dat ligt hoger dan het midden, anders valt de
                  // bovenkant van het hoofd net buiten de cirkel.
                  className="scale-110 origin-[center_35%] object-cover object-[center_18%] sm:origin-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
