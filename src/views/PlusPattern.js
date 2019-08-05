import React from "react";
import styled from "@emotion/styled/macro";

import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  ,
  TABLET_PORTRAIT_UP,
  ,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledPlusPattern = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    left: 6%;
    width: 88%;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    left: 10%;
    width: 80%;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    width: 65%;
    left: 35%;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    width: 40%;
    left: 60%;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 50%;
    left: 50%;
  }
`;

const StyledBackgroundImage = styled.div`
  background-image: url(/img/graphics/plus_pattern.svg);
  background-position: top left;
  background-repeat: repeat;
  background-size: 0.75em;
  width: 100%;
  height: 120%;
  margin-top: 7em;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    margin-top: -4em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-top: 0;
    height: 90%;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 90%;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    height: 95%;
    width: 95%;
  }
`;

const PlusPattern = () => (
  <StyledPlusPattern>
    <StyledBackgroundImage />
  </StyledPlusPattern>
);

export default PlusPattern;
