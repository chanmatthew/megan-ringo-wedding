import React, { useMemo } from "react";
import styled from "@emotion/styled/macro";
import { ParallaxLayer } from "react-spring/renderprops-addons";

import Article from "../components/Article";
import Text from "../components/StoryText";
import Heading from "../components/Heading";
import ImageLoader from "../components/ImageLoader";

import { MIN_WIDTH_BREAKPOINTS, PARALLAX_LAYER_HEIGHT } from "../enums";

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

const StyledSheSaidYes = styled.div`
  display: table;
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  position: absolute;
  top: -8.5em;
  left: 2em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    left: 2.875em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    top: -9.5em;
    left: 3.5em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    top: -0.5em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    top: 0.875em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    left: 2.25em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    left: 4em;
    top: 1em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    top: 2em;
    left: 6em;
  }

  &:after {
    border-bottom-width: 0.25em;
    border-bottom-color: rgba(134, 140, 164, 0.3);
    width: 33%;
    bottom: -0.75em;
    left: 0.375em;
  }

  > span {
    &:nth-of-type(1) {
      opacity: 0.3;
      font-size: 2.25rem;

      @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
        font-size: 2.75rem;
      }

      @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
        font-size: 3rem;
      }

      @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
        font-size: 3.375rem;
      }

      @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
        font-size: 3.75rem;
      }

      @media only screen and (min-width: ${DESKTOP_UP}px) {
        font-size: 4rem;
      }
    }

    &:nth-of-type(2) {
      opacity: 0.7;
      font-size: 4rem;

      @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
        font-size: 4.5rem;
      }

      @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
        font-size: 5rem;
      }

      @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
        font-size: 5.375rem;
      }

      @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
        font-size: 5.75rem;
      }

      @media only screen and (min-width: ${DESKTOP_UP}px) {
        font-size: 6rem;
      }
    }
  }
`;

const StyledText = styled(Text)`
  position: absolute;
  line-height: 1.275;
  background-position: center;
  top: 0.625em;
  width: 72.5%;
  left: 2.25em;
  font-size: 1rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    left: 2.875em;
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    top: 0.25em;
    left: 3em;
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    top: 7.875em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    width: 77.5%;
    font-size: 1.4rem;
    left: 3em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    top: 9.25em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    top: 8.5em;
    left: 1.75em;
    font-size: 1.45rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    background-position: left top;
    font-size: 1.475rem;
    line-height: 1.25;
    width: 70%;
    left: 2.875em;
    top: 9em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.5rem;
    width: 70%;
    left: 4.25em;
    top: 10em;
  }
`;

const StyledRingPhoto = styled(ImageLoader)`
  position: absolute;
  display: block;
  top: 18.5em;
  left: 2em;
  height: 195px;
  width: 260px;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    left: 3.125em;
    width: 280px;
    height: 210px;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    width: 300px;
    height: 225px;
    left: 3.625em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    display: none;
  }
`;

const StyledProposalPhoto = styled(ImageLoader)`
  height: 90%;
  background-repeat: no-repeat;
  margin-top: ${props =>
    props.baseFactor < 0.875
      ? "0em"
      : props.baseFactor >= 1
      ? "-4em"
      : "-3.5em"};

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    height: 110%;
    margin-top: ${props =>
      props.baseFactor < 0.875
        ? "0em"
        : props.baseFactor >= 1
        ? "-5.5em"
        : "-4.5em"};
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    margin-top: ${props =>
      props.baseFactor < 0.875
        ? "0em"
        : props.baseFactor >= 1
        ? "-3em"
        : "-4.5em"};
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    height: 110%;
    margin-top: 6em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    height: 120%;
    margin-top: ${props => (props.baseFactor < 0.875 ? "4em" : "-0.5em")};
  }
`;

const SheSaidYes = ({ isVisible, isGreaterThanTablet, baseFactor }) => {
  const parallaxSettings = useMemo(
    () =>
      isGreaterThanTablet
        ? {
            leftArticle: {
              offset: baseFactor,
              speed: 0.15625,
              factor: baseFactor
            },
            rightArticle: {
              offset: baseFactor * -1.2125,
              speed: -0.15,
              factor: baseFactor
            }
          }
        : {
            leftArticle: {
              offset: baseFactor,
              speed: 0.1375,
              factor: baseFactor / 2
            },
            rightArticle: {
              offset: baseFactor * -0.90625,
              speed: -0.1,
              factor: baseFactor / 2
            }
          },
    [isGreaterThanTablet, baseFactor]
  );

  return (
    <StyledSheSaidYes>
      <Article left>
        <ParallaxLayer
          offset={parallaxSettings.leftArticle.offset}
          speed={parallaxSettings.leftArticle.speed}
          factor={parallaxSettings.leftArticle.factor}
        >
          <StyledHeading
            withUnderline
            animation={{
              height: `${PARALLAX_LAYER_HEIGHT * baseFactor}px`
            }}
          >
            <span>SHE SAID...</span>
            <br />
            <span>YES!</span>
          </StyledHeading>
          <StyledText
            animation={{
              height: `${PARALLAX_LAYER_HEIGHT * baseFactor}px`
            }}
          >
            5 years into dating, on December 11, 2015, Ringo proposed at
            Brooklyn Bridge Park in front of the beautiful New York City
            skyline, symbolic of Megan’s beloved home and the city that brought
            them together.
            <br />
            <br />
            Now, they are excited to celebrate with all of their friends and
            family who have been a part of their journey.
          </StyledText>
          <StyledRingPhoto
            title="Photo - Megan Showcases Ring with Ringo and Friends"
            placeholder="/img/album/IMG_4635_opt.jpg"
            image="/img/album/IMG_4635.jpg"
            isVisible={isVisible}
          />
        </ParallaxLayer>
      </Article>
      <Article right>
        <ParallaxLayer
          offset={parallaxSettings.rightArticle.offset}
          speed={parallaxSettings.rightArticle.speed}
          factor={parallaxSettings.rightArticle.factor}
        >
          <StyledProposalPhoto
            title="Photo - Ringo Proposes to Megan at Brooklyn Bridge Park"
            placeholder="/img/photos/proposal_opt.jpg"
            image="/img/photos/proposal.jpg"
            isCover
            isVisible={isVisible}
            baseFactor={baseFactor}
          />
        </ParallaxLayer>
      </Article>
    </StyledSheSaidYes>
  );
};
export default SheSaidYes;
