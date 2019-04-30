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
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const Brand = props => (
  <StyledLink to="/" isBrandDark={props.isBrandDark}>
    MEGAN & RINGO
  </StyledLink>
);

export default props => (
  <AppContext.Consumer>
    {({ isBrandDark }) => <Brand {...props} isBrandDark={isBrandDark} />}
  </AppContext.Consumer>
);
