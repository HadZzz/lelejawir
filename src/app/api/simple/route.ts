export async function GET() {
  return new Response(JSON.stringify({
    message: 'Simple API working',
    timestamp: new Date().toISOString()
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
} 