import React, { Fragment, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import { animated, useSpring, config } from "react-spring";

import Brand from "./Brand";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

import { useMedia } from "../hooks";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  ,
  ,
  PHONE_LANDSCAPE_UP,
  ,
  ,
  TABLET_PORTRAIT_UP,
  ,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const AnimatedHeader = styled(
  ({ isTabletPortraitUp, isScrolling, ...props }) => (
    <animated.header {...props} />
  )
)`
  display: flex;
  justify-content: ${props =>
    props.isTabletPortraitUp ? "space-between" : "flex-end"};
  align-items: center;
  padding: ${props => (props.isTabletPortraitUp ? "1em 0" : "0 1em")};
  position: ${props => (props.isTabletPortraitUp ? "absolute" : "fixed")};
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    padding: 0 1.25em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    padding: 0.875em 0;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    padding: 1.25em 0;
  }

  nav {
    width: 50%;
  }
`;

const SiteHeader = () => {
  const isTabletPortraitUp = useMedia(
    `(min-width: ${MIN_WIDTH_BREAKPOINTS[6]}px)`
  );
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const style = useSpring({
    to: { transform: "translate3d(0, 0, 0)", opacity: "1" },
    from: { transform: "translate3d(0, -100%, 0)", opacity: "0" },
    config: config.molasses
  });

  const memoizedHandleLinkClick = useCallback(link => setActiveLink(link), []);

  useEffect(() => {
    window.onpopstate = () => {
      memoizedHandleLinkClick(window.location.pathname);
    };
  });

  return (
    <AnimatedHeader isTabletPortraitUp={isTabletPortraitUp} style={style}>
      {isTabletPortraitUp ? (
        <Fragment>
          <Brand handleLinkClick={memoizedHandleLinkClick} />
          <Navbar
            activeLink={activeLink}
            handleLinkClick={memoizedHandleLinkClick}
          />
        </Fragment>
      ) : (
        <MobileNavbar />
      )}
    </AnimatedHeader>
  );
};

export default SiteHeader;
