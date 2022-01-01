import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <p>
        <span>Cebu's Best</span>
        <br />
        Sail Away Cruises
      </p>
      <nav>
        <ul>
          <li href="#experiences">Experiences</li>
          <li href="#partners">Partners</li>
          <li href="#contact">Contact Us</li>
          <li href="#travel">Travel Advisory</li>
        </ul>
      </nav>
      <div>
        <p>stay informed</p>
        <div>
          <img src="" alt="fb" />
          <img src="" alt="ig" />
          <img src="" alt="tw" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
