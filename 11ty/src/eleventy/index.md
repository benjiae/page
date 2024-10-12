---
layout: layout.njk
title: (I tried) figuring out 11ty
date: 2024-09-27
tags:
    - posts
---
# (I tried) figuring out 11ty
27-09-24
## why
Hi! as you might see i deleted the other one because i was too lazy to port it to the new site, now that i've seen 11ty being mentioned on nekoweb i decided to try it.

## installing and using it
idk man it's just ``npm install @11ty/eleventy`` (i have fucked this up and installed ``eleventy`` instead of ``@11ty/eleventy`` but shhhh)

I did configure it to get the files from ``src/`` instead of the root, and to output on ``idk-a-blog-maybe/`` instead of ``_site/``

To get text, i literally created an ``index.md``, put some stuff on it, ran ``npx @11ty/eleventy`` and i was done \
Now, this is the part where i started searching:

Getting a layout (because i'm not going to modify the index.html manually) to work was pretty easy, i just copied the index.html from the main site, removed unnecesary stuff and put it on ``src/_includes/layout.njk`` ([thanks documentation (link)](https://www.11ty.dev/docs/layouts/))

To get css (and the global assets) working, I put the folders on the root and yeah you get it [i also followed the documentation (link)](https://www.11ty.dev/docs/copy/) to import the ``css`` and ``assets`` folders, figuring out the directory where i had to import stuff from was trial and error tho, [but it works! (image)](screenshot.png)

To get non-global assets working i did the same but instead of ``eleventyConfig.addPassthroughCopy("assets/");`` i put ``eleventyConfig.addPassthroughCopy("src/*/*.png");`` on my ``.eleventy.js`` file

so yeah, that's it, i just did this to try how 11ty actually worked and it's pretty good! i'll probably experiment more with it later