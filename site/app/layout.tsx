import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { persoon, site } from "@/content";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.naam,
    title: site.title,
    description: site.description,
    images: [
      {
        url: persoon.foto,
        width: 1254,
        height: 1254,
        alt: persoon.fotoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [persoon.foto],
  },
};

/**
 * Zet data-anim="on" op <html> voordat de pagina wordt getekend, maar alleen
 * als de bezoeker geen prefers-reduced-motion aan heeft staan. De CSS in
 * globals.css hangt de beginposities van de animaties aan dit attribuut, dus
 * zonder dit script blijft alles gewoon zichtbaar en staat de site stil.
 */
const animScript = `try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.setAttribute('data-anim','on')}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      // Het script hieronder zet data-anim voordat React hydrateert, dat
      // verschil op <html> is bedoeld en hoeft niet gemeld te worden.
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: animScript }} />
      </head>
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
