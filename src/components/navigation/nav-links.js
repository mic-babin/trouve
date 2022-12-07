import React from "react";
import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";

const NavLinks = ({ navLinks, setShowContact, setShowMenu }) => {
  const handleShowContact = () => {
    setShowMenu(false);
    setShowContact(true);
  };

  const isRealLink = (link) => {
    return link.url !== "http://jobs.trouvemtl.com/" && link.url !== undefined;
  };

  return (
    <div className="row mx-0">
      {navLinks &&
        navLinks.links.map((link, index) => (
          <LinkWrapper key={link.id} className="col-lg-6">
            {isRealLink(link, index) && (
              <NavLink
                to={link.url !== "/" ? "/" + link.url : link.url}
                className="d-flex border-bottom-white"
              >
                <div className="me-4">0{index + 1}</div>
                <div>{link.text}</div>
              </NavLink>
            )}
            {link.url === "http://jobs.trouvemtl.com/" && (
              <NavLink
                as="a"
                href={link.url}
                target="_blank"
                className="d-flex border-bottom-white"
              >
                <div className="me-4">0{index + 1}</div>
                <div>{link.text}</div>
              </NavLink>
            )}
            {link.title === "SOCIALS" && (
              <Socials as="div" className="d-flex border-bottom-white pointer">
                <div className="me-4">0{index + 1}</div>
                <div className="me-5">{link.title}</div>
                <div>
                  {link.socialLinks &&
                    link.socialLinks.map((socialLink) => (
                      <NavLink
                        key={socialLink.id}
                        as="a"
                        href={socialLink.url}
                        target="_blank"
                        className="me-4 social"
                      >
                        {socialLink.text}
                      </NavLink>
                    ))}
                </div>
              </Socials>
            )}
            {link.text === "CONTACT" && (
              <NavLink
                onClick={handleShowContact}
                as="div"
                className="d-flex border-bottom-white pointer"
              >
                <div className="me-4">0{index + 1}</div>
                <div>{link.text}</div>
              </NavLink>
            )}
          </LinkWrapper>
        ))}
    </div>
  );
};

export default NavLinks;
const NavLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: white;
  padding: 1rem 0;
  &:hover {
    color: white;
  }
`;

const LinkWrapper = styled.div`
  &:nth-of-type(5),
  &:nth-of-type(6) {
    .border-bottom-white {
      border-bottom: none;
    }
  }
`;

const Socials = styled(NavLink)`
  .social {
    display: none;
    opacity: 0;
  }

  &:hover {
    .social {
      display: inline;
      opacity: 1;
      color: white;
      font-family: "Neue-Italic";

      &:hover {
        font-family: "Neue";
      }
    }
  }
`;
