// One entry per weekday. Index matches Date.getDay(): 0=Sunday … 6=Saturday.
export interface GifEntry {
  url: string;
  videoUrl: string;
}

export const gifs: GifEntry[] = [
  { url: "https://imgur.com/1TlBrfZ", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Sunday
  { url: "https://imgur.com/1TlBrfZ", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Monday
  { url: "https://imgur.com/1TlBrfZ", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Tuesday
  { url: "https://dzien.scooby.boo/supersroda.gif", videoUrl: "https://dzien.scooby.boo/supersroda.mp4" }, // Wednesday
  { url: "https://imgur.com/1TlBrfZ", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Thursday
  { url: "https://imgur.com/1TlBrfZ", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Friday
  { url: "https://imgur.com/1TlBrfZ", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Saturday
];

export function getTodaysGif(): GifEntry {
  return gifs[new Date().getDay()];
}
