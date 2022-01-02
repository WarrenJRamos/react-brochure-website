import styled from "styled-components";
import image from "../images/sailaway.png";

const ExperiencesContainer = styled.div`
  height: 100vh;
  background: url(${image});
  background-position: top right;
  background-size: cover;
  color: white;
  padding: 231px 16px 0px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero {
    &__title {
      font-family: "Rock Salt", sans-serif;
      font-size: 96px;
      line-height: 229px;
    }

    &__body {
      font-size: 36px;
      line-height: 43px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      text-align: center;
    }
  }

  .next {
    border: none;
    background: transparent;
    position: absolute;
    bottom: 0;
    z-index: 10;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 9px;
  }
`;

export { ExperiencesContainer };
