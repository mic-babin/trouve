import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import styled from "styled-components";

const Images = ({ images }) => {
  const woodImg = images.filter(
    (img) =>
      img.id === "18559e1b-3530-5c5c-a3c7-f0efc5f1923b" ||
      img.id === "9b2f4ede-7a32-5e65-afab-3fbddd396430"
  )[0];
  const buildingImg = images.filter(
    (img) =>
      img.id === "5b44726c-63ef-5c95-b5cb-2794b975ed7e" ||
      img.id === "bdc1114e-abe4-5192-a587-5bb48b3c3b3f"
  )[0];

  return (
    <ImagesWrapper className="position-relative">
      <BuildingWrapper
        initial={{
          opacity: 0,
          transform: "translate(-300px,400px)",
        }}
        whileInView={{
          opacity: 1,
          transform: "translate(0px,0px)",
        }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
      >
        {buildingImg && (
          <>
            <BuildingImage
              alt="TODO"
              image={getImage(buildingImg.gatsbyImageData)}
            />
          </>
        )}
      </BuildingWrapper>
      <motion.div
        initial={{
          opacity: 0,
          transform: "translate(300px,400px)",
        }}
        whileInView={{
          opacity: 1,
          transform: "translate(0px,0px)",
        }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        className="wood"
      >
        {woodImg && (
          <WoodImage alt="TODO" image={getImage(woodImg.gatsbyImageData)} />
        )}
      </motion.div>
    </ImagesWrapper>
  );
};

const ImagesWrapper = styled.div`
  margin-top: 75px;
  height: 480px;

  .building {
  }
`;

const BuildingWrapper = styled(motion.div)`
  position: relative;
  top: 175px;
`;

const BuildingImage = styled(GatsbyImage)`
  position: absolute;

  width: 80%;
  height: 480px;
  /* transform: translateY(200px); */
`;

const WoodImage = styled(GatsbyImage)`
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 350px;
  z-index: 0;
`;

export default Images;
