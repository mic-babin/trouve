import React from "react";
import Layout from "../components/layout.component";
import { graphql } from "gatsby";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../components/common/loader.component";
import { NavLink } from "../components/styled-components/nav-link.style";
import { Trans } from "gatsby-plugin-react-i18next";

const Success = (props) => {
  // const {t} = useTranslation();
  const path = props.path;
  const menu = props.data.allContentfulHeader.edges[0].node;
  const contact = props.data.allContentfulPage.edges[1].node.sections;
  const team = props.data.allContentfulPage.edges[0].node.sections;
  const hero = team.filter(
    (el) =>
      el.id === "8a5acd35-6c67-5045-bde6-39ecf7bb1cc2" ||
      el.id === "25d32986-3977-5e32-b3fb-27185ec42a7c"
  )[0];
  const teamMembers = team.filter(
    (el) =>
      el.id !== "8a5acd35-6c67-5045-bde6-39ecf7bb1cc2" &&
      el.id !== "25d32986-3977-5e32-b3fb-27185ec42a7c"
  );
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
      <Section>
        <h1>
          <Trans>title</Trans>
        </h1>
        <p className="px-3">
          <Trans>message</Trans>
        </p>
        <NavLink to="/">
          <Trans>button</Trans>
        </NavLink>
      </Section>
    </Layout>
  );
};

export default Success;

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
  background: black;
  color: white;
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
        title: { in: ["Contact", "Team", "Équipe"] }
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
