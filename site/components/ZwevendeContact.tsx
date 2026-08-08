"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { cta } from "@/content";

/**
 * Knop die rechtsonder verschijnt zodra de hero uit beeld is, en weer
 * verdwijnt bij het contactblok en de footer. Daar staan de bel- en
 * mailknoppen al, dus een zwevende knop zou daar alleen in de weg zitten.
 *
 * De zichtbaarheid loopt via een IntersectionObserver, niet via een
 * scroll-listener. Dat scheelt werk op elke frame en blijft soepel op mobiel.
 */
export default function ZwevendeContact() {
  const [zichtbaar, setZichtbaar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const contact = document.getElementById("contact");
    const footer = document.querySelector("footer");
    const blokken = [hero, contact, footer].filter(
      (el): el is HTMLElement => el !== null,
    );
    if (blokken.length === 0) return;

    const inBeeld = new Set<Element>(blokken);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBeeld.add(entry.target);
          else inBeeld.delete(entry.target);
        }
        setZichtbaar(inBeeld.size === 0);
      },
      { threshold: 0 },
    );
    blokken.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#contact"
      inert={!zichtbaar}
      className={`group fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-forest px-5 text-[15px] font-medium text-bone shadow-[0_14px_34px_-12px_rgba(23,33,28,0.65)] transition duration-300 ease-out hover:bg-forest-deep active:scale-[0.98] motion-reduce:transition-none sm:right-6 sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] ${
        zichtbaar
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      {cta.contact}
      <ArrowRight
        size={16}
        weight="bold"
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}
