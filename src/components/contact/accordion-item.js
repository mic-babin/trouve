import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useIsXXSmall } from "../../utils/media-query.hook";

const AccordionItem = ({ text, index }) => {
  const [open, setOpen] = useState(index === 0 ? true : false);
  const handleEnter = () => setOpen(true);
  const handleLeave = () => setOpen(false);
  const bodyControls = useAnimationControls();

  const isXXSmall = useIsXXSmall();
  useEffect(() => {
    if (open) {
      // OPEN
      bodyControls.start({
        height: isXXSmall ? "130px" : "110px",
      });
    } else {
      // CLOSED
      bodyControls.start({
        height: "0px",
      });
    }
  }, [open, bodyControls, isXXSmall]);

  return (
    <div onMouseEnter={() => handleEnter()} onMouseLeave={() => handleLeave()}>
      <Toggler>{text.reference}</Toggler>
      <Body
        animate={bodyControls}
        transition={{
          duration: 0.3,
          delay: 0,
          type: "tween",
          easeInOut: 0.3,
        }}
      >
        {text.childContentfulParagraphTextTextNode?.text || text.text.text}
      </Body>
    </div>
  );
};

export default AccordionItem;

const Toggler = styled.div`
  padding: 1rem 0;
  display: inline-block;
  &::before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 2px;
    margin-bottom: 5px;
    background: black !important;
    opacity: 1;
    z-index: 1;
    margin-right: 10px;
    transition: all 0.2s ease-in;
  }

  &:hover::before {
    width: 50px;
  }
`;

const Body = styled(motion.div)`
  padding: 0rem 0;
  font-family: "Neue-Italic";
  max-width: 400px;
  overflow: hidden;
`;
