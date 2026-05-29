// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://tetsuyaz.github.io',
  base: '/kiyo',
  server: {
    host: true, // 监听所有网络接口（0.0.0.0），允许局域网访问
  },
  integrations: [
    expressiveCode({
      themes: ['github-dark', 'github-light'],
    }),
    mdx(),
  ],
});
