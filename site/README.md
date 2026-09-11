# Monster Zorg

Website voor Monster Zorg, de zzp-onderneming van Jarno Monster: zorgverlener en toegepast psycholoog.
Eén pagina met zeven secties, gebouwd volgens `../docs/2026-08-08-monsterzorg-website-design.md`.

## Lokaal draaien

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # productiebuild
```

## Waar staat wat

| Bestand | Inhoud |
| --- | --- |
| `content.ts` | Alle teksten, gegevens en placeholders. Hier pas je de site aan. |
| `app/layout.tsx` | Lettertypes, metadata, Open Graph |
| `app/globals.css` | Kleuren, vormen en de beginposities van de animaties |
| `components/MotionLayer.tsx` | De hele GSAP-laag |
| `components/*.tsx` | De secties: Nav, Hero, Over, Diensten, Ervaring, Waarom, Contact, Footer |
| `public/jarno.png` | Portretfoto |

## Gegevens

Alle gegevens van Jarno zijn ingevuld (stand 11 september 2026). Komt er later een
onbekend veld bij, zet het dan als placeholder tussen blokhaken in `content.ts`. Zolang een
veld een placeholder is, blijven de bel- en mailknoppen zonder werkende link en laat de
Schema.org-markup dat veld weg.

## Deploy

Bedoeld voor Vercel. De pagina wordt volledig statisch voorgerenderd.
