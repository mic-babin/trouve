import React from "react";
import styled from "styled-components";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CardWrapper } from "../styled-components/card-wrapper.style";

const TeamMembers = ({ teamMembers }) => {
  console.log(teamMembers);
  return (
    <>
      {teamMembers &&
        teamMembers.map((employee) => {
          const { name, title, description, phone, email, image, id } =
            employee;
          console.log(employee);
          return (
            <CardWrapper>
              <div key={id}>
                <div className="row">
                  <div className="col-lg-4">
                    <Name>{name}</Name>
                    <Title>{title}</Title>
                  </div>
                  <div className="col-lg-4">
                    <p className="pe-5 mb-4 text-align-justify">
                      {renderRichText(description)}
                    </p>
                    <div className="d-flex flex-column align-items-end pe-5">
                      <Address href={"mailTo:" + email} className="mb-2">
                        {email.toUpperCase()}
                      </Address>
                      <Address href={"phoneTo:" + phone} className="">
                        {phone}
                      </Address>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    {image && (
                      <Image
                        imgStyle={{ objectPosition: "top" }}
                        image={getImage(image.gatsbyImageData)}
                      ></Image>
                    )}
                  </div>
                </div>
              </div>
            </CardWrapper>
          );
        })}
    </>
  );
};

export default TeamMembers;

const Name = styled.h2`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1px;
`;

const Title = styled.h3`
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
    width: 20px;
    height: 1px;
    background: #fff;
    left: -30px;
    top: 45%;
    position: absolute;
  }
`;

const Image = styled(GatsbyImage)`
  height: 310px;
  object-position: top;
`;
