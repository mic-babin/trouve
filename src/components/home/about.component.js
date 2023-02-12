import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Paragraph } from "../styled-components/paragraph.style";

import { motion } from "framer-motion";
import { H2 } from "../styled-components/h2.style";
import { useIsMedium } from "../../utils/media-query.hook";
import { useIsSmall } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import { useI18next } from "gatsby-plugin-react-i18next";

const getWidth = (index) => {
  if (index === 0) {
    return "-500";
  }
  return "500";
};

const Reason = ({ data }) => {
  const {
    i18n: { language },
  } = useI18next();
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const isXSmall = useIsXSmall();
  const { title, textFields } = data;
  const [isInView, setIsInView] = useState(false);
  const [height, setHeight] = useState(null);
  const box = useRef(null);

  useEffect(() => {
    if (box.current) {
      setHeight(box.current.offsetHeight);
    }
  }, [box]);

  return (
    <>
      <div className="scroll-to" id="about"></div>
      <Section>
        <motion.div
          initial={{
            height: "0px",
          }}
          whileInView={{
            height: isXSmall
              ? `${height}px`
              : isSmall
              ? "300px"
              : isMedium
              ? "575px"
              : "1300px",
          }}
          transition={{
            duration: 5,
            delay: 0.7,
            type: "linear",
          }}
          className={"line-0"}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          initial={{
            height: "0px",
          }}
          whileInView={{
            height: "1300px",
          }}
          transition={{
            duration: 5,
            delay: 0.7,
            type: "linear",
          }}
          className={"line-1"}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          initial={{
            height: "0px",
          }}
          whileInView={{
            height: "500px",
          }}
          transition={{
            duration: 5,
            delay: 0.7,
            type: "linear",
          }}
          className={`line-2 ${language == "en" && "en"}`}
          viewport={{ once: true }}
        ></motion.div>
        <div className="container-fluid container-lg">
          {title && (
            <H2 style={{ maxWidth: isXSmall && "320px" }}>
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

          <motion.div
            ref={box}
            className="d-flex align-items-center flex-column ps-4  ps-md-0"
            whileInView={() => {
              setIsInView(true);
              return {};
            }}
          >
            {textFields &&
              textFields.map((el, index) => {
                let i = index;
                return (
                  <Paragraph key={el.id} className="about-paragraph">
                    {el.text.text.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, filter: "blur(1)" }}
                        animate={isInView && { opacity: 1, filter: "blur(0)" }}
                        transition={{
                          duration: 1,
                          delay: index / 20 + i * 2.5,
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
          </motion.div>
          <div className="position-relative w-100 h-0"></div>
        </div>
      </Section>
    </>
  );
};

export default Reason;
const Section = styled.div`
  padding-top: 180px;
  padding-bottom: 100px;
  background-color: rgb(231, 229, 224);
  color: black;
  overflow: hidden;
  position: relative;

  .line-0,
  .line-1,
  .line-2 {
    background-color: black;
  }

  @media (max-width: 991px) {
    .line-0 {
      top: calc(350px);
    }
  }

  @media (max-width: 767px) {
    padding-top: calc(12vw);
    padding-bottom: calc(6vw);
    .line-0 {
      top: calc(10px + 31vw);
    }
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 575px) {
    padding-top: calc(75px);
    padding-bottom: calc(75px);
    .line-0 {
      top: calc(212px);
      left: 25px;
    }
  }
`;
