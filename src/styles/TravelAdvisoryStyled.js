import styled from "styled-components";
import advisory from "../images/advisory.jpg";

const TravelAdvisoryContainer = styled.div`
  height: 100vh;
  background: url(${advisory});
  background-size: cover;
  display: flex;
  align-items: center;
  div {
    color: white;
    max-width: 800px;
    margin: auto;
    border-radius: 25px;
    padding: 15px 30px;
    height: 40%;
    background: rgba(0, 0, 0, 0.5);
    background-blend-mode: lighten;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export { TravelAdvisoryContainer };
