require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID } = process.env;


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
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://facebook.us18.list-manage.com/subscribe/post?u=a1a0e5958b2d727a3b3578b04&amp;id=ccb7d8ba53', // add your MC list endpoint here; see instructions below
        },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-twitter',
    `gatsby-transformer-json`,
    "gatsby-transformer-javascript-frontmatter",
    {
      resolve: 'gatsby-source-contentful',
      options: {
          spaceId: SPACE_ID,
          accessToken: ACCESS_TOKEN,
      },
    },
  ],
};
