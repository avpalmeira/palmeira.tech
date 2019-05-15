module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-140233648-1",
          head: false
        }
    }
  ]
}
