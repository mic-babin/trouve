import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { NavLink } from "../styled-components/nav-link";
import { Kicker } from "../styled-components/kicker";
import { H1 } from "../styled-components/h1";

const Expertise = ({ expertise }) => {
  const { title, textFields, images, link } = expertise;

  const paragraph = textFields.filter(
    (el) =>
      el.id === "d6b12550-a826-5fb2-9a3a-bda485011e7d" ||
      el.id === "9e6fea19-4c90-5212-bfc5-056f9a815821"
  )[0].childContentfulParagraphTextTextNode.text;
  const richText = textFields.filter(
    (el) =>
      el.id === "056af2ff-d1bd-5f02-aeb9-96973c2cdce6" ||
      el.id === "3a2636d2-4964-535b-8683-6d0bd409e1d5"
  )[0];

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
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pe-5">
            <div className="pe-5">
              <H1>
                {title &&
                  title.split(" ").map((word, index) => (
                    <div className="d-inline-block" key={index}>
                      {word}{" "}
                    </div>
                  ))}
              </H1>
              {paragraph && <Kicker className="my-4">{paragraph}</Kicker>}
              {link && (
                <NavLink as="a" href={link.url} target="_blank">
                  – {link.text}
                </NavLink>
              )}
              <div className="position-relative">
                {woodImg && (
                  <WoodImage
                    alt="featured"
                    image={getImage(woodImg.gatsbyImageData)}
                  />
                )}
              </div>
              {buildingImg && (
                <BuildingImage
                  alt="featured"
                  image={getImage(buildingImg.gatsbyImageData)}
                />
              )}
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center p-5">
            {richText && <div>{renderRichText(richText.text)}</div>}
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
`;

const BuildingImage = styled(GatsbyImage)`
  width: 80%;
  height: 480px;
  transform: translateY(200px);
`;

const WoodImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 350px;
  z-index: 1;
`;
