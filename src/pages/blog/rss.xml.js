import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Benjae\'s blog attempt',
    description: 'Can he write more than 4 words?? let\'s find out',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/**/*.md')),
    customData: `<language>en-us</language>`,
  });
}