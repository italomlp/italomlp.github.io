/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');
const config = require('./data/config');

module.exports = {
  siteMetadata: config,
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src'),
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsId,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald:400,500,600,700`, `Montserrat:400,500,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `pt`],
        // language file path
        defaultLanguage: `pt`,
      },
    },
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: ['/**/*styles*'] },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Italo Menezes`,
        short_name: `italomlp`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#425887`,
        display: `standalone`,
        icon: `static/favicon.png`,
        lang: `pt`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Italo Menezes`,
            short_name: `italomlp`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: {
          patterns: [`**/styles.ts`],
        },
      },
    },
  ],
};
