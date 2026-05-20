import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { getTodaysGif } from '../data/gifs';

export const GET: APIRoute = async () => {
  const gif = getTodaysGif();
  const filename = gif.gifFile;
  const filePath = path.resolve('public', filename);
  const fileBuffer = fs.readFileSync('./public/test.gif');

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Content-Disposition': `attachment; filename="dzien.gif"`,
    },
  });
};