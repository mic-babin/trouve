import React from "react";
import styled from "styled-components";
import { H1 } from "../styled-components/h1.style";
import { Kicker } from "../styled-components/kicker.style";
import { NavLink } from "../styled-components/nav-link.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { useIsMedium } from "../../utils/media-query.hook";
import { useState } from "react";
import AnimatedHeroLink from "../common/animated-hero-link.component";

const TeamHero = ({ hero, setShowContact }) => {
  const { title, link, images, textFields } = hero;
  const [isInView, setIsInView] = useState(false);
  const isMedium = useIsMedium();
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
      <motion.div
        className="position-relative"
        whileInView={() => {
          setIsInView(true);
          return {};
        }}
      >
        <Container className="container postion-relative">
          <div className="row">
            <div className="col-lg-6">
              <Title
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
              </Title>
              {textFields &&
                textFields.map((el) => {
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
                              delay: index / 10 + 2,
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
                <>
                  <div onClick={handleShowContact}>
                    <AnimatedHeroLink
                      type={motion.div}
                      link={link}
                      color={"white"}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>

        {images &&
          !isMedium &&
          images.map((img, index) => (
            <ImageWrapper
              key={index}
              initial={{
                opacity: 0,
                transform: "translate(" + getWidth(index) + "px, 300px)",
              }}
              animate={
                isInView && { opacity: 1, transform: "translate(0px, 0px)" }
              }
              transition={{ duration: 1, delay: 5 + index / 2 }}
              viewport={{ once: true }}
            >
              <Image image={getImage(img.gatsbyImageData)} alt="TODO"></Image>
            </ImageWrapper>
          ))}
      </motion.div>
    </Section>
  );
};

export default TeamHero;

const Title = styled(H1)`
  @media (max-width: 767px) {
    font-size: 50px;
    line-height: 50px;

    .w-wrapper:nth-of-type(2) {
      padding-left: 70px;
    }
  }
`;

const Section = styled.section`
  background-color: black;
  color: white;
  padding-top: 250px;
  padding-bottom: 200px;
  overflow: hidden;
  height: 905px;

  @media (max-width: 767px) {
    padding-top: 200px;
    padding-bottom: 50px;
    padding-left: 15px;
    padding-right: 15px;
    height: 705px;
  }

  @media (max-width: 574px) {
    padding-top: 150px;
    height: 665px;
  }
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

const Paragraph = styled(Kicker)`
  padding-top: 30px;
  font-size: 30px;
  letter-spacing: 1px;

  @media (max-width: 767px) {
    font-size: 22px;
    line-height: 26px;
  }
  @media (max-width: 574px) {
    padding-top: 0px;
  }
`;
