import { LinkedinLogo } from "@phosphor-icons/react/ssr";
import { contact, footer, nav } from "@/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-[17px] font-semibold text-ink">
            {nav.merk}
          </p>
          <p className="mt-1.5 text-[14px] text-muted">
            {footer.kvkLabel} {contact.kvk}
          </p>
        </div>

        <div className="flex flex-col gap-2.5 sm:items-end">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-muted transition-colors duration-200 hover:text-forest"
          >
            <LinkedinLogo size={17} />
            {footer.linkedinLabel}
          </a>
          <p className="text-[14px] text-muted">&copy; {footer.copyright}</p>
          <p className="text-[14px] text-muted">
            {footer.bouwer.label}{" "}
            <a
              href={footer.bouwer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink transition-colors duration-200 hover:text-forest"
            >
              {footer.bouwer.naam}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
