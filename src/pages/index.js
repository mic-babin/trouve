import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import * as sections from "../components/home/index-sections";
import Fallback from "../components/fallback";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
// import { SEO } from "../components/seo";

export default function Homepage(props) {
  const menu = props.data.allContentfulHeader.edges[0].node;
  return (
    <Layout menu={menu}>
      {/* {homepage.blocks.map((block) => {
        const {
          id,
          internal: { type },
          ...componentProps
        } = block;
        const blocktype = type.replace("Contentful", "");
        const Component = sections[blocktype] || Fallback;
        return <Component key={id} {...componentProps} />;
      })} */}
      <h1>
        <Trans i18nKey="title">Hi people</Trans>
      </h1>
      {/* ... */}
    </Layout>
  );
}

// export const Head = () => <SEO />;

// export const query = graphql`
//   query {

// `;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulHeader(filter: { node_locale: { eq: $language } }) {
      edges {
        node {
          closeTitle
          navLinks {
            links {
              ... on ContentfulLink {
                id
                text
                url
              }
              ... on ContentfulShortText {
                id
                text
              }
            }
          }
          langs: language {
            id
            value
          }
          featured: image {
            gatsbyImageData(placeholder: BLURRED)
          }
          logo {
            url
          }
        }
      }
    }
  }
`;
