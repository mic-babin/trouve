import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { NavLink } from "../styled-components/nav-link.style";
import { Kicker } from "../styled-components/kicker.style";
import { H1 } from "../styled-components/h1.style";
import { motion } from "framer-motion";

const Expertise = ({ expertise }) => {
  const { title, textFields, images, link } = expertise;

  const paragraph = textFields.filter(
    (el) =>
      el.id === "d6b12550-a826-5fb2-9a3a-bda485011e7d" ||
      el.id === "9e6fea19-4c90-5212-bfc5-056f9a815821"
  )[0].childContentfulParagraphTextTextNode.text;
  const richText = textFields.filter(
    (el) =>
      el.id === "056af2ff-d1bd-5f02-aeb9-96973c2cdce6" ||
      el.id === "3a2636d2-4964-535b-8683-6d0bd409e1d5"
  )[0];

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
              <H1>
                {title &&
                  title.split(" ").map((word, index) => (
                    <div key={index} className="w-wrapper">
                      <motion.div
                        className="word"
                        initial={{ transform: "translateY(200px)" }}
                        animate={{ transform: "translateY(0px)" }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        {word}{" "}
                      </motion.div>
                    </div>
                  ))}
              </H1>
              {paragraph && (
                <Paragraph
                  className="my-4 z-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 }}
                >
                  {paragraph}
                </Paragraph>
              )}
              {link && (
                <HeroLink
                  as={motion.div}
                  className="pointer"
                  href={link.url}
                  target="_blank"
                  initial={{ opacity: 0, transform: "translateX(200px)" }}
                  animate={{ opacity: 1, transform: "translateX(0px)" }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  {link.text}
                </HeroLink>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                className="position-relative"
              >
                {buildingImg && (
                  <BuildingImage
                    alt="TODO"
                    image={getImage(buildingImg.gatsbyImageData)}
                  />
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.3 }}
                className="position-relative"
              >
                {woodImg && (
                  <WoodImage
                    alt="TODO"
                    image={getImage(woodImg.gatsbyImageData)}
                  />
                )}
              </motion.div>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center px-5 position-relative">
            <motion.div
              initial={{
                height: "0px",
              }}
              whileInView={{
                height: "1225px",
              }}
              transition={{
                duration: 5,
                delay: 0.7,
                type: "linear",
              }}
              className={"line"}
              viewport={{ once: true }}
            ></motion.div>
            {richText && (
              <TextWrapper>
                <motion.div
                  initial={{
                    opacity: 0,
                    transform: "translateX(200px)",
                    zIndex: 1,
                  }}
                  animate={{
                    opacity: 1,
                    transform: "translateX(0px)",
                    zIndex: 1,
                  }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  {renderRichText(richText.text)}
                </motion.div>
              </TextWrapper>
            )}
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

const BuildingImage = styled(GatsbyImage)`
  width: 80%;
  height: 480px;
  transform: translateY(200px);
`;

const WoodImage = styled(GatsbyImage)`
  position: absolute;
  top: -450px;
  right: 0;
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
  font-family: "Neue-Light";
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
