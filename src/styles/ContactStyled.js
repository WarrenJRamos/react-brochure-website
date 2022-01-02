import styled from "styled-components";
import contact from "../images/contact.jpg";

const ContactContainer = styled.div`
  height: 100vh;
  background: url(${contact});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { ContactContainer };
