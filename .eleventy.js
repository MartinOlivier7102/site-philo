module.exports = function(eleventyConfig) {
  // Copier le dossier css vers la sortie
  eleventyConfig.addPassthroughCopy("css");

  // Collection 'cours' : tous les fichiers Markdown dans content/cours
  eleventyConfig.addCollection("cours", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/cours/*.md").sort((a,b) => a.date - b.date);
  });

  return {
    dir: {
      input: ".",
      includes: "includes",
      layouts: "layouts",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
