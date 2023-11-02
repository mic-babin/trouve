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

const { languages, defaultLanguage } = require("./languages");
const siteUrl = "http://localhost:8000/";

module.exports = {
  siteMetadata: {
    title: `TROUVÉ - Boutique de talents`,
    description: `TROUVÉ, c'est une équipe de recruteurs spécialistes de la mode, de la beauté et du design qui cultive des liens étroits entre les talents et les employeurs.`,
    twitterUsername: `@trouvemtl`,
    image: `/trouve.png`,
    siteUrl: `https://trouvemtl.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/**/404", "/**/success", "/**/404.html"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/locales`,
        name: "locale",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `idt129n7kjbs`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage: "fr",
        fallbackLanguage: "fr",
        siteUrl,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_API_KEY,
          authDomain: process.env.GATSBY_AUTH_DOMAIN,
          projectId: process.env.GATSBY_PROJECT_ID,
          storageBucket: process.env.GATSBY_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_APP_ID,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "AW-11372992172",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
  ],
};
