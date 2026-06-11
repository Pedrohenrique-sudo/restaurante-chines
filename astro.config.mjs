import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pedrohenrique-sudo.github.io',
  base: '/restaurante-chines',
  build: {
    format: 'directory',
  },
});
