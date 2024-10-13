import {DateTime} from "luxon";
import {feedPlugin} from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "benjae's blog attempt",
			subtitle: "will i ever shut up?? idk",
			base: "https://benjae.nekoweb.org/",
			author: {
				name: "benjae",
				email: "benja.ae@proton.me", // Optional
			}
		}
	});
  
  // everything else
  eleventyConfig.addPassthroughCopy("src/*/*.png");

  return {
    dir: {
      input: "src",
      output: "../public/blog",
    },
  };
};
