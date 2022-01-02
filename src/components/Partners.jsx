import React from "react";
import { PartnersContainer } from "../styles/PartnersStyled";
import beaches from "../images/beach.mp4";

const Partners = () => {
  return (
    <PartnersContainer id="partners">
      <h2>partners</h2>
      <p>text</p>
      <video src={beaches} mute autoplay loop></video>
    </PartnersContainer>
  );
};

export default Partners;
