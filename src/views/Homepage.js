import React, { useEffect } from "react";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  ,
  ,
  ,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledMain = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.mobileSrc}),
    linear-gradient(to bottom, rgba(27, 38, 42, 1), rgba(84, 84, 92, 1));
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 35em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    min-height: 45em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    background-image: url(${props => props.desktopSrc}),
      linear-gradient(to bottom, rgba(27, 38, 42, 1), rgba(84, 84, 92, 1));
    min-height: 45em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    min-height: 55em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    min-height: 65em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    min-height: 75em;
  }
`;

const StyledGraphic = styled.img`
  position: absolute;
  height: 10em;
  bottom: 55%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    display: none;
  }
`;

const Homepage = ({ handleIsBrandDark, handleIsNavbarDark }) => {
  useEffect(() => {
    handleIsBrandDark(false);
    handleIsNavbarDark(false);
  }, []);

  return (
    <StyledMain>
      <StyledHero
        desktopSrc="/img/photos/homepage_photo.jpg"
        mobileSrc="/img/photos/homepage_photo_mobile.jpg"
      >
        <StyledGraphic src="/img/graphics/homepage_graphic.svg" />
      </StyledHero>
    </StyledMain>
  );
};

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <Homepage
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
