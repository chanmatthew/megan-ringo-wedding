import React, { useEffect } from "react";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  ,
  PHONE_LANDSCAPE_UP,
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
  background-image: url(${props => `${props.src}_mobile.jpg`}),
    linear-gradient(to bottom, rgba(27, 38, 42, 1), rgba(84, 84, 92, 1));
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 45em;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    background-image: url(${props => `${props.src}.jpg`}),
      linear-gradient(to bottom, rgba(27, 38, 42, 1), rgba(84, 84, 92, 1));
    min-height: 55em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    min-height: 65em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    min-height: 75em;
  }
`;

const StyledMission = styled.div`
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  bottom: 65%;

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    bottom: 75%;
    transform: translate3d(-75%, 0, 0);
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    transform: translate3d(-78%, 0, 0);
  }
`;

const StyledMissionTitle = styled.p`
  font-family: "Futura PT Extra";
  text-align: center;
  margin-bottom: 0.1em;
  font-size: 1.8rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 2.1rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 2.1rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 4rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 4.6rem;
  }
`;

const StyledColoredSpan = styled.span`
  color: ${props => props.color};
`;

const StyledMissionSubtitle = styled.p`
  font-family: "Futura PT Demi";
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.05em;
  text-align: center;
  font-size: 0.875rem;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.6rem;
    text-align: right;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 2rem;
  }
`;

const Homepage = ({ handleIsBrandDark, handleIsNavbarDark }) => {
  useEffect(() => {
    handleIsBrandDark(false);
    handleIsNavbarDark(false);
  }, []);

  return (
    <StyledMain>
      <StyledHero src="/img/photos/homepage_photo">
        <StyledMission>
          <StyledMissionTitle>
            <StyledColoredSpan color="rgba(128, 149, 184, 1)">
              #
            </StyledColoredSpan>
            <StyledColoredSpan color="rgba(246, 233, 203, 1)">
              MINGOWEDDING
            </StyledColoredSpan>
          </StyledMissionTitle>
          <StyledMissionSubtitle>
            10&#183;16&#183;19 | NEW YORK
          </StyledMissionSubtitle>
        </StyledMission>
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
