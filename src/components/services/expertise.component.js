import React from "react";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";
import { Kicker } from "../styled-components/kicker.style";
import { H1 } from "../styled-components/h1.style";
import { motion } from "framer-motion";
import { useIsMedium } from "../../utils/media-query.hook";
import { useIsSmall } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import Images from "./Images.component";
import { useState } from "react";
import AnimatedHeroLink from "../common/animated-hero-link.component";

const Expertise = ({ expertise }) => {
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
      el.id === "13a7cf44-f861-55be-9c1d-d338af42ce6b" ||
      el.id === "f88f83b9-82e1-5bfe-8599-6ddd3c1a859f" ||
      el.id === "41dcc054-c0b0-51bb-a684-e3a8463e5823"
  );

  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const isXSmall = useIsXSmall();

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
                <AnimatedHeroLink link={link} type={motion.a} color="white" />
              )}
              {!isMedium && <Images images={images}></Images>}
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center pb-5 pb-lg-0 px-lg-5 position-relative">
            <motion.div
              initial={{
                height: "0px",
              }}
              whileInView={{
                height: isXSmall
                  ? "500px"
                  : isSmall
                  ? "390px"
                  : isMedium
                  ? "300px"
                  : "1375px",
              }}
              transition={{
                duration: 5,
                delay: 2.9,
                type: "linear",
              }}
              className="line"
              viewport={{ once: true }}
            ></motion.div>
            <TextWrapper
              whileInView={() => {
                setIsInView(true);
                return {};
              }}
            >
              {paragraphs &&
                paragraphs.map((paragraph, index) => {
                  let i = index;
                  return (
                    <div
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
                    </div>
                  );
                })}
            </TextWrapper>
            {isMedium && <Images images={images}></Images>}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Expertise;

const Section = styled.section`
  background-color: black;
  color: white;
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
    top: -110px;
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
  background-color: black;
  z-index: 1;
  @media (max-width: 574px) {
    padding-bottom: 0;
  }
`;

const Paragraph = styled(Kicker)`
  padding-top: 30px;
  font-size: 30px;
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
