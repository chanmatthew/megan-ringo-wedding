import React from "react";
import styled from "@emotion/styled/macro";

import { MIN_WIDTH_BREAKPOINTS } from "../enums";
import ImageLoader from "../components/ImageLoader";

const [
  ,
  ,
  ,
  ,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  ,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledSportJerseysPhoto = styled.div`
  display: none;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    display: flex;
    justify-content: center;
    width: 37.5%;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    width: 40%;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 50%;
  }
`;

const StyledPhotoImage = styled(ImageLoader)`
  width: 150px;
  height: 200px;
  margin-top: 12em;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-top: 10em;
    width: 180px;
    height: 240px;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    margin-top: 9em;
    width: 225px;
    height: 300px;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    margin-top: 5em;
    width: 270px;
    height: 360px;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    margin-top: 0;
    width: 330px;
    height: 440px;
  }
`;

const SportJerseysPhoto = ({ isVisible }) => (
  <StyledSportJerseysPhoto>
    <StyledPhotoImage
      title="Megan and Ringo - Wearing Sport Jerseys - NYU Photo"
      placeholder="/img/album/IMG_24_opt.jpg"
      image="/img/album/IMG_24.jpg"
      isVisible={isVisible}
    />
  </StyledSportJerseysPhoto>
);

export default SportJerseysPhoto;
