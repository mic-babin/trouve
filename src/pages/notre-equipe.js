import React from "react";
import Layout from "../components/layout.component";
import { graphql } from "gatsby";
import { useState } from "react";
import TeamHero from "../components/team/team-hero.component";
import TeamMembers from "../components/team/team-members.component";

const Equipe = (props) => {
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
  return (
    <Layout
      menu={menu}
      contact={contact}
      showContact={showContact}
      setShowContact={setShowContact}
      headerColor="#000000"
    >
      <TeamHero hero={hero} setShowContact={setShowContact} />
      <TeamMembers teamMembers={teamMembers} />
    </Layout>
  );
};

export default Equipe;

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
                ... on ContentfulRichText {
                  id
                  text {
                    raw
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
              description {
                raw
              }
              email
              phone
              image {
                gatsbyImageData(placeholder: BLURRED)
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
