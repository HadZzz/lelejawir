"use client";

import { useState, useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import ProductForm from "@/components/ProductForm";
import GalleryForm from "@/components/GalleryForm";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Gallery {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
}

const AdminPage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'products' | 'gallery'>('products');
  
  // Products state
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Gallery state
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [isGalleryLoading, setIsGalleryLoading] = useState(false);
  const [isGalleryFormOpen, setIsGalleryFormOpen] = useState(false);
  const [editingGallery, setEditingGallery] = useState<Gallery | null>(null);
  const [isGallerySubmitting, setIsGallerySubmitting] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("adminToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchProducts();
      fetchGalleries();
    }
  }, [token]);

  // Products functions
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProduct = async (productData: Omit<Product, "id">) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        await fetchProducts();
        setIsFormOpen(false);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditProduct = async (productData: Omit<Product, "id">) => {
    if (!editingProduct) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/products/${editingProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        await fetchProducts();
        setEditingProduct(null);
        setIsFormOpen(false);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm("Yakin ingin menghapus produk ini?")) return;

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        await fetchProducts();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Gallery functions
  const fetchGalleries = async () => {
    setIsGalleryLoading(true);
    try {
      const response = await fetch("/api/gallery");
      if (response.ok) {
        const data = await response.json();
        setGalleries(data);
      }
    } catch (error) {
      console.error("Error fetching galleries:", error);
    } finally {
      setIsGalleryLoading(false);
    }
  };

  const handleAddGallery = async (galleryData: Omit<Gallery, "id">) => {
    setIsGallerySubmitting(true);
    try {
      const response = await fetch("/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(galleryData),
      });

      if (response.ok) {
        await fetchGalleries();
        setIsGalleryFormOpen(false);
      } else {
        const errorData = await response.json();
        alert("Gagal menambah galeri: " + (errorData.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error adding gallery:", error);
      alert("Gagal menambah galeri: " + error);
    } finally {
      setIsGallerySubmitting(false);
    }
  };

  const handleEditGallery = async (galleryData: Omit<Gallery, "id">) => {
    if (!editingGallery) return;
    
    setIsGallerySubmitting(true);
    try {
      const response = await fetch(`/api/gallery/${editingGallery.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(galleryData),
      });

      if (response.ok) {
        await fetchGalleries();
        setEditingGallery(null);
        setIsGalleryFormOpen(false);
      }
    } catch (error) {
      console.error("Error updating gallery:", error);
    } finally {
      setIsGallerySubmitting(false);
    }
  };

  const handleDeleteGallery = async (galleryId: string) => {
    if (!confirm("Yakin ingin menghapus galeri ini?")) return;

    try {
      const response = await fetch(`/api/gallery/${galleryId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        await fetchGalleries();
      }
    } catch (error) {
      console.error("Error deleting gallery:", error);
    }
  };

  // Common functions
  const handleLogin = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("adminToken", newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("adminToken");
  };

  const openEditForm = (product: Product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const openEditGalleryForm = (gallery: Gallery) => {
    setEditingGallery(gallery);
    setIsGalleryFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingProduct(null);
  };

  const closeGalleryForm = () => {
    setIsGalleryFormOpen(false);
    setEditingGallery(null);
  };

  if (!token) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            <p className="text-gray-600 mt-2">Masuk untuk mengelola produk dan galeri</p>
          </div>
          <LoginForm onLogin={handleLogin} />
        </div>
      </main>
    );
  }

  const totalValue = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Dashboard Admin</h1>
              <p className="text-gray-600 mt-1">Kelola produk dan galeri lele Anda</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => activeTab === 'products' ? setIsFormOpen(true) : setIsGalleryFormOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Tambah {activeTab === 'products' ? 'Produk' : 'Galeri'}
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm mb-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex-1 px-4 py-2 rounded-md font-semibold transition-all ${
              activeTab === 'products'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            Produk
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex-1 px-4 py-2 rounded-md font-semibold transition-all ${
              activeTab === 'gallery'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            Galeri
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Produk</p>
                <p className="text-2xl font-bold text-gray-900">{products.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Galeri</p>
                <p className="text-2xl font-bold text-gray-900">{galleries.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Nilai</p>
                <p className="text-2xl font-bold text-gray-900">Rp {totalValue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'products' ? (
          // Products Tab
          <div>
            {isLoading ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Memuat produk...</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="px-6 py-4 border-b">
                  <h2 className="text-xl font-semibold text-gray-800">Daftar Produk</h2>
                </div>
                {products.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Produk</h3>
                    <p className="text-gray-600 mb-6">Mulai dengan menambahkan produk pertama Anda</p>
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Tambah Produk Pertama
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {products.map((product) => (
                      <div key={product.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                        <p className="text-xl font-bold text-blue-600 mb-4">
                          Rp {product.price.toLocaleString()}
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditForm(product)}
                            className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          // Gallery Tab
          <div>
            {isGalleryLoading ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Memuat galeri...</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="px-6 py-4 border-b">
                  <h2 className="text-xl font-semibold text-gray-800">Daftar Galeri</h2>
                </div>
                {galleries.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Galeri</h3>
                    <p className="text-gray-600 mb-6">Mulai dengan menambahkan galeri pertama Anda</p>
                    <button
                      onClick={() => setIsGalleryFormOpen(true)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Tambah Galeri Pertama
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {galleries.map((gallery) => (
                      <div key={gallery.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
                          <Image
                            src={gallery.imageUrl}
                            alt={gallery.title}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{gallery.title}</h3>
                        {gallery.description && (
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{gallery.description}</p>
                        )}
                        {gallery.category && (
                          <p className="text-blue-600 text-sm mb-4 font-medium">{gallery.category}</p>
                        )}
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditGalleryForm(gallery)}
                            className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteGallery(gallery.id)}
                            className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Forms */}
        <ProductForm
          product={editingProduct}
          isOpen={isFormOpen}
          onClose={closeForm}
          onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
          isLoading={isSubmitting}
        />
        
        <GalleryForm
          gallery={editingGallery}
          isOpen={isGalleryFormOpen}
          onClose={closeGalleryForm}
          onSubmit={editingGallery ? handleEditGallery : handleAddGallery}
          isLoading={isGallerySubmitting}
        />
      </div>
    </main>
  );
};

export default AdminPage; 