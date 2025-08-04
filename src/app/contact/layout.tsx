import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kontak UMKM Lele Gumpang Surakarta | Hubungi Kami Sekarang",
  description: "Hubungi UMKM Lele Gumpang Surakarta untuk pemesanan lele segar berkualitas tinggi. Alamat di Gumpang, WhatsApp 0812-3456-7890. Siap melayani Anda!",
  keywords: "kontak UMKM Lele Gumpang, alamat lele Gumpang Surakarta, WhatsApp lele segar, hubungi penjual lele Surakarta, pesan lele Gumpang",
  openGraph: {
    title: "Kontak UMKM Lele Gumpang Surakarta",
    description: "Hubungi kami untuk pemesanan lele segar berkualitas tinggi dari Gumpang, Surakarta",
    url: "https://lelejawir.vercel.app/contact",
    images: ["/politama-removebg-preview.png"],
  },
  alternates: {
    canonical: "https://lelejawir.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}