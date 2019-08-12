import React, { useEffect } from "react";
import styled from "@emotion/styled/macro";

import ImageLoader from "../components/ImageLoader";
import { MIN_WIDTH_BREAKPOINTS, PARALLAX_LAYER_HEIGHT } from "../enums";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { AppContext } from "../AppProvider";

const [
  ,
  ,
  ,
  ,
  ,
  SMALL_DEVICES_LANDSCAPE_UP,
  ,
  TABLET_PORTRAIT_UP,
  ,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledIntroduction = styled("div")`
  height: ${PARALLAX_LAYER_HEIGHT}px;
`;

const StyledPolaroid = styled(ImageLoader)`
  background-position: calc(50% + 1em) center;
  position: absolute;
  bottom: 0;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    background-position: center;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    background-position: bottom;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    background-size: contain;
  }
`;

const StyledFrowningFacesPhoto = styled(ImageLoader)`
  display: none;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    display: block;
    position: absolute;
    left: calc(50% - 34em);
    height: 12em;
    width: 15em;
    transform: rotate3d(0, 0, 1, -6deg);
  }
`;

const StyledPhoneCallPhoto = styled(ImageLoader)`
  display: none;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    display: block;
    position: absolute;
    left: calc(50% - 37em);
    height: 14em;
    width: 19em;
    transform: rotate3d(0, 0, 1, 6deg);
  }
`;

const StyledBirthdayPhoto = styled(ImageLoader)`
  display: none;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    display: block;
    position: absolute;
    left: calc(50% + 17em);
    height: 26em;
    width: 19em;
    transform: rotate3d(0, 0, 1, 3deg);
  }
`;

const Introduction = ({
  baseFactor,
  isVisible,
  handleIsBrandDark,
  handleIsNavbarDark
}) => {
  useEffect(() => {
    handleIsBrandDark(false);
    handleIsNavbarDark(false);
  }, []);

  return (
    <StyledIntroduction>
      <ParallaxLayer offset={0} speed={0} factor={baseFactor}>
        <StyledPolaroid
          title="Polaroid - Megan and Ringo Drinking"
          placeholder="/img/photos/polaroid_drinking_opt.jpg"
          image="/img/photos/polaroid_drinking.jpg"
          height="110%"
          width="100%"
          isVisible={isVisible}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={baseFactor * 0.25} speed={0.1} factor={baseFactor}>
        <StyledFrowningFacesPhoto
          title="Photo - Megan and Ringo 'Frowning'"
          placeholder="/img/album/IMG_3_opt.jpg"
          image="/img/album/IMG_3.jpg"
          isVisible={isVisible}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={baseFactor * 0.59375}
        speed={-0.1}
        factor={baseFactor}
      >
        <StyledPhoneCallPhoto
          title="Photo - Megan Leaning on Ringo During Phone Call"
          placeholder="/img/album/IMG_0567_grayscale_blur.jpg"
          image="/img/album/IMG_0567_grayscale.jpg"
          isVisible={isVisible}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={baseFactor * 0.3} speed={-0.1} factor={baseFactor}>
        <StyledBirthdayPhoto
          title="Photo - Megan and Ringo Celebrating Birthday"
          placeholder="/img/album/IMG_5412_grayscale_blur.jpg"
          image="/img/album/IMG_5412_grayscale.jpg"
          isVisible={isVisible}
        />
      </ParallaxLayer>
    </StyledIntroduction>
  );
};

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <Introduction
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
