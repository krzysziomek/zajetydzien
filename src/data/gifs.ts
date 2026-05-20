// One entry per weekday. Index matches Date.getDay(): 0=Sunday … 6=Saturday.
export interface GifEntry {
  url: string;
  videoUrl: string;
}

export const gifs: GifEntry[] = [
  { url: "https://i.imgur.com/1TlBrfZ.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Sunday
  { url: "https://i.imgur.com/JUnOMHp.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Monday
  { url: "https://i.imgur.com/JUnOMHp.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Tuesday
  { url: "https://i.imgur.com/1TlBrfZ.mp4", videoUrl: "https://dzien.scooby.boo/supersroda.mp4" }, // Wednesday
  { url: "https://i.imgur.com/1TlBrfZ.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Thursday
  { url: "https://i.imgur.com/1TlBrfZ.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Friday
  { url: "https://i.imgur.com/1TlBrfZ.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4" }, // Saturday
];

export function getTodaysGif(): GifEntry {
  return gifs[new Date().getDay()];
}
