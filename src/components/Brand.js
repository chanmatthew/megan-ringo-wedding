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
  ${"" /* font-size: 1.5rem; */}
  font-family: Futura PT Demi;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding: 0.2em 1em;
  transition: opacity 0.2s ease;

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.25rem;
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
