// Maps a zero-based day-of-year index to gif metadata.
// Add as many entries as you want; the index wraps around (day % entries.length).
export interface GifEntry {
  url: string;       // direct .gif or .mp4 URL
  title: string;
  description: string;
}

export const gifs: GifEntry[] = [
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    title: "Fajniedziałek",
    description: "A cat furiously typing on a keyboard.",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    title: "Zajewtorek",
    description: "Explaining a bug to a rubber duck.",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    title: "Środa",
    description: "dzień loda",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    title: "Czwarteczek",
    description: "Mind = blown.",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    title: "Piąteczek",
    description: "Deal with it sunglasses drop.",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    title: "Sobota",
    description: "Everything is fine. Totally fine.",
  },
  {
    url: "https://dzien.scooby.boo/fajniedzialek.gif",
    title: "Niedziela",
    description: "It is finally the weekend!",
  },
];

export function getTodaysGif(): GifEntry {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return gifs[dayOfYear % gifs.length];
}
