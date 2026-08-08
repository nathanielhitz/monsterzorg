# Design: website Monster Zorg (monsterzorg.nl, werktitel)

Datum: 8 augustus 2026
Status: goedgekeurd door Nathaniel, klaar voor bouw
Let op: dit is de productiesite, geen wegwerp-demo. Kwaliteit en SEO tellen mee vanaf versie 1.

## 1. Doel en doelgroep

Professionele one-pager voor Monster Zorg, de zzp-onderneming van Jarno Monster.
Primaire doelgroep: zorginstellingen en bemiddelingsbureaus die een ervaren, flexibele
zorgprofessional zoeken. De site moet in een oogopslag vertrouwen wekken en het makkelijk
maken om contact op te nemen.

## 2. Feiten over Jarno (bron: LinkedIn-export in docs/Profile Linkdin Jarno.pdf)

- Jarno Monster, toegepast psycholoog, woont in Gouda (Zuid-Holland)
- HBO Bachelor Toegepaste Psychologie, HBO Academy, afgerond juli 2025
- Sinds januari 2026 zelfstandig zorgverlener via Monster Zorg
- Daarnaast zorgverlener bij Sorgaflex B.V. (sinds november 2025)
- Ruim 8 jaar woonbegeleider bij Profila Zorggroep (Puttershoek 2017-2022, Rotterdam 2022-2025), begonnen als stagiair bij Profila Zorg (2016-2017)
- Vaardigheden: coaching, teamwork; talen: Nederlands, Engels, Frans
- LinkedIn: www.linkedin.com/in/jarnomonster
- Portretfoto beschikbaar: `Afbeelding Jarno.png` in de projectmap (warme, informele sfeer; die sfeer zet de toon voor het palet)

## 3. Secties van de one-pager (in deze volgorde)

1. **Hero.** Naam "Monster Zorg" met tagline in de richting van "Ervaren zorgprofessional
   en toegepast psycholoog, flexibel inzetbaar". Foto van Jarno prominent. CTA-knop
   "Neem contact op" die naar de contactsectie scrolt.
2. **Over Jarno.** Persoonlijk verhaal in de ik-vorm: ruim 8 jaar woonbegeleider bij
   Profila Zorggroep, in 2025 HBO Toegepaste Psychologie afgerond, sinds 2026 zelfstandig.
   Warm en menselijk geschreven, geen cv-taal.
3. **Wat ik bied.** Twee dienstkaarten: **Woonbegeleiding** (kernervaring) en
   **Coaching & psychologische begeleiding** (vanuit de opleiding). Layout zo opgezet dat
   er later makkelijk een derde dienst bij kan. De dienstenlijst kan nog wijzigen na
   overleg met Jarno.
4. **Ervaring en opleiding.** Compacte tijdlijn uit de LinkedIn-export: Monster Zorg,
   Sorgaflex, Profila Zorggroep, plus de HBO-opleiding. Dit is de sectie die
   opdrachtgevers willen zien. Bijbaantjes van voor de zorg (Machinnova, Albron,
   K.S. Profiel) weglaten.
5. **Waarom Monster Zorg.** Drie of vier kernpunten als korte blokjes: ervaren,
   betrouwbaar, psychologische achtergrond, flexibel inzetbaar.
6. **Contact.** Telefoonnummer, e-mail en werkgebied (nu placeholders), knoppen voor
   bellen en mailen (tel: en mailto:, geen formulier in versie 1) en link naar LinkedIn.
7. **Footer.** KvK-nummer (placeholder), copyright, LinkedIn-link.

## 4. Techniek

- **Next.js** (App Router, TypeScript) met **Tailwind CSS** en **GSAP** (ScrollTrigger)
- Statische export waar mogelijk; deploy op **Vercel**
- Alle teksten en gegevens in een centraal `content.ts`-bestand, zodat placeholders
  later op een plek ingevuld worden zonder in componenten te graven
- Foto via `next/image`, geoptimaliseerd; kopieer `Afbeelding Jarno.png` naar
  `public/` onder een nette naam (bijv. `jarno.png`)
- Projectlocatie: `Sites/monsterzorg/site/` (naast de bestaande `docs/` en de foto)
- Eigen git-historie zodat het project net als Ar Trees naar GitHub gepusht kan worden

## 5. Uitstraling

Warm en persoonlijk. Creme/off-white achtergrond, een warm accent (diep groen of
terracotta; definitieve keuze bij het bouwen op basis van wat bij de foto past), zachte
afgeronde vormen, rustige typografie met een vriendelijke kop-letter. De foto van Jarno
is het middelpunt van de hero. Geen standaard AI-blauw, geen stockfoto's, geen
glassmorphism-cliches.

Schrijfstijl copy: persoonlijk, laagdrempelig, spreektaal. Geen em-dash (—) in de copy;
gebruik natuurlijke interpunctie.

## 6. Design-skills tijdens de bouw

- **design-taste-frontend** is leidend voor de visuele richting: kleurpalet, typografie,
  layout en het vermijden van generieke AI-patronen
- **gpt-taste** levert de motion-laag: GSAP ScrollTriggers voor sectie-reveals en
  subtiele scroll-effecten
- Conflictregel: design-taste-frontend wint op vormgeving, gpt-taste op animatie
- Dit is een site voor een zorgprofessional: animaties blijven rustig en ondersteunend.
  Geen flitsende pinning-shows, geen scroll-hijacking. Reveals en micro-interacties zijn
  genoeg. Respecteer `prefers-reduced-motion`.

## 7. SEO en kwaliteit

- Nederlandstalig: `lang="nl"`, alle metadata in het Nederlands
- Title en description gericht op "zzp zorgverlener / woonbegeleider / toegepast psycholoog"
- Open Graph-metadata met afbeelding
- Schema.org-markup: Person plus ProfessionalService (JSON-LD)
- Sitemap en robots.txt
- Volledig responsive (mobiel eerst controleren)
- `npm run build` moet foutloos slagen voor oplevering

## 8. Open punten (bewust placeholder in content.ts)

Deze gegevens zijn nog niet bekend en staan als duidelijk herkenbare placeholders
(bijv. `[TELEFOONNUMMER]`) in `content.ts`. Nathaniel vraagt ze uit bij Jarno:

- Telefoonnummer
- E-mailadres
- KvK-nummer
- Werkgebied (regio waarin Jarno inzetbaar is)
- Domeinnaam (monsterzorg.nl aanname, nog niet geverifieerd)
- Definitieve dienstenlijst

## 9. Definition of done

- Alle zeven secties gebouwd volgens dit document
- Build slaagt foutloos, site draait lokaal via `npm run dev`
- Responsive op mobiel, tablet en desktop
- Alle placeholders duidelijk herkenbaar en gecentraliseerd in `content.ts`
- Animaties werken en respecteren `prefers-reduced-motion`
