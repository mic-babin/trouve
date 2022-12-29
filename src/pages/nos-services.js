import React from "react";
import Layout from "../components/layout.component";
import { graphql } from "gatsby";
import Expertise from "../components/services/expertise.component";
import Mandate from "../components/services/mandate.component";
import { useState, useEffect } from "react";
import Loader from "../components/common/loader.component";

const NosServices = (props) => {
  const path = props.path;
  const menu = props.data.allContentfulHeader.edges[0].node;
  const contact = props.data.allContentfulPage.edges[0].node.sections.filter(
    (section) =>
      section.id === "b8dc3482-8f6b-52e3-9c2a-cdf3971f3a76" ||
      section.id === "7245ed4c-7485-59f3-bcf3-2825bfce37a1" ||
      section.id === "33167fe8-1da1-59ca-8cae-8aed5506436b" ||
      section.id === "6609d98c-4bf8-5936-9f03-9e293bbd3542"
  );

  const expertise = props.data.allContentfulPage.edges[1].node.sections.filter(
    (section) =>
      section.id === "75150f30-8ceb-5821-bf1e-428049b55a0a" ||
      section.id === "16c38960-c0a9-5a92-9779-bbe69b49b8f3"
  )[0];
  const mandate = props.data.allContentfulPage.edges[1].node.sections.filter(
    (section) =>
      section.id === "b4a2f391-7296-551e-82d5-be228227643d" ||
      section.id === "33f95366-e224-521c-8a86-525042586da0"
  )[0];

  const [showContact, setShowContact] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 1);
  }, []);

  return (
    <Layout
      menu={menu}
      contact={contact}
      showContact={showContact}
      setShowContact={setShowContact}
      headerColor="#000000"
      path={path}
      showPage={showPage}
    >
      {!showPage && <Loader />}
      <div className="bg-beige">
        <div id="top"></div>
        {showPage && (
          <>
            <Expertise expertise={expertise} />
            <Mandate
              mandate={mandate}
              contact={contact}
              setShowContact={setShowContact}
            />
          </>
        )}
      </div>
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
            id
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
                  id
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
      filter: {
        title: { in: ["Contact", "Services"] }
        node_locale: { eq: $language }
      }
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
              images {
                id
                gatsbyImageData(placeholder: BLURRED)
              }
              link {
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
              textFields {
                ... on ContentfulParagraph {
                  id
                  reference
                  text {
                    text
                    id
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
