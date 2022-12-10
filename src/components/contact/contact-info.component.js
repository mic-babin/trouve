import React from "react";
import styled from "styled-components";
import { H1 } from "../styled-components/h1.style";
import ContactAccordion from "./contact-accordion.component";

const ContactInfo = ({ data }) => {
  const { title, textFields, components } = data;

  return (
    <div className="d-flex flex-column justify-content-center h-100">
      <ContactH1>
        {title &&
          title.split(" ").map((word, index) => (
            <div className="d-inline-block" key={index}>
              {word}{" "}
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
    </div>
  );
};

const Address = styled.div`
  &:nth-of-type(4) {
    margin-top: 20px;
  }
`;

const ContactH1 = styled(H1)`
  font-size: 65px;
`;
export default ContactInfo;
