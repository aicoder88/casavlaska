import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casavlaska.com"),
  title: "CasaVlaška — Vlaška 117 | Premium Zagreb Apartment for Sale",
  description:
    "46 m² apartment in Zagreb's center. High ceilings, courtyard quiet, 3 min to Kvaternik. €159,900. First serious buyer wins. Call +385 99 343 3344",
  keywords:
    "Zagreb apartment, real estate Croatia, Vlaška 117, apartment for sale, Zagreb center, investment property",
  authors: [{ name: "CasaVlaška" }],
  openGraph: {
    title: "CasaVlaška — Vlaška 117 | Premium Zagreb Apartment",
    description:
      "46 m² apartment in Zagreb's center. High ceilings, courtyard quiet. €159,900 or best offer.",
    url: "https://casavlaska.com",
    siteName: "CasaVlaška",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CasaVlaška - Vlaška 117 Zagreb Apartment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CasaVlaška — Vlaška 117 | Premium Zagreb Apartment",
    description:
      "46 m² apartment in Zagreb's center. €159,900 or best offer. Call +385 99 343 3344",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "CasaVlaška — Vlaška 117",
  description:
    "46 m² apartment in Zagreb's historic center with high ceilings and courtyard views",
  url: "https://casavlaska.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vlaška 117",
    addressLocality: "Zagreb",
    addressCountry: "Croatia",
    postalCode: "10000",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.8150",
    longitude: "15.9819",
  },
  floorSize: {
    "@type": "QuantitativeValue",
    value: 46,
    unitCode: "MTK",
  },
  numberOfRooms: 3,
  price: {
    "@type": "PriceSpecification",
    price: 159900,
    priceCurrency: "EUR",
  },
  datePosted: "2024-01-15",
  availabilityStarts: "2024-01-15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <main className="mx-auto w-full max-w-5xl px-4 py-6 md:px-8 lg:px-12">
          {children}
        </main>
      </body>
    </html>
  );
}
