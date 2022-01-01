import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #1f3040;
  height: 100vh;
  width: 247px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: 45px 30px;
  color: #ffffff;

  .headline {
    font-family: "Bodoni Moda", sans-serif;

    & > p {
      text-align: center;
    }

    .lead {
      text-decoration: underline;
      font-size: 24px;
      line-height: 29px;
    }
    .company-name {
      font-size: 36px;
      line-height: 43px;
      letter-spacing: 0.03em;
    }
  }

  .info {
    &__title {
      font-family: "Rock Salt", sans-serif;
      text-transform: uppercase;
      font-size: 18px;
      line-height: 43px;
    }

    &__body {
      display: flex;
      & > img {
      }
    }
  }
`;

export { HeaderContainer };
