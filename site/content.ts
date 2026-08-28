/**
 * Alle teksten en gegevens van de site staan in dit bestand.
 * Pas hier iets aan en het verandert overal op de pagina.
 *
 * Nog onbekende gegevens staan als placeholder tussen blokhaken, bijvoorbeeld
 * [TELEFOONNUMMER]. Vul die in zodra Jarno ze heeft doorgegeven. De helper
 * isIngevuld() hieronder zorgt ervoor dat lege placeholders geen kapotte
 * tel:-links of onjuiste Schema.org-gegevens opleveren.
 */

/** True zolang de waarde nog een placeholder is, bijvoorbeeld "[TELEFOONNUMMER]". */
export function isPlaceholder(waarde: string): boolean {
  return waarde.trim().startsWith("[") && waarde.trim().endsWith("]");
}

/** True als het veld echt is ingevuld en dus veilig gebruikt kan worden. */
export function isIngevuld(waarde: string): boolean {
  return waarde.trim().length > 0 && !isPlaceholder(waarde);
}

/**
 * Bel- en maillinks. Zolang het veld nog een placeholder is komt er geen href
 * uit, zodat er nooit een kapotte tel:- of mailto:-link op de pagina staat.
 */
export function telHref(nummer: string): string | undefined {
  return isIngevuld(nummer) ? `tel:${nummer.replace(/[^\d+]/g, "")}` : undefined;
}

export function mailHref(adres: string): string | undefined {
  return isIngevuld(adres) ? `mailto:${adres}` : undefined;
}

export const site = {
  naam: "Monster Zorg",
  // Domeinnaam nog niet geverifieerd, aanname uit het design-doc.
  url: "https://monsterzorg.nl",
  title: "Monster Zorg | Zzp zorgverlener en toegepast psycholoog",
  description:
    "Jarno Monster is zelfstandig zorgverlener en toegepast psycholoog met ruim 8 jaar ervaring als persoonlijk begeleider. Holistische blik, flexibel inzetbaar voor zorginstellingen en bemiddelingsbureaus.",
};

export const persoon = {
  naam: "Jarno Monster",
  rol: "Zorgverlener en toegepast psycholoog",
  woonplaats: "Gouda",
  foto: "/jarno.png",
  fotoAlt: "Portretfoto van Jarno Monster",
};

export const contact = {
  telefoon: "06 45046864",
  email: "info@monsterzorg.nl",
  kvk: "[KVK-NUMMER]",
  werkgebied: "[WERKGEBIED]",
  linkedin: "https://www.linkedin.com/in/jarnomonster",
};

/** Eén label per doel, zodat de knoppen op de pagina elkaar niet beconcurreren. */
export const cta = {
  contact: "Neem contact op",
  ervaring: "Bekijk mijn ervaring",
  bellen: "Bellen",
  mailen: "Mailen",
};

export const nav = {
  merk: "Monster Zorg",
  links: [
    { label: "Over Jarno", href: "#over" },
    { label: "Wat ik bied", href: "#diensten" },
    { label: "Ervaring", href: "#ervaring" },
  ],
};

export const hero = {
  titel: "Ervaren zorgprofessional, flexibel inzetbaar.",
  tekst:
    "Ik ben Jarno Monster, toegepast psycholoog met ruim 8 jaar ervaring als persoonlijk begeleider.",
};

export const over = {
  titel: "Even voorstellen",
  alineas: [
    "Mijn naam is Jarno Monster. Ruim acht jaar werkte ik als (persoonlijk) begeleider bij Profila Zorggroep op twee verschillende locaties. In die jaren heb ik geleerd dat persoonlijke aandacht en kijken naar de behoeften van cliënten belangrijke pijlers zijn voor de zorg en ondersteuning van hulpbehoevende mensen. Waar voorheen de focus lag op probleemgedrag en het beheersen ervan, merk ik dat veel organisaties kijken naar een menswaardig bestaan voor hun cliënten. Dit sluit aan bij mijn visie op het verlenen van de juiste zorg.",
    "Ik heb mijzelf ontwikkeld als een zelfverzekerde en betrouwbare professional met een holistische benadering. Met een zelfkritische houding kijk ik naar mogelijkheden in plaats van beperkingen. Rust, kalmte en een open houding dragen hieraan bij.",
    "Naast dat werk rondde ik in 2025 mijn opleiding Toegepaste Psychologie af. Deze opleiding vraagt je om kritisch te kijken naar zowel beleid als het methodisch handelen binnen een team. Ik zie daardoor eerder waar iets vandaan komt en wat er nodig is om een stap verder te komen. Dit maakt mij, in combinatie met de jarenlange ervaring in de zorg, een enthousiaste en gedreven hulpverlener van toegevoegde waarde.",
    "Sinds januari 2026 werk ik als zelfstandig ondernemer onder de naam Monster Zorg. Zo kan ik zijn waar ik het hardst nodig ben, of dat nu voor ad hoc diensten is of voor een langere periode.",
  ],
  feitenTitel: "In het kort",
  feiten: [
    { label: "Ervaring", waarde: "Ruim 8 jaar in de zorg" },
    { label: "Opleiding", waarde: "Hbo Toegepaste Psychologie, 2025" },
    { label: "Werkwijze", waarde: "Holistisch, kijkt naar mogelijkheden" },
    { label: "Woonplaats", waarde: "Gouda" },
    { label: "Werkgebied", waarde: contact.werkgebied },
  ],
};

