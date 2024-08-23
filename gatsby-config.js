module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        // Used for sitemap generation
        siteUrl: "https://palmeira.tech/",
        manifestSettings: {
          // Path is relative to the root
          favicon: "./content/images/favicon.png",
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
          // Defines the slug for the blog listing page
          path: "/blog",
          entityName: "Projects",
          usePathPrefixForArticles: false,
        },
        googleAnalytics: {
          trackingId: "G-07R4E822M3",
          anonymize: true,
          environments: ["production"],
        },
      },
    },
  ],
};
