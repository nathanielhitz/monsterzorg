import { Briefcase, GraduationCap } from "@phosphor-icons/react/ssr";
import { ervaring } from "@/content";

export default function Ervaring() {
  return (
    <section id="ervaring" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="max-w-[46ch]">
          <h2
            data-reveal
            className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.6rem]"
          >
            {ervaring.titel}
          </h2>
          <p data-reveal className="mt-5 text-[17px] leading-relaxed text-muted">
            {ervaring.intro}
          </p>
        </div>

        <ol className="relative mt-14 max-w-4xl">
          {/* De rail loopt mee met de jaren: grijs spoor met een groene lijn die
              zich vult terwijl je door de tijdlijn scrollt. Vanaf lg schuift de
              rail naar rechts, zodat de periode links naast de tijdlijn staat. */}
          <span
            aria-hidden
            className="absolute top-3 bottom-3 left-[13.5px] w-px bg-line lg:left-[calc(9rem+13.5px)]"
          />
          <span
            data-rail
            aria-hidden
            className="absolute top-3 bottom-3 left-[13.5px] w-px bg-forest lg:left-[calc(9rem+13.5px)]"
          />

          {ervaring.items.map((item) => {
            const Icoon = item.soort === "opleiding" ? GraduationCap : Briefcase;
            return (
              <li
                key={`${item.periode}-${item.organisatie}`}
                data-reveal
                className="relative pb-11 pl-12 last:pb-0 lg:grid lg:grid-cols-[9rem_1fr] lg:pl-0"
              >
                <span
                  aria-hidden
                  className={`absolute top-0.5 left-0 inline-flex h-7 w-7 items-center justify-center rounded-full ring-[5px] ring-bone lg:left-36 ${
                    item.soort === "opleiding"
                      ? "bg-forest-tint text-forest"
                      : "bg-forest text-bone"
                  }`}
                >
                  <Icoon size={14} weight="bold" />
                </span>

                <p className="text-[13px] tracking-[0.06em] text-muted lg:pr-12 lg:pt-1 lg:text-right">
                  {item.periode}
                </p>
                <div className="lg:pl-12">
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-ink lg:mt-0">
                    {item.rol}
                  </h3>
                  <p className="mt-0.5 font-medium text-forest">
                    {item.organisatie}
                  </p>
                  <p className="mt-2 max-w-[54ch] leading-relaxed text-muted">
                    {item.tekst}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
