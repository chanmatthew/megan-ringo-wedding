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
  ,
  ,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP
] = MIN_WIDTH_BREAKPOINTS;

const AnimatedHeader = styled(
  ({ isTabletPortraitUp, isScrolling, ...props }) => (
    <animated.header {...props} />
  )
)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
  padding: 0 1em;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    padding: 1em 0;
    width: 98%;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 96%;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
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
  const [isToggled, toggleMenu] = useState(false);

  const style = useSpring({
    to: { transform: "translate3d(0, 0, 0)", opacity: "1" },
    from: { transform: "translate3d(0, -100%, 0)", opacity: "0" },
    config: config.molasses
  });

  const memoizedHandleLinkClick = useCallback(link => setActiveLink(link), []);

  const openMenu = () => {
    toggleMenu(true);
    document.body.className += " unscrollable";
  };

  const closeMenu = () => {
    toggleMenu(false);
    document.body.className = document.body.className.replace(
      /\bunscrollable\b/g,
      ""
    );
  };

  useEffect(() => {
    window.onpopstate = () => {
      closeMenu();
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
        <MobileNavbar
          isToggled={isToggled}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />
      )}
    </AnimatedHeader>
  );
};

export default SiteHeader;
