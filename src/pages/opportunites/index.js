import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout.component";
import { useState, useRef } from "react";
import Jobs from "../../components/opportunites/jobs/jobs.component";
import { useI18next } from "gatsby-plugin-react-i18next";
import {
  filterItems,
  extractArray,
  filterFieldsByLanguage,
} from "../../utils/jobs.utils";
import styled from "styled-components";
import { JobProvider } from "../../context/job.context";
import { JobModalProvider } from "../../context/job-modal.context";

const Opportunites = (props) => {
  const layout = useRef();

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [showContact, setShowContact] = useState(false);

  const path = props.path;
  const menu = props.data.allContentfulHeader.edges[0].node;
  const contact = props.data.allContentfulPage.edges[1].node.sections.filter(
    (section) =>
      section.id === "b8dc3482-8f6b-52e3-9c2a-cdf3971f3a76" ||
      section.id === "7245ed4c-7485-59f3-bcf3-2825bfce37a1" ||
      section.id === "33167fe8-1da1-59ca-8cae-8aed5506436b" ||
      section.id === "6609d98c-4bf8-5936-9f03-9e293bbd3542"
  );

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: '{"refreshToken":"78ebbf67-521b-4e94-a42b-53a41a25cfb3"}',
  };

  const {
    i18n: { language },
  } = useI18next();

  useEffect(() => {
    if (jobs.length == 0) {
      fetch(
        "https://qimsyaozqntinmrokopq.auth.eu-west-2.nhost.run/v1/token",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          const options2 = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${response.accessToken}`,
            },
            body: JSON.stringify({ query: PROJECTS_QUERY }),
          };
          fetch(
            "https://qimsyaozqntinmrokopq.hasura.eu-west-2.nhost.run/v1/graphql",
            options2
          )
            .then((response) => response.json())
            .then((response) => {
              setJobs(
                filterItems(response.data.projects, "Diffuser sur le Site Web")
              );
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    }
    if (jobs.length > 0) {
      setCategories(
        extractArray(
          jobs,
          language == "en"
            ? "eb079d8c-1301-4dd8-b24f-8e0b5498b8a1"
            : "ce414904-9606-4c47-852a-07b0652775a0"
        )
      );
      setLocations(
        extractArray(
          jobs,
          language == "en"
            ? "c4f0e4bf-7d2f-40e9-87f3-968519a88b36"
            : "cd80b702-cfc2-4c42-b872-9b6ee07372b4"
        )
      );
      setFilteredJobs(filterFieldsByLanguage(jobs, language));
    }
  }, [jobs, language]);

  return (
    <div ref={layout}>
      <Layout
        menu={menu}
        contact={contact}
        showContact={showContact}
        setShowContact={setShowContact}
        headerColor="black"
        path={path}
        showPage={true}
      >
        <div id="top"></div>
        <Wrapper>
          <JobProvider>
            <JobModalProvider>
              <div className="container">
                {/* <Sidebar locations={locations} categories={categories} /> */}
                <Jobs jobs={filteredJobs} />
              </div>
            </JobModalProvider>
          </JobProvider>
        </Wrapper>
      </Layout>
    </div>
  );
};

export default Opportunites;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background: #efefef;
`;

const PROJECTS_QUERY = `
  query RecentProjects {
    projects(
      where: {_or: [{updatedAt: {_gte: "2023-12-01"}}, {fieldsValues: {updatedAt: {_gte: "2023-12-01"}}}]}
      order_by: {fieldsValues_aggregate: {max: {updatedAt: desc}}}
    ) {
      deletedAt
      createdAt
      assignee {
        email
        phoneNumber
        id
        displayName
      }
      company {
        companyPublicData {
          id
          name
        }
      }
      referenceId
      fieldsValues(where: {deletedAt: {_is_null: true}}) {
        field {
          id
          name
        }
        fieldValue {
          id
          name
        }
        value
      }
    }
  }
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
