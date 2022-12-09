import React from "react";
import Menu from "./navigation/menu.component";
import { MenuButton } from "./styled-components/menu-button.style";
import { Logo } from "./styled-components/logo.style";
import LogoSrc from "../assets/img/trouve_blanc.svg";
import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";

const Header = ({ menu, contact, setShowContact, showMenu, setShowMenu }) => {
  const handleShowMenu = () => setShowMenu(true);

  return (
    <HeaderWrapper>
      <div className="d-flex justify-content-between align-items-center position-relative">
        <Link to="/">
          <Logo src={LogoSrc} alt="Logo" />
        </Link>
        <MenuButton onClick={handleShowMenu}>MENU</MenuButton>
        <Menu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          menu={menu}
          contact={contact}
          setShowContact={setShowContact}
        />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  border-bottom: 1.5px solid white;
  position: fixed !important;
  top: 0;
  width: 100vw;
  color: white;
  z-index: 10;
  /* background-color: black; */
`;

export default Header;
