import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
import {
  loaderAnimation,
  WrapperAnimation,
} from "../animation/loader-animation";

const FirstLoader = ({ image, show }) => {
  console.log(image);
  const number = "100";
  const duration = 2;
  const [count, setCount] = useState("0");
  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);

  return (
    <AnimatePresence initial={false} custom={WrapperAnimation}>
      {show && (
        <Wrapper
          variants={WrapperAnimation}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          {image.loaderImage && (
            <>
              <GatsbyImage
                image={getImage(image.loaderImage.gatsbyImageData)}
                alt="TODO"
                className="img"
              ></GatsbyImage>
              <GatsbyImage
                image={getImage(image.loaderImage.gatsbyImageData)}
                alt="TODO"
                className="img img-grey"
              ></GatsbyImage>
            </>
          )}
          <Number>{count}%</Number>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default FirstLoader;

const vari = 30;

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    position: absolute;
    top: 0;
    height: 100vh;
  }
  .img-grey {
    filter: grayscale(1);
    animation-name: ${loaderAnimation};
    animation-duration: 1.6s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
`;

const Number = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 65px;
  font-family: "Neue-Italic";
`;
