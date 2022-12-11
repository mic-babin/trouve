import React from "react";
import styled from "styled-components";
import { Kicker } from "../styled-components/kicker.style";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { motion } from "framer-motion";

const getWidth = (index) => {
  if (index === 0) {
    return "-500";
  }
  return "500";
};

const Reason = ({ data }) => {
  const { title, textFields } = data;
  return (
    <Section>
      <div className="container" id="about">
        {title && (
          <H2>
            {title &&
              title.split("<br>").map((word, index) => (
                <motion.div
                  className="d-inline-blockposition-relative"
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
                  ></motion.div>
                </motion.div>
              ))}
          </H2>
        )}

        <div className="d-flex justify-content-center">
          {textFields &&
            textFields.map((el) => (
              <Paragraph key={el.id}>{renderRichText(el.richText)}</Paragraph>
            ))}
        </div>
        <div className="position-relative w-100 h-0">
          <motion.div
            initial={{
              height: "0px",
              width: "1px",
              background: "#fff",
              transform: "translateX(600px)",
            }}
            whileInView={{
              height: "1000px",
              width: "1px",
              background: "#fff",
              transform: "translateX(600px)",
            }}
            transition={{
              duration: 5,
              delay: 1,
              type: "linear",
            }}
            className="line-2"
          ></motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Reason;
const Section = styled.div`
  padding-top: 200px;
  padding-bottom: 100px;
  background-color: black;
  color: white;
  overflow: hidden;
`;

const H2 = styled.h2`
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
    width: 1px;
    height: 100px;
    background: #fff;
    left: 125px;
    top: 125px;
    position: absolute;
  }
  .line-1 {
    left: 575px;
  }
`;

const Paragraph = styled(Kicker)`
  max-width: 60%;
  padding-bottom: 50px;
`;
