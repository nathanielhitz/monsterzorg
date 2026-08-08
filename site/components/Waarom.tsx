import {
  Brain,
  CalendarCheck,
  HandHeart,
  ShieldCheck,
} from "@phosphor-icons/react/ssr";
import { waarom } from "@/content";

const iconen = {
  hart: HandHeart,
  brein: Brain,
  schild: ShieldCheck,
  agenda: CalendarCheck,
};

/*
  Vier redenen in een raster van 7 + 5 en 5 + 7 kolommen. Dat telt precies op
  tot twee volle rijen, dus er blijft nergens een gat over. De vlakken hebben
  bewust verschillende achtergronden zodat het geen muur van dezelfde kaartjes
  wordt.
*/
const vlakken = [
  {
    span: "lg:col-span-7",
    stijl: "bg-forest text-bone",
    icoonStijl: "bg-bone/15 text-bone",
    tekstStijl: "text-bone/75",
    groot: true,
  },
  {
    span: "lg:col-span-5",
    stijl: "border border-line bg-surface text-ink",
    icoonStijl: "bg-forest-tint text-forest",
    tekstStijl: "text-muted",
    groot: false,
  },
  {
    span: "lg:col-span-5",
    stijl: "border border-line bg-surface text-ink",
    icoonStijl: "bg-forest-tint text-forest",
    tekstStijl: "text-muted",
    groot: false,
  },
  {
    span: "lg:col-span-7",
    stijl: "bg-forest-tint text-ink",
    icoonStijl: "bg-forest text-bone",
    tekstStijl: "text-muted",
    groot: false,
  },
];

export default function Waarom() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="shell">
        <h2
          data-reveal
          className="max-w-[20ch] font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.6rem]"
        >
          {waarom.titel}
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {waarom.items.map((item, i) => {
            const Icoon = iconen[item.icoon];
            const vlak = vlakken[i % vlakken.length];
            return (
              <div
                key={item.titel}
                data-reveal
                className={`flex flex-col rounded-3xl p-7 md:p-9 ${vlak.span} ${vlak.stijl}`}
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${vlak.icoonStijl}`}
                >
                  <Icoon size={22} weight="light" />
                </span>
                <h3
                  className={`mt-6 font-display font-semibold ${
                    vlak.groot ? "text-2xl md:text-[1.75rem]" : "text-xl"
                  }`}
                >
                  {item.titel}
                </h3>
                <p
                  className={`mt-3 max-w-[46ch] leading-relaxed ${vlak.tekstStijl}`}
                >
                  {item.tekst}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
