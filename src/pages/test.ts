import type { APIRoute } from 'astro';
import { getTodaysGif } from '../data/gifs';

export const GET: APIRoute = async () => {
  // 1. Get the dynamic GIF object
  const gif = getTodaysGif();
  
  // 2. Assuming gif.gifFile is now a full URL (e.g., 'https://example.com/image.gif')
  const imageUrl = gif.url; 

  try {
    // 3. Fetch the image from the remote source
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return new Response('Failed to fetch the remote GIF', { status: response.status });
    }

    // 4. Extract the binary data as an ArrayBuffer
    const fileBuffer = await response.arrayBuffer();

    // 5. Stream it back to the client
    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/gif',
        'Content-Disposition': `attachment; filename="dzien.gif"`,
      },
    });
    
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
};