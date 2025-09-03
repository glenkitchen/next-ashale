import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garage Door Ballito | Gate Motor Ballito",
  description:
    "Garage Door Ballito 079 769 6789 | Gate Motor Ballito 079 769 6789",
  keywords: [
    "garage door installation",
    "garage door repair",
    "gate motor installation",
    "gate motor repair",
    "Ballito garage doors",
    "Durban gate motors",
    "Ballito automation",
    "Durban automation",
    "garage door service",
    "sliding gate motors",
    "swing gate motors",
    "emergency garage door repair",
    "automation solutions",
    "residential garage doors",
    "commercial gate motors",
  ],
  authors: [{ name: "Ashale Automation" }],
  creator: "Ashale Automation",
  publisher: "Ashale Automation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.ashale.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ashale Automation - Professional Garage Door & Gate Motor Services",
    description:
      "Expert Technical Solutions for Your Home and Business! Professional garage door installation, repair and gate motor services in Durban area.",
    url: "https://www.ashale.vercel.app",
    siteName: "Ashale Automation",
    images: [
      {
        url: "/image1.png",
        width: 1200,
        height: 630,
        alt: "Ashale Automation - Garage Door Installation Services",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashale Automation - Garage Doors & Gate Motors",
    description:
      "Expert garage door & gate motor services in Ballito. Professional installation and repair solutions.",
    images: ["/image1.png"],
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
  category: "Home Services",
  other: {
    "google-site-verification": "verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="geo.region" content="ZA-KZN" />
        <meta name="geo.placename" content="Durban" />
        <meta name="geo.position" content="-29.8587;31.022" />
        <meta name="ICBM" content="-29.8587, 31.022" />
        <meta
          name="business:contact_data:street_address"
          content="Durban Area"
        />
        <meta name="business:contact_data:locality" content="Durban" />
        <meta name="business:contact_data:region" content="KwaZulu-Natal" />
        <meta name="business:contact_data:postal_code" content="" />
        <meta
          name="business:contact_data:country_name"
          content="South Africa"
        />
        <meta
          name="business:contact_data:phone_number"
          content="+27635121494"
        />
        <meta
          name="business:contact_data:website"
          content="https://www.ashale.vercel.app"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ashale Automation",
              image: "https://www.ashale.vercel.app/image1.png",
              description:
                "Expert Technical Solutions for Your Home and Business! Professional garage door installation, repair and gate motor services.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ballito",
                addressRegion: "KwaZulu-Natal",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -29.8587,
                longitude: 31.022,
              },
              url: "https://www.ashale.vercel.app",
              telephone: "+27635121494",
              email: "durbanautomation@gmail.com",
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-14:00"],
              serviceArea: [
                "Ballito",
                "Durban",
                "Umhlanga",
                "KwaDukuza",
                "KwaZulu-Natal",
              ],
              services: [
                "Garage Door Installation",
                "Garage Door Repair",
                "Gate Motor Installation",
                "Gate Motor Repair",
                "Emergency Repair Services",
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "100",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
