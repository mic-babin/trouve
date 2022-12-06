import React from "react";
import Menu from "./navigation/menu";
import { MenuButton } from "../components/styled-components/menu-button";
import { Logo } from "../components/styled-components/logo";
import LogoSrc from "../assets/img/trouve.svg";
import { useState } from "react";
import styled from "styled-components";

const Header = ({ menu, contact }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <HeaderWrapper className="d-flex justify-content-between align-items-center position-relative">
      <Logo src={LogoSrc} alt="Logo" />
      <MenuButton onClick={handleShowMenu}>MENU</MenuButton>
      <Menu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        menu={menu}
        contact={contact}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  border-bottom: 1.5px solid black;
`;

export default Header;
