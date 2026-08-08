import Image from "next/image";
import {
  ArrowRight,
  EnvelopeSimple,
  LinkedinLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react/ssr";
import {
  contact,
  contactSectie,
  cta,
  mailHref,
  persoon,
  telHref,
} from "@/content";

export default function Contact() {
  const bellen = telHref(contact.telefoon);
  const mailen = mailHref(contact.email);

  return (
    <section id="contact" className="pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="shell">
        <div
          data-reveal
          className="overflow-hidden rounded-3xl bg-forest px-7 py-12 text-bone md:px-14 md:py-16"
        >
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="max-w-[18ch] font-display text-3xl font-semibold tracking-tight text-balance md:text-[2.6rem]">
                {contactSectie.titel}
              </h2>
              <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-bone/75">
                {contactSectie.tekst}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={bellen ?? "#contact"}
                  className="group inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 font-medium text-forest transition-colors duration-200 hover:bg-white active:scale-[0.98]"
                >
                  <Phone size={18} weight="fill" />
                  {cta.bellen}
                </a>
                <a
                  href={mailen ?? "#contact"}
                  className="group inline-flex items-center gap-2 rounded-full border border-bone/35 px-6 py-3.5 font-medium text-bone transition-colors duration-200 hover:border-bone/70 active:scale-[0.98]"
                >
                  <EnvelopeSimple size={18} weight="regular" />
                  {cta.mailen}
                </a>
              </div>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-[15px] text-bone/75 transition-colors duration-200 hover:text-bone"
              >
                <LinkedinLogo size={18} />
                {contactSectie.labels.linkedin}
                <ArrowRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-forest-deep">
                  <Image
                    src={persoon.foto}
                    alt={persoon.fotoAlt}
                    fill
                    sizes="56px"
                    className="scale-110 object-cover object-[center_18%]"
                  />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">
                    {persoon.naam}
                  </p>
                  <p className="text-[15px] text-bone/70">{persoon.rol}</p>
                </div>
              </div>

              <dl className="mt-8 space-y-5 border-t border-bone/15 pt-8">
                <div className="flex items-start gap-3.5">
                  <Phone size={18} className="mt-1 shrink-0 text-bone/60" />
                  <div>
                    <dt className="text-[13px] text-bone/60">
                      {contactSectie.labels.telefoon}
                    </dt>
                    <dd className="mt-0.5 text-[17px] font-medium">
                      {bellen ? (
                        <a href={bellen} className="hover:underline">
                          {contact.telefoon}
                        </a>
                      ) : (
                        contact.telefoon
                      )}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <EnvelopeSimple
                    size={18}
                    className="mt-1 shrink-0 text-bone/60"
                  />
                  <div>
                    <dt className="text-[13px] text-bone/60">
                      {contactSectie.labels.email}
                    </dt>
                    <dd className="mt-0.5 text-[17px] font-medium break-all">
                      {mailen ? (
                        <a href={mailen} className="hover:underline">
                          {contact.email}
                        </a>
                      ) : (
                        contact.email
                      )}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin size={18} className="mt-1 shrink-0 text-bone/60" />
                  <div>
                    <dt className="text-[13px] text-bone/60">
                      {contactSectie.labels.werkgebied}
                    </dt>
                    <dd className="mt-0.5 text-[17px] font-medium">
                      {contact.werkgebied}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
