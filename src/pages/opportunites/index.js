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
import Sidebar from "../../components/opportunites/sidebar/sidebar.component";
import Loader from "../../components/common/loader.component";
import { SEO } from "../../components/seo";
import { motion, AnimatePresence } from "framer-motion";

const Opportunites = (props) => {
  const layout = useRef();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [reallyFilteredJobs, setReallyFilteredJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [showContact, setShowContact] = useState(false);
  const [activeLocation, setActiveLocation] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeKeyword, setActiveKeyword] = useState(null);
  const [loading, setLoading] = useState(true);

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
    body: '{"refreshToken":"c277dfcd-921d-40d9-b5b9-1b93262191ca"}',
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
      setLoading(false);
    }
  }, [jobs, language]);

  const applyFilters = () => {
    let tempJobs = filteredJobs;

    if (activeLocation) {
      tempJobs = tempJobs.filter((job) => {
        return job?.location?.includes(activeLocation.name);
      });
    }
    if (activeCategory) {
      tempJobs = tempJobs.filter((job) => {
        return job?.category?.includes(activeCategory.name);
      });
    }
    if (activeKeyword) {
      tempJobs = tempJobs.filter((job) => {
        return job?.title
          ?.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            activeKeyword
              ?.toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          );
      });
    }

    setReallyFilteredJobs(tempJobs);
  };

  const resetLocationFilter = () => {
    setActiveLocation();
  };

  const resetCategoryFilter = () => {
    setActiveCategory(null);
  };

  useEffect(() => {
    if (filteredJobs.length > 0) {
      applyFilters();
    }
  }, [filteredJobs, activeLocation, activeCategory, activeKeyword]);

  return (
    <div ref={layout}>
      {loading && <Loader />}
      {!loading && (
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
                <AnimatePresence>
                  {categories.length > 0 && locations.length > 0 && (
                    <motion.div
                      initial={{ x: -500 }} // Initial state: off-screen to the right
                      animate={{ x: 0 }} // Animate to its natural position
                      // Exit state: slide out to the right
                      transition={{ duration: 1, delay: 1 }} // Animation properties
                    >
                      <Sidebar
                        locations={locations}
                        categories={categories}
                        activeLocation={activeLocation}
                        activeCategory={activeCategory}
                        setActiveLocation={setActiveLocation}
                        setActiveCategory={setActiveCategory}
                        resetLocationFilter={resetLocationFilter}
                        resetCategoryFilter={resetCategoryFilter}
                        activeKeyword={activeKeyword}
                        setActiveKeyword={setActiveKeyword}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <Jobs jobs={reallyFilteredJobs} />
              </JobModalProvider>
            </JobProvider>
          </Wrapper>
        </Layout>
      )}
    </div>
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
    <script>{`gtag('event', 'conversion', {'send_to': 'AW-11372992172/I6K8CIXF6usYEKytiK8q'});`}</script>
    <SEO />
  </>
);

export default Opportunites;

const Wrapper = styled.div`
  padding-top: 90px;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  background: #efefef;

  @media screen and (max-width: 767px) {
    display: block;
    padding-top: 70px;
  }
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
