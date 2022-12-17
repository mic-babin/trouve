import React from "react";
import styled from "styled-components";
import { Kicker } from "../styled-components/kicker.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { NavLink } from "../styled-components/nav-link.style";
import { motion, useAnimationControls } from "framer-motion";
import Circle from "../animation/big-circle.components";
import { useRef, useEffect, useState } from "react";

const Experience = ({ data }) => {
  const { title, textFields, components } = data;
  const round = useRef();
  const [roundSize, setRoundSize] = useState(0);
  const [hovered0, setHovered0] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const handleHover = (index) => {
    if (index === 0) {
      setHovered0(!hovered0);
    }
    if (index === 1) {
      setHovered1(!hovered1);
    }
    if (index === 2) {
      setHovered2(!hovered2);
    }
  };

  const getWidth = (index) => {
    if (index === 0) {
      return "-500";
    }
    return "500";
  };

  const handleResize = () => {
    setRoundSize(round.current.offsetWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      return () => window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {/* <div className="scroll-to" id="experience"></div> */}
      <Section>
        <Container className="container">
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
                        height: "500px",
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
          <div className="d-flex justify-content-center">
            {textFields &&
              textFields.map((el) => (
                <Paragraph key={el.id}>{el.text.text}</Paragraph>
              ))}
          </div>
          <div className="position-relative w-100 h-0">
            <motion.div
              initial={{
                height: "0px",
                width: "1.5px",
                background: "#000",
                transform: "translateX(585px)",
              }}
              whileInView={{
                height: "300px",
                width: "1.5px",
                background: "#000",
                transform: "translateX(585px)",
              }}
              transition={{
                duration: 5,
                delay: 1,
                type: "linear",
              }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </Container>
        {/* <div className="scroll-to" id="experience-card"></div> */}
        <div className="row mx-0">
          {components &&
            components.map((el, index) => {
              const { image, title, description, link } = el;
              // s

              const getHoverState = () => {
                if (index === 0) {
                  return hovered0;
                }
                if (index === 1) {
                  return hovered1;
                }
                if (index === 2) {
                  return hovered2;
                }
              };
              const hover = getHoverState();
              return (
                <Card
                  key={el.id}
                  className="col-lg-4"
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(index)}
                >
                  <ImageWrapper>
                    <div className="round" ref={round}>
                      <Circle
                        roundSize={roundSize}
                        hover={hover}
                        color={"black"}
                      />
                    </div>
                    <div className="invisible-wrapper">
                      {image && (
                        <Image
                          className="img"
                          image={getImage(image.gatsbyImageData)}
                          alt="TODO"
                        ></Image>
                      )}
                    </div>
                  </ImageWrapper>
                  {title && <Kicker className="mt-4">{title}</Kicker>}
                  <Description>
                    {description && <div>{description.description}</div>}
                    {link && (
                      <CardLink
                        to={link.url}
                        target="blank"
                        className="card-link"
                      >
                        {link.text}
                      </CardLink>
                    )}
                  </Description>
                </Card>
              );
            })}
        </div>
      </Section>
    </>
  );
};

export default Experience;

const Section = styled.div`
  margin-top: -30px;
  padding: 160px 15px;
  background-color: #e7e5e0;
  color: black;
  overflow: hidden;
`;
const Container = styled.div`
  padding-bottom: 160px;
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
    width: 1.5px;
    height: 100px;
    background: #000;
    left: 110px;
    top: 125px;
    position: absolute;
  }
  .line-1 {
    left: 510px;
  }
`;

const Card = styled.div`
  &:hover .img {
    transform: scale(1.05);
  }

  &:hover .card-link {
    &:before {
      width: 50px;
      margin-left: -25px;
    }
  }
`;

const Paragraph = styled(Kicker)`
  max-width: 724px;
  font-size: 30px;
  padding-left: 50px;
  padding-bottom: 50px;
  letter-spacing: 0px;
`;

const Image = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 0;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */
  /* overflow: hidden; */

  .invisible-wrapper {
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .round {
    position: absolute;
    top: 0;
    height: calc(100% + 20px);
    width: calc(100% + 20px);
    border-radius: 50%;
    z-index: 1;
    margin: -10px;
  }
  .img {
    transition: all 0.2s ease;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20%;
`;

const CardLink = styled(NavLink)`
  color: black;
  padding-left: 50px;
  position: relative;
  overflow: visible;
  transition: all 0.2s all;
  &:before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 1.5px;
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
      margin-left: -25px;
    }
  }
`;
