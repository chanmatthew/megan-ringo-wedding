import React from "react";
import styled from "@emotion/styled/macro";
import ImageLoader from "../components/ImageLoader";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { MIN_WIDTH_BREAKPOINTS, PARALLAX_LAYER_HEIGHT } from "../enums";
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

const StyledBasketballGame = styled.div`
  height: ${PARALLAX_LAYER_HEIGHT * 0.875}px;
`;

const StyledBackgroundOverlay = styled.div`
  background-color: #868fa4;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledBackgroundImage = styled(ImageLoader)`
  height: 150%;
`;

const StyledPanel = styled.div`
  margin-top: 2em;
  background-color: rgba(255, 255, 255, 0.8);
  width: 85vw;
  position: absolute;
  max-width: 64em;
  top: 75%;
  left: 50%;
  transform: translate3d(-50%, -75%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 2em;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    padding: 2em 2.5em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    margin-top: 3em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    margin-top: 1em;
    padding: 2.25em 3em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    margin-top: 0;
  }
`;

const StyledText = styled(Text)`
  line-height: 1.4;
  letter-spacing: 0.03em;
  font-size: 1rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    line-height: 1.3125;
    font-size: 1.375rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.5rem;
    line-height: 1.375;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    line-height: 1.25;
    font-size: 1.75rem;
  }
`;

const BasketballGame = ({ baseFactor, isVisible }) => {
  return (
    <StyledBasketballGame>
      <StyledBackgroundOverlay>
        <ParallaxLayer
          offset={baseFactor * -0.75}
          speed={-0.15}
          factor={baseFactor}
          style={{ mixBlendMode: "overlay" }}
        >
          <StyledBackgroundImage
            title="Basketball Court"
            placeholder="/img/photos/basketball_court_opt.jpg"
            image="/img/photos/basketball_court.jpg"
            isCover
            isVisible={isVisible}
          />
        </ParallaxLayer>
      </StyledBackgroundOverlay>
      <ParallaxLayer
        offset={baseFactor * 0.20625}
        speed={0.14375}
        factor={baseFactor}
      >
        <StyledPanel>
          <StyledText>
            Somehow, Megan and Ringo ended up playing 3-on-3 basketball together
            for the freshman team against a Graduate Stern team in the first
            round of the tournament. Everyone on the Grad Stern team was at
            least a head taller than their pathetic freshmen team. However,
            despite their severe height challenges, they managed to win and went
            on to secure first place (just kidding, they got destroyed in that
            first game).
          </StyledText>
        </StyledPanel>
      </ParallaxLayer>
    </StyledBasketballGame>
  );
};

export default BasketballGame;
