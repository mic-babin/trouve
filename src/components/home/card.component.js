import React from "react";
import { CardWrapper } from "../styled-components/card-wrapper.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Card = ({ data, cardHeight, titleHeight }) => {
  const box = useRef();
  const middleCol = useRef();
  const { name, title, textFields, images, image, descriptions, phone, email } =
    data;
  const cardWrapperControls = useAnimationControls();
  const imageWrapperControls = useAnimationControls();
  const titleControls = useAnimationControls();
  const subTitleControls = useAnimationControls();
  const subTitleClosedControls = useAnimationControls();

  const [isEmployee, setIsEmployee] = useState(false);
  const handleIsEmployee = () => setIsEmployee(true);
  const [hovered, setHovered] = useState(false);
  const handleHover = () => setHovered(!hovered);

  const getMarc = () => {
    if (isEmployee) {
      return name === "DAVID-MARC BOUCHARD";
    }
    return false;
  };

  const getImageHeight = () => {
    if (name === "ANNIE-CLAUDE ROY") return "-28vw";
    if (name === "DAVID-MARC BOUCHARD") return "-24vw";
    if (name === "RACHEL MARTIN") return "-58vw";
    if (name === "DAPHNÉ SYLVAIN") return "-45vw";

    if (title.includes("PROCESS")) return "-30vw";
    if (title.includes("RECRUT")) return "-22vw";
    if (title.includes("TALENT")) return "-122vw";

    return "-200px";
  };

  useEffect(() => {
    if (name) handleIsEmployee();

    if (hovered) {
      // OPEN
      cardWrapperControls.start({
        height: "100%",
        maxHeight: cardHeight || "463px",
        transition: { duration: 0.75 },
        type: "linear",
      });
      imageWrapperControls.start({
        width: "100%",
        marginLeft: "0vw",
        transform: "translateY(0vw)",
        height: middleCol.current.clientHeight || "310px",
        transition: { duration: 0.75 },
        type: "linear",
      });
      titleControls.start({
        marginTop: "0px",
        width: "330px",
        fontSize: "30px",
        lineHeight: "35px",
        transition: { duration: 0.75 },
        type: "linear",
      });
      subTitleControls.start({
        opacity: 1,
        marginTop: getMarc() ? "85px" : "50px",
        transition: { duration: 0.5, delay: 0.5 },
        type: "linear",
      });
      subTitleClosedControls.start({
        opacity: 0,
        transition: { duration: 0.375, delay: 0 },
        type: "linear",
      });
    } else {
      // CLOSED
      cardWrapperControls.start({
        height: "100%",
        maxHeight: "250px",
        transition: { duration: 0.375 },
        type: "linear",
      });
      imageWrapperControls.start({
        width: "102vw",
        marginLeft: "-68vw",
        transform: "translateY(" + getImageHeight() + ")",
        height: "100%",
        transition: { duration: 0.375 },
        type: "linear",
      });
      titleControls.start({
        marginTop: titleHeight || "-33px",
        width: "1000px",
        fontSize: "65px",
        lineHeight: "70px",
        transition: { duration: 0.375 },
        type: "linear",
      });
      subTitleControls.start({
        opacity: 0,
        marginTop: getMarc() ? "85px" : "50px",
        transition: { duration: 0.375, delay: 0 },
        type: "linear",
      });
      subTitleClosedControls.start({
        opacity: 1,
        transition: { duration: 0.375, delay: 0 },
        type: "linear",
      });
    }
  }, [
    hovered,
    cardHeight,
    cardWrapperControls,
    imageWrapperControls,
    name,
    subTitleClosedControls,
    subTitleControls,
    titleControls,
    titleHeight,
  ]);
  return (
    <CardWrapper
      ref={box}
      animate={cardWrapperControls}
      // onClick={executeScroll}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >
      <div className="row position-relative">
        <div className="col-lg-4 ">
          <Title
            animate={titleControls}
            style={isEmployee && { maxWidth: "700px" }}
          >
            {isEmployee ? name : title}
          </Title>
          {isEmployee && (
            <SubTitle animate={subTitleControls}>{title}</SubTitle>
          )}
          {isEmployee && (
            <SubTitleClosed animate={subTitleClosedControls}>
              {title}
            </SubTitleClosed>
          )}
        </div>
        <div className="col-lg-4">
          {textFields &&
            !isEmployee &&
            hovered &&
            textFields.map((el) => (
              <Description key={el.id} className="mb-4">
                {el.text.text.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(1)" }}
                    animate={hovered && { opacity: 1, filter: "blur(0)" }}
                    transition={{
                      duration: 1,
                      delay: index / 20,
                      ease: [0.11, 0, 0.5, 0],
                    }}
                  >
                    {word + " "}{" "}
                  </motion.span>
                ))}
              </Description>
            ))}
          <div ref={middleCol}>
            {isEmployee &&
              descriptions &&
              hovered &&
              descriptions.map((description, index) => {
                let i = index;
                return (
                  <div key={description.id} className="mb-4">
                    {description.text.text.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, filter: "blur(1)" }}
                        animate={hovered && { opacity: 1, filter: "blur(0)" }}
                        transition={{
                          duration: 1,
                          delay: index / 20 + i * 2.5,
                          ease: [0.11, 0, 0.5, 0],
                        }}
                      >
                        {word + " "}{" "}
                      </motion.span>
                    ))}
                  </div>
                );
              })}
            {isEmployee && hovered && (
              <div className="d-flex flex-column align-items-end pe-5">
                <Address
                  initial={{ opacity: 0, filter: "blur(1)" }}
                  animate={hovered && { opacity: 1, filter: "blur(0)" }}
                  transition={{
                    duration: 1,
                    delay: 5,
                    ease: [0.11, 0, 0.5, 0],
                  }}
                  href={"mailTo:" + email}
                  className="mb-2"
                >
                  {email.toUpperCase()}
                </Address>
                <Address
                  initial={{ opacity: 0, filter: "blur(1)" }}
                  animate={hovered && { opacity: 1, filter: "blur(0)" }}
                  transition={{
                    duration: 1,
                    delay: 5.3,
                    ease: [0.11, 0, 0.5, 0],
                  }}
                  href={"phoneTo:" + phone}
                  className=""
                >
                  {phone}
                </Address>
              </div>
            )}
          </div>
        </div>
        <div className="col-lg-4">
          {images &&
            images.map((img, index) => (
              <ImageWrapper
                key={index}
                animate={imageWrapperControls}
                initial={{
                  width: "102vw",
                  marginLeft: "-68vw",
                  transform: "translateY(" + getImageHeight() + ")",
                  height: "100%",
                  transition: { duration: 0.375 },
                  type: "linear",
                }}
                className="img-wrapper"
              >
                <Image image={getImage(img.gatsbyImageData)} alt="TODO"></Image>
              </ImageWrapper>
            ))}
          {image && (
            <ImageWrapper
              animate={imageWrapperControls}
              initial={{
                width: "102vw",
                marginLeft: "-68vw",
                transform: "translateY(" + getImageHeight() + ")",
                height: "100%",
                transition: { duration: 0.375 },
                type: "linear",
              }}
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

const SubTitleClosed = styled(motion.h3)`
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 25px;
  z-index: 1;
  padding-right: 15px;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1px;
  font-family: "Neue-Italic";
  overflow: visible;
`;

const Description = styled.p`
  max-width: 320px;
  letter-spacing: 1.5px;
  line-height: 20px;
`;

const ImageWrapper = styled(motion.div)`
  height: 310px;
  margin-top: 0;
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
const Address = styled(motion.a)`
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
