import React from "react";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";
import { Kicker } from "../styled-components/kicker.style";
import { motion } from "framer-motion";
import Circle from "../animation/bg-circle.components";
import { useState } from "react";
import { useIsSmall } from "../../utils/media-query.hook";
import AnimatedHeroLink from "../common/animated-hero-link.component";
import { useI18next } from "gatsby-plugin-react-i18next";

const Mandate = ({ mandate, setShowContact }) => {
  const {
    i18n: { language },
  } = useI18next();

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
          <CircleWrapper className={`${language == "en" && "en"}`}>
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
                      className={"text-" + index}
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
              textFields.map((textField, index) => {
                let i = index;
                return (
                  <Paragraph className="py-3" key={index}>
                    {textField.text.text.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, filter: "blur(1)" }}
                        animate={isInView && { opacity: 1, filter: "blur(0)" }}
                        transition={{
                          duration: 1,
                          delay: i * 1.5 + index / 20,
                          ease: [0.11, 0, 0.5, 0],
                        }}
                        viewport={{ once: true }}
                      >
                        {word + " "}{" "}
                      </motion.span>
                    ))}
                  </Paragraph>
                );
              })}
            {link && (
              <div onClick={setShowContact} className="pt-2">
                <AnimatedHeroLink
                  link={link}
                  type={motion.div}
                  color="black"
                  bold={true}
                  dataAnalytics={"contactFormLinkServices"}
                />
              </div>
            )}
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Mandate;

const Section = styled.section`
  padding-top: 225px;
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
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 75px;
    padding-bottom: 75px;
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
  padding-bottom: 20px;

  .text-0 {
    width: 90%;
  }

  @media (max-width: 1399px) {
    .text-0 {
      width: 100%;
    }
  }

  @media (max-width: 991px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (max-width: 575px) {
    font-size: 35px;
    line-height: 35px;
    padding-bottom: 30px;
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

const CircleWrapper = styled.div`
  position: absolute;
  top: 230px;
  left: -255px;
  transform: rotate(-20deg);

  &.en {
    top: 200px;
  }

  @media (max-width: 1100px) {
    left: -355px;
  }
  @media (max-width: 991px) {
    left: -475px;
  }
`;

const Paragraph = styled(Kicker)`
  padding-top: 30px;
  font-size: 24px;
  @media (max-width: 574px) {
    font-size: 22px;
    line-height: 26px;
  }
`;
