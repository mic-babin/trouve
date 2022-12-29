import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";
import { motion, useAnimationControls } from "framer-motion";
import { useIsXLarge } from "../../utils/media-query.hook";

const NavLinks = ({ navLinks, setShowContact, setShowMenu, path }) => {
  const isXLarge = useIsXLarge();
  const handleShowContact = () => {
    setShowMenu(false);
    setShowContact(true);
  };

  const handleCloseMenu = () => setShowMenu(false);

  const isRealLink = (link) => {
    return link.url !== "http://jobs.trouvemtl.com/" && link.url !== undefined;
  };

  const getActive = (link) => {
    if (link.url === "/") {
      return path === link.url;
    } else {
      return path.includes(link.url);
    }
  };

  const [open, setOpen] = useState(false);
  const handleEnter = () => setOpen(true);
  const handleLeave = () => setOpen(false);
  const socialsControls = useAnimationControls();

  useEffect(() => {
    if (open) {
      // OPEN
      socialsControls.start({
        height: isXLarge ? "105px" : "57px",
      });
    } else {
      // CLOSED
      socialsControls.start({
        height: "57px",
      });
    }
  }, [open]);

  return (
    <LinksWrapper className="row mx-0">
      {navLinks &&
        path &&
        navLinks.links.map((link, index) => {
          return (
            <LinkWrapper key={link.id} className="col-lg-6">
              {isRealLink(link, index) && (
                <NavLink
                  to={link.url !== "/" ? "/" + link.url : link.url}
                  className="d-flex border-bottom-white"
                  onClick={handleCloseMenu}
                >
                  <Number className="me-4">0{index + 1}</Number>
                  <Text>
                    <span
                      style={{
                        fontFamily: getActive(link) ? "Neue" : "",
                      }}
                    >
                      {link.text}
                    </span>
                  </Text>
                </NavLink>
              )}
              {link.url === "http://jobs.trouvemtl.com/" && (
                <NavLink
                  as="a"
                  href={link.url}
                  target="_blank"
                  className="d-flex border-bottom-white"
                >
                  <Number className="me-4">0{index + 1}</Number>
                  <Text>{link.text}</Text>
                </NavLink>
              )}
              {(link.title === "SOCIALS" ||
                link.title === "RÉSEAUX SOCIAUX ") && (
                <Socials
                  as={motion.div}
                  className="d-flex border-bottom-white pointer"
                  onMouseEnter={() => handleEnter()}
                  onMouseLeave={() => handleLeave()}
                  animate={socialsControls}
                  transition={{
                    duration: 0.3,
                    delay: 0,
                    type: "tween",
                    easeInOut: 0.3,
                  }}
                >
                  <Number className="me-4">0{index + 1}</Number>
                  <Text className="me-4">{link.title}</Text>
                  <div className="flex-grow-1 d-flex flex-column d-xxl-inline-block align-items-end ">
                    {link.socialLinks &&
                      link.socialLinks.map((socialLink) => (
                        <NavLink
                          key={socialLink.id}
                          as="a"
                          href={socialLink.url}
                          target="_blank"
                          className="me-2 me-xxl-4 social p-0"
                        >
                          {socialLink.text}
                        </NavLink>
                      ))}
                  </div>
                </Socials>
              )}
              {(link.text === "CONTACT US" ||
                link.text === "NOUS CONTACTER") && (
                <NavLink
                  as="div"
                  onClick={handleShowContact}
                  className="d-flex border-bottom-white pointer"
                >
                  <Number className="me-4">0{index + 1}</Number>
                  <Text>{link.text}</Text>
                </NavLink>
              )}
            </LinkWrapper>
          );
        })}
    </LinksWrapper>
  );
};

export default NavLinks;

const LinkWrapper = styled.div`
  &:nth-of-type(5),
  &:nth-of-type(6) {
    .border-bottom-white {
      border-bottom: none;
    }
  }
  @media (max-width: 991px) {
    &:nth-of-type(5) {
      .border-bottom-white {
        border-bottom: 1.5px solid white;
      }
    }
  }
`;

const Socials = styled(NavLink)`
  overflow: hidden;
  .social {
    display: none;
    opacity: 0;
  }

  &:hover {
    .social {
      display: inline;
      opacity: 1;
      color: white;
      font-family: "Neue-LightItalic";
      letter-spacing: 2px;

      &:hover {
        font-family: "Neue";
      }
    }
  }
`;

const LinksWrapper = styled(motion.div)`
  overflow: hidden;
`;

const Number = styled.div`
  font-family: "Neue-LightItalic";
  font-size: 12px;
`;

const Text = styled.div`
  font-family: "Neue-Light";
  letter-spacing: 2px;

  &:hover {
    font-family: "Neue";
  }
`;
