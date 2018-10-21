module.exports = {
  siteMetadata: {
    title: "CaribbeanO",
    description: "[replace with real site description]"
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
