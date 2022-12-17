import React from "react";
import styled from "styled-components";
import { H1 } from "../styled-components/h1.style";
import ContactAccordion from "./contact-accordion.component";

const ContactInfo = ({ data }) => {
  const { title, textFields, components } = data;

  return (
    <Section className="d-flex flex-column justify-content-center h-100">
      <ContactH1>
        {title &&
          title.split(" ").map((word, index) => (
            <div key={index} className="w-wrapper">
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
                <Address key={el.id}>{el.address}</Address>
              ))}
          </React.Fragment>
        ))}
    </Section>
  );
};

const Section = styled.div`
  margin-top: -50px;
`;
const Address = styled.div`
  &:nth-of-type(4) {
    margin-top: 20px;
  }
`;

const ContactH1 = styled(H1)`
  font-size: 65px;
  .w-wrapper:nth-of-type(2) {
    padding-left: 110px;
  }
`;
export default ContactInfo;
