import React from "react";
import styled from "styled-components";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { NavLink } from "../styled-components/nav-link.style";
import { Kicker } from "../styled-components/kicker.style";

const Mandate = ({ mandate, setShowContact }) => {
  const { title, textFields, link } = mandate;

  const handleShowContact = () => {
    setShowContact(true);
  };
  return (
    <>
      <Section>
        <div className="container d-flex justify-content-end">
          <div className="w-80">
            {title && <H2>{title}</H2>}
            {textFields &&
              textFields.map((textField) => (
                <Kicker className="py-4" key={textField.id}>
                  {renderRichText(textField.text)}
                </Kicker>
              ))}
            {link && (
              <DarkNavLink as="div" onClick={handleShowContact}>
                – {link.text}
              </DarkNavLink>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Mandate;

const Section = styled.section`
  padding-top: 300px;
  padding-bottom: 150px;
  color: black;

  .w-80 {
    width: 60%;
  }
`;

const H2 = styled.h2`
  font-size: 65px;
`;

const DarkNavLink = styled(NavLink)`
  color: black;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
