import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useIsMedium, useIsSmall } from "../../utils/media-query.hook";
import { motion } from "framer-motion";
import Circle from "../animation/circle.components";
import { useEffect, useState } from "react";

const Hero = ({ data }) => {
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
  // console.log(isSmall);
  // if (!isSmall) {
  //   list = list.splice(list - 2, 2);
  // }

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-to" id="hero"></div>
      <Section className="position-relative" id="hero">
        <motion.div
          className="w-100 pt-5 mt-5"
          initial={{ transform: "translateY(-50px)" }}
          animate={{ transform: "translateY(0px)" }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <Container className="container">
            <H3>
              <div className="word">
                <motion.div
                  initial={{ transform: "translateX(-350px)" }}
                  animate={{ transform: "translateX(0px)" }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {stopSearching}
                </motion.div>
              </div>
              <div className="second-word">
                <motion.div
                  initial={{ transform: "translateX(-350px)" }}
                  animate={{ transform: "translateX(0px)" }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {youFound}
                </motion.div>
              </div>
            </H3>
            <JobsLinkWrapper>
              <Circle />
              <JobsLink
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.3 }}
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
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {title &&
                title.split(" ").map((word, index) => (
                  <div key={index} className="word-wrapper">
                    <motion.div
                      className="word"
                      initial={{ transform: "translateY(200px)" }}
                      animate={{ transform: "translateY(0px)" }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    >
                      {word}{" "}
                    </motion.div>
                  </div>
                ))}
            </H1>
          </div>
          <List
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.3 }}
          >
            <div
              className="d-flex justify-content-between"
              id="list-wrapper"
              style={{ transform: "translate(" + scrollPosition / 3 + "px)" }}
            >
              {list && list.map((el, index) => <div key={index}>{el}</div>)}
            </div>
          </List>
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
  line-height: 192px;

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
  line-height: 65px;
  top: 410px;

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
  font-size: 16px;
  display: flex;
  align-items: center;
  top: 610px;
`;

const JobsLink = styled(motion.div)`
  cursor: pointer;
  position: relative;
  margin-left: 50px;
  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    background: #fff;
    left: -70px;
    top: 45%;
    position: absolute;
  }
`;

const List = styled(motion.div)`
  padding: 15px 0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  width: 190vw;
  transform: translateX(-50vw);
  overflow-x: hidden !important;
`;
