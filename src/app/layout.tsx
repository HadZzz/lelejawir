import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lelejawir.vercel.app'),
  title: "UMKM Lele Gumpang Surakarta | Penjualan Lele Segar Berkualitas Tinggi",
  description: "UMKM Lele Gumpang Surakarta menyediakan lele segar berkualitas tinggi langsung dari kolam. Melayani pengiriman ke seluruh Gumpang, Surakarta dan sekitarnya. Harga terjangkau, kualitas terjamin.",
  keywords: "UMKM Lele Gumpang, lele segar Surakarta, jual lele Gumpang, ikan lele berkualitas, penjualan lele Surakarta, lele segar Gumpang, UMKM ikan lele, budidaya lele Surakarta",
  authors: [{ name: "UMKM Lele Gumpang" }],
  creator: "UMKM Lele Gumpang Surakarta",
  publisher: "UMKM Lele Gumpang",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lelejawir.vercel.app",
    siteName: "UMKM Lele Gumpang Surakarta",
    title: "UMKM Lele Gumpang Surakarta | Penjualan Lele Segar Berkualitas Tinggi",
    description: "UMKM Lele Gumpang Surakarta menyediakan lele segar berkualitas tinggi langsung dari kolam. Melayani pengiriman ke seluruh Gumpang, Surakarta dan sekitarnya.",
    images: [
      {
        url: "/politama-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "UMKM Lele Gumpang Surakarta - Lele Segar Berkualitas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UMKM Lele Gumpang Surakarta | Lele Segar Berkualitas Tinggi",
    description: "Penyedia lele segar berkualitas tinggi dari Gumpang, Surakarta. Harga terjangkau, kualitas terjamin.",
    images: ["/politama-removebg-preview.png"],
  },
  verification: {
    google: "5mAM5b2AU2ijdyRFKokDSX1NQ6b22MibtjoO2wRlsR8",
  },
  alternates: {
    canonical: "https://lelejawir.vercel.app",
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
              "@type": "LocalBusiness",
              "name": "UMKM Lele Gumpang Surakarta",
              "description": "Penyedia lele segar berkualitas tinggi langsung dari kolam kami. Melayani pengiriman ke seluruh Gumpang, Surakarta dan sekitarnya.",
              "url": "https://lelejawir.vercel.app",
              "telephone": "0812-3456-7890",
              "email": "info@lele-gumpang.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gumpang",
                "addressLocality": "Surakarta",
                "addressRegion": "Jawa Tengah",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.5755,
                "longitude": 110.8243
              },
              "openingHours": "Mo-Su 08:00-17:00",
              "priceRange": "$$",
              "servesCuisine": "Indonesian",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Produk Lele Segar",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Lele Segar Premium",
                      "description": "Lele segar berkualitas tinggi langsung dari kolam"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://github.com/HadZzz/lelejawir"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
