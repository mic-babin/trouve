import React from "react";
import styled from "styled-components";
import { H1 } from "../styled-components/h1.style";
import { Kicker } from "../styled-components/kicker.style";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { NavLink } from "../styled-components/nav-link.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamHero = ({ hero, setShowContact }) => {
  const { title, link, images, textFields } = hero;
  const handleShowContact = () => {
    setShowContact(true);
  };
  return (
    <Section>
      <div className="position-relative">
        <Container className="container">
          <div className="row">
            <div className="col-lg-6">
              <H1>
                {title &&
                  title.split(" ").map((word, index) => (
                    <div className="d-inline-block" key={index}>
                      {word}{" "}
                    </div>
                  ))}
              </H1>
              {textFields &&
                textFields.map((el) => (
                  <Kicker className="my-4 pe-5 z-1">
                    {renderRichText(el.text)}
                  </Kicker>
                ))}

              {link && (
                <NavLink
                  as="div"
                  className="pointer"
                  onClick={handleShowContact}
                >
                  – {link.text}
                </NavLink>
              )}
            </div>
          </div>
        </Container>
        {images &&
          images.map((img) => (
            <Image image={getImage(img.gatsbyImageData)}></Image>
          ))}
      </div>
    </Section>
  );
};

export default TeamHero;

const Section = styled.section`
  background-color: black;
  color: white;
  padding-top: 200px;
  padding-bottom: 100px;
`;

const Image = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  right: 20px;
  height: 390px;
  width: 330px;
  z-index: 0;

  &:nth-of-type(2) {
    top: 100px;
    right: 300px;
    height: 330px;
    width: 550px;
    z-index: 0;
  }
`;
const Container = styled.div``;
