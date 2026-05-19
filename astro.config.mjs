// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE to your GitHub Pages URL, e.g. https://username.github.io/repo-name
// or https://username.github.io if the repo is <username>.github.io
export default defineConfig({
  output: 'static',
  site: process.env.SITE ?? 'https://dzien.scooby.boo',
});
