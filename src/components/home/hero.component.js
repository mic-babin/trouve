import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useIsMedium, useIsSmall } from "../../utils/media-query.hook";
import { motion } from "framer-motion";
import Circle from "../animation/circle.components";
import { useEffect, useState } from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import LogoSrc from "../../assets/img/trouve_blanc.svg";

const Hero = ({ data }) => {
  const {
    i18n: { language },
  } = useI18next();

  const { images, textFields } = data;
  const title = textFields[0].paragraph;
  const stopSearching = textFields[1].paragraph;
  const youFound = textFields[2].paragraph;
  const opportunities = textFields[3].paragraph;

  const isMedium = useIsMedium();
  const isSmall = useIsSmall();

  let list = isMedium
    ? textFields[4].value
    : textFields[4].value.concat(textFields[4].value);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [hovered, setHovered] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const handleHover = () => {
    setHovered(!hovered);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Section className="position-relative" id="hero">
        <motion.div
          className="w-100 pt-5 mt-4"
          initial={{ transform: "translateY(-50px)" }}
          animate={{ transform: "translateY(0px)" }}
          transition={{
            duration: 1,
            delay: 2.4,
            type: "tween",
            easeInOut: 0.3,
          }}
        >
          <Container className="container">
            <H3>
              <div className="word">
                <motion.div
                  initial={{ transform: "translateX(-400px)" }}
                  animate={{ transform: "translateX(0px)" }}
                  transition={{
                    duration: 1,
                    delay: 1.2,
                    type: "tween",
                    easeInOut: 0.3,
                  }}
                >
                  {stopSearching}
                </motion.div>
              </div>
              <div className="second-word">
                <motion.div
                  initial={{ transform: "translateX(-400px)" }}
                  animate={{ transform: "translateX(0px)" }}
                  transition={{
                    duration: 1,
                    delay: 1.2,
                    type: "tween",
                    easeInOut: 0.3,
                  }}
                >
                  {youFound}{" "}
                  {language === "fr" && <Logo src={LogoSrc} alt="Logo" />}
                </motion.div>
              </div>
            </H3>
            <JobsLinkWrapper>
              <Circle hovered={hovered} />
              <JobsLink
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 7 }}
                href="http://jobs.trouvemtl.com"
                target="_blank"
                onMouseEnter={() => handleHover()}
                onMouseLeave={() => handleHover()}
              >
                {opportunities}
              </JobsLink>
            </JobsLinkWrapper>
          </Container>
          <div className="d-flex justify-content-end w-100 px-4">
            <H1
              className="text-end"
              initial={{ transform: "translateX(-200px)" }}
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
                  <div key={index} className="word-wrapper">
                    <motion.div
                      className="word"
                      initial={{ transform: "translateY(200px)" }}
                      animate={{ transform: "translateY(0px)" }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.2,
                        type: "tween",
                        easeInOut: 0.3,
                      }}
                    >
                      {word}{" "}
                    </motion.div>
                  </div>
                ))}
            </H1>
          </div>
          <HorizontalLine
            initial={{ width: "0vw" }}
            animate={{ width: "100vw" }}
            transition={{
              duration: 2,
              delay: 4,
              type: "tween",
              easeInOut: 0.3,
            }}
          />
          <List
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 6 }}
          >
            <div
              className="d-flex justify-content-between"
              id="list-wrapper"
              style={{ transform: "translate(" + scrollPosition / 3 + "px)" }}
            >
              {list &&
                list.map((el, index) => <ListItem key={index}>{el}</ListItem>)}
            </div>
          </List>
          <HorizontalLine
            initial={{ width: "0vw" }}
            animate={{ width: "100vw" }}
            transition={{
              duration: 2,
              delay: 4,
              type: "tween",
              easeInOut: 0.3,
            }}
          />
        </motion.div>

        {images &&
          images.map((img, index) => (
            <Image
              key={index}
              image={getImage(img.gatsbyImageData)}
              alt="TODO"
            ></Image>
          ))}
      </Section>
    </>
  );
};

export default Hero;

const Section = styled.section`
  position: relative;
  display: flex;
  color: white;
  & > * {
    z-index: 2;
  }
  overflow-x: hidden;
`;

const Image = styled(GatsbyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const H1 = styled(motion.h1)`
  font-size: 145px;
  line-height: 160px;
  font-weight: 500;
  letter-spacing: 7px;
  margin-bottom: 75px;
  /* font-family: "Neue-Medium"; */

  .word-wrapper:nth-of-type(1),
  .word-wrapper:nth-of-type(2) {
    padding-right: 275px;
  }

  .word-wrapper {
    overflow: hidden;
  }
`;

const Container = styled.div`
  height: 0px;
`;

const H3 = styled.h3`
  position: absolute;
  font-size: 30px;
  line-height: 40px;
  top: 340px;
  letter-spacing: 2px;

  .word,
  .second-word {
    overflow: hidden;
  }

  .second-word {
    transform: translateX(285px);
  }
`;

const JobsLinkWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 520px;
`;

const JobsLink = styled(motion.a)`
  cursor: pointer;
  position: relative;
  margin-left: 50px;
  color: white;
  text-decoration: none;
  letter-spacing: 2px;

  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 1.5px;
    background: #fff;
    left: -70px;
    top: 45%;
    position: absolute;
    transition: all 0.2s ease-in;
  }
  &:hover {
    color: white;

    &:before {
      content: "";
      width: 72px;
      left: -82px;
    }
  }
`;
const HorizontalLine = styled(motion.div)`
  height: 1.5px;
  background-color: #ffffff;
`;
const List = styled(motion.div)`
  padding: 20px 0;
  /* border-top: 1.5px solid white;
  border-bottom: 1px solid white; */
  width: 190vw;
  transform: translateX(-50vw);
  overflow-x: hidden !important;
`;

const ListItem = styled.div`
  letter-spacing: 2px;
`;

const Logo = styled.img`
  height: 52px;
  margin-top: -10px;
  margin-left: -7px;
`;
