import React, { useCallback, useState, useEffect } from "react";
import { a } from "react-spring";
import { Keyframes, animated } from "react-spring/renderprops";
import styled from "@emotion/styled/macro";
import Heading from "../components/Heading";
import Text from "../components/StoryText";
import InfiniteCarousel from "../components/InfiniteCarousel";
import { AppContext } from "../AppProvider";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";
import { getAlbumPhotos } from "../helpers";
import { useMedia } from "../hooks";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  ,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  ,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const images = getAlbumPhotos().map(img => ({
  css: `url(${img.src})`
}));

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    padding: 1em 3em;
  }
`;

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const StyledAlbum = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledBackground = styled.div`
  background: #f9fdff;
  width: 100%;
  height: 100%;
  min-height: 56.25em;
  position: relative;
`;

const AnimatedLeftArticle = styled(({ ...props }) => (
  <animated.div {...props} />
))`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 37.5em;
  background: white;
  padding: 1.25em;
`;

const StyledHeading = styled(Heading)`
  display: none;

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    position: absolute;
    display: block;
    left: 1.375em;
    top: 14em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    top: 13em;
    left: 3vw;
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
        font-size: 5rem;
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

      @media only screen and (min-width: 1440px) {
        font-size: 6.5em;
      }
    }
  }
`;

const StyledText = styled(Text)`
  display: none;

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    position: absolute;
    display: block;
    background-position: left top;
    line-height: 1.25;
    left: 1em;
    width: 60%;
    top: 17em;
    font-size: 1.625rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    top: 15em;
    font-size: 1.875rem;
    left: 3vw;
    width: 70%;
    max-width: 23.4375em;
  }
`;

const StyledButton = styled.button`
  display: none;

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    position: absolute;
    display: block;
    left: 1.875em;
    top: 24em;
    -webkit-appearance: none;
    border: none;
    font-family: "Futura PT", Helvetica, Arial;
    font-size: 1.75rem;
    outline: none;
    background-color: transparent;

    &:after {
      content: "";
      background-color: rgba(64, 85, 136, 0.4);
      width: 3em;
      height: 3em;
      display: block;
      top: 50%;
      position: absolute;
      transform: translate3d(0, -50%, 0);
      border-radius: 20em;
      left: -0.875em;
      transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    > span {
      vertical-align: middle;
    }

    > img {
      position: absolute;
      top: 70%;
      transform: translate3d(0, -70%, 0);
      left: 5.5em;
      height: 0.625em;
    }

    &:hover,
    &:active {
      cursor: pointer;

      &:after {
        width: 9em;
      }
    }
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    left: 5vw;
  }
`;

const LeftArticle = Keyframes.Spring({
  open: { delay: 0, x: 0, opacity: 1 },
  close: async call => {
    await delay(400);
    await call({ delay: 0, x: -100, opacity: 0 });
  }
});

const Album = ({ handleIsBrandDark, handleIsNavbarDark }) => {
  const [articleState, setArticleState] = useState("open");
  const [width, setWidth] = useState(320);
  const [tensionModifier, setTensionModifier] = useState(0);
  const [frictionModifier, setFrictionModifier] = useState(0.1);
  const [baseFriction, setBaseFriction] = useState(0.1);
  const isTabletLandscapeUp = useMedia(`(min-width: ${TABLET_LANDSCAPE_UP}px)`);
  const isPhoneLandscapeUp = useMedia(`(min-width: ${PHONE_LANDSCAPE_UP}px)`);

  const setCarouselOptions = useCallback(
    (width, tensionModifier, frictionModifier, baseFriction) => {
      setWidth(width);
      setTensionModifier(tensionModifier);
      setFrictionModifier(frictionModifier);
      setBaseFriction(baseFriction);
    },
    []
  );

  useEffect(() => {
    handleIsBrandDark(true);
    handleIsNavbarDark(true);
  }, []);

  useEffect(() => {
    if (isTabletLandscapeUp === false && articleState === "open") {
      setArticleState("close");
    }

    if (isPhoneLandscapeUp === true) {
      setCarouselOptions(500, 4.8, 20, 15);
    } else {
      setCarouselOptions(320, 0, 0, 0);
    }
  }, [isTabletLandscapeUp, isPhoneLandscapeUp]);

  return (
    <StyledAlbum>
      <StyledBackground>
        <LeftArticle native state={articleState}>
          {({ x, opacity }) => (
            <AnimatedLeftArticle
              style={{
                opacity: opacity.interpolate(o => o),
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
              }}
            >
              <StyledHeading>
                <span>OUR</span>
                <br />
                <span>PHOTOS</span>
              </StyledHeading>
              <StyledText>
                Relive the precious memories and adventures that have led to
                this very special milestone in Megan and Ringo's lives.
              </StyledText>
              <StyledButton
                type="button"
                onClick={() =>
                  setArticleState(articleState === "open" ? "close" : "open")
                }
              >
                <span>View Album</span>
                <img alt="Arrow Graphic" src="/img/graphics/arrow.svg" />
              </StyledButton>
            </AnimatedLeftArticle>
          )}
        </LeftArticle>
        <InfiniteCarousel
          items={images}
          width={width}
          visible={3}
          tensionModifier={tensionModifier}
          frictionModifier={frictionModifier}
          baseFriction={baseFriction}
          translateX={35}
          isShifted={articleState === "close"}
          onUnshift={() => {
            setArticleState("open");
          }}
        >
          {({ css }, i) => (
            <Content>
              <Image style={{ backgroundImage: css }} />
            </Content>
          )}
        </InfiniteCarousel>
      </StyledBackground>
    </StyledAlbum>
  );
};

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <Album
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
