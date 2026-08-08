import { Brain, Check, HandHeart } from "@phosphor-icons/react/ssr";
import { diensten } from "@/content";

const iconen = {
  hand: HandHeart,
  brein: Brain,
};

export default function Diensten() {
  return (
    <section id="diensten" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="max-w-[46ch]">
          <h2
            data-reveal
            className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.6rem]"
          >
            {diensten.titel}
          </h2>
          <p data-reveal className="mt-5 text-[17px] leading-relaxed text-muted">
            {diensten.intro}
          </p>
        </div>

        {/*
          Twee kaarten nu, meer kan later gewoon in content.ts erbij.
          De laatste regel hieronder laat een oneven laatste kaart over de volle
          breedte lopen, zodat er nooit een leeg vak in het raster overblijft.
        */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 md:[&>*:last-child:nth-child(odd)]:col-span-2">
          {diensten.items.map((item) => {
            const Icoon = iconen[item.icoon];
            return (
              <article
                key={item.titel}
                data-reveal
                className="group rounded-3xl border border-line bg-bone p-7 transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-forest/35 md:p-9"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest-tint text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-bone">
                  <Icoon size={24} weight="light" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink md:text-2xl">
                  {item.titel}
                </h3>
                <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">
                  {item.tekst}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {item.punten.map((punt) => (
                    <li
                      key={punt}
                      className="flex items-start gap-3 text-[15px] text-ink"
                    >
                      <Check
                        size={16}
                        weight="bold"
                        className="mt-1 shrink-0 text-forest"
                      />
                      {punt}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p data-reveal className="mt-8 text-[15px] text-muted">
          {diensten.naschrift}
        </p>
      </div>
    </section>
  );
}
