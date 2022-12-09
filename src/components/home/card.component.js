import React from "react";
import { CardWrapper } from "../styled-components/card-wrapper.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Card = ({ data }) => {
  const { title, textFields, images } = data;
  return (
    <CardWrapper>
      <div className="row">
        <div className="col-lg-4">
          <Title>{title}</Title>
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
            images.map((img) => (
              <Image image={getImage(img.gatsbyImageData)}></Image>
            ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;

const Image = styled(GatsbyImage)`
  height: 310px;
  object-position: top;
`;

const Title = styled.h2`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1px;
  max-width: 330px;
`;

const Description = styled.p`
  max-width: 320px;
  letter-spacing: 1.5px;
  line-height: 20px;
`;
