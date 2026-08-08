"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const EASE = "power2.out";

/**
 * De hele motion-laag van de site, in één client-component die zelf niets
 * rendert. De secties blijven daardoor gewone server-componenten en markeren
 * alleen met data-attributen wat er moet bewegen.
 *
 * Alles zit in een gsap.matchMedia op prefers-reduced-motion: no-preference.
 * Zet iemand bewegingsvermindering aan, dan draait er geen enkele tween en
 * blijft de pagina volledig zichtbaar en bruikbaar.
 *
 * Wat elke animatie doet:
 * - hero-intro: bouwt de eerste indruk op in leesvolgorde
 * - sectie-reveals: laat blokken binnenkomen zodra ze aan de beurt zijn
 * - portret-parallax: geeft de foto lichte diepte tijdens het scrollen
 * - tijdlijn-rail: tekent de lijn mee met het verstrijken van de jaren
 */
export default function MotionLayer() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const heroSteps = gsap.utils.toArray<HTMLElement>("[data-hero-step]");
      if (heroSteps.length > 0) {
        gsap.to(heroSteps, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: EASE,
          stagger: 0.1,
          delay: 0.08,
        });
      }

      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: EASE,
            stagger: 0.09,
            overwrite: true,
          }),
      });

      const portret = document.querySelector<HTMLElement>("[data-parallax]");
      if (portret) {
        gsap.to(portret, {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: portret.closest("section") ?? portret,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      const rail = document.querySelector<HTMLElement>("[data-rail]");
      if (rail) {
        gsap.to(rail, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rail.parentElement ?? rail,
            start: "top 75%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        });
      }

      // Fonts en afbeeldingen veranderen de hoogte van de pagina nadat de
      // triggers zijn berekend, dus na het laden één keer opnieuw meten.
      const herbereken = () => ScrollTrigger.refresh();
      window.addEventListener("load", herbereken);

      return () => {
        window.removeEventListener("load", herbereken);
      };
    });

    return () => mm.revert();
  });

  return null;
}
