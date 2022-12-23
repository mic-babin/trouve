import React from "react";
import styled from "styled-components";
import { H1 } from "../styled-components/h1.style";
import { Kicker } from "../styled-components/kicker.style";
import { NavLink } from "../styled-components/nav-link.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const TeamHero = ({ hero, setShowContact }) => {
  const { title, link, images, textFields } = hero;
  const handleShowContact = () => {
    setShowContact(true);
  };

  const getWidth = (index) => {
    if (index === 0) {
      return "-300";
    }
    return "300";
  };
  return (
    <Section>
      <div className="position-relative">
        <Container className="container postion-relative">
          <div className="row">
            <div className="col-lg-6">
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
              {textFields &&
                textFields.map((el) => {
                  console.log(el);
                  return (
                    <Paragraph
                      key={el.id}
                      className="my-4 pe-5 z-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.3 }}
                    >
                      {el.childContentfulParagraphTextTextNode.text
                        .split(" ")
                        .map((word, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, filter: "blur(1)" }}
                            whileInView={{ opacity: 1, filter: "blur(0)" }}
                            transition={{
                              duration: 1,
                              delay: index / 10 + 6,
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
                <HeroLink
                  as={motion.div}
                  className="pointer"
                  onClick={handleShowContact}
                  initial={{ opacity: 0, transform: "translateX(200px)" }}
                  animate={{ opacity: 1, transform: "translateX(0px)" }}
                  transition={{ duration: 1, delay: 9 }}
                >
                  {link.text}
                </HeroLink>
              )}
            </div>
          </div>
        </Container>
        {images &&
          images.map((img, index) => (
            <ImageWrapper
              key={index}
              initial={{
                opacity: 0,
                transform: "translate(" + getWidth(index) + "px, 300px)",
              }}
              animate={{ opacity: 1, transform: "translate(0px, 0px)" }}
              transition={{ duration: 1, delay: 10 + index / 2 }}
            >
              <Image image={getImage(img.gatsbyImageData)} alt="TODO"></Image>
            </ImageWrapper>
          ))}
      </div>
    </Section>
  );
};

export default TeamHero;

const Section = styled.section`
  background-color: black;
  color: white;
  padding-top: 250px;
  padding-bottom: 200px;
  overflow: hidden;
  height: 905px;
`;

const Image = styled(GatsbyImage)``;

const ImageWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 20px;
  height: 390px;
  width: 330px;
  z-index: 0;
  overflow: hidden;
  &:nth-of-type(2) {
    top: 100px;
    right: 300px;
    height: 330px;
    width: 550px;
    z-index: 0;
  }
`;
const Container = styled.div`
  z-index: 1;
  .row {
    position: absolute;
    z-index: 1;
  }
`;

const HeroLink = styled(NavLink)`
  color: white;
  /* padding-left: 50px; */
  position: relative;
  overflow: visible;
  transition: all 0.2s all;
  font-family: "Neue-Light";
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
const Paragraph = styled(Kicker)`
  padding-top: 30px;
  font-size: 30px;
  letter-spacing: 1px;
`;
