import React from "react";
import styled from "styled-components";
import { H1 } from "../styled-components/h1";

const ContactInfo = ({ data }) => {
  const { title, textFields, components } = data;
  return (
    <div className="d-flex flex-column justify-content-center h-100">
      <H1>
        {title &&
          title.split(" ").map((word, index) => (
            <div className="d-inline-block" key={index}>
              {word}{" "}
            </div>
          ))}
      </H1>
      {textFields &&
        textFields.map((text) => (
          <Text key={text.id}>
            {text.childContentfulParagraphTextTextNode.text}
          </Text>
        ))}
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

const Text = styled.p`
  font-size: 16px;
  width: 50%;
`;

const Address = styled.div`
  &:nth-of-type(3) {
    margin-top: 20px;
  }
`;

export default ContactInfo;
