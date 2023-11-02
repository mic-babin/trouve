import React from "react";
import Layout from "../components/layout.component";
import { graphql } from "gatsby";
import { useState, useEffect } from "react";
import TeamHero from "../components/team/team-hero.component";
import TeamMembers from "../components/team/team-members.component";
import Loader from "../components/common/loader.component";
import { SEO } from "../components/seo";

const Equipe = (props) => {
  const path = props.path;
  const menu = props.data.allContentfulHeader.edges[0].node;
  const contact = props.data.allContentfulPage.edges[1].node.sections;
  const team = props.data.allContentfulPage.edges[0].node.sections;
  console.log(props.data);
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
      <div className="bg-black">
        <div id="top"></div>
        {showPage && (
          <>
            <TeamHero hero={hero} setShowContact={setShowContact} />
            <TeamMembers teamMembers={teamMembers} />
          </>
        )}
      </div>
    </Layout>
  );
};
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

    <SEO title="Notre équipe - " />
  </>
);
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
              }
              images {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            ... on ContentfulTeamMember {
              id
              name
              title
              department
              descriptions {
                id
                text {
                  text
                }
              }
              email
              phone
              image {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  quality: 100
                )
              }
              mobileImage {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  quality: 100
                )
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
