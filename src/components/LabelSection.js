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

const StyledLabelSection = styled.section`
  &:not(:last-child) {
    padding-bottom: 1.5em;

    @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
      padding-bottom: 2em;
    }

    @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
      padding-bottom: 3em;
    }

    @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
      padding-bottom: 2em;
    }

    @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
      padding-bottom: 3em;
    }

    @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
      padding-bottom: 3em;
    }

    @media only screen and (min-width: ${DESKTOP_UP}px) {
      padding-bottom: 5em;
    }
  }
`;

const StyledCategory = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(104, 113, 134);
  opacity: 0.4;
  letter-spacing: 0.03em;
  margin-bottom: 0.3em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.9rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.9rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 2rem;
  }
`;

const StyledTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: #152540;
  margin-bottom: 0.2em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 2.3rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 3rem;
  }
`;

const StyledSubtitle = styled.span`
  font-size: 0.875rem;
  margin-left: 0.5em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.75rem;
  }
`;

const StyledDescription = styled.h4`
  font-size: 0.875rem;
  color: #152540;
  line-height: 1.53em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 1rem;
    line-height: 1.33em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.75rem;
  }
`;

const LabelSection = props => (
  <StyledLabelSection
    top={props.top}
    bottom={props.bottom}
    left={props.left}
    right={props.right}
  >
    <StyledCategory>{props.category}</StyledCategory>
    <StyledTitle>
      {props.title}
      {props.subtitle ? (
        <StyledSubtitle>{props.subtitle}</StyledSubtitle>
      ) : null}
    </StyledTitle>
    <StyledDescription>{props.children}</StyledDescription>
  </StyledLabelSection>
);

export default LabelSection;
