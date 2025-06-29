import ProductsClientFetcher from "@/components/ProductsClientFetcher";

const ProductsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Produk Lele Kami
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Pilih lele segar berkualitas sesuai kebutuhan Anda
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ProductsClientFetcher />
        </div>
      </section>
    </main>
  );
};

export default ProductsPage; 