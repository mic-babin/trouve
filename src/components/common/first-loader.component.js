import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/img/trouve.svg";

import { motion, AnimatePresence } from "framer-motion";
import {
  loaderAnimation,
  WrapperAnimation,
} from "../animation/loader-animation";

const FirstLoader = ({ image, show }) => {
  return (
    <AnimatePresence initial={false} custom={WrapperAnimation}>
      {show && (
        <Wrapper
          variants={WrapperAnimation}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          {image && (
            <>
              <div className="img">
                <img src={LogoSrc} alt="" />
              </div>
              <div className="img bg-black"></div>
            </>
          )}
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default FirstLoader;

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: #e7e5e0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-height: 20vh;
    }
  }
  .bg-black {
    background-color: #000;
    z-index: 10000;
    animation-name: ${loaderAnimation};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 0s;
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
