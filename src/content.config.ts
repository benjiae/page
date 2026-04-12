// Shamelessly stolen from https://docs.astro.build/en/guides/content-collections/#generating-routes-from-content 
import { defineCollection } from 'astro:content';

import { glob, file } from 'astro/loaders';

import { z } from 'astro/zod';

const writings = defineCollection({
  loader: glob({ base: './src/content/writings', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { writings };
