import React from "react";
import styled from "styled-components";
import AccordionItem from "./accordion-item";

const ContactAccordion = ({ textFields }) => {
  return (
    <Accordion>
      {textFields &&
        textFields.map((text, index) => {
          return <AccordionItem key={index} text={text} />;
        })}
    </Accordion>
  );
};

export default ContactAccordion;

const Accordion = styled.div`
  padding-bottom: 2rem;
  cursor: pointer;
`;
