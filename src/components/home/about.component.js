import React from "react";
import styled from "styled-components";
import { Paragraph } from "../styled-components/paragraph.style";
import { useState } from "react";
import { motion } from "framer-motion";
import { H2 } from "../styled-components/h2.style";
import { useIsMedium } from "../../utils/media-query.hook";
import { useIsSmall } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";

const getWidth = (index) => {
  if (index === 0) {
    return "-500";
  }
  return "500";
};

const Reason = ({ data }) => {
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const isXSmall = useIsXSmall();
  const { title, textFields } = data;
  const [isInView, setIsInView] = useState(false);
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
              ? "572px"
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
          className={"line-2"}
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
                  <Paragraph key={el.id}>
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
  background-color: black;
  color: white;
  overflow: hidden;
  position: relative;

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
