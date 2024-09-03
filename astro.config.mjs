import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  integrations: [tailwind()],
  site: '/Demichefv2.github.io/',
  base: "/"
});
