import React from "react";
import styled from "@emotion/styled/macro";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import shortid from "shortid";
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

const StyledGridContainer = styled.div`
  position: relative;
  height: 100%;
  width: 40%;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    width: 42.5%;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 47.5%;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    width: 55%;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    width: 60%;
  }
`;

const StyledGrid = styled.div`
  display: none;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1em;
    position: absolute;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    height: ${PARALLAX_LAYER_HEIGHT * 0.75}px;
    width: 100%;
    top: 8em;
    padding: 0 1.25em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    height: ${PARALLAX_LAYER_HEIGHT * 0.875}px;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    top: 12em;
    padding: 0 2em;
    margin-top: -5em;
    height: ${PARALLAX_LAYER_HEIGHT * 0.875}px;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    margin-top: 0;
    height: ${PARALLAX_LAYER_HEIGHT * 0.875}px;
    padding: 0 1em;
    grid-template-columns: repeat(2, 1fr);
    top: 5.5em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    padding: 0 2em 0 1em;
    grid-column-gap: 1em;
    height: calc(
      100% - 72px - 2em
    ); /* Navbar and 2em padding gap per grid item */
    top: 5em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0.5em;
    padding: 1em 2em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    grid-column-gap: 1em;
    padding: 2em 4em;
  }
`;

const StyledGridColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 1em;

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    grid-row-gap: 0.5em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    grid-row-gap: 1em;
  }

  &:nth-of-type(even) {
    padding-top: 1em;
  }

  &:nth-of-type(odd) {
    padding-bottom: 1em;
  }

  &:nth-child(2) {
    display: none;

    @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
      display: grid;
    }
  }

  &:last-child {
    display: none;

    @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
      display: grid;
    }
  }
`;

const StyledXYearsLater = styled.div`
  height: ${PARALLAX_LAYER_HEIGHT}px;
`;

const StyledBackgroundOverlay = styled.div`
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 110%;
`;

const StyledBackgroundImage = styled(ImageLoader)`
  height: 150%;
`;

const StyledSkewPanel = styled(SkewPanel)`
  max-width: 450px;
  width: 90vw;
  height: 100%;
  margin-top: 2em;

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    width: 80vw;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    width: 70vw;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    width: 60vw;
    height: 120%;
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
    transform: skew(-3.5deg, 0deg) translate3d(40px, 0, 0);

    @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
      transform: skew(-4deg, 0deg) translate3d(50px, 0, 0);
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
  top: 5.75em;
  left: 3.875em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    left: 4.875em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    left: 4.25em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    left: 3em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    left: 1.75em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    left: 0;
    top: 5em;
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
      opacity: 0.7;
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
  width: 65%;
  line-height: 1.275;
  font-size: 1.1rem;
  left: 3.75em;
  top: 13em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.2rem;
    left: 4.25em;
    top: 12.75em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    left: 3.5em;
    top: 12.25em;
    font-size: 1.25rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    top: 12.75em;
    left: 2.25em;
    width: 77.5%;
    font-size: 1.45rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    left: 1.375em;
    top: 12em;
    width: 85%;
    font-size: 1.475rem;
    line-height: 1.25;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    left: 0.375em;
    top: 12em;
    font-size: 1.5rem;
    width: 80%;
  }
`;

const imageColumns = [
  [
    {
      id: shortid.generate(),
      alt: "Photo - Megan on Ringo's Shoulders",
      name: "IMG_83"
    },
    {
      id: shortid.generate(),
      alt: "Photo - Megan and Ringo at a Shoreline",
      name: "IMG_42"
    },
    {
      id: shortid.generate(),
      alt: "Photo - Megan and Ringo Attending a Friend's Wedding",
      name: "IMG_34"
    }
  ],
  [
    {
      id: shortid.generate(),
      alt: "Photo - Megan and Ringo's Brooklyn Nets Jersey Selfie",
      name: "IMG_24"
    },
    {
      id: shortid.generate(),
      alt: "Photo - Megan and Ringo at a Nighttime Rooftop Gathering",
      name: "IMG_19"
    },
    {
      id: shortid.generate(),
      alt: "Photo - Ringo Attending Megan's Graduation from NYU Stern",
      name: "IMG_86"
    }
  ],
  [
    {
      id: shortid.generate(),
      alt: "Megan and Ringo at a Beach",
      name: "IMG_74",
      ext: "jpg"
    },
    {
      id: shortid.generate(),
      alt: "Photo - Megan and Ringo Attending a Wedding Reception",
      name: "IMG_87"
    },
    {
      id: shortid.generate(),
      alt: "Photo - Megan and Ringo at the Foot of the Golden Gate Bridge",
      name: "IMG_1"
    }
  ]
];

const XYearsLater = ({ baseFactor, isVisible }) => {
  return (
    <StyledXYearsLater className="clearfix">
      <StyledBackgroundOverlay>
        <ParallaxLayer
          offset={baseFactor * -1.5}
          speed={-0.1625}
          factor={baseFactor}
          style={{ mixBlendMode: "overlay" }}
        >
          <StyledBackgroundImage
            title="Adventures Background"
            placeholder="/img/photos/adventures_opt.jpg"
            image="/img/photos/adventures.jpg"
            isCover
            isVisible={isVisible}
          />
        </ParallaxLayer>
      </StyledBackgroundOverlay>
      <ParallaxLayer
        offset={baseFactor * -0.675}
        speed={-0.125}
        factor={baseFactor}
      >
        <StyledGridContainer>
          <StyledGrid>
            {imageColumns.map((column, i) => (
              <StyledGridColumn key={i}>
                {column.map((image, j) => (
                  <ImageLoader
                    key={image.id}
                    title={image.title}
                    placeholder={`/img/album/${image.name}_opt.jpg`}
                    image={`/img/album/${image.name}.jpg`}
                    width="100%"
                    height="100%"
                    borderRadius="0.25em"
                    isVisible={isVisible}
                  />
                ))}
              </StyledGridColumn>
            ))}
          </StyledGrid>
        </StyledGridContainer>
      </ParallaxLayer>
      <ParallaxLayer
        offset={baseFactor * 0.53125}
        speed={0.1}
        factor={baseFactor}
      >
        <StyledSkewPanel
          backgroundColor="rgba(255, 255, 255, 0.8)"
          height="120%"
          color="white"
          right
        >
          <StyledHeading
            withUnderline
            animation={{
              height: `${PARALLAX_LAYER_HEIGHT * baseFactor}px`
            }}
          >
            <span>5 YEARS</span>
            <br />
            <span>LATER</span>
          </StyledHeading>
          <StyledText
            animation={{
              height: `${PARALLAX_LAYER_HEIGHT * baseFactor}px`
            }}
          >
            Megan and Ringo immediately connected as their shared love for
            family, friends, and food began to shape the relationship they have
            today. Their early years formed the foundation of their relationship
            - from late nights of Megan studying, impromptu dates, and surprise
            bubble tea visits to first jobs, promotions, living in Chinatown and
            late nights at Whiskey Tavern.
          </StyledText>
        </StyledSkewPanel>
      </ParallaxLayer>
    </StyledXYearsLater>
  );
};

export default XYearsLater;
