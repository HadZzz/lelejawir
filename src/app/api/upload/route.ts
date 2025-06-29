import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');

    // Upload to ImgBB
    const imgbbResponse = await axios.post(
      'https://api.imgbb.com/1/upload',
      {
        key: '1047e3a6df288f011d954b8ddc2a5fd4', // User's ImgBB API key
        image: base64,
        name: file.name,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    if (imgbbResponse.data.success) {
      const imageUrl = imgbbResponse.data.data.url;
      return NextResponse.json({ 
        success: true, 
        imageUrl: imageUrl,
        deleteUrl: imgbbResponse.data.data.delete_url 
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to upload to ImgBB' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
} 