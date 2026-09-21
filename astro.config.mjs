// @ts-check
import { defineConfig } from 'astro/config';

// Static build optimized for Cloudflare Pages.
// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
