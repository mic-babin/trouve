import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { motion } from "framer-motion";

export const getImageHeight = (
  name,
  title,
  isXXSmall,
  isXSmall,
  isSmall,
  isMedium
) => {
  if (name === "ANNIE-CLAUDE ROY")
    return isXXSmall
      ? "-210vw"
      : isXSmall
      ? "-190vw"
      : isSmall
      ? "-120vw"
      : isMedium
      ? "-98vw"
      : "-44vw";
  if (name === "DAVID-MARC BOUCHARD")
    return isXXSmall
      ? "-210vw"
      : isXSmall
      ? "-190vw"
      : isSmall
      ? "-120vw"
      : isMedium
      ? "-98vw"
      : "-44vw";
  if (name === "RACHEL MARTIN")
    return isXXSmall
      ? "-245vw"
      : isXSmall
      ? "-225vw"
      : isSmall
      ? "-140vw"
      : isMedium
      ? "-120vw"
      : "-65vw";
  if (name === "DAPHNÉ SYLVAIN")
    return isXXSmall
      ? "-195vw"
      : isXSmall
      ? "-180vw"
      : isSmall
      ? "-108vw"
      : isMedium
      ? "-90vw"
      : "-40vw";

  if (title.includes("PROCESS"))
    return isXXSmall
      ? "-150vw"
      : isXSmall
      ? "-130vw"
      : isSmall
      ? "-130vw"
      : isMedium
      ? "-100vw"
      : "-58vw";
  if (title.includes("RECRUT"))
    return isXXSmall
      ? "-120vw"
      : isXSmall
      ? "-93vw"
      : isSmall
      ? "-75vw"
      : isMedium
      ? "-60vw"
      : "-35vw";
  if (title.includes("TALENT"))
    return isXXSmall
      ? "-150vw"
      : isXSmall
      ? "-120vw"
      : isSmall
      ? "-75vw"
      : isMedium
      ? "-60vw"
      : "-40vw";

  return "-200px";
};

export const Image = styled(GatsbyImage)`
  height: 100%;
`;

export const Title = styled(motion.h2)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding-left: 15px;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1px;
  overflow: visible;
`;

export const Department = styled.div`
  padding-top: 5px;
`;
export const DepartmentClosed = styled.div`
  font-size: 18px;
  letter-spacing: 2px;
  font-family: "Neue-LightItalic";
  font-weight: 600;

  @media (max-width: 570px) {
    font-size: 12px;
    letter-spacing: 1px;
  }
`;

export const SubTitleClosed = styled(motion.h3)`
  position: absolute;
  top: 30px;
  right: 0;
  padding-top: 25px;
  z-index: 1;
  padding-right: 15px;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1px;
  font-family: "Neue-Italic";
  text-align: end;
  transform: translateY(-50%);
  @media (max-width: 1399px) {
    max-width: 700px;
  }
  @media (max-width: 1199px) {
    max-width: 400px;
  }
  @media (max-width: 574px) {
    top: calc(0.5rem);
    left: 15px;
    line-height: 22.5px;
    text-align: start;
    font-size: 16px;
    font-family: "Neue-Italic";
    transform: translateY(0%);
  }
`;

export const Description = styled.p`
  max-width: 320px;
  letter-spacing: 1.5px;
  line-height: 20px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const ImageWrapper = styled(motion.div)`
  height: 310px;
  margin-top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const SubTitle = styled(motion.h3)`
  max-width: 400px;
  font-size: 16px;
  font-family: "Neue-Italic";
`;

export const AddressesWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const Address = styled(motion.a)`
  color: white;
  text-decoration: none;
  position: relative;

  &:hover {
    color: white;
    font-family: "Neue-Italic";
  }

  &:before {
    content: "";
    display: block;
    width: 25px;
    height: 1px;
    background: #fff;
    margin-left: -35px;
    top: 45%;
    position: absolute;
    transition: all 0.2s ease;
  }

  &:hover {
    color: white;
    font-family: "Neue-Italic";

    &:before {
      content: "";
      width: 50px;
      margin-left: -60px;
    }
  }
  /* Hide extra text */
  .mask {
    position: relative;
    display: inline-block;
    padding: 0;
    height: 16px;
    overflow: hidden;
  }

  .link-container {
    transition: transform 0.3s ease;
    transition-delay: 250ms;
  }

  .title {
    display: block;

    /*  Set same font-size and line height  */
    font-size: 16px;
    line-height: 16px;
    transition: transform 0.3s ease;
    transition-delay: 250ms;
  }

  .link-title1 {
    transform-origin: right center;
  }

  .link-title2 {
    transform-origin: left center;
    transform: rotate(10deg);
  }

  /* Hover Action*/

  /* Move up two texts (20px = font-size) */
  &:hover .link-container {
    transform: translateY(-16px);
  }

  /* Rotate texts a little bit */
  &:hover .link-title1 {
    transform: rotate(10deg);
  }

  &:hover .link-title2 {
    transform: rotate(0);
  }
`;