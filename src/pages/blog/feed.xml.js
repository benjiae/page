// https://blog.damato.design/posts/astro-rss-mdx/
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer } from "@astrojs/mdx/container-renderer";
import { loadRenderers } from "astro:container";
import { getCollection, render } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
    const renderers = await loadRenderers([getContainerRenderer()]);
    const container = await AstroContainer.create({ renderers });
    const posts = await getCollection('writings');

    const items = [];
    for (const post of posts) {
        const { Content } = await render(post);
        const content = await container.renderToString(Content);
        const link = new URL(`/blog/${post.id}`, context.url.origin).toString();    
        items.push({ ...post.data, link, content });
    }

    return rss({
        title: 'benjae\'s yaps',
        description: 'The place where i decide to talk for more than 2 lines',
        site: context.site,
        items,
    });
}
