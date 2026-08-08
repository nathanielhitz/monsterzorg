import { over } from "@/content";

export default function Over() {
  return (
    <section id="over" className="py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2
              data-reveal
              className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.6rem]"
            >
              {over.titel}
            </h2>
            <div className="mt-8 space-y-6">
              {over.alineas.map((alinea) => (
                <p
                  key={alinea.slice(0, 24)}
                  data-reveal
                  className="max-w-[60ch] text-[17px] leading-[1.75] text-muted"
                >
                  {alinea}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              data-reveal
              className="rounded-3xl border border-line bg-surface p-7 md:p-8 lg:sticky lg:top-28"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {over.feitenTitel}
              </h3>
              <dl className="mt-6 space-y-5">
                {over.feiten.map((feit) => (
                  <div key={feit.label}>
                    <dt className="text-[13px] tracking-wide text-muted">
                      {feit.label}
                    </dt>
                    <dd className="mt-1 text-[17px] font-medium text-ink">
                      {feit.waarde}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
