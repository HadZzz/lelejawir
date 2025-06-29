# Deployment Guide - Penjualan Lele

## Masalah yang Ditemukan
Produk dan galeri tidak muncul di halaman home setelah deployment di Vercel.

## Solusi yang Diterapkan

### 1. Perbaikan Fetch URL
- Menggunakan relative URLs (`/api/products`, `/api/gallery`) alih-alih absolute URLs
- Menghilangkan ketergantungan pada environment variable `NEXT_PUBLIC_BASE_URL`

### 2. Optimasi Prisma Client
- Membuat file `src/lib/prisma.ts` untuk singleton Prisma client
- Mencegah multiple database connections di production

### 3. Perbaikan Build Script
- Menambahkan `prisma db push` ke build script
- Menambahkan `postinstall` script untuk generate Prisma client

### 4. Debugging Tools
- Menambahkan health check API (`/api/health`)
- Menambahkan debug API (`/api/debug`)
- Menambahkan komponen DebugInfo untuk monitoring

## Environment Variables yang Diperlukan di Vercel

### Required Variables:
```
DATABASE_URL=your_postgresql_connection_string
```

### Optional Variables:
```
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

## Langkah-langkah Deployment

1. **Setup Database**
   - Pastikan PostgreSQL database sudah ter-setup
   - Update `DATABASE_URL` di Vercel environment variables

2. **Deploy ke Vercel**
   ```bash
   git add .
   git commit -m "Fix production data fetching"
   git push
   ```

3. **Monitor Deployment**
   - Cek build logs di Vercel dashboard
   - Pastikan `prisma db push` berhasil
   - Cek health endpoint: `https://your-domain.vercel.app/api/health`

4. **Test Aplikasi**
   - Login sebagai admin
   - Tambah produk dan galeri
   - Cek apakah data muncul di home page
   - Monitor debug info di bottom-right corner

## Troubleshooting

### Jika data masih tidak muncul:
1. Cek health endpoint: `/api/health`
2. Cek debug endpoint: `/api/debug`
3. Cek Vercel function logs
4. Pastikan database connection string benar
5. Pastikan Prisma migrations sudah ter-apply

### Jika ada error database:
1. Cek `DATABASE_URL` di Vercel environment variables
2. Pastikan database accessible dari Vercel
3. Cek Prisma schema compatibility

## Cleanup
Setelah masalah teratasi:
1. Hapus komponen `DebugInfo` dari `src/app/page.tsx`
2. Hapus file debug yang tidak diperlukan
3. Update README dengan instruksi yang benar 