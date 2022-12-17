import React from "react";
import styled from "styled-components";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { NavLink } from "../styled-components/nav-link.style";
import { Kicker } from "../styled-components/kicker.style";
import { motion } from "framer-motion";
import Circle from "../animation/bg-circle.components";
import { useState } from "react";

const Mandate = ({ mandate, setShowContact }) => {
  const { title, textFields, link } = mandate;

  const handleShowContact = () => {
    setShowContact(true);
  };
  const [isInView, setIsInView] = useState(false);
  return (
    <>
      <Section>
        <CircleWrapper>
          <Circle roundSize={636} color="black" isInView={isInView} />
        </CircleWrapper>
        <div className="container d-flex justify-content-end">
          <motion.div
            className="w-80"
            whileInView={() => {
              setIsInView(true);
              return {};
            }}
          >
            {title && (
              <H2
                initial={{ opacity: 0, transform: "translateX(-200px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {title}
              </H2>
            )}
            {textFields &&
              textFields.map((textField) => (
                <Paragraph
                  className="py-4"
                  key={textField.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  s
                >
                  {renderRichText(textField.text)}
                </Paragraph>
              ))}
            {link && (
              <HeroLink
                as={motion.div}
                className="pointer"
                initial={{ opacity: 0, transform: "translateX(200px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                onClick={setShowContact}
              >
                {link.text}
              </HeroLink>
            )}
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Mandate;

const Section = styled.section`
  padding-top: 300px;
  padding-bottom: 150px;
  color: black;

  position: relative;
  overflow: hidden;
  z-index: 0;
  .w-80 {
    width: 68%;
  }
`;

const H2 = styled(motion.h2)`
  font-size: 65px;
`;

const HeroLink = styled(NavLink)`
  color: black;
  margin-top: -10px;
  padding-bottom: 50px;
  position: relative;
  overflow: visible;
  transition: all 0.2s all;
  letter-spacing: 1px;
  z-index: 1;
  &:before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 1px;
    background: black !important;
    opacity: 1;
    z-index: 1;
    margin-right: 10px;
    transition: all 0.2s ease-in;
    margin-bottom: 5px;
  }

  &:hover {
    color: black;
    &:before {
      width: 50px;
    }
  }
`;
const CircleWrapper = styled.div`
  position: absolute;
  top: 257px;
  left: -255px;
`;

const Paragraph = styled(Kicker)`
  padding-top: 30px;
  font-size: 30px;
`;
