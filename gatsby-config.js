module.exports = {
  siteMetadata: {
    title: 'Static Blog',
    description: `This is example of static Gatsby blog`,
    author: `@pwr`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
  ],
};
