import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://benjae.nekoweb.org',
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'catppuccin-macchiato'
    }
  })]
});