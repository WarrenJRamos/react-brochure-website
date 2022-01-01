import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarContainer } from "../styles/NavbarStyled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li href="#experiences">Experiences</li>
        <li href="#partners">Partners</li>
        <li href="#contact">Contact Us</li>
        <li href="#travel">Travel Advisory</li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
