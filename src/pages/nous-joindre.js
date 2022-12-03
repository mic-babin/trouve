import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import ContactInfo from "../components/contact/contact-info";
import ContactForm from "../components/contact/contact-form";
import LogoSrc from "../assets/img/trouve.svg";
import styled from "styled-components";

const Contact = ({ data }) => {
  const sections = data.allContentfulPage.edges[0].node.sections;
  // TODO change title for id
  const contactInfo = sections[0];
  const contactForm = sections[1];
  const close = contactInfo.link.text;
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <Logo src={LogoSrc} alt="Logo" />
        <CloseButton>{close}</CloseButton>
      </div>
      <div className="container">
        <FullHeight className="row">
          <div className="col-lg-6">
            <ContactInfo data={contactInfo} />
          </div>
          <div className="col-lg-6">
            <ContactForm data={contactForm} />
          </div>
        </FullHeight>
      </div>
    </Container>
  );
};

const Logo = styled.img`
  height: 90px;
`;

const CloseButton = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-right: 20px;
`;

const Container = styled.div`
  width: 99.2vw;
  min-height: 100vh;
`;

const FullHeight = styled.div`
  min-height: calc(100vh - 90px);
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
                fieldName
                label
                type
                required
                node_locale
              }
            }
          }
        }
      }
    }
  }
`;
export default Contact;
