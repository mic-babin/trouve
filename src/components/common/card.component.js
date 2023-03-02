import React from "react";
import { CardWrapper } from "../styled-components/card-wrapper.style";
import { getImage, imageStyle } from "gatsby-plugin-image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useIsMedium } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import { useIsXXSmall } from "../../utils/media-query.hook";
import { useIsXXXSmall } from "../../utils/media-query.hook";
import { useIsSmall } from "../../utils/media-query.hook";
import {
  getImageHeight,
  Image,
  Title,
  SubTitleClosed,
  Description,
  ImageWrapper,
  SubTitle,
  AddressesWrapper,
  Address,
  Department,
  DepartmentClosed,
} from "./card.helper";
import { useI18next } from "gatsby-plugin-react-i18next";
import { isMobile } from "react-device-detect";

const Card = ({ data, titleHeight, titleMargin, imgPosition }) => {
  const {
    i18n: { language },
  } = useI18next();
  // console.log(imgPosition);
  const middleCol = useRef();
  const imageRef = useRef();
  const {
    name,
    title,
    department,
    textFields,
    images,
    image,
    descriptions,
    phone,
    email,
    id,
  } = data;
  // console.log(department);
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
  const toggleOpen = () => setHovered(!hovered);
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const isXSmall = useIsXSmall();
  const isXXSmall = useIsXXSmall();
  const isXXXSmall = useIsXXXSmall();
  const getMarc = () => {
    if (isEmployee) {
      return name === "DAVID-MARC BOUCHARD";
    }
    return false;
  };

  const getVariableHeight = () => {
    if (title === "UN PROCESSUS QUE NOUS  NE PRENONS PAS À LA LÉGÈRE ")
      return -25;
    if (title === "DES RECRUTEURS À L’AFFÛT") return -25;
    if (title === "LE TALENT DOMINE") return -5;
    if (name === "ANNIE-CLAUDE ROY") return 45;
    if (name === "DAVID-MARC BOUCHARD") return 80;
    if (name === "RACHEL MARTIN") return 45;
    if (name === "DAPHNÉ SYLVAIN") return 45;
    return 0;
  };

  useEffect(() => {
    console.log(isMobile);
    if (name) handleIsEmployee();
    if (hovered) {
      // OPEN
      cardWrapperControls.start({
        height: isMedium
          ? middleCol.current.offsetHeight +
            imageRef.current.offsetHeight +
            450 +
            getVariableHeight() +
            "px"
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
        transform:
          "translateY(" +
          getImageHeight(
            name,
            title,
            isXXXSmall,
            isXXSmall,
            isXSmall,
            isSmall,
            isMedium,
            language
          ) +
          ")",
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
            : title.includes("PROCESS")
            ? "1200px"
            : "1000px",
        fontSize: isXXSmall
          ? "30px"
          : isXSmall
          ? "35px"
          : isMedium
          ? "50px"
          : "65px",

        lineHeight: isXXSmall
          ? "33px"
          : isXSmall
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
        top: `calc(4rem + ${titleHeight})`,
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
    isXXXSmall,
    imageRef,
    isMobile,
  ]);
  return (
    <CardWrapper
      animate={cardWrapperControls}
      // onClick={executeScroll}
      onClick={(isEmployee || isMobile) && toggleOpen}
      onMouseOver={() => !isEmployee && !isMobile && handleEnter()}
      onMouseOut={() => !isEmployee && !isMobile && handleLeave()}
      style={{
        borderBottom:
          (name === "DAPHNÉ SYLVAIN" || title.includes("TALENT")) &&
          "2px solid white",
      }}
    >
      <div className="row position-relative">
        <div className="col-lg-4 ">
          <Title
            animate={titleControls}
            style={
              isEmployee && {
                maxWidth: isXXSmall
                  ? "250px"
                  : isXSmall
                  ? "280px"
                  : isMedium
                  ? "400px"
                  : "500px",
              }
            }
          >
            {isEmployee ? name : title}
          </Title>
          {isEmployee && (
            <SubTitle animate={subTitleControls}>
              <div>{title}</div>
              <Department>{department}</Department>
            </SubTitle>
          )}
          {(isXSmall || !isMedium) && isEmployee && (
            <SubTitleClosed animate={subTitleClosedControls}>
              <div>{title}</div>
              <DepartmentClosed>{department.toUpperCase()}</DepartmentClosed>
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
        <div className="col-lg-4" ref={imageRef}>
          {(image || images[0]) && (
            <ImageWrapper
              animate={imageWrapperControls}
              initial={{
                width: "102vw",
                marginLeft: "-68vw",
                transform:
                  "translateY(" +
                  getImageHeight(
                    name,
                    title,
                    isXXSmall,
                    isXSmall,
                    isSmall,
                    isMedium,
                    isXXXSmall
                  ) +
                  ")",
                height: "100%",
                transition: { duration: 0.375 },
                type: "linear",
              }}
              className="img-wrapper"
              style={{ alignItems: isEmployee ? "start" : "center" }}
            >
              {imgPosition && (
                <Image
                  image={getImage(
                    image?.gatsbyImageData || images[0].gatsbyImageData
                  )}
                  alt={name}
                  objectPosition={imgPosition || "center center"}
                  loading="eager"
                ></Image>
              )}
            </ImageWrapper>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
