import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
const repoName = 'Demichefv2.github.io';
export default defineConfig({
  integrations: [tailwind()],
  site: `https://sneakere.github.io/${repoName}/`,
  base: `/${repoName}/`,
});
