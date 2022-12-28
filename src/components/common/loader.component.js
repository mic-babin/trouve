import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Loader = () => {
  return <Wrapper>Loader</Wrapper>;
};

export default Loader;

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: black;
  z-index: 9999;
`;
