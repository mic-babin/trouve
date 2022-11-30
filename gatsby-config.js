/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `TROUVÉ - Mode. Beauté. Design`,
    description: `TROUVÉ, c'est une équipe de recruteurs spécialistes de la mode, de la beauté et du design qui cultive des liens étroits entre les talents et les employeurs .`,
    twitterUsername: `@trouvemtl`,
    image: `/trouve.png`,
    siteUrl: `https://trouvemtl.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `iy5sbbdepii3`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
