// One entry per weekday. Index matches Date.getDay(): 0=Sunday … 6=Saturday.
export interface GifEntry {
  url: string;
  videoUrl: string;
  gifFile: string;
}

export const gifs: GifEntry[] = [
  { url: "https://i.imgur.com/1TlBrfZ.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4", gifFile: "fajniedzialek.gif" }, // Sunday
  { url: "https://i.imgur.com/JUnOMHp.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4", gifFile: "fajniedzialek.gif" }, // Monday
  { url: "https://i.imgur.com/JUnOMHp.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4", gifFile: "fajniedzialek.gif" }, // Tuesday
  { url: "https://dzien.scooby.boo/test.gif", videoUrl: "https://dzien.scooby.boo/supersroda.mp4",    gifFile: "fajniedzialek.gif" }, // Wednesday
  { url: "https://i.imgur.com/1TlBrfZ.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4", gifFile: "fajniedzialek.gif" }, // Thursday
  { url: "https://i.imgur.com/1TlBrfZ.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4", gifFile: "fajniedzialek.gif" }, // Friday
  { url: "https://i.imgur.com/1TlBrfZ.gif", videoUrl: "https://dzien.scooby.boo/fajniedzialek.mp4", gifFile: "fajniedzialek.gif" }, // Saturday
];

export function getTodaysGif(): GifEntry {
  return gifs[new Date().getDay()];
}
