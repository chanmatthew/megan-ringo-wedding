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
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  ,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledUniversity = styled.div`
  height: ${PARALLAX_LAYER_HEIGHT}px;
`;

const StyledBackgroundOverlay = styled.div`
  background-color: #375f96;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledBackgroundImage = styled(ImageLoader)`
  height: 125%;
`;

const StyledSkewPanel = styled(SkewPanel)`
  max-width: 450px;
  width: 80vw;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    width: 75vw;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    width: 65vw;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 60vw;
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

    @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
      width: 90vw;
    }

    @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
      width: 80vw;
    }

    @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
      width: 70vw;
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
    transform: skew(-3.5deg, 0deg) translate3d(55px, 0, 0);

    @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
      transform: skew(-4deg, 0deg) translate3d(70px, 0, 0);
    }

    @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
      transform: skew(-5deg, 0deg) translate3d(60px, 0, 0);
    }

    @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
      transform: skew(-6deg, 0deg) translate3d(60px, 0, 0);
    }
  }
`;

const StyledHeading = styled(Heading)`
  position: absolute;
  left: 2.125em;
  top: 9.75em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    left: 3.25em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    top: 10.75em;
    left: 2.25em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    left: 3.625em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    top: 9.75em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    left: 0.25em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    left: 0;
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
      font-size: 2.125rem;

      @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
        font-size: 2.25rem;
      }

      @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
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
      font-size: 3.75rem;

      @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
        font-size: 4rem;
      }

      @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
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
  line-height: 1.275;
  left: 2.25em;
  font-size: 1.1rem;
  top: 16.25em;
  width: 75%;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.2rem;
    width: 70%;
    left: 3em;
    top: 15em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 1.25rem;
    left: 2em;
    width: 77.5%;
    top: 16em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    left: 3em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.45rem;
    top: 14.75em;
    left: 2.25em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    left: 0.375em;
    width: 85%;
    font-size: 1.475rem;
    line-height: 1.25;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    top: 15em;
    font-size: 1.5rem;
    width: 80%;
  }
`;

const University = ({ baseFactor, isVisible }) => {
  return (
    <StyledUniversity className="clearfix">
      <StyledBackgroundOverlay>
        <ParallaxLayer
          offset={baseFactor * -0.5}
          speed={-0.15}
          factor={baseFactor}
          style={{ mixBlendMode: "overlay" }}
        >
          <StyledBackgroundImage
            title="New York University"
            placeholder="/img/photos/nyu_opt.jpg"
            image="/img/photos/nyu.jpg"
            isCover
            isVisible={isVisible}
          />
        </ParallaxLayer>
      </StyledBackgroundOverlay>
      <ParallaxLayer offset={baseFactor * 0} speed={0.1} factor={baseFactor}>
        <StyledSkewPanel
          backgroundColor="rgba(128, 149, 184, 0.8)"
          height="120%"
          color="white"
          right
        >
          <StyledHeading
            color={"white"}
            withUnderline
            underlineColor="rgba(255, 255, 255, 0.7)"
            animation={{
              height: `${PARALLAX_LAYER_HEIGHT * baseFactor}px`
            }}
          >
            <span>FATEFUL</span>
            <br />
            <span>FIRSTS</span>
          </StyledHeading>
          <StyledText
            color="white"
            animation={{
              height: `${PARALLAX_LAYER_HEIGHT * baseFactor}px`
            }}
          >
            Megan and Ringo first met at NYU’s All-University games freshman
            year of college. That night, Megan came back to school after a long
            day of both class and work to participate, only because she was part
            of student council. Ringo was already at the gym playing basketball
            (for over 8 hours!) and was in the locker room changing to go back
            home, before he was convinced to turn back and play for the team.
          </StyledText>
        </StyledSkewPanel>
      </ParallaxLayer>
    </StyledUniversity>
  );
};

export default University;
