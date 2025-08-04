import Link from "next/link";
import Image from "next/image";
import ClientDataFetcher from "@/components/ClientDataFetcher";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        {/* Logo Politama - Left Side */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block group">
          <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/20">
            <Image
              src="/politama-removebg-preview.png"
              alt="Logo Politama"
              width={96}
              height={96}
              className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-blue-700 whitespace-nowrap">
              Partner Politama
            </div>
          </div>
        </div>
        
        {/* Logo Kemendistrik - Right Side */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block group">
          <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/20">
            <Image
              src="/kemendistrik-removebg-preview.png"
              alt="Logo Kemendistrik"
              width={96}
              height={96}
              className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-blue-700 whitespace-nowrap">
              Kemendistrik
            </div>
          </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Lele Segar
            <span className="block text-yellow-300">Berkualitas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Dapatkan lele segar langsung dari kolam kami di Ngawi. 
            Kualitas terjamin, harga terjangkau, pengiriman cepat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Lihat Produk
            </Link>
            <Link 
              href="/contact" 
              className="inline-block bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Client-side Data Fetcher */}
      <ClientDataFetcher />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Kg Terjual</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Layanan</div>
            </div>
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah peternak lele berpengalaman yang berkomitmen memberikan kualitas terbaik
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Mengapa Memilih Kami?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Pengalaman 5+ Tahun</h4>
                    <p className="text-gray-600">Sudah berpengalaman dalam budidaya lele selama lebih dari 5 tahun</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Kualitas Terjamin</h4>
                    <p className="text-gray-600">Menggunakan pakan berkualitas tinggi dan perawatan yang teliti</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Harga Terjangkau</h4>
                    <p className="text-gray-600">Harga yang kompetitif tanpa mengorbankan kualitas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/politama-removebg-preview.png"
                    alt="Logo Politama - Partner Kami"
                    width={200}
                    height={200}
                    className="object-contain opacity-80"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-sm font-semibold text-blue-700">Partner Resmi</p>
                      <p className="text-xs text-gray-600">Politama</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Keunggulan Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan kualitas terbaik dengan pelayanan yang memuaskan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Segar Langsung</h3>
              <p className="text-gray-600 leading-relaxed">
                Lele segar langsung dari kolam, tidak melalui tengkulak.
                Dipanen sesuai pesanan untuk menjamin kesegaran.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <svg className="w-10 h-10 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Berkualitas Tinggi</h3>
              <p className="text-gray-600 leading-relaxed">
                Dibudidayakan dengan pakan berkualitas tinggi dan perawatan yang teliti.
                Hasil lele yang sehat dan bergizi.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <svg className="w-10 h-10 text-orange-600 group-hover:text-orange-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Pengiriman Cepat</h3>
              <p className="text-gray-600 leading-relaxed">
                Pengiriman cepat ke seluruh Ngawi dan sekitarnya.
                Pesanan Anda akan sampai dalam waktu singkat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimoni Pelanggan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Apa kata pelanggan setia kami tentang kualitas lele kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BS</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                &quot;Lele yang sangat segar dan berkualitas. Pengiriman cepat dan pelayanan ramah. Sudah langganan 2 tahun!&quot;
              </p>
              <div className="font-semibold text-gray-800">Budi Santoso</div>
              <div className="text-sm text-gray-500">Warung Makan Sederhana</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SA</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                &quot;Kualitas lele yang konsisten dan harga yang terjangkau. Pelanggan saya sangat puas dengan hasilnya.&quot;
              </p>
              <div className="font-semibold text-gray-800">Siti Aminah</div>
              <div className="text-sm text-gray-500">Catering Keluarga</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AR</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                &quot;Pengiriman tepat waktu dan lele selalu segar. Sudah menjadi supplier tetap untuk restoran kami.&quot;
              </p>
              <div className="font-semibold text-gray-800">Ahmad Rizki</div>
              <div className="text-sm text-gray-500">Restoran Seafood</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Berapa lama waktu pengiriman?</h3>
              <p className="text-gray-600">Pengiriman dilakukan dalam waktu 2-4 jam setelah pesanan diterima, tergantung lokasi.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Apakah ada minimum order?</h3>
              <p className="text-gray-600">Minimum order 5 kg untuk pengiriman ke area Ngawi, dan 10 kg untuk area luar Ngawi.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Bagaimana cara memesan?</h3>
              <p className="text-gray-600">Anda bisa menghubungi kami melalui WhatsApp, telepon, atau mengisi form kontak di website ini.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Apakah lele dijamin segar?</h3>
              <p className="text-gray-600">Ya, lele dipanen langsung dari kolam sesuai pesanan untuk menjamin kesegaran maksimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memesan?</h2>
          <p className="text-xl mb-8 opacity-90">
            Dapatkan lele segar berkualitas tinggi langsung dari kolam kami. 
            Hubungi kami sekarang untuk pemesanan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Lihat Produk
            </Link>
            <Link 
              href="/contact" 
              className="inline-block bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;