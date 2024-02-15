import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "gatsby-plugin-react-i18next";
export const Grid = styled.div`
  display: flex;
  background-color: #efefef;

  .back {
    margin: 0;
    overflow: visible;
    -webkit-appearance: button;
    cursor: pointer;
    outline: 0;
    width: 46px;
    background: 0 0;
    border: none;
    color: #000;
    display: block;
    height: 100%;
    min-height: calc(100vh - 90px);
    transition: all 0.15s ease-in;
    box-shadow: 8px 0 4px -2px rgba(0, 0, 0, 0.2);
  }
  .back:hover {
    background: #000;
  }
`;

export const JobWrapper = styled.div``;

export const ApplyWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin: 1rem;
    padding-right: 2rem !important;
  }
`;

export const Back = styled.img`
  height: 20px;
  width: 20px;
`;

export const Wrapper = styled(motion.div)`
  margin-top: 90px;
  width: 100vw;
  background-color: transparent;

  overflow: hidden;

  @media screen and (max-width: 767px) {
    margin-top: 70px;
  }
`;

export const BackLink = styled(Link)`
  color: #000;
  &:hover {
    color: black;
  }
`;
