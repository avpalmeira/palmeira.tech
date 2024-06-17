module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        // Used for sitemap generation
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/",
        manifestSettings: {
          // Path is relative to the root
          favicon: "./content/images/favicon.ico",
          // Used in manifest.json
          siteName: "My Minimal Portfolio",
          shortName: "Portfolio",
          startUrl: "/",
          backgroundColor: "#FFFFFF",
          themeColor: "#000000",
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        googleAnalytics: {
          trackingId: "UA-140233648-1",
          anonymize: true, // Default true
          environments: ["production"], // Default ["production"]
        },
      },
    },
  ],
};
