import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const NosServices = (props) => {
  const menu = props.data.allContentfulHeader.edges[0].node;
  const contact = props.data.allContentfulPage.edges[0].node.sections.filter(
    (section) =>
      section.id === "b8dc3482-8f6b-52e3-9c2a-cdf3971f3a76" ||
      section.id === "7245ed4c-7485-59f3-bcf3-2825bfce37a1" ||
      section.id === "33167fe8-1da1-59ca-8cae-8aed5506436b" ||
      section.id === "6609d98c-4bf8-5936-9f03-9e293bbd3542"
  );

  return (
    <Layout menu={menu} contact={contact}>
      <div>Nos Services</div>
    </Layout>
  );
};

export default NosServices;

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
              ... on ContentfulSocials {
                id
                title
                socialLinks {
                  text
                  url
                }
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
          copyrights {
            raw
          }
        }
      }
    }
    allContentfulPage(
      filter: { title: { eq: "Contact" }, node_locale: { eq: $language } }
    ) {
      edges {
        node {
          sections {
            ... on ContentfulSection {
              id
              title
              components {
                ... on ContentfulContacts {
                  id
                  contactInformations {
                    id
                    address
                    type
                  }
                }
              }
              link {
                ... on ContentfulShortText {
                  id
                  text
                }
              }
              textFields {
                ... on ContentfulParagraph {
                  id
                  childContentfulParagraphTextTextNode {
                    text
                  }
                }
              }
            }
            ... on ContentfulForm {
              id
              title
              formFields {
                id
                fieldName
                label
                type
                required
                node_locale
              }
              button
            }
          }
        }
      }
    }
  }
`;
