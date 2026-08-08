# Monster Zorg website

Productiesite (one-pager) voor Monster Zorg, de zzp-onderneming van Jarno Monster.
Gebouwd volgens `../docs/2026-08-08-monsterzorg-website-design.md`. Bij twijfel wint dat document.

## Stack

Next.js (App Router, TypeScript), Tailwind CSS v4, GSAP met ScrollTrigger, Phosphor-iconen.

## Werkwijze

- **Alle teksten en gegevens staan in `content.ts`.** Nooit copy in componenten hardcoderen.
  Onbekende gegevens staan als placeholder tussen blokhaken, bijvoorbeeld `[TELEFOONNUMMER]`.
  `isIngevuld()` zorgt ervoor dat placeholders geen kapotte `tel:`-links of onjuiste
  Schema.org-gegevens opleveren.
- **Alle animatie zit in `components/MotionLayer.tsx`.** Secties blijven server-componenten en
  markeren met `data-reveal`, `data-hero-step`, `data-parallax` of `data-rail` wat er beweegt.
  De beginposities staan in `app/globals.css` achter `html[data-anim="on"]`, dat attribuut wordt
  alleen gezet als de bezoeker geen `prefers-reduced-motion` aan heeft staan.
- **Palet en vormen** staan als tokens in `app/globals.css`. Diep groen is de enige accentkleur,
  klikbare dingen zijn pillen, vlakken zijn 24px afgerond. De pagina staat vast in de lichte modus.
- Geen em-dash in de copy. Schrijf persoonlijk en in spreektaal.
