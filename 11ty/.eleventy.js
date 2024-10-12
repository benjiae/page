const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    // RSS
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
  
  
  // everything else
  eleventyConfig.addPassthroughCopy("src/*/*.png");

  return {
    dir: {
      input: "src",
      output: "../public/blog",
    },
  };
};
