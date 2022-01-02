import styled from "styled-components";

const PartnersContainer = styled.div`
  height: 100vh;
  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export { PartnersContainer };
