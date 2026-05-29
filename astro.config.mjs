// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://tetsuyaz.github.io',
  base: '/kiyo',
  integrations: [
    expressiveCode({
      themes: ['github-dark', 'github-light'],
    }),
    mdx(),
  ],
});