/**
 * De dienstenlijst kan nog wijzigen na overleg met Jarno.
 * Een derde dienst toevoegen kan gewoon: het raster vangt een oneven aantal op.
 */
export const diensten = {
  titel: "Wat ik bied",
  intro:
    "Twee dingen waar ik goed in ben en waar ik met plezier voor kom opdraven.",
  items: [
    {
      icoon: "hand" as const,
      titel: "(Persoonlijke) begeleiding",
      tekst:
        "Begeleiding van cliënten in een woonvorm of beschermd wonen. Met persoonlijke aandacht en oog voor wat iemand nodig heeft, gericht op een menswaardig bestaan. Ik draai mee in het team en pak ad hoc diensten op waar het nodig is.",
      punten: [
        "Dagelijkse begeleiding en dagstructuur",
        "Rustig en kalm bij onbegrepen gedrag",
        "Rapporteren en samenwerken met het team",
      ],
    },
    {
      icoon: "brein" as const,
      titel: "Coaching en psychologische begeleiding",
      tekst:
        "Kortdurende begeleiding vanuit mijn achtergrond als toegepast psycholoog. Samen kijken waar iemand vastloopt en welke stap wel haalbaar is.",
      punten: [
        "Gesprekken en coaching op maat",
        "Meedenken over gedrag en aanpak",
        "Kritisch meekijken naar beleid en methodisch handelen in het team",
      ],
    },
  ],
  naschrift:
    "Staat wat je zoekt hier niet bij? Bel of mail gerust, er is vaak meer mogelijk.",
};

export const ervaring = {
  titel: "Ervaring en opleiding",
  intro:
    "Waar ik vandaan kom en wat ik onderweg heb geleerd, op een rijtje.",
  items: [
    {
      periode: "2026 - heden",
      rol: "Zelfstandig zorgverlener",
      organisatie: "Monster Zorg",
      soort: "werk" as const,
      tekst:
        "Zelfstandig aan de slag bij zorginstellingen en via bemiddelingsbureaus, voor ad hoc diensten of een langere periode.",
    },
    {
      periode: "2025 - heden",
      rol: "Zorgverlener",
      organisatie: "Sorgaflex B.V.",
      soort: "werk" as const,
      tekst: "Begeleiding op verschillende locaties, flexibel ingezet.",
    },
    {
      periode: "Juli 2025",
      rol: "Hbo Bachelor Toegepaste Psychologie",
      organisatie: "HBO Academy",
      soort: "opleiding" as const,
      tekst: "Naast mijn werk in de zorg afgerond.",
    },
    {
      periode: "2022 - 2025",
      rol: "Persoonlijk begeleider",
      organisatie: "Profila Zorggroep, Rotterdam",
      soort: "werk" as const,
      tekst:
        "Persoonlijk begeleider van cliënten in een woonvorm, met persoonlijke aandacht en oog voor wat iemand nodig heeft.",
    },
    {
      periode: "2017 - 2022",
      rol: "Begeleider",
      organisatie: "Profila Zorggroep, Puttershoek",
      soort: "werk" as const,
      tekst:
        "Mijn eerste jaren als begeleider. Hier leerde ik het vak in de praktijk.",
    },
    {
      periode: "2016 - 2017",
      rol: "Stagiair begeleiding",
      organisatie: "Profila Zorg",
      soort: "werk" as const,
      tekst: "De start van bijna tien jaar in de zorg.",
    },
  ],
};

export const waarom = {
  titel: "Waarom Monster Zorg",
  items: [
    {
      icoon: "hart" as const,
      titel: "Ruim 8 jaar ervaring",
      tekst:
        "Acht jaar als begeleider betekent dat weinig situaties me nog verrassen. Ik kijk naar mogelijkheden in plaats van beperkingen en weet waar ik in een team kan bijspringen.",
    },
    {
      icoon: "brein" as const,
      titel: "Psychologische blik",
      tekst:
        "Door mijn opleiding Toegepaste Psychologie zie ik eerder waar gedrag vandaan komt en kijk ik kritisch mee naar beleid en methodisch handelen.",
    },
    {
      icoon: "schild" as const,
      titel: "Rust en betrouwbaarheid",
      tekst:
        "Rust, kalmte en een open houding. Ik kom op tijd, rapporteer netjes en zeg het gewoon als iets niet lukt.",
    },
    {
      icoon: "agenda" as const,
      titel: "Flexibel inzetbaar",
      tekst:
        "Ad hoc diensten, een langere periode of een klus tussendoor. Zo ben ik waar ik het hardst nodig ben.",
    },
  ],
};

export const contactSectie = {
  titel: "Even overleggen of direct inplannen?",
  tekst:
    "Bel of mail gerust. Ik reageer meestal binnen een dag en denk graag mee over wat er nodig is.",
  labels: {
    telefoon: "Telefoon",
    email: "E-mail",
    werkgebied: "Werkgebied",
    linkedin: "Bekijk mijn LinkedIn",
  },
};

export const footer = {
  kvkLabel: "KvK",
  copyright: `${new Date().getFullYear()} ${site.naam}`,
  linkedinLabel: "LinkedIn",
  bouwer: {
    label: "Built by",
    naam: "HitzDigital",
    url: "https://www.hitzdigital.nl/",
  },
};
