import React from "react";
import styled from "@emotion/styled/macro";
import ImageLoader from "../components/ImageLoader";
import { ParallaxLayer } from "react-spring/renderprops-addons";
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
  ,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledFacebook = styled.div`
  height: ${PARALLAX_LAYER_HEIGHT}px;
`;

const StyledBackgroundOverlay = styled.div`
  background-color: #35445c;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledBackgroundImage = styled(ImageLoader)`
  height: 150%;
`;

const StyledSkewPanel = styled(SkewPanel)`
  max-width: 575px;
  width: 90vw;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    width: 85vw;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    width: 80vw;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 70vw;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    width: 55vw;
    max-width: 550px;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    max-width: 600px;
    width: 50vw;
  }

  ${BaseStyledSkewPanel} {
    width: 100vw;
    max-width: 660px;

    @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
      width: 90vw;
    }

    @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
      width: 80vw;
    }

    @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
      width: 62.5vw;
      max-width: 700px;
    }

    @media only screen and (min-width: ${DESKTOP_UP}px) {
      width: 55vw;
    }
  }

  ${BaseStyledSkew} {
    transform: skew(-3.5deg, 0deg) translate3d(-40px, 0, 0);

    @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
      transform: skew(-5deg, 0deg) translate3d(-50px, 0, 0);
    }

    @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
      transform: skew(-5deg, 0deg) translate3d(-70px, 0, 0);
    }

    @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
      transform: skew(-6deg, 0deg) translate3d(-70px, 0, 0);
    }
  }
`;

const StyledHeading = styled(Heading)`
  position: absolute;
  top: 13em;
  left: 2em;

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    left: 2.25em;
    top: 12em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    left: 2.75em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    left: 3em;
    top: 14em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    top: 12em;
    left: 3.25em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    top: 12em;
    left: 3.25em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    left: 3em;
    top: 10em;
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
      font-size: 2rem;

      @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
        font-size: 2.25rem;
      }

      @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
        font-size: 2.5rem;
      }

      @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
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
      font-size: 2.875rem;

      @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
        font-size: 3.375rem;
      }

      @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
        font-size: 3.75rem;
      }

      @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
        font-size: 4.25rem;
      }

      @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
        font-size: 4.75rem;
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
  line-height: 1.3;
  left: 2.375em;
  font-size: 1rem;
  top: 19.75em;
  width: 72.5%;

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 1.1rem;
    width: 70%;
    top: 17.875em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    width: 77.5%;
    top: 17.25em;
    left: 2em;
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    left: 2.375em;
    line-height: 1.275;
    font-size: 1.25rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    top: 18.5em;
    left: 2.5em;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    top: 16.5em;
    left: 2.5em;
    font-size: 1.475rem;
    width: 85%;
    line-height: 1.25;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    top: 16.5em;
    left: 2.5em;
    font-size: 1.475rem;
    width: 85%;
    line-height: 1.25;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    top: 15em;
    font-size: 1.5rem;
    width: 80%;
  }
`;

const Facebook = ({ baseFactor, isVisible }) => {
  return (
    <StyledFacebook className="clearfix">
      <StyledBackgroundOverlay>
        <ParallaxLayer
          offset={baseFactor * -1}
          speed={-0.15}
          factor={baseFactor}
          style={{ mixBlendMode: "hard-light" }}
        >
          <StyledBackgroundImage
            title="Facebook"
            placeholder="/img/photos/facebook_opt.jpg"
            image="/img/photos/facebook.jpg"
            isCover
            isVisible={isVisible}
          />
        </ParallaxLayer>
      </StyledBackgroundOverlay>
      <ParallaxLayer offset={baseFactor * 0.1} speed={0.1} factor={baseFactor}>
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
            <span>OPERATION</span>
            <br />
            <span>FACEBOOK</span>
          </StyledHeading>

          <StyledText
            color="white"
            animation={{
              height: `${PARALLAX_LAYER_HEIGHT * baseFactor}px`
            }}
          >
            Soon after, Megan stalked Ringo on Facebook, not very hard when
            you’re searching for someone named Ringo, and friended him
            immediately. Through countless obnoxious Facebook wall posts, they
            discovered they were both majoring in economics and planned to take
            a class together the following semester. After class, they would
            work on homework assignments together and Ringo charmingly
            sacrificed his homework grade by always taking guesses on difficult
            questions – risking the possibility of getting it wrong so Megan
            would always know the right answer.
          </StyledText>
        </StyledSkewPanel>
      </ParallaxLayer>
    </StyledFacebook>
  );
};

export default Facebook;
