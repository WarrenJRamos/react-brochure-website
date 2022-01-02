import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarContainer } from "../styles/NavbarStyled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#partners">Partners</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#travel">Travel Advisory</a>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
