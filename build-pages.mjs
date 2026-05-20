import { cpSync, renameSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const serverDir = join(__dirname, 'dist/server');
const clientDir = join(__dirname, 'dist/client');

// Copy all server chunks and entry into dist/client
cpSync(serverDir, clientDir, { recursive: true });

// Rename entry.mjs to _worker.js so Cloudflare Pages picks it up
const entryPath = join(clientDir, 'entry.mjs');
const workerPath = join(clientDir, '_worker.js');
if (existsSync(entryPath)) {
  renameSync(entryPath, workerPath);
  console.log('Created dist/client/_worker.js');
}

// Remove the Workers-format deploy config that would confuse Cloudflare Pages
const deployConfig = join(__dirname, '.wrangler/deploy/config.json');
if (existsSync(deployConfig)) {
  rmSync(deployConfig);
  console.log('Removed .wrangler/deploy/config.json');
}
