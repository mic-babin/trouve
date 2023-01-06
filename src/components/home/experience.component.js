import React from "react";
import styled from "styled-components";
import { Paragraph } from "../styled-components/paragraph.style";
import { Kicker } from "../styled-components/kicker.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { NavLink } from "../styled-components/nav-link.style";
import { motion } from "framer-motion";
import Circle from "../animation/big-circle.components";
import { useRef, useEffect, useState } from "react";
import { H2 } from "../styled-components/h2.style";
import { useIsMedium, useIsSmall } from "../../utils/media-query.hook";
import { isSafari } from "react-device-detect";

const Experience = ({ data }) => {
  console.log(isSafari);
  const { title, textFields, components } = data;
  const round = useRef();
  const [roundSize, setRoundSize] = useState(0);
  const [hovered0, setHovered0] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const isMedium = useIsMedium();
  const isSmall = useIsSmall();

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
    if (round.current) setRoundSize(round.current?.offsetWidth);
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
      <Section className="experience">
        <motion.div
          initial={{
            height: "0px",
            left: isSafari ? "calc(16.66vw + 7px)" : "calc(16.66vw + 10px)",
          }}
          whileInView={{
            height: isSmall ? "180px" : isMedium ? "220px" : "500px",
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
            left: isSafari ? "calc(83.33vw - 13px)" : "calc(83.33vw - 10px)",
          }}
          whileInView={{
            height: "500px",
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
            left: isSafari ? "calc(50vw - 4px)" : "calc(50vw - 2px)",
          }}
          whileInView={{
            height: "300px",
          }}
          transition={{
            duration: 5,
            delay: 0.7,
            type: "linear",
          }}
          className={"line-2"}
          viewport={{ once: true }}
        ></motion.div>
        <Container
          className="container"
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
          <div className="d-flex justify-content-center">
            {textFields &&
              textFields.map((el) => (
                <Paragraph key={el.id}>
                  {el.text.text.split(" ").map((word, index) => (
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
                      {word + " "}
                    </motion.span>
                  ))}
                </Paragraph>
              ))}
          </div>
          <div className="h-0"></div>
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
                  className="col-lg-4 mb-4 mb-lg-0"
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
                        <span className="mask">
                          <div className="link-container">
                            <span className="link-title1 title">
                              {link.text}
                            </span>
                            <span className="link-title2 title">
                              {link.text}
                            </span>
                          </div>
                        </span>
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
  position: relative;

  .line-0,
  .line-1,
  .line-2 {
    background: #000;
  }
  .line-1 {
    top: 350px;
    left: calc(83.33vw - 10px);
  }
  .line-2 {
    top: 550px;
  }
`;
const Container = styled(motion.div)`
  padding-bottom: 160px;

  @media (max-width: 991px) {
    padding-bottom: 50px;
  }
`;

const Card = styled.div`
  &:hover {
    font-family: "Neue-Italic";
  }

  &:hover .img {
    transform: scale(1.1);
  }

  &:hover .card-link {
    &:before {
      width: 50px;
    }
  }
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
    transform: rotate(-90deg);
  }
  .img {
    transition: all 1s ease-in-out;
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
    margin-bottom: 7px;
  }

  &:hover {
    color: black;

    &:before {
      width: 50px;
    }
  }

  /* Hide extra text */
  .mask {
    position: relative;
    display: inline-block;
    padding: 0;
    height: 16px;
    overflow: hidden;
  }

  .link-container {
    transition: transform 0.3s ease;
    transition-delay: 250ms;
  }

  .title {
    display: block;

    /*  Set same font-size and line height  */
    font-size: 16px;
    line-height: 16px;
    transition: transform 0.3s ease;
    transition-delay: 250ms;
  }

  .link-title1 {
    transform-origin: right center;
  }

  .link-title2 {
    transform-origin: left center;
    transform: rotate(10deg);
  }

  /* Hover Action*/

  /* Move up two texts (20px = font-size) */
  &:hover .link-container {
    transform: translateY(-16px);
  }

  /* Rotate texts a little bit */
  &:hover .link-title1 {
    transform: rotate(10deg);
  }

  &:hover .link-title2 {
    transform: rotate(0);
  }
`;
