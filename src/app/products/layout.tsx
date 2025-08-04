import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Produk Lele Segar UMKM Lele Gumpang Surakarta | Harga Terjangkau",
  description: "Lihat semua produk lele segar berkualitas tinggi dari UMKM Lele Gumpang Surakarta. Berbagai ukuran lele segar dengan harga terjangkau. Pesan sekarang!",
  keywords: "produk lele Gumpang, harga lele Surakarta, jual lele segar, UMKM lele Gumpang, lele berkualitas Surakarta, daftar harga lele",
  openGraph: {
    title: "Produk Lele Segar UMKM Lele Gumpang Surakarta",
    description: "Berbagai pilihan lele segar berkualitas tinggi dari UMKM Lele Gumpang dengan harga terjangkau",
    url: "https://lelejawir.vercel.app/products",
    images: ["/politama-removebg-preview.png"],
  },
  alternates: {
    canonical: "https://lelejawir.vercel.app/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}