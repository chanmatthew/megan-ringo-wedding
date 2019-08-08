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
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledCard = styled.div`
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  letter-spacing: 0.15em;
  margin-bottom: 3em;

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    margin-bottom: 4em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    margin-bottom: 3em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    margin-bottom: 5em;
  }
`;

const StyledCardImage = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  background-image: ${props => `url(${props.src})` || "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 15em;
  width: 15em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    height: 17em;
    width: 17em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    height: 13em;
    width: 13em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    height: 15em;
    width: 15em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    height: 8em;
    width: 8em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    height: 9em;
    width: 9em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    height: 12em;
    width: 12em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    height: 15em;
    width: 15em;
  }
`;

const StyledCardName = styled.div`
  font-size: 1.3rem;
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(54, 63, 84, 1);
  width: 100%;
  line-height: 2em;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 0.875rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.5rem;
  }
`;

const Card = props => (
  <StyledCard>
    <StyledCardImage src={props.src} />
    <StyledCardName>{props.name}</StyledCardName>
    {props.children}
  </StyledCard>
);

export default Card;
