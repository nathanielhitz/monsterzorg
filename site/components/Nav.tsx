import { cta, nav } from "@/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bone/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-6 px-5">
        <a
          href="#top"
          className="font-display text-[17px] font-semibold tracking-tight text-ink"
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
          className="rounded-full bg-forest px-4 py-2 text-sm font-medium text-bone transition-colors duration-200 hover:bg-forest-deep sm:px-5"
        >
          {cta.contact}
        </a>
      </div>
    </header>
  );
}
