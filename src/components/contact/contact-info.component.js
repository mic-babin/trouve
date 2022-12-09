import React from "react";
import styled from "styled-components";
import { H1 } from "../styled-components/h1.style";

const ContactInfo = ({ data }) => {
  const { title, textFields, components } = data;
  console.log(textFields);

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
        textFields.map((text, index) => {
          return (
            <div key={text.id}>
              <Toggler>{text.reference}</Toggler>
              <Text>{text.childContentfulParagraphTextTextNode.text}</Text>
            </div>
          );
        })}
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

const Toggler = styled.div`
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 1px;
    background: black !important;
    top: 45%;
    position: absolute;
    opacity: 1;
    z-index: 1;
    transform: translateX(-50px);
  }
`;

export default ContactInfo;
