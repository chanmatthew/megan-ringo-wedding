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
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledFiltersPhoto = styled.div`
  display: none;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    justify-content: center;
    position: relative;
    left: 35%;
    width: 65%;
    display: flex;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    left: 60%;
    width: 40%;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    left: 50%;
    width: 50%;
  }
`;

const StyledPhotoImage = styled(ImageLoader)`
  background-size: cover;
  background-position: left;
  height: 210px;
  width: 280px;
  margin-top: 8em;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-top: 0;
    width: 140px;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    background-size: contain;
    width: 200px;
    height: 300px;
    margin-top: 2em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    margin-top: 0;
    background-size: contain;
    height: 335px;
    width: 225px;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    margin-top: 1.5em;
    background-position: center;
    width: 280px;
    height: 420px;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    background-size: cover;
    margin-top: 0;
    width: 420px;
    height: 300px;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    width: 525px;
    height: 375px;
  }
`;

const FiltersPhoto = ({ isVisible }) => (
  <StyledFiltersPhoto>
    <StyledPhotoImage
      title="Megan and Ringo - Four Color Filters - NYU Photo"
      placeholder="/img/album/IMG_5_opt.jpg"
      image="/img/album/IMG_5.jpg"
      isVisible={isVisible}
    />
  </StyledFiltersPhoto>
);

export default FiltersPhoto;
