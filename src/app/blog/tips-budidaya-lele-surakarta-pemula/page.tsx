import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Tips Sukses Budidaya Lele di Surakarta untuk Pemula | UMKM Lele Gumpang",
  description: "Panduan lengkap budidaya lele di Surakarta untuk pemula. Tips kolam, pakan, dan perawatan lele dari UMKM Lele Gumpang yang sudah berpengalaman 5+ tahun.",
  keywords: "budidaya lele Surakarta, cara ternak lele pemula, tips budidaya lele Gumpang, kolam lele Surakarta, pakan lele terbaik, UMKM lele sukses",
  alternates: {
    canonical: "https://umkmlelegumpang.vercel.app/blog/tips-budidaya-lele-surakarta-pemula",
  },
  openGraph: {
    title: "Tips Sukses Budidaya Lele di Surakarta untuk Pemula",
    description: "Panduan lengkap budidaya lele di Surakarta dari UMKM Lele Gumpang yang berpengalaman",
    url: "https://umkmlelegumpang.vercel.app/blog/tips-budidaya-lele-surakarta-pemula",
  },
};

export default function BudidayaLelePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-900">Tips Budidaya Lele Surakarta</li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                Budidaya
              </span>
              <time className="text-gray-500">4 Januari 2025</time>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tips Sukses Budidaya Lele di Surakarta untuk Pemula
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Panduan lengkap memulai budidaya lele di Surakarta dari UMKM Lele Gumpang yang sudah berpengalaman lebih dari 5 tahun. 
              Pelajari cara membuat kolam, memilih bibit, hingga panen pertama yang menguntungkan.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>Mengapa Memilih Budidaya Lele di Surakarta?</h2>
            <p>
              Surakarta, khususnya daerah Gumpang, memiliki kondisi yang sangat ideal untuk budidaya lele. 
              Iklim tropis dengan suhu yang stabil, ketersediaan air yang cukup, dan pasar yang besar membuat 
              budidaya lele di Surakarta menjadi peluang bisnis yang menjanjikan.
            </p>

            <p>
              <strong>UMKM Lele Gumpang</strong> telah membuktikan kesuksesan budidaya lele di daerah ini selama lebih dari 5 tahun. 
              Dengan pengalaman tersebut, kami ingin berbagi tips sukses untuk pemula yang ingin memulai bisnis budidaya lele.
            </p>

            <h2>Persiapan Kolam Lele yang Ideal</h2>
            <h3>1. Pemilihan Lokasi</h3>
            <ul>
              <li>Pilih lokasi yang mudah diakses untuk memudahkan perawatan</li>
              <li>Pastikan sumber air bersih dan tidak tercemar</li>
              <li>Hindari lokasi yang terlalu bising atau ramai</li>
              <li>Pertimbangkan akses untuk distribusi hasil panen</li>
            </ul>

            <h3>2. Ukuran dan Konstruksi Kolam</h3>
            <p>
              Untuk pemula, kami di <strong>UMKM Lele Gumpang</strong> merekomendasikan kolam berukuran 3x4 meter dengan kedalaman 1-1.5 meter. 
              Ukuran ini ideal untuk memulai dengan investasi yang tidak terlalu besar.
            </p>

            <h3>3. Sistem Aerasi</h3>
            <p>
              Lele membutuhkan oksigen yang cukup untuk tumbuh optimal. Pasang sistem aerasi sederhana 
              atau gunakan pompa air untuk menjaga sirkulasi oksigen dalam kolam.
            </p>

            <h2>Pemilihan Bibit Lele Berkualitas</h2>
            <p>
              Kualitas bibit sangat menentukan keberhasilan budidaya. Pilih bibit lele yang:
            </p>
            <ul>
              <li>Berukuran seragam (5-7 cm)</li>
              <li>Aktif bergerak dan responsif</li>
              <li>Tidak cacat fisik</li>
              <li>Berasal dari peternak terpercaya</li>
            </ul>

            <h2>Manajemen Pakan yang Efektif</h2>
            <p>
              Pakan merupakan 60-70% dari total biaya produksi. Oleh karena itu, manajemen pakan yang efektif 
              sangat penting untuk keuntungan maksimal.
            </p>

            <h3>Jadwal Pemberian Pakan</h3>
            <ul>
              <li><strong>Umur 1-30 hari:</strong> 3-4 kali sehari</li>
              <li><strong>Umur 31-60 hari:</strong> 2-3 kali sehari</li>
              <li><strong>Umur 61-90 hari:</strong> 2 kali sehari</li>
            </ul>

            <h2>Perawatan dan Monitoring Harian</h2>
            <p>
              Berdasarkan pengalaman <strong>UMKM Lele Gumpang</strong>, monitoring harian sangat penting untuk:
            </p>
            <ul>
              <li>Mengecek kualitas air (pH, suhu, oksigen)</li>
              <li>Memantau nafsu makan lele</li>
              <li>Mendeteksi dini penyakit atau masalah</li>
              <li>Membersihkan sisa pakan yang tidak termakan</li>
            </ul>

            <h2>Strategi Panen dan Pemasaran</h2>
            <p>
              Lele siap panen pada umur 2.5-3 bulan dengan berat 8-12 ekor per kg. 
              Untuk pemasaran, Anda bisa:
            </p>
            <ul>
              <li>Menjual ke pasar tradisional</li>
              <li>Memasok ke warung makan dan restoran</li>
              <li>Menjual online melalui media sosial</li>
              <li>Bermitra dengan UMKM lain seperti kami</li>
            </ul>

            <h2>Analisa Keuntungan Budidaya Lele</h2>
            <p>
              Dengan modal awal sekitar Rp 5-10 juta untuk kolam 3x4 meter, Anda bisa mendapatkan keuntungan 
              bersih Rp 2-4 juta per siklus (3 bulan). Ini adalah estimasi konservatif berdasarkan pengalaman 
              <strong>UMKM Lele Gumpang</strong>.
            </p>

            <h2>Tips Sukses dari UMKM Lele Gumpang</h2>
            <ol>
              <li><strong>Konsistensi:</strong> Lakukan perawatan rutin setiap hari</li>
              <li><strong>Pencatatan:</strong> Catat semua aktivitas dan biaya</li>
              <li><strong>Networking:</strong> Bangun jaringan dengan peternak lain</li>
              <li><strong>Inovasi:</strong> Terus belajar teknik baru</li>
              <li><strong>Kualitas:</strong> Jangan berkompromi dengan kualitas</li>
            </ol>

            <h2>Kesimpulan</h2>
            <p>
              Budidaya lele di Surakarta, khususnya di daerah Gumpang, memiliki potensi yang sangat besar. 
              Dengan mengikuti tips dari <strong>UMKM Lele Gumpang</strong> yang sudah terbukti sukses, 
              Anda bisa memulai bisnis budidaya lele yang menguntungkan.
            </p>

            <p>
              Ingat, kesuksesan tidak datang dalam semalam. Butuh dedikasi, konsistensi, dan terus belajar 
              untuk menjadi peternak lele yang sukses di Surakarta.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-blue-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Butuh Konsultasi Budidaya Lele?
            </h3>
            <p className="text-gray-600 mb-6">
              Tim UMKM Lele Gumpang siap membantu Anda memulai budidaya lele yang sukses di Surakarta. 
              Dapatkan konsultasi gratis dan tips eksklusif dari pengalaman kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Konsultasi Gratis
              </Link>
              <Link 
                href="/products" 
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Lihat Produk Lele
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artikel Terkait</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/resep-lele-goreng-kremes-gumpang" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Resep Lele Goreng Kremes Khas Gumpang</h4>
                <p className="text-gray-600 text-sm">Resep rahasia lele goreng kremes yang menjadi favorit warga Gumpang...</p>
              </Link>
              <Link href="/blog/strategi-pemasaran-umkm-lele-digital" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Strategi Pemasaran UMKM Lele Digital</h4>
                <p className="text-gray-600 text-sm">Cara memasarkan produk lele secara online dan offline...</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}