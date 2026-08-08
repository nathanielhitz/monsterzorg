import { cta, nav } from "@/content";

export default function Nav() {
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

        <a
          href="#contact"
          // Op touchscreens minstens 44px hoog, vanaf sm weer de compacte pil
          className="inline-flex min-h-[44px] shrink-0 items-center rounded-full bg-forest px-3.5 py-2 text-[13px] font-medium whitespace-nowrap text-bone transition-colors duration-200 hover:bg-forest-deep sm:min-h-0 sm:px-5 sm:text-sm"
        >
          {cta.contact}
        </a>
      </div>
    </header>
  );
}
