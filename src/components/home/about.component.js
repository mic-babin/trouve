import React from "react";
import styled from "styled-components";
import { Kicker } from "../styled-components/kicker.style";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Reason = ({ data }) => {
  const { title, textFields } = data;
  return (
    <Section>
      <div className="container" id="about">
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
              <Paragraph key={el.id}>{renderRichText(el.richText)}</Paragraph>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Reason;
const Section = styled.div`
  padding: 100px 0;
  background-color: black;
  color: white;
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
  max-width: 60%;
  padding-bottom: 50px;
`;
