import type { APIRoute } from 'astro';
import { getTodaysGif } from '../data/gifs';
// @ts-ignore
import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async () => {
  const gif = getTodaysGif();

  try {
    let fileBuffer: ArrayBuffer;

    if (gif.localFile) {
      const assets = (env as { ASSETS: { fetch: (req: Request) => Promise<Response> } }).ASSETS;
      const assetResponse = await assets.fetch(new Request(`https://dzien.scooby.boo/${gif.localFile}`));
      if (!assetResponse.ok) {
        return new Response('Failed to fetch asset', { status: assetResponse.status });
      }
      fileBuffer = await assetResponse.arrayBuffer();
    } else {
      const response = await fetch(gif.url);
      if (!response.ok) {
        return new Response('Failed to fetch the remote GIF', { status: response.status });
      }
      fileBuffer = await response.arrayBuffer();
    }

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/gif',
        'Content-Disposition': 'inline; filename="dzien.gif"',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
};
