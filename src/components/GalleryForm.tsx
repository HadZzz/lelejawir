"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Gallery {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
}

interface GalleryFormProps {
  gallery?: Gallery | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Gallery, "id">) => void;
  isLoading?: boolean;
}

const GalleryForm = ({ gallery, isOpen, onClose, onSubmit, isLoading }: GalleryFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (gallery) {
      setFormData({
        title: gallery.title,
        description: gallery.description || "",
        imageUrl: gallery.imageUrl,
        category: gallery.category || ""
      });
      setImagePreview(gallery.imageUrl);
    } else {
      setFormData({
        title: "",
        description: "",
        imageUrl: "",
        category: ""
      });
      setImagePreview("");
      setSelectedFile(null);
    }
  }, [gallery, isOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (5MB = 5 * 1024 * 1024 bytes)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert('File terlalu besar. Ukuran maksimal adalah 5MB.');
        e.target.value = ''; // Clear the input
        return;
      }

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert('Tipe file tidak didukung. Gunakan JPEG, PNG, WebP, atau GIF.');
        e.target.value = ''; // Clear the input
        return;
      }

      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (): Promise<string> => {
    if (!selectedFile) {
      return formData.imageUrl;
    }

    setIsUploading(true);
    try {
      const formDataUpload = new FormData();
      formDataUpload.append('file', selectedFile);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataUpload,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();
      if (!data.success || !data.imageUrl) {
        throw new Error('Invalid response from upload service');
      }
      return data.imageUrl;
    } catch (error) {
      console.error('Upload error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to upload image';
      throw new Error(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.title) {
      alert('Mohon isi judul galeri');
      return;
    }

    if (!formData.imageUrl && !selectedFile) {
      alert('Mohon upload gambar atau masukkan URL gambar');
      return;
    }
    
    try {
      let finalImageUrl = formData.imageUrl;
      
      if (selectedFile) {
        finalImageUrl = await handleUpload();
      }

      if (!finalImageUrl) {
        alert('Gambar diperlukan untuk galeri');
        return;
      }

      onSubmit({
        title: formData.title,
        description: formData.description,
        imageUrl: finalImageUrl,
        category: formData.category
      });
    } catch (error) {
      console.error('Submit error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to save gallery item';
      alert(`Gagal menyimpan galeri: ${errorMessage}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {gallery ? "Edit Galeri" : "Tambah Galeri"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white placeholder-gray-500"
                placeholder="Masukkan judul galeri"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-gray-900 bg-white placeholder-gray-500"
                placeholder="Masukkan deskripsi (opsional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gambar Galeri
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload gambar atau gunakan URL di bawah
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL Gambar (opsional jika upload file)
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white placeholder-gray-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white placeholder-gray-500"
                placeholder="Contoh: Kolam, Proses, Hasil"
              />
            </div>

            {imagePreview && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preview Gambar
                </label>
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={isLoading || isUploading}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading || isUploading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Menyimpan...
                  </div>
                ) : (
                  gallery ? "Update Galeri" : "Tambah Galeri"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GalleryForm; 