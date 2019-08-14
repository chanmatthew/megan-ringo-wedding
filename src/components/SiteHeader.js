import React, { Fragment, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import { animated, Keyframes } from "react-spring/renderprops";
import { animated as animatedBase, useSpring, config } from "react-spring";

import { AppContext } from "../AppProvider";

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

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const AnimatedHeader = styled(({ ...props }) => (
  <animatedBase.header {...props} />
))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 0 1em;
  margin: 0 auto;

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

const AnimatedHeaderWrapper = styled(({ ...props }) => (
  <animated.div {...props} />
))`
  position: absolute;
  right: 0;
  left: 0;
  height: 5em;
  z-index: 1;
`;

const Header = Keyframes.Spring({
  shown: {
    delay: 0,
    y: 0,
    opacity: 1
  },
  hidden: async call => {
    await delay(300);
    await call({ delay: 0, y: -100, opacity: 0 });
  }
});

const SiteHeader = ({ isSiteHeaderShown }) => {
  const isTabletPortraitUp = useMedia(
    `(min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px)`
  );
  const isTabletLandscapeUp = useMedia(`(min-width: ${TABLET_LANDSCAPE_UP}px)`);
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const [isToggled, toggleMenu] = useState(false);
  const [headerState, setHeaderState] = useState("shown");

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
  }, []);

  useEffect(() => {
    if (isTabletPortraitUp) {
      closeMenu();
    }

    setHeaderState(
      isTabletLandscapeUp === false || isSiteHeaderShown ? "shown" : "hidden"
    );
  }, [isTabletPortraitUp, isSiteHeaderShown, isTabletLandscapeUp]);

  return (
    <Header native state={headerState}>
      {({ y, opacity }) => (
        <AnimatedHeaderWrapper
          style={{
            opacity: opacity.interpolate(o => o),
            transform: y.interpolate(y => `translate3d(0, ${y}%, 0)`)
          }}
        >
          <AnimatedHeader style={style}>
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
        </AnimatedHeaderWrapper>
      )}
    </Header>
  );
};

export default props => (
  <AppContext.Consumer>
    {({ isSiteHeaderShown }) => (
      <SiteHeader {...props} isSiteHeaderShown={isSiteHeaderShown} />
    )}
  </AppContext.Consumer>
);
