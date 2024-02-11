import React from "react";
import Layout from "../components/layout.component";
import { graphql } from "gatsby";
import { useState, useEffect } from "react";
import Loader from "../components/common/loader.component";
import { NavLink } from "../components/styled-components/nav-link.style";
import { Trans } from "gatsby-plugin-react-i18next";
import { SEO } from "../components/seo";

const Error = (props) => {
  const path = props.path;
  const menu = props.data.allContentfulHeader.edges[0].node;
  const contact = props.data.allContentfulPage.edges[1].node.sections;

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
      <section>
        <h1 className="my-5">404</h1>
        <p className="px-3">
          <Trans>message</Trans>
        </p>
        <NavLink to="/">
          <Trans>close</Trans>
        </NavLink>
      </section>
    </Layout>
  );
};

export default Error;
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
    <SEO title="404 - " />
  </>
);

// const Section = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 80vh;
//   width: 100vw;
//   padding-top: 150px;
//   padding-bottom: 100px;
//   padding-left: 15px;
//   padding-right: 15px;
//   text-align: center;
//   background: black;
//   color: white;
//   border-bottom: 2px solid white;

//   h1 {
//     font-size: 18vw;
//     line-height: 18vw;
//   }
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
        title: { in: ["Contact", "Home", "Accueil"] }
        node_locale: { eq: $language }
      }
    ) {
      edges {
        node {
          id
          sections {
            ... on ContentfulLoader {
              id
              loaderImage {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            ... on ContentfulSection {
              id
              type
              title
              images {
                gatsbyImageData(placeholder: BLURRED, quality: 75)
              }
              components {
                ... on ContentfulContacts {
                  id
                  contactInformations {
                    id
                    address
                    type
                  }
                }
                ... on ContentfulCard {
                  id
                  title
                  image {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                  description {
                    id
                    description
                  }
                  link {
                    id
                    text
                    url
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
                  reference
                  childContentfulParagraphTextTextNode {
                    text
                  }
                  text {
                    text
                  }
                }
                ... on ContentfulShortText {
                  id
                  paragraph: text
                }
                ... on ContentfulList {
                  id
                  value
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
