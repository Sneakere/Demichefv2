import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProduction = process.env.NODE_ENV === 'production';
const baseURL = isProduction ? '/Demichefv2/' : '/Demichefv2/';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sneakere.github.io/Demichefv2/',
  base: baseURL
});