// Maps a zero-based day-of-year index to gif metadata.
// Add as many entries as you want; the index wraps around (day % entries.length).
export interface GifEntry {
  url: string;       // direct .gif or .mp4 URL
  title: string;
  description: string;
}

export const gifs: GifEntry[] = [
  {
    url: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    title: "Day 1 – Cat keyboard",
    description: "A cat furiously typing on a keyboard.",
  },
  {
    url: "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif",
    title: "Day 2 – Rubber duck debug",
    description: "Explaining a bug to a rubber duck.",
  },
  {
    url: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
    title: "Day 3 – Typing fast",
    description: "Fingers flying across the keyboard.",
  },
  {
    url: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    title: "Day 4 – Mind blown",
    description: "Mind = blown.",
  },
  {
    url: "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
    title: "Day 5 – Deal with it",
    description: "Deal with it sunglasses drop.",
  },
  {
    url: "https://media.giphy.com/media/xT9IgG50Lg7rusT1SC/giphy.gif",
    title: "Day 6 – This is fine",
    description: "Everything is fine. Totally fine.",
  },
  {
    url: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    title: "Day 7 – Weekend",
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
