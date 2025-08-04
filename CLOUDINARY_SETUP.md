# Cloudinary Setup untuk Upload Images

## Mengapa Menggunakan Cloudinary?

Vercel menggunakan read-only file system, sehingga tidak bisa menyimpan file upload ke folder `public/uploads`. Cloudinary adalah solusi cloud storage yang reliable untuk mengatasi masalah ini.

## Setup Cloudinary

### 1. Buat Akun Cloudinary
1. Kunjungi https://cloudinary.com
2. Sign up untuk akun gratis
3. Setelah login, buka Dashboard

### 2. Dapatkan Credentials
Di Dashboard Cloudinary, Anda akan melihat:
- **Cloud Name**: `your-cloud-name`
- **API Key**: `your-api-key`
- **API Secret**: `your-api-secret`

### 3. Update Environment Variables
Update file `.env` dengan credentials Cloudinary Anda:

```env
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME="your-actual-cloud-name"
CLOUDINARY_API_KEY="your-actual-api-key"
CLOUDINARY_API_SECRET="your-actual-api-secret"
```

### 4. Update Vercel Environment Variables
Jika deploy ke Vercel, tambahkan environment variables di Vercel Dashboard:
1. Buka project di Vercel Dashboard
2. Go to Settings > Environment Variables
3. Tambahkan:
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

## Fitur Cloudinary yang Digunakan

### 1. Auto Optimization
- **Auto Quality**: Otomatis mengoptimalkan kualitas gambar
- **Auto Format**: Otomatis memilih format terbaik (WebP, AVIF, dll)
- **Resize**: Otomatis resize ke maksimal 800x600px

### 2. Folder Organization
- Semua upload disimpan di folder `lele-gumpang/`
- Mudah untuk manage dan organize

### 3. CDN Global
- Gambar di-serve melalui CDN global Cloudinary
- Loading lebih cepat di seluruh dunia

## Testing

Setelah setup Cloudinary:
1. Jalankan `npm run dev`
2. Login ke admin panel
3. Coba upload gambar di form produk atau galeri
4. Gambar akan tersimpan di Cloudinary dan URL akan disimpan di database

## Troubleshooting

### Error: "Upload failed"
- Pastikan credentials Cloudinary benar
- Check environment variables sudah di-set
- Pastikan file size < 5MB
- Pastikan file type adalah image (JPEG, PNG, WebP, GIF)

### Error: "Invalid credentials"
- Double check CLOUDINARY_CLOUD_NAME, API_KEY, dan API_SECRET
- Pastikan tidak ada spasi atau karakter tambahan

## Keuntungan Cloudinary vs Local Storage

| Feature | Local Storage | Cloudinary |
|---------|---------------|------------|
| Vercel Compatible | ❌ | ✅ |
| Auto Optimization | ❌ | ✅ |
| CDN Global | ❌ | ✅ |
| Backup & Security | ❌ | ✅ |
| Transformations | ❌ | ✅ |
| Free Tier | ✅ | ✅ (25GB) |

## Free Tier Limits

Cloudinary free tier memberikan:
- 25GB storage
- 25GB bandwidth per bulan
- 1000 transformations per bulan

Untuk UMKM kecil, ini sudah lebih dari cukup.