import React from "react";
import styled from "@emotion/styled/macro";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import ImageLoader from "../components/ImageLoader";
import { MIN_WIDTH_BREAKPOINTS, PARALLAX_LAYER_HEIGHT } from "../enums";
import Heading from "../components/Heading";
import Text from "../components/StoryText";
import SkewPanel, {
  BaseStyledSkewPanel,
  BaseStyledSkew
} from "../components/SkewPanel";

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

const StyledXYearsLater = styled.div`
  height: ${PARALLAX_LAYER_HEIGHT / 16}em;
`;

const StyledBackgroundOverlay = styled.div`
  background-color: #35445c;
  position: absolute;
  width: 100%;
  height: 110%;
`;

const StyledBackgroundImage = styled(ImageLoader)`
  height: 115%;
  top: 60em;

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    height: 150%;
    top: 0;
  }
`;

const StyledSkewPanel = styled(SkewPanel)`
  max-width: 450px;
  width: 90vw;
  height: 120%;
  margin-top: -17.5em;

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    margin-top: -15em;
    width: 85vw;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    width: 70vw;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    width: 80vw;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    margin-top: 0;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    width: 42vw;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    width: 40vw;
  }

  ${BaseStyledSkewPanel} {
    max-width: 540px;
    width: 100vw;

    @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
      width: 95vw;
    }

    @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
      width: 85vw;
    }

    @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
      width: 80vw;
    }

    @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
      width: 55vw;
      max-width: 600px;
    }

    @media only screen and (min-width: ${DESKTOP_UP}px) {
      width: 50vw;
    }
  }

  ${BaseStyledSkew} {
    transform: skew(-2deg, 0deg) translate3d(-50px, 0, 0);

    @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
      transform: skew(-5deg, 0deg) translate3d(-75px, 0, 0);
    }

    @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
      transform: skew(-5deg, 0deg) translate3d(-70px, 0, 0);
    }

    @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
      transform: skew(-6deg, 0deg) translate3d(-70px, 0, 0);
    }
  }
`;

const StyledHeading = styled(Heading)`
  position: absolute;
  top: 8.5em;
  left: 2.25em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    top: 12em;
    left: 2.5em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    left: 2em;
    top: 10.25em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    left: 2.5em;
    top: 12.75em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    left: 3.25em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    left: 3em;
    top: 12em;
  }

  &:after {
    border-bottom-width: 0.25em;
    width: 33%;
    bottom: -0.75em;
    left: 0.375em;
  }

  > span {
    &:nth-of-type(1) {
      opacity: 0.5;
      font-size: 2.375rem;

      @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
        font-size: 2.75rem;
      }

      @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
        font-size: 3rem;
      }

      @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
        font-size: 3.75rem;
      }

      @media only screen and (min-width: ${DESKTOP_UP}px) {
        font-size: 4rem;
      }
    }

    &:nth-of-type(2) {
      opacity: 1;
      font-size: 4rem;

      @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
        font-size: 4.5rem;
      }

      @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
        font-size: 5rem;
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
  width: 80%;
  line-height: 1.275;
  font-size: 1.1rem;
  top: 16em;
  left: 2em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.2rem;
    top: 18.5em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    left: 1.75em;
    top: 16.25em;
    font-size: 1.25rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.3rem;
    left: 1.75em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    width: 90%;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    top: 17.25em;
    width: 77.5%;
    font-size: 1.45rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    width: 85%;
    left: 2.25em;
    font-size: 1.475rem;
    line-height: 1.25;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    left: 2.125em;
    top: 16.5em;
    font-size: 1.5rem;
    width: 80%;
  }
`;

const StyledProposalImageContainer = styled.div`
  position: relative;
  width: 85%;
  top: 49em;
  left: 7.5%;
  height: 37.5%;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    width: 85%;
    height: 35%;
    left: 7.5%;
    top: 51em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    width: 90%;
    height: 40%;
    left: 5%;
    top: 52.5em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    top: 51.5em;
    height: 35%;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    top: 50em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    left: 52.5%;
    width: 45%;
    height: 80%;
    top: -2.5em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    left: 57.5%;
    width: 37.5%;
    top: -3em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    left: 52.5%;
    width: 40%;
    top: -5em;
  }
`;

const StyledProposalImageLoader = styled(ImageLoader)`
  background-repeat: no-repeat;
  background-position: -50px -60px;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    background-position: 0 -60px;
  }
`;

const StyledRingImageContainer = styled.div`
  position: relative;
  height: 14.5%;
  top: 81.5em;
  left: 10%;
  width: 80%;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    top: 80.5em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    top: 90em;
    left: 20%;
    width: 60%;
    height: 10%;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    top: 88.5em;
    width: 50%;
    left: 25%;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    top: 87.5em;
    height: 15%;
  }
`;

const StyledRingImageLoader = styled(ImageLoader)`
  background-size: 200%;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    background-size: cover;
  }
`;

const SheSaidYes = ({ isGreaterThanTablet, baseFactor, isVisible }) => {
  return (
    <StyledXYearsLater className="clearfix">
      <StyledBackgroundOverlay>
        <ParallaxLayer
          offset={baseFactor * -1.5}
          speed={-0.1625}
          factor={baseFactor}
          style={{ mixBlendMode: "multiply" }}
        >
          <StyledBackgroundImage
            title="Brooklyn Bridge Background"
            placeholder="/img/photos/adventures_opt.jpg"
            image="/img/photos/brooklyn_bridge.jpg"
            isCover
            isVisible={isVisible}
          />
        </ParallaxLayer>
      </StyledBackgroundOverlay>
      <ParallaxLayer offset={baseFactor * 0.4} speed={0.1} factor={baseFactor}>
        <StyledSkewPanel
          backgroundColor="rgba(128, 149, 184, 0.8)"
          height="150%"
          color="white"
          left
        >
          <StyledHeading
            color="white"
            withUnderline
            underlineColor="rgba(255, 255, 255, 0.7)"
            animation={{
              height: `${PARALLAX_LAYER_HEIGHT * baseFactor}px`
            }}
          >
            <span>SHE SAID...</span>
            <br />
            <span>YES!</span>
          </StyledHeading>
          <StyledText
            color="white"
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
        </StyledSkewPanel>
      </ParallaxLayer>
      <ParallaxLayer
        offset={baseFactor * (isGreaterThanTablet ? -0.675 : -0.35)}
        speed={isGreaterThanTablet ? -0.125 : -0.0475}
        factor={baseFactor}
      >
        <StyledProposalImageContainer>
          <StyledProposalImageLoader
            title="Photo - Ringo Proposes to Megan at Brooklyn Bridge Park"
            placeholder="/img/photos/proposal_opt.jpg"
            image="/img/photos/proposal.jpg"
            isCover
            isVisible={isVisible}
          />
        </StyledProposalImageContainer>
      </ParallaxLayer>
      {isGreaterThanTablet ? null : (
        <ParallaxLayer
          offset={baseFactor * -0.5}
          speed={-0.075}
          factor={baseFactor}
        >
          <StyledRingImageContainer>
            <StyledRingImageLoader
              title="Photo - The Ring"
              placeholder="/img/album/IMG_94_opt.jpg"
              image="/img/album/IMG_94.jpg"
              isCover
              isVisible={isVisible}
            />
          </StyledRingImageContainer>
        </ParallaxLayer>
      )}
    </StyledXYearsLater>
  );
};

export default SheSaidYes;
