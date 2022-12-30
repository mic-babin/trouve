import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.component";
import * as sections from "../components/home/index-sections.component";
import Fallback from "../components/fallback.component";
// import { SEO } from "../components/seo";
import { useState, useEffect, useRef } from "react";

export default function Homepage(props) {
  const path = props.path;
  const menu = props.data.allContentfulHeader.edges[0].node;

  const contact = props.data.allContentfulPage.edges[1].node.sections.filter(
    (section) =>
      section.id === "b8dc3482-8f6b-52e3-9c2a-cdf3971f3a76" ||
      section.id === "7245ed4c-7485-59f3-bcf3-2825bfce37a1" ||
      section.id === "33167fe8-1da1-59ca-8cae-8aed5506436b" ||
      section.id === "6609d98c-4bf8-5936-9f03-9e293bbd3542"
  );
  const home = props.data.allContentfulPage.edges[0].node.sections;
  console.log(home);
  const layout = useRef();

  const [showContact, setShowContact] = useState(false);
  const [headerColor, setHeaderColor] = useState("transparent");
  // const [section, setSection] = useState("hero");

  const handleHeaderColor = (color) => setHeaderColor(color);

  const [showPage, setShowPage] = useState(false);
  console.log(showPage);
  useEffect(() => {
    if (!showPage) {
      setTimeout(() => {
        setShowPage(true);
      }, 1);
    }

    if (showPage) {
      var observer = new IntersectionObserver(
        function (entries) {
          if (!entries[0].isIntersecting === true) {
            handleHeaderColor("black");
          } else {
            handleHeaderColor("transparent");
          }
        },
        { threshold: [0.1] }
      );

      if (document.querySelector("#hero"))
        observer.observe(document.querySelector("#hero"));
    }

    return () => {
      if (showPage) {
        observer.disconnect();
      }
    };
  }, [showPage]);

  return (
    <div ref={layout}>
      <Layout
        menu={menu}
        contact={contact}
        showContact={showContact}
        setShowContact={setShowContact}
        headerColor={headerColor}
        path={path}
      >
        <div id="top"></div>
        {showPage &&
          home.map((section) => {
            const { id, type, ...componentProps } = section;
            const Component = sections[type] || Fallback;
            const data = home.filter((el) => el.type === type)[0];
            return <Component key={id} {...componentProps} data={data} />;
          })}
      </Layout>
    </div>
  );
}

// export const Head = () => <SEO />;

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
            ... on ContentfulSection {
              id
              type
              title
              images {
                gatsbyImageData(placeholder: BLURRED)
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
