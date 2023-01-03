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
          apiKey: "AIzaSyB--qL0bjAp8FC9K3xOKpiiTvFgGk0of5Y",
          authDomain: "trouve-mtl.firebaseapp.com",
          projectId: "trouve-mtl",
          storageBucket: "trouve-mtl.appspot.com",
          messagingSenderId: "688256534695",
          appId: "1:688256534695:web:11ab18501bfb275ec6f382",
        },
      },
    },
  ],
};
