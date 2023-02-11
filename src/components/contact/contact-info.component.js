import React from "react";
import styled from "styled-components";
import { H1 } from "../styled-components/h1.style";
import ContactAccordion from "./contact-accordion.component";
import { useI18next } from "gatsby-plugin-react-i18next";

const ContactInfo = ({ data }) => {
  const {
    i18n: { language },
  } = useI18next();

  const { title, textFields, components } = data;

  const getHref = (el) => {
    switch (el.type) {
      case "Phone":
        return "tel:" + el.address;
      case "Email":
        return "mailTo:" + el.address;
      case "Address":
        return "http://maps.google.com/?q=" + el.address;
      default:
        return "";
    }
  };
  return (
    <Section className="d-flex flex-column justify-content-center h-100">
      <ContactH1>
        {title &&
          title.split(" ").map((word, index) => (
            <div
              key={index}
              className={`w-wrapper ${language == "en" && "en"}`}
            >
              <div className="word">{word} </div>
            </div>
          ))}
      </ContactH1>
      {textFields && (
        <ContactAccordion textFields={textFields}></ContactAccordion>
      )}
      {components &&
        components.map((element) => (
          <React.Fragment key={element.id}>
            {element &&
              element.contactInformations.map((el) => (
                <Address href={getHref(el)} key={el.id} target="_blank">
                  {el.address}
                </Address>
              ))}
          </React.Fragment>
        ))}
    </Section>
  );
};

const Section = styled.div`
  margin-top: -50px;
`;
const Address = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: black;
  }

  &:nth-of-type(3) {
    margin-top: 20px;
  }
`;

const ContactH1 = styled(H1)`
  font-size: 65px;
  .div:nth-of-type(2) {
    padding-left: 110px;
  }
  .w-wrapper.en:nth-of-type(2) {
    padding-left: 290px;
  }

  @media (max-width: 575px) {
    font-size: 50px;
    line-height: 50px;
    .w-wrapper:nth-of-type(2) {
      padding-left: 70px;
    }
  }
`;
export default ContactInfo;
