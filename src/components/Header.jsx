import React from "react";
import { HeaderContainer } from "../styles/HeaderStyled";
import Navbar from "./Navbar";

import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="headline">
        <p>
          <span className="lead">Cebu's Best</span>
          <br />
          <span className="company-name">Sail Away Cruises</span>
        </p>
      </div>
      <Navbar />
      <div className="info">
        <p className="info__title">stay informed</p>
        <div className="info__body">
          <img src={facebook} alt="fb" />
          <img src={instagram} alt="ig" />
          <img src={twitter} alt="tw" />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
