import styled from "styled-components";
import beaches from "../images/beaches.jpg";

const PartnersContainer = styled.div`
  height: 100vh;
  position: relative;
  background: url(${beaches});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    font-family: "Rock Salt", sans-serif;
    font-size: 30px;

    & + p {
      color: white;
      font-size: 20px;
    }
  }

  .partners__grid {
    padding: 15px;
    height: 93%;
    width: 95%;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);

    &-item {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.7);
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      gap: 5px;

      .social {
        box-shadow: 0px 0px 10px gray;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        width: 100%;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }

      & > h3 {
        font-size: 24px;
      }

      & > p {
        font-size: 20px;
        text-align: center;
        flex-grow: 2;
      }
    }
  }
`;

export { PartnersContainer };
