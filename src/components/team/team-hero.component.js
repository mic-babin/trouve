import React from "react";
import styled from "styled-components";
import { H1 } from "../styled-components/h1.style";
import { Kicker } from "../styled-components/kicker.style";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { NavLink } from "../styled-components/nav-link.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const TeamHero = ({ hero, setShowContact }) => {
  const { title, link, images, textFields } = hero;
  const handleShowContact = () => {
    setShowContact(true);
  };
  return (
    <Section>
      <div className="position-relative">
        <Container className="container">
          <div className="row">
            <div className="col-lg-6">
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
              {textFields &&
                textFields.map((el) => (
                  <Kicker
                    key={el.id}
                    className="my-4 pe-5 z-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.3 }}
                  >
                    {renderRichText(el.text)}
                  </Kicker>
                ))}

              {link && (
                <HeroLink
                  as={motion.div}
                  className="pointer"
                  onClick={handleShowContact}
                  initial={{ opacity: 0, transform: "translateX(200px)" }}
                  animate={{ opacity: 1, transform: "translateX(0px)" }}
                  transition={{ duration: 0.5, delay: 1.5 }}
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
              initial={{ opacity: 0, transform: "translateX(200px)" }}
              animate={{ opacity: 1, transform: "translateX(0px)" }}
              transition={{ duration: 0.5, delay: 1.5 + index / 3 }}
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
const Container = styled.div``;

const HeroLink = styled(NavLink)`
  color: white;
  /* padding-left: 50px; */
  position: relative;
  overflow: visible;
  transition: all 0.2s all;
  &:before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 1px;
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
