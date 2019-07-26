import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

import { AppContext } from "../AppProvider";

const StyledLink = styled(({ isBrandDark, ...props }) => <Link {...props} />)`
  text-decoration: none;
  color: ${props => (props.isBrandDark ? "#152540" : "white")};
  font-size: 2rem;
  font-family: Futura PT Demi;
  font-weight: 600;
  letter-spacing: 0.3125rem;
  padding: 0.2em 0.6em;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Brand = ({ isBrandDark, handleLinkClick }) => (
  <StyledLink
    to="/"
    isBrandDark={isBrandDark}
    onClick={() => handleLinkClick("/")}
  >
    MEGAN & RINGO
  </StyledLink>
);

export default props => (
  <AppContext.Consumer>
    {({ isBrandDark }) => <Brand {...props} isBrandDark={isBrandDark} />}
  </AppContext.Consumer>
);
