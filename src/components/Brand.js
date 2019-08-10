import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledLink = styled(({ isBrandDark, ...props }) => <Link {...props} />)`
  text-decoration: none;
  color: ${props => (props.isBrandDark ? "#152540" : "white")};
  font-family: "Futura PT Demi", Helvetica, Arial, sans-serif;
  transition: opacity 0.2s ease;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  padding: 0.1em 0.5em;

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    letter-spacing: 0.15em;
    padding: 0.2em 1em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.75rem;
  }

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
