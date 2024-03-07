import React from "react";
import Layout from "../components/layout.component";
import { graphql } from "gatsby";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../components/common/loader.component";
import { SEO } from "../components/seo";
import ThankYou from "../components/thank-you/thank-you.component";

const Merci = (props) => {
  const path = props.path;
  const menu = props.data.allContentfulHeader.edges[0].node;
  const contact = props.data.allContentfulPage.edges[2].node.sections;
  const merci = props.data.allContentfulPage.edges[1].node.sections[0];

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
      <ThankYou merci={merci} />
    </Layout>
  );
};

export default Merci;
export const Head = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-11372992172"
    ></script>
    <script>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11372992172');`}</script>

    <script>
      {`
    <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-MFY0HQY3X7"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-MFY0HQY3X7'); </script>`}
    </script>
    <script>{`gtag('event', 'conversion', {'send_to': 'AW-11372992172/I6K8CIXF6usYEKytiK8q'});`}</script>
    <SEO titleFr="Merci - " titleEn="Thank you - " />
  </>
);
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100vw;
  padding-top: 200px;
  padding-bottom: 100px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  background: rgb(231, 229, 224);
  color: black;
  border-bottom: 2px solid white;
`;

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
        title: { in: ["Contact", "Team", "Équipe", "Thanks", "Merci"] }
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
              link {
                ... on ContentfulShortText {
                  id
                  text
                }
                ... on ContentfulLink {
                  id
                  text
                  url
                }
              }
              textFields {
                ... on ContentfulParagraph {
                  id
                  reference
                  childContentfulParagraphTextTextNode {
                    text
                  }
                }
              }
              images {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            ... on ContentfulTeamMember {
              id
              name
              title
              descriptions {
                id
                text {
                  text
                }
              }
              email
              phone
              image {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
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
