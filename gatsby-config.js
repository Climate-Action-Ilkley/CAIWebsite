module.exports = {
  siteMetadata: {
    title: "Climate Action Ilkley",
    author: "Will Abramson",
    description: "A Gatsby.js Starter based on Stellar by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Climate Action Ilkley',
        short_name: 'CAI',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/web-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-twitter'
  ],
}
