import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useIsMedium, useIsSmall } from "../../utils/media-query.hook";

const Hero = ({ data }) => {
  const { images, textFields } = data;
  const title = textFields[0].paragraph;
  const stopSearching = textFields[1].paragraph;
  const youFound = textFields[2].paragraph;
  const opportunities = textFields[3].paragraph;

  const isMedium = useIsMedium();
  const isSmall = useIsSmall();

  let list = isMedium
    ? textFields[4].value
    : textFields[4].value.concat(textFields[4].value);
  // console.log(isSmall);
  // if (!isSmall) {
  //   list = list.splice(list - 2, 2);
  // }
  return (
    <Section className="position-relative">
      <div className="w-100 pt-5 mt-5">
        <Container className="container">
          <H3>
            <div>{stopSearching}</div>
            <div>{youFound}</div>
          </H3>
          <JobsLinkWrapper>
            <Round></Round>
            <JobsLink>{opportunities}</JobsLink>
          </JobsLinkWrapper>
        </Container>
        <div className="d-flex justify-content-end w-100 px-4">
          <H1 className="text-end">
            {title &&
              title
                .split(" ")
                .map((word, index) => <div key={index}>{word} </div>)}
          </H1>
        </div>
        <List>
          {list && list.map((el, index) => <div key={index}>{el}</div>)}
        </List>
      </div>

      {images &&
        images.map((img, index) => (
          <Image
            key={index}
            image={getImage(img.gatsbyImageData)}
            alt="TODO"
          ></Image>
        ))}
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  position: relative;
  display: flex;
  color: white;
  & > * {
    z-index: 2;
  }
  overflow-x: hidden;
`;

const Image = styled(GatsbyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const H1 = styled.h1`
  font-size: 145px;
  line-height: 192px;

  div:nth-of-type(1),
  div:nth-of-type(2) {
    transform: translateX(-275px);
  }
`;

const Container = styled.div`
  height: 0px;
`;

const H3 = styled.h3`
  position: absolute;
  font-size: 30px;
  line-height: 65px;
  top: 410px;

  div:nth-of-type(2) {
    transform: translateX(285px);
  }
`;

const JobsLinkWrapper = styled.div`
  position: absolute;
  font-size: 16px;
  display: flex;
  align-items: center;
  top: 610px;
`;

const Round = styled.div`
  height: 53px;
  width: 53px;
  border-radius: 50%;
  border: 1px solid white;
  margin-right: 50px;
`;

const JobsLink = styled.div`
  cursor: pointer;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    background: #fff;
    left: -70px;
    top: 45%;
    position: absolute;
  }
`;

const List = styled.div`
  padding: 15px 0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  width: 190vw;
  transform: translateX(-50vw);
  overflow-x: hidden !important;
`;
