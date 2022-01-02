import React from "react";
import { ExperiencesContainer } from "../styles/ExperiencesStyled";
import sailboat from "../images/sailboat.svg";
import arrow from "../images/arrow.svg";

const Experiences = () => {
  return (
    <ExperiencesContainer id="experiences">
      <h1 className="hero__title">Sail Away</h1>
      <p className="hero__body">
        We are Cebu's ultimate island hopping specialist.
        <br /> Let us take you away for a once in a lifetime adventure on the
        seas. All aboard?
      </p>
      <button className="next">
        <img src={sailboat} alt="sail" />
        <img src={arrow} alt="arrow" />
      </button>
    </ExperiencesContainer>
  );
};

export default Experiences;
