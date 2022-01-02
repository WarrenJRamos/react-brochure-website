import styled from "styled-components";

const NavbarContainer = styled.nav`
  align-self: flex-start;
  & > ul {
    & > li {
      list-style: none;
      padding: 18px 0px 18px 0px;
      font-size: 18px;
      line-height: 22px;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;

export { NavbarContainer };
