import React from "react";
import { CardWrapper } from "../styled-components/card-wrapper.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useIsMedium } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import { useIsXXSmall } from "../../utils/media-query.hook";
import { useIsSmall } from "../../utils/media-query.hook";

const Card = ({ data, titleHeight, titleMargin }) => {
  const middleCol = useRef();
  const {
    name,
    title,
    textFields,
    images,
    image,
    descriptions,
    phone,
    email,
    id,
  } = data;
  const cardWrapperControls = useAnimationControls();
  const imageWrapperControls = useAnimationControls();
  const titleControls = useAnimationControls();
  const subTitleControls = useAnimationControls();
  const subTitleClosedControls = useAnimationControls();

  const [isEmployee, setIsEmployee] = useState(false);
  const handleIsEmployee = () => setIsEmployee(true);
  const [hovered, setHovered] = useState(false);
  const handleEnter = () => setHovered(true);
  const handleLeave = () => setHovered(false);
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const isXSmall = useIsXSmall();
  const isXXSmall = useIsXXSmall();
  const getMarc = () => {
    if (isEmployee) {
      return name === "DAVID-MARC BOUCHARD";
    }
    return false;
  };

  const getImageHeight = () => {
    if (name === "ANNIE-CLAUDE ROY")
      return isXXSmall
        ? "-210vw"
        : isXSmall
        ? "-170vw"
        : isSmall
        ? "-100vw"
        : isMedium
        ? "-85vw"
        : "-28vw";
    if (name === "DAVID-MARC BOUCHARD")
      return isXXSmall
        ? "-215vw"
        : isXSmall
        ? "-180vw"
        : isSmall
        ? "-110vw"
        : isMedium
        ? "-80vw"
        : "-24vw";
    if (name === "RACHEL MARTIN")
      return isXXSmall
        ? "-215vw"
        : isXSmall
        ? "-190vw"
        : isSmall
        ? "-130vw"
        : isMedium
        ? "-100vw"
        : "-58vw";
    if (name === "DAPHNÉ SYLVAIN")
      return isXXSmall
        ? "-215vw"
        : isXSmall
        ? "-180vw"
        : isSmall
        ? "-130vw"
        : isMedium
        ? "-90vw"
        : "-45vw";

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
        : "-40vw";
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

  const getVariableHeight = () => {
    if (name === "DAVID-MARC BOUCHARD") return 40;
    if (name === "DAPHNÉ SYLVAIN") return 30;

    return 0;
  };

  useEffect(() => {
    if (name) handleIsEmployee();
    if (hovered) {
      // OPEN
      cardWrapperControls.start({
        height: isMedium
          ? middleCol.current.offsetHeight + 800 + getVariableHeight() + "px"
          : middleCol.current.offsetHeight + 150 + "px",
        maxHeight: isMedium
          ? middleCol.current.offsetHeight + 800 + getVariableHeight() + "px"
          : middleCol.current.offsetHeight + 150 + "px",
        transition: { duration: 0.75 },
        type: "linear",
      });
      imageWrapperControls.start({
        width: "100%",
        marginLeft: "0vw",
        transform: "translateY(0vw)",
        height: !isMedium ? middleCol.current.clientHeight || "310px" : "500px",
        transition: { duration: 0.75 },
        type: "linear",
      });
      titleControls.start({
        marginTop: "0px",
        width:
          id === "68c1ff62-4b3f-5183-9186-05b7acbe5281" && !isMedium
            ? "300px"
            : !isMedium
            ? "330px"
            : isXSmall && id === "68c1ff62-4b3f-5183-9186-05b7acbe5281"
            ? "300px"
            : isXSmall
            ? "100%"
            : "90%",
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
        height: "250px",
        maxHeight: "250px",
        transition: { duration: 0.375 },
        type: "linear",
      });
      imageWrapperControls.start({
        width: "102vw",
        marginLeft: isMedium ? "-24px" : "-68vw",
        transform: "translateY(" + getImageHeight() + ")",
        height: "100%",
        transition: { duration: 0.375 },
        type: "linear",
      });
      titleControls.start({
        marginTop: titleHeight || "-33px",
        width:
          isXSmall && id === "68c1ff62-4b3f-5183-9186-05b7acbe5281"
            ? "300px"
            : isMedium
            ? "100%"
            : "1000px",
        fontSize:
          isXXSmall && !isEmployee
            ? "30px"
            : isXSmall && !isEmployee
            ? "35px"
            : isMedium
            ? "50px"
            : "65px",

        lineHeight:
          isXXSmall && !isEmployee
            ? "33px"
            : isXSmall && !isEmployee
            ? "34px"
            : isMedium
            ? "55px"
            : "70px",
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
    cardWrapperControls,
    imageWrapperControls,
    name,
    subTitleClosedControls,
    subTitleControls,
    titleControls,
    titleHeight,
    isMedium,
    isEmployee,
    isXSmall,
    isXXSmall,
  ]);
  return (
    <CardWrapper
      animate={cardWrapperControls}
      // onClick={executeScroll}
      onMouseOver={() => handleEnter()}
      onMouseOut={() => handleLeave()}
    >
      <div className="row position-relative">
        <div className="col-lg-4 ">
          <Title
            animate={titleControls}
            style={isEmployee && { maxWidth: !isMedium ? "700px" : "400px" }}
          >
            {isEmployee ? name : title}
          </Title>
          {isEmployee && (
            <SubTitle animate={subTitleControls}>{title}</SubTitle>
          )}
          {isEmployee && !isMedium && (
            <SubTitleClosed animate={subTitleClosedControls}>
              {title}
            </SubTitleClosed>
          )}
        </div>
        <div className="col-lg-4 my-5 my-lg-0 mb-lg-4">
          {!isEmployee && (
            <div ref={middleCol}>
              {textFields &&
                textFields.map((el, index) => (
                  <Description
                    key={el.id}
                    className="mt-3 mt-lg-0 "
                    style={{ paddingTop: titleMargin }}
                  >
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
            </div>
          )}
          {isEmployee && (
            <div ref={middleCol}>
              {descriptions &&
                descriptions.map((description, index) => {
                  let i = index;
                  return (
                    <Description key={description.id} className="mb-4">
                      <div>
                        {description.text.text.split(" ").map((word, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, filter: "blur(1)" }}
                            animate={
                              hovered && { opacity: 1, filter: "blur(0)" }
                            }
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
                    </Description>
                  );
                })}

              <AddressesWrapper className="">
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
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">
                        {email.toUpperCase()}
                      </span>
                      <span className="link-title2 title">
                        {email.toUpperCase()}
                      </span>
                    </div>
                  </span>
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
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">{phone}</span>
                      <span className="link-title2 title">{phone}</span>
                    </div>
                  </span>
                </Address>
              </AddressesWrapper>
            </div>
          )}
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
                <Image
                  image={getImage(img.gatsbyImageData)}
                  alt="TODO"
                  class="img"
                ></Image>
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
`;

const Description = styled.p`
  max-width: 320px;
  letter-spacing: 1.5px;
  line-height: 20px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled(motion.div)`
  height: 310px;
  margin-top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  /* .img {
    height: 100%;
  } */
`;

const SubTitle = styled(motion.h3)`
  max-width: 400px;
  font-size: 16px;
  font-family: "Neue-Italic";
`;

const AddressesWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 992px) {
    width: 100%;
  }
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
