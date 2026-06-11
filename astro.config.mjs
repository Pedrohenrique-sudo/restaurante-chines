import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://SEU_USERNAME.github.io',
  base: '/restaurante-chines',
  
  build: {
    format: 'directory',
  },
  
  vite: {
    build: {
      target: 'esnext',
      rollupOptions: {
        output: {
          manualChunks: {
            'three': ['three'],
            'gsap': ['gsap'],
          },
        },
      },
    },
  },
});
