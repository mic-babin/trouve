import styled from "styled-components";
import { motion } from "framer-motion";

export const H2 = styled(motion.h2)`
  font-size: 65px;
  line-height: 65px;
  display: flex;
  flex-direction: column;
  padding-bottom: 75px;

  div:nth-of-type(2) {
    font-family: "Neue-Italic";
    align-self: flex-end;
    text-align: end;
  }

  @media (max-width: 1199px) {
    font-size: 55px;
    line-height: 55px;
  }
  @media (max-width: 767px) {
    div:nth-of-type(2) {
      margin: 3vw 0;
    }
    padding-bottom: 6vw;
    font-size: 6vw;
    line-height: 6vw;
  }

  @media (max-width: 575px) {
    font-size: 30px;
    line-height: 34px;

    div:nth-of-type(2) {
      margin: 0px 0;
    }
  }
`;
