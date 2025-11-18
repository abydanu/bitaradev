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
  title: "Bitara Dev - Jasa Pembuatan Website Profesional & Terjangkau di Indonesia",
  description: "Jasa pembuatan website profesional, cepat, dan terjangkau di Madiun, Jember, Surabaya, dan seluruh Indonesia. Solusi digital untuk UMKM, bisnis, dan pribadi dengan harga bersahabat.",
  keywords: [
    "jasa pembuatan website",
    "jasa web design Indonesia",
    "pembuatan website murah",
    "jasa website Madiun",
    "jasa website Jember",
    "jasa website Kediri",
    "jasa website Surabaya",
    "jasa website Jawa Timur",
    "web developer Indonesia",
    "jasa bikin website UMKM",
    "website profesional murah",
    "jasa website toko online",
    "jasa landing page",
    "web development Indonesia",
    "bitara dev"
  ],
  authors: [{ name: "Bitara Dev" }],
  creator: "Bitara Dev",
  publisher: "Bitara Dev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bitaradev.vercel.app",
    title: "Bitara Dev - Jasa Pembuatan Website Profesional & Terjangkau",
    description: "Wujudkan impian digitalmu! Website profesional mulai dari harga terjangkau. Proses cepat, hasil berkualitas. Melayani seluruh Indonesia - Madiun, Jember, Surabaya & sekitarnya. Hubungi kami sekarang!",
    siteName: "Bitara Dev",
    images: [
      {
        url: "https://bitaradev.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bitara Dev - Jasa Pembuatan Website Profesional Indonesia",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitara Dev - Jasa Pembuatan Website Profesional",
    description: "Wujudkan impian digitalmu! Website profesional dengan harga terjangkau. Proses cepat, hasil berkualitas.",
    images: ["https://bitaradev.vercel.app/og-image.jpg"],
    creator: "@bitaradev", 
  },
  alternates: {
    canonical: "https://bitaradev.vercel.app",
  },
  // verification: {
  //   google: ""
  // },
  other: {
    "geo.region": "ID-JI",
    "geo.placename": "Madiun, Jember, Surabaya, Jawa Timur",
    "ICBM": "-7.629757;111.524122",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Bitara Dev",
              "description": "Jasa pembuatan website profesional dan terjangkau di Indonesia",
              "url": "https://bitaradev.vercel.app",
              "telephone": "+6283136863620",
              "priceRange": "$$",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Madiun"
                },
                {
                  "@type": "City",
                  "name": "Jember"
                },
                {
                  "@type": "City",
                  "name": "Kediri"
                },
                {
                  "@type": "State",
                  "name": "Jawa Timur"
                },
                {
                  "@type": "Country",
                  "name": "Indonesia"
                }
              ],
              "sameAs": [
                "https://wa.me/6283136863620"
              ],
              "offers": {
                "@type": "Offer",
                "description": "Jasa pembuatan website profesional dengan harga terjangkau"
              }
            })
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