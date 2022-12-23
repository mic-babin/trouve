import React from "react";
import styled from "styled-components";
import { Kicker } from "../styled-components/kicker.style";
import { useState } from "react";
import { motion } from "framer-motion";

const getWidth = (index) => {
  if (index === 0) {
    return "-500";
  }
  return "500";
};

const Reason = ({ data }) => {
  const { title, textFields } = data;
  const [isInView, setIsInView] = useState(false);
  return (
    <>
      <div className="scroll-to" id="about"></div>
      <Section>
        <div className="container">
          {title && (
            <H2>
              {title &&
                title.split("<br>").map((word, index) => (
                  <motion.div
                    key={index}
                    whileInView={{
                      opacity: 1,
                      transform: "translateX(0px)",
                    }}
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
                    <motion.div
                      initial={{
                        height: "0px",
                      }}
                      whileInView={{
                        height: "1000px",
                      }}
                      transition={{
                        duration: 5,
                        delay: 0.7,
                        type: "linear",
                      }}
                      className={"line-" + index}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                ))}
            </H2>
          )}

          <motion.div
            className="d-flex align-items-center flex-column"
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
          <div className="position-relative w-100 h-0">
            <motion.div
              initial={{
                height: "0px",
                width: "1.5px",
                background: "#fff",
                transform: "translateX(580px)",
              }}
              whileInView={{
                height: "1000px",
                width: "1.5px",
                background: "#fff",
                transform: "translateX(580px)",
              }}
              transition={{
                duration: 5,
                delay: 1,
                type: "linear",
              }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
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
`;

const H2 = styled(motion.h2)`
  font-size: 65px;
  line-height: 65px;
  display: flex;
  flex-direction: column;
  padding-bottom: 75px;

  div:nth-of-type(1) {
    max-width: 1100px;
  }
  div:nth-of-type(2) {
    font-family: "Neue-Italic";
    align-self: flex-end;
  }

  .line-0,
  .line-1 {
    display: block;
    width: 1.5px;
    height: 100px;
    background: #fff;
    left: 110px;
    top: 125px;
    position: absolute;
  }
  .line-1 {
    left: 570px;
  }
`;

const Paragraph = styled(Kicker)`
  max-width: 684px;
  padding-bottom: 50px;
  font-size: 30px;
  line-height: 40px;
`;
