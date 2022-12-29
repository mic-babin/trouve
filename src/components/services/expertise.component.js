import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { NavLink } from "../styled-components/nav-link.style";
import { Kicker } from "../styled-components/kicker.style";
import { H1 } from "../styled-components/h1.style";
import { motion } from "framer-motion";

const Expertise = ({ expertise }) => {
  const { title, textFields, images, link } = expertise;

  const kicker = textFields.filter(
    (el) =>
      el.id === "d6b12550-a826-5fb2-9a3a-bda485011e7d" ||
      el.id === "9e6fea19-4c90-5212-bfc5-056f9a815821"
  )[0].text.text;

  const paragraphs = textFields.filter(
    (el) =>
      el.id === "b0776a44-230d-5640-a1a4-4cf2ed423a28" ||
      el.id === "13a7cf44-f861-55be-9c1d-d338af42ce6b" ||
      el.id === "f88f83b9-82e1-5bfe-8599-6ddd3c1a859f" ||
      el.id === "41dcc054-c0b0-51bb-a684-e3a8463e5823"
  );

  const woodImg = images.filter(
    (img) =>
      img.id === "18559e1b-3530-5c5c-a3c7-f0efc5f1923b" ||
      img.id === "9b2f4ede-7a32-5e65-afab-3fbddd396430"
  )[0];
  const buildingImg = images.filter(
    (img) =>
      img.id === "5b44726c-63ef-5c95-b5cb-2794b975ed7e" ||
      img.id === "bdc1114e-abe4-5192-a587-5bb48b3c3b3f"
  )[0];

  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="pe-5">
              <H1
                initial={{ transform: "translateX(400px)" }}
                animate={{ transform: "translateX(0px)" }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  type: "tween",
                  easeInOut: 0.3,
                }}
              >
                {title &&
                  title.split(" ").map((word, index) => (
                    <div key={index} className="w-wrapper">
                      <motion.div
                        className="word"
                        initial={{ transform: "translateY(200px)" }}
                        animate={{ transform: "translateY(0px)" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.1,
                          type: "tween",
                          easeInOut: 0.3,
                        }}
                      >
                        {word}{" "}
                      </motion.div>
                    </div>
                  ))}
              </H1>
              {kicker && (
                <Paragraph className="my-4 z-1">
                  {kicker.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(1)" }}
                      whileInView={{ opacity: 1, filter: "blur(0)" }}
                      transition={{
                        duration: 1,
                        delay: index / 20 + 2.3,
                        ease: [0.11, 0, 0.5, 0],
                      }}
                      viewport={{ once: true }}
                    >
                      {word + " "}{" "}
                    </motion.span>
                  ))}
                </Paragraph>
              )}
              {link && (
                <HeroLink
                  as={motion.div}
                  className="pointer"
                  href={link.url}
                  target="_blank"
                  initial={{ opacity: 0, transform: "translateY(200px)" }}
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  transition={{ duration: 1, delay: 4 }}
                >
                  {link.text}
                </HeroLink>
              )}
              <ImagesWrapper className="position-relative">
                <BuildingWrapper
                  initial={{ opacity: 0, transform: "translate(-300px,400px)" }}
                  whileInView={{ opacity: 1, transform: "translate(0px,0px)" }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                >
                  {buildingImg && (
                    <BuildingImage
                      alt="TODO"
                      image={getImage(buildingImg.gatsbyImageData)}
                    />
                  )}
                </BuildingWrapper>
                <motion.div
                  initial={{
                    opacity: 0,
                    transform: "translate(300px,400px)",
                  }}
                  whileInView={{ opacity: 1, transform: "translate(0px,0px)" }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                  className="wood"
                >
                  {woodImg && (
                    <WoodImage
                      alt="TODO"
                      image={getImage(woodImg.gatsbyImageData)}
                    />
                  )}
                </motion.div>
              </ImagesWrapper>
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center px-5 position-relative">
            <motion.div
              initial={{
                height: "0px",
              }}
              whileInView={{
                height: "1225px",
              }}
              transition={{
                duration: 5,
                delay: 2.9,
                type: "linear",
              }}
              className={"line"}
              viewport={{ once: true }}
            ></motion.div>
            <TextWrapper>
              {paragraphs &&
                paragraphs.map((paragraph, index) => {
                  let i = index;
                  return (
                    <div
                      className={index === 1 ? "mt-3" : ""}
                      key={paragraph.id}
                    >
                      {paragraph.text.text.split(" ").map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, filter: "blur(1)" }}
                          whileInView={{ opacity: 1, filter: "blur(0)" }}
                          transition={{
                            duration: 1,
                            delay: index / 20 + 2.3 + i * 2.6,
                            ease: [0.11, 0, 0.5, 0],
                          }}
                          viewport={{ once: true }}
                        >
                          {word + " "}{" "}
                        </motion.span>
                      ))}
                    </div>
                  );
                })}
            </TextWrapper>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Expertise;

const Section = styled.section`
  background-color: black;
  color: white;
  padding-top: 200px;
  z-index: 2;
  /* overflow-x: hidden;
  overflow-y; */

  .line {
    display: block;
    width: 1.5px;
    height: 100px;
    background: #fff;
    mix-blend-mode: difference;
    left: 50%;
    top: -110px;
    position: absolute;
  }
`;
const ImagesWrapper = styled.div`
  margin-top: 75px;
  height: 480px;

  .building {
  }
`;

const BuildingWrapper = styled(motion.div)`
  position: relative;
  top: 175px;
`;

const BuildingImage = styled(GatsbyImage)`
  position: absolute;

  width: 80%;
  height: 480px;
  /* transform: translateY(200px); */
`;

const WoodImage = styled(GatsbyImage)`
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 350px;
  z-index: 0;
`;

const HeroLink = styled(NavLink)`
  color: white;
  padding-bottom: 50px;
  position: relative;
  overflow: visible;
  transition: all 0.2s all;
  letter-spacing: 1px;
  &:before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 1.5px;
    background: white !important;
    opacity: 1;
    z-index: 1;
    margin-right: 10px;
    transition: all 0.2s ease-in;
    margin-bottom: 5px;
  }

  &:hover {
    &:before {
      width: 50px;
    }
  }
`;

const TextWrapper = styled.div`
  padding: 3rem 2rem;
  background-color: black;
  z-index: 1;
`;

const Paragraph = styled(Kicker)`
  padding-top: 30px;
  font-size: 30px;
  letter-spacing: 1px;
`;
