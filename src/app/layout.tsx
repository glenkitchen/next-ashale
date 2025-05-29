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
  title: "Ashale Automation - Garage Doors & Gate Motors | Johannesburg",
  description:
    "Expert garage door installation, repair & gate motor services in Johannesburg. Professional automation solutions for homes & businesses. Call 063 512 1494 for free quotes.",
  keywords: [
    "garage door installation",
    "garage door repair",
    "gate motor installation",
    "gate motor repair",
    "Johannesburg garage doors",
    "Pretoria gate motors",
    "Sandton automation",
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
  metadataBase: new URL("https://www.ashaleautomation.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ashale Automation - Professional Garage Door & Gate Motor Services",
    description:
      "Expert Technical Solutions for Your Home and Business! Professional garage door installation, repair and gate motor services in Johannesburg area.",
    url: "https://www.ashaleautomation.com",
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
      "Expert garage door & gate motor services in Johannesburg. Professional installation and repair solutions.",
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
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Johannesburg" />
        <meta name="geo.position" content="-26.2041;28.0473" />
        <meta name="ICBM" content="-26.2041, 28.0473" />
        <meta
          name="business:contact_data:street_address"
          content="Johannesburg Area"
        />
        <meta name="business:contact_data:locality" content="Johannesburg" />
        <meta name="business:contact_data:region" content="Gauteng" />
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
          content="https://www.ashaleautomation.com"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ashale Automation",
              image: "https://www.ashaleautomation.com/image1.png",
              description:
                "Expert Technical Solutions for Your Home and Business! Professional garage door installation, repair and gate motor services.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.2041,
                longitude: 28.0473,
              },
              url: "https://www.ashaleautomation.com",
              telephone: "+27635121494",
              email: "info@ashaleautomation.com",
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-14:00"],
              serviceArea: [
                "Johannesburg",
                "Pretoria",
                "Sandton",
                "Midrand",
                "Centurion",
                "Fourways",
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
