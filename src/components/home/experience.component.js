import React from "react";
import styled from "styled-components";
import { Kicker } from "../styled-components/kicker.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { NavLink } from "../styled-components/nav-link.style";

const Experience = ({ data }) => {
  const { title, textFields, components } = data;
  return (
    <Section>
      <div className="container">
        {title && (
          <H2>
            {title &&
              title.split("<br>").map((word, index) => (
                <div className="d-inline-block" key={index}>
                  {word}{" "}
                </div>
              ))}
          </H2>
        )}
        <div className="d-flex justify-content-center">
          {textFields &&
            textFields.map((el) => (
              <Paragraph key={el.id}>{el.text.text}</Paragraph>
            ))}
        </div>
      </div>
      <div className="row mx-0">
        {components &&
          components.map((el) => {
            const { image, title, description, link } = el;
            return (
              <div key={el.id} className="col-lg-4">
                <ImageWrapper>
                  <div className="round"></div>
                  {image && (
                    <Image
                      image={getImage(image.gatsbyImageData)}
                      alt="TODO"
                    ></Image>
                  )}
                </ImageWrapper>
                {title && <Kicker className="mt-4">{title}</Kicker>}
                <Description>
                  {description && <div>{description.description}</div>}
                  {link && <CardLink to={link.url}>{link.text}</CardLink>}
                </Description>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default Experience;

const Section = styled.div`
  padding: 100px 0;
  background-color: white;
  color: black;
`;

const H2 = styled.h2`
  font-size: 65px;
  line-height: 65px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  div:nth-of-type(1) {
    max-width: 1100px;
  }
  div:nth-of-type(2) {
    font-family: "Neue-Italic";
    align-self: flex-end;
  }
`;

const Paragraph = styled(Kicker)`
  max-width: 600px;
  padding: 0 30px;
  padding-bottom: 50px;
`;

const Image = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 0;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */

  &:hover .round {
    position: absolute;
    top: 0;
    height: calc(100% + 20px);
    width: calc(100% + 20px);
    border: 1px solid black;
    border-radius: 50%;
    z-index: 1;
    margin: -10px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20%;
`;

const CardLink = styled(NavLink)`
  color: black;
  padding-left: 50px;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 1px;
    background: black !important;
    top: 45%;
    position: absolute;
    opacity: 1;
    z-index: 1;
    transform: translateX(-50px);
  }

  &:hover {
    color: black;
  }
`;
