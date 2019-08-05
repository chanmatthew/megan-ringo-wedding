import React from "react";
import styled from "@emotion/styled/macro";

import { MIN_WIDTH_BREAKPOINTS } from "../enums";
import ImageLoader from "../components/ImageLoader";
import Text from "../components/StoryText";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledFirstDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 14em;
  margin-top: ${props => (props.baseFactor < 0.875 ? "2.625em" : "2.1875em")};

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    height: 15.75em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    margin-top: 2em;
    height: 16.75em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    margin-top: 1em;
    height: 16.75em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    margin-top: 0;
    height: 17.75em;
  }
`;

const StyledPanel = styled.div`
  position: relative;
  height: 100%;
  width: 80%;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(54, 63, 84, 0.25);
  padding: 0 3em;
  display: flex;
  align-items: center;
`;

const StyledText = styled(Text)`
  transform: translate3d(-50%, -50%, 0);
  top: 50%;
  left: 50%;
  position: absolute;
  width: 80%;
  line-height: 1.475;
  font-size: 1.2rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 1.425rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.625rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 1.875rem;
    line-height: 1.375;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    line-height: 1.275;
    font-size: 2rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 2.5rem;
    line-height: 1.3;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 2.75rem;
    line-height: 1.375;
  }
`;

const FirstDate = ({ baseFactor }) => (
  <StyledFirstDate baseFactor={baseFactor}>
    <StyledPanel>
      <StyledText>
        After many wrong answers, and perhaps some guilt on Megan’s side, they
        started dating on <strong>December 11, 2010.</strong>
      </StyledText>
    </StyledPanel>
  </StyledFirstDate>
);

export default FirstDate;
