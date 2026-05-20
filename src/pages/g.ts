import type { APIRoute } from 'astro';
import { getTodaysGif } from '../data/gifs';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  const gif = getTodaysGif();

  try {
    let fileBuffer: ArrayBuffer;

    if (gif.localFile) {
      const runtime = (locals as Record<string, unknown>).runtime as { env?: { ASSETS?: { fetch: (req: Request) => Promise<Response> } } } | undefined;
      const assets = runtime?.env?.ASSETS;
      if (!assets) {
        return new Response('ASSETS binding not available', { status: 500 });
      }
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
        'Content-Disposition': 'attachment; filename="dzien.gif"',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
};
