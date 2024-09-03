// import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';
// const repoName = 'Demichefv2';
// export default defineConfig({
//   integrations: [tailwind()],
//   site: `https://sneakere.github.io/${repoName}/`,
//   base: '/Demichefv2/'
// });

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [tailwind()],
  site: isProduction ? 'https://sneakere.github.io/Demichefv2/' : '',
  base: isProduction ? '/Demichefv2/' : '/',
});