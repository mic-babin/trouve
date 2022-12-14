import React from "react";
import { CardWrapper } from "../styled-components/card-wrapper.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Card = ({ data }) => {
  const box = useRef();
  const { title, textFields, images } = data;
  const cardWrapperControls = useAnimationControls();
  const imageWrapperControls = useAnimationControls();
  const titleControls = useAnimationControls();
  const executeScroll = () => box.current.scrollIntoView();
  useEffect(() => {
    const updatePosition = () => {
      if (
        box.current.getBoundingClientRect().top < 100 &&
        box.current.getBoundingClientRect().top > -100
      ) {
        // OPEN
        cardWrapperControls.start({
          height: "413px",
          transition: { duration: 0.75 },
        });
        imageWrapperControls.start({
          width: "100%",
          marginLeft: "0vw",
          marginTop: "0",
          height: "310px",
          transition: { duration: 0.75 },
        });
        titleControls.start({
          marginTop: "0px",
          maxWidth: "330px",
          transition: { duration: 0.75 },
        });
      } else {
        // CLOSED
        cardWrapperControls.start({
          height: "200px",
          transition: { duration: 0.1 },
        });
        imageWrapperControls.start({
          width: "102vw",
          marginLeft: "-68vw",
          marginTop: "-50%",
          height: "100%",
          transition: { duration: 0.1 },
        });
        titleControls.start({
          marginTop: "-33px",
          maxWidth: "500px",
          transition: { duration: 0.1 },
        });
      }
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return (
    <CardWrapper
      ref={box}
      animate={cardWrapperControls}
      onClick={executeScroll}
    >
      <div className="row">
        <div className="col-lg-4 position-relative">
          <Title animate={titleControls}>{title}</Title>
        </div>
        <div className="col-lg-4">
          {textFields &&
            textFields.map((el) => (
              <Description key={el.id} className="mb-4">
                {el.text.text}
              </Description>
            ))}
        </div>
        <div className="col-lg-4">
          {images &&
            images.map((img, index) => (
              <ImageWrapper
                key={index}
                animate={imageWrapperControls}
                className="img-wrapper"
              >
                <Image image={getImage(img.gatsbyImageData)} alt="TODO"></Image>
              </ImageWrapper>
            ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;

const Image = styled(GatsbyImage)`
  object-position: top;
`;

const Title = styled(motion.h2)`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1px;
  max-width: 330px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: show;
`;

const Description = styled.p`
  max-width: 320px;
  letter-spacing: 1.5px;
  line-height: 20px;
`;

const ImageWrapper = styled(motion.div)`
  height: 310px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
