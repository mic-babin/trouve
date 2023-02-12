import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import { Kicker } from "../styled-components/kicker.style";
import { H1 } from "../styled-components/h1.style";
import { motion } from "framer-motion";
import { useIsMedium } from "../../utils/media-query.hook";
import { useIsSmall } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import { useIsLarge } from "../../utils/media-query.hook";
import AnimatedHeroLink from "../common/animated-hero-link.component";
import { useI18next } from "gatsby-plugin-react-i18next";

const Expertise = ({ expertise }) => {
  const {
    i18n: { language },
  } = useI18next();

  const { title, textFields, images, link } = expertise;
  const [isInView, setIsInView] = useState(false);

  const kicker = textFields.filter(
    (el) =>
      el.id === "d6b12550-a826-5fb2-9a3a-bda485011e7d" ||
      el.id === "9e6fea19-4c90-5212-bfc5-056f9a815821"
  )[0].text.text;

  const paragraphs = textFields.filter(
    (el) =>
      el.id === "b0776a44-230d-5640-a1a4-4cf2ed423a28" ||
      el.id === "f88f83b9-82e1-5bfe-8599-6ddd3c1a859f"
  );

  const isLarge = useIsLarge();
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const isXSmall = useIsXSmall();
  const handleResize = () => {
    if (parap.current) setHeight(parap.current?.offsetHeight - 48);
  };
  const [height, setHeight] = useState(null);
  const parap = useRef(null);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      return () => window.removeEventListener("resize", handleResize);
    };
  }, [parap]);
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="ps-0 ps-sm-2 ps-md-0 pe-md-5">
              <Title
                initial={{ transform: "translateX(400px)" }}
                animate={{ transform: "translateX(0px)" }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  type: "tween",
                  easeInOut: 0.3,
                }}
              >
                {title &&
                  title.split(" ").map((word, index) => (
                    <div key={index} className="w-wrapper">
                      <motion.div
                        className="word"
                        initial={{ transform: "translateY(200px)" }}
                        animate={{ transform: "translateY(0px)" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.1,
                          type: "tween",
                          easeInOut: 0.3,
                        }}
                      >
                        {word}{" "}
                      </motion.div>
                    </div>
                  ))}
              </Title>
              {kicker && (
                <Paragraph className="my-4 z-1">
                  {kicker.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(1)" }}
                      whileInView={{ opacity: 1, filter: "blur(0)" }}
                      transition={{
                        duration: 1,
                        delay: index / 20 + 2.3,
                        ease: [0.11, 0, 0.5, 0],
                      }}
                      viewport={{ once: true }}
                    >
                      {word + " "}{" "}
                    </motion.span>
                  ))}
                </Paragraph>
              )}
              {link && (
                <AnimatedHeroLink link={link} type={motion.a} color="black" />
              )}
              {/* {!isMedium && <Images images={images}></Images>} */}
            </div>
          </div>

          <div className="col-lg-9 offset-lg-3 d-flex flex-column justify-content-center pb-5 pb-lg-0 px-lg-5 position-relative">
            <motion.div
              initial={{
                height: "0px",
              }}
              animate={
                isInView && {
                  height: isXSmall
                    ? height
                    : isSmall
                    ? "390px"
                    : isMedium
                    ? "300px"
                    : isLarge && language == "en"
                    ? "1135px"
                    : isLarge
                    ? "1185px"
                    : language == "en"
                    ? "1035px"
                    : "1085px",
                }
              }
              transition={{
                duration: 5,
                delay: 2.9,
                type: "linear",
              }}
              className="line"
            ></motion.div>
            <TextWrapper
              ref={parap}
              whileInView={() => {
                setIsInView(true);
                return {};
              }}
            >
              {paragraphs &&
                paragraphs.map((paragraph, index) => {
                  let i = index;
                  return (
                    <Paragraph
                      className={index === 1 ? "mt-3" : ""}
                      key={paragraph.id}
                    >
                      {paragraph.text.text.split(" ").map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, filter: "blur(1)" }}
                          animate={
                            isInView && { opacity: 1, filter: "blur(0)" }
                          }
                          transition={{
                            duration: 1,
                            delay: index / 20 + 2.3 + i * 2.6,
                            ease: [0.11, 0, 0.5, 0],
                          }}
                          viewport={{ once: true }}
                        >
                          {word + " "}{" "}
                        </motion.span>
                      ))}
                    </Paragraph>
                  );
                })}
            </TextWrapper>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Expertise;

const Section = styled.section`
  background-color: #e7e5e0;
  color: black;
  padding-top: 200px;
  z-index: 1;
  overflow-x: clip;
  /* overflow-y: auto; */
  @media (max-width: 767px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 574px) {
    padding-top: 150px;
  }

  .line {
    display: block;
    width: 1.5px;
    height: 100px;
    background: #fff;
    mix-blend-mode: difference;
    left: 50%;
    top: -610px;
    position: absolute;
    @media (max-width: 991px) {
      top: 25px;
      left: 0;
    }
    @media (max-width: 767px) {
      top: 25px;
    }
    @media (max-width: 575px) {
      left: 10px;
      top: 52px;
    }
  }
`;

const Title = styled(H1)`
  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (max-width: 574px) {
    font-size: 50px;
    line-height: 50px;

    .w-wrapper:nth-of-type(2) {
      padding-left: 70px;
    }
  }
  @media (max-width: 400px) {
    .w-wrapper:nth-of-type(2) {
      padding-left: 50px;
    }
  }
`;

const TextWrapper = styled(motion.div)`
  padding: 3rem 2rem;
  background-color: #e7e5e0;
  z-index: 1;
  @media (max-width: 574px) {
    padding: 3rem 1.5rem;
    padding-bottom: 0;
  }
`;

const Paragraph = styled(Kicker)`
  padding-top: 30px;
  font-size: 24px;
  letter-spacing: 1px;

  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 25px;
  }
  @media (max-width: 574px) {
    font-size: 22px;
    line-height: 26px;
    padding-top: 0px;
  }
`;
