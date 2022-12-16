import React from "react";
import { CardWrapper } from "../styled-components/card-wrapper.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Card = ({ data, cardHeight, titleHeight }) => {
  console.log(titleHeight);
  const box = useRef();
  // description, phone, email, image
  const { name, title, textFields, images, image, description, phone, email } =
    data;
  const cardWrapperControls = useAnimationControls();
  const imageWrapperControls = useAnimationControls();
  const titleControls = useAnimationControls();
  const subTitleControls = useAnimationControls();

  const [isEmployee, setIsEmployee] = useState(false);
  const handleIsEmployee = () => setIsEmployee(true);
  const [hovered, setHovered] = useState(false);
  const handleHover = () => setHovered(!hovered);
  const executeScroll = () => {
    box.current.scrollIntoView();
    setTimeout(() => {
      box.current.scrollIntoView({ block: "start", inline: "nearest" });
    }, 300);
  };
  console.log(hovered);

  const getMarc = () => {
    console.log(isEmployee);
    if (isEmployee) {
      return name.toUpperCase() === "DAVID-MARC BOUCHARD";
    }
    return false;
  };
  useEffect(() => {
    if (name) handleIsEmployee();
    const updatePosition = () => {
      if (
        // (box.current.getBoundingClientRect().top < 200 &&
        //   box.current.getBoundingClientRect().top > 0) ||
        hovered
      ) {
        // OPEN
        cardWrapperControls.start({
          height: "100%",
          maxHeight: cardHeight || "463px",
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
          width: "330px",

          fontSize: "30px",
          lineHeight: "35px",
          transition: { duration: 0.75 },
        });
        subTitleControls.start({
          opacity: 1,
          marginTop: getMarc() ? "85px" : "50px",
          transition: { duration: 0.5, delay: 0.5 },
        });
      } else {
        // CLOSED
        cardWrapperControls.start({
          height: "100%",
          maxHeight: "250px",
          transition: { duration: 0.375 },
        });
        imageWrapperControls.start({
          width: "102vw",
          marginLeft: "-68vw",
          marginTop: "-50%",
          height: "100%",
          transition: { duration: 0.375 },
        });
        titleControls.start({
          marginTop: titleHeight || "-33px",
          width: "1000px",
          fontSize: "65px",
          lineHeight: "70px",
          transition: { duration: 0.375 },
        });
        subTitleControls.start({
          opacity: 0,
          marginTop: getMarc() ? "85px" : "50px",
          transition: { duration: 0.375, delay: 0 },
        });
      }
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [hovered]);
  return (
    <CardWrapper
      ref={box}
      animate={cardWrapperControls}
      onClick={executeScroll}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >
      <div className="row">
        <div className="col-lg-4 position-relative">
          <Title animate={titleControls}>{isEmployee ? name : title}</Title>
          {isEmployee && (
            <SubTitle animate={subTitleControls}>{title}</SubTitle>
          )}
        </div>
        <div className="col-lg-4">
          {textFields &&
            !isEmployee &&
            textFields.map((el) => (
              <Description key={el.id} className="mb-4">
                {el.text.text}
              </Description>
            ))}
          {isEmployee && (
            <>
              <div className="pe-5 mb-4 text-align-justify">
                {renderRichText(description)}
              </div>
              <div className="d-flex flex-column align-items-end pe-5">
                <Address href={"mailTo:" + email} className="mb-2">
                  {email.toUpperCase()}
                </Address>
                <Address href={"phoneTo:" + phone} className="">
                  {phone}
                </Address>
              </div>
            </>
          )}
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
          {image && (
            <ImageWrapper
              animate={imageWrapperControls}
              className="img-wrapper"
            >
              <Image image={getImage(image.gatsbyImageData)} alt="TODO"></Image>
            </ImageWrapper>
          )}
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

const SubTitle = styled(motion.h3)`
  max-width: 400px;
  font-size: 16px;
  font-family: "Neue-Italic";
`;
const Address = styled.a`
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
`;
