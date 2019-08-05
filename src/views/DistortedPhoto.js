import React from "react";
import styled from "@emotion/styled/macro";

import { MIN_WIDTH_BREAKPOINTS } from "../enums";
import ImageLoader from "../components/ImageLoader";

const [
  ,
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  ,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledDistortedPhoto = styled.div`
  display: flex;
  justify-content: center;
  width: auto;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    width: 60%;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 50%;
  }
`;

const StyledPhotoImage = styled(ImageLoader)`
  width: 260px;
  height: 195px;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    margin-top: 1.5em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    width: 280px;
    height: 210px;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    margin-top: 8em;
    width: 240px;
    height: 180px;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-top: 3em;

    width: 280px;
    height: 210px;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 300px;
    height: 225px;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    margin-top: ${props => (props.baseFactor < 0.875 ? "2em" : "0")};
    width: 360px;
    height: 270px;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    margin-top: 0;
    width: 400px;
    height: 300px;
  }
`;

const DistortedPhoto = ({ baseFactor, isVisible }) => (
  <StyledDistortedPhoto>
    <StyledPhotoImage
      title="Megan and Ringo - Distorted Faces - NYU Photo"
      placeholder="/img/album/IMG_0451_opt.jpg"
      image="/img/album/IMG_0451.jpg"
      isVisible={isVisible}
      baseFactor={baseFactor}
    />
  </StyledDistortedPhoto>
);

export default DistortedPhoto;
