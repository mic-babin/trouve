import React from "react";
import Accordion from "react-bootstrap/Accordion";

const ContactAccordion = ({ textFields }) => {
  return (
    <Accordion defaultActiveKey="0" flush>
      {textFields &&
        textFields.map((text, index) => {
          return (
            <Accordion.Item key={text.id} eventKey={index.toString()}>
              <Accordion.Header bsPrefix="accordion-header">
                {text.reference}
              </Accordion.Header>
              <Accordion.Body>
                {text.childContentfulParagraphTextTextNode.text}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
    </Accordion>
  );
};

export default ContactAccordion;
