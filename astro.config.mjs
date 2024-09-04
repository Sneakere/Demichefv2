import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProduction = process.env.NODE_ENV === 'production';
const siteURL = 'https://sneakere.github.io/Demichefv2/';
const base = isProduction ? '/Demichefv2/' : '/';

export default defineConfig({
  integrations: [tailwind()],
  site: siteURL,
  base: base
});