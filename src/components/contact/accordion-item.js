import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const AccordionItem = ({ text, index }) => {
  const [open, setOpen] = useState(index == 0 ? true : false);
  const handleEnter = () => setOpen(true);
  const handleLeave = () => setOpen(false);

  return (
    <div onMouseEnter={() => handleEnter()} onMouseLeave={() => handleLeave()}>
      <Toggler>{text.reference}</Toggler>
      <Body>{text.childContentfulParagraphTextTextNode.text}</Body>
    </div>
  );
};

export default AccordionItem;

const Toggler = styled.div`
  display: inline-block;
  &::before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 1px;
    margin-bottom: 6px;
    background: black !important;
    opacity: 1;
    z-index: 1;
    margin-right: 10px;
    transition: all 0.2s ease-in;
  }

  &:not(.collapsed)::before {
    width: 50px;
  }
`;

const Body = styled.div`
  padding: 1rem 0;
  font-family: "Neue-Italic";
  max-width: 400px;
`;
