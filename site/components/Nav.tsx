import { LinkedinLogo, Phone } from "@phosphor-icons/react/ssr";
import { contact, nav, telHref } from "@/content";

export default function Nav() {
  const bellen = telHref(contact.telefoon);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bone/85 backdrop-blur-md">
      <div className="shell flex h-[68px] items-center justify-between gap-4 sm:gap-6">
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-tight text-ink sm:text-[17px]"
        >
          {nav.merk}
        </a>

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-muted transition-colors duration-200 hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Twee ronde knoppen van 44px: groot genoeg om met de duim te raken,
            en rustiger in de balk dan een knop met tekst. */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn van ${nav.merk}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-forest/40 hover:text-forest"
          >
            <LinkedinLogo size={19} />
          </a>
          {bellen ? (
            <a
              href={bellen}
              aria-label={`Bel ${contact.telefoon}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest text-bone transition-colors duration-200 hover:bg-forest-deep"
            >
              <Phone size={19} weight="fill" />
            </a>
          ) : (
            <a
              href="#contact"
              aria-label="Naar de contactgegevens"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest text-bone transition-colors duration-200 hover:bg-forest-deep"
            >
              <Phone size={19} weight="fill" />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
