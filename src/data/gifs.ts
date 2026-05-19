// Maps a zero-based day-of-year index to gif metadata.
// Add as many entries as you want; the index wraps around (day % entries.length).
export interface GifEntry {
  url: string;
  videoUrl: string;
}

export const gifs: GifEntry[] = [
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4",
  },
];

export function getTodaysGif(): GifEntry {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return gifs[dayOfYear % gifs.length];
}
