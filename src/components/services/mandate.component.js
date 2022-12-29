import React from "react";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";
import { Kicker } from "../styled-components/kicker.style";
import { motion } from "framer-motion";
import Circle from "../animation/bg-circle.components";
import { useState } from "react";
import { useIsSmall } from "../../utils/media-query.hook";

const Mandate = ({ mandate, setShowContact }) => {
  const { title, textFields, link } = mandate;

  const [isInView, setIsInView] = useState(false);
  const isSmall = useIsSmall();

  const getWidth = (index) => {
    if (index === 0) {
      return "-500";
    }
    return "500";
  };
  return (
    <>
      <Section>
        {!isSmall && (
          <CircleWrapper>
            <Circle roundSize={636} color="black" isInView={isInView} />
          </CircleWrapper>
        )}
        <div className="container-md container-fluid d-flex justify-content-end">
          <motion.div
            className="w-80"
            whileInView={() => {
              setIsInView(true);
              return {};
            }}
          >
            {title && (
              <H2>
                {title &&
                  title.split("<br>").map((word, index) => (
                    <motion.div
                      key={index}
                      animate={
                        isInView && {
                          opacity: 1,
                          transform: "translateX(0px)",
                        }
                      }
                      initial={{
                        opacity: 0,
                        transform: "translateX(" + getWidth(index) + "px)",
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + index / 5,
                      }}
                      viewport={{ once: true }}
                    >
                      {word}{" "}
                    </motion.div>
                  ))}
              </H2>
            )}
            {textFields &&
              textFields.map((textField, index) => (
                <Paragraph className="py-4" key={index}>
                  {textField.text.text.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(1)" }}
                      whileInView={{ opacity: 1, filter: "blur(0)" }}
                      transition={{
                        duration: 1,
                        delay: index / 20,
                        ease: [0.11, 0, 0.5, 0],
                      }}
                      viewport={{ once: true }}
                    >
                      {word + " "}{" "}
                    </motion.span>
                  ))}
                </Paragraph>
              ))}
            {link && (
              <HeroLink
                as={motion.div}
                className="pointer"
                initial={{ opacity: 0, transform: "translateX(200px)" }}
                animate={
                  isInView && { opacity: 1, transform: "translateX(0px)" }
                }
                transition={{ duration: 0.5, delay: 2.2 }}
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

  @media (max-width: 991px) {
    .w-80 {
      width: 80%;
    }
  }
  @media (max-width: 767px) {
    .w-80 {
      width: 100%;
    }
  }
`;

const H2 = styled.h2`
  font-size: 65px;
  line-height: 65px;
  display: flex;
  flex-direction: column;
  padding-bottom: 75px;

  @media (max-width: 991px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (max-width: 575px) {
    font-size: 35px;
    line-height: 35px;
  }

  div:nth-of-type(1) {
    max-width: 1100px;
  }
  div:nth-of-type(2) {
    font-family: "Neue-Italic";
    align-self: flex-end;
    text-align: end;
  }
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
  transform: rotate(-20deg);

  @media (max-width: 1100px) {
    left: -355px;
  }
  @media (max-width: 991px) {
    left: -475px;
  }
`;

const Paragraph = styled(Kicker)`
  padding-top: 30px;
  font-size: 30px;
  @media (max-width: 574px) {
    font-size: 22px;
    line-height: 26px;
  }
`;
