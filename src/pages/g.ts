import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async () => {
  // 1. Locate the physical path of your source GIF
  // This looks into src/assets/original-animation.gif
  const filePath = path.resolve('../public/fajniedzialek.gif');
  
  // 2. Read the file into a Node Buffer
  const fileBuffer = fs.readFileSync(filePath);

  // 3. Return the response with proper download and image headers
  return new Response(fileBuffer, {
    status: 200,
    headers: {
      // Tells the browser to treat it explicitly as a GIF image
      'Content-Type': 'image/gif',
      // Forces the browser to download the file instead of opening it, 
      // and sets the downloaded filename to "awesome-animation.gif"
      'Content-Disposition': 'attachment; filename="dzien.gif"',
    },
  });
};