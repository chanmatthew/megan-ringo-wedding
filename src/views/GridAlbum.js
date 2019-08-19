import React, { useState, Fragment, useEffect, useRef } from "react";
import styled from "@emotion/styled/macro";
import { Spring } from "react-spring/renderprops";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";
import { getAlbumPhotos } from "../helpers";
import { useMedia } from "../hooks";
import Lightbox from "../components/Lightbox";
import VisibilitySensor from "../components/VisibilitySensor";

const [
  ,
  PHONE_PORTRAIT_UP,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP
] = MIN_WIDTH_BREAKPOINTS;

const images = getAlbumPhotos();

const ProgressiveImage = ({
  isVisible,
  placeholder,
  image,
  title,
  width,
  handleOnClick
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();

    img.src = placeholder;
    img.onload = () => {
      const context = canvasRef.current.getContext("2d");

      canvasRef.current.height = width;
      canvasRef.current.height = (width * (img.height + 80)) / img.width;

      context.drawImage(
        img,
        0,
        0,
        width,
        (width * (img.height + 80)) / img.width
      );
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const img = new Image();

      img.src = image;
      img.onload = () => {
        const context = canvasRef.current.getContext("2d");

        canvasRef.current.height = width;
        canvasRef.current.height = (width * img.height) / img.width;

        context.drawImage(img, 0, 0, width, (width * img.height) / img.width);
      };
    }
  }, [isVisible]);

  return (
    <canvas
      style={{
        "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"
      }}
      ref={ref => (canvasRef.current = ref)}
      title={title}
      onClick={e => {
        handleOnClick(e, {
          src: image,
          alt: title
        });
      }}
    ></canvas>
  );
};

const StyledImageTile = styled.div`
  margin-bottom: 1em;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    margin-bottom: 2em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    margin-bottom: 3em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    margin-bottom: 1em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-bottom: 2em;
  }
`;

const ImageTile = ({ image, imgWidth, handleOnClick }) => {
  return (
    <StyledImageTile>
      <VisibilitySensor once partialVisibility delayedCall>
        {({ isVisible }) => (
          <Spring native delay={100} to={{ opacity: isVisible ? 1 : 0 }}>
            {props => (
              <ProgressiveImage
                image={image.src}
                placeholder={image.placeholder}
                title="Photo Album Picture"
                isVisible={isVisible}
                width={imgWidth}
                style={{ ...props, "-webkit-transform": "translate3d(0,0,0)" }}
                handleOnClick={handleOnClick}
              />
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </StyledImageTile>
  );
};

const StyledMasonryGrid = styled.div`
  /* Emotion did not add vendor prefixes in final build. */
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-gap: 1.5em;
  -moz-column-gap: 1.5em;
  column-gap: 1.5em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    -webkit-column-gap: 2em;
    -moz-column-gap: 2em;
    column-gap: 2em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-gap: 1em;
    -moz-column-gap: 1em;
    column-gap: 1em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    -webkit-column-gap: 2em;
    -moz-column-gap: 2em;
    column-gap: 2em;
  }
`;

const StyledGridAlbum = styled.div`
  margin-top: 5em;
  padding: 0 1em;
`;

const GridAlbum = () => {
  const isSmallDevicesLandscapeUp = useMedia(
    `(min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px)`
  );
  const isPhoneLandscapeUp = useMedia(`(min-width: ${PHONE_LANDSCAPE_UP}px)`);
  const isPostIphone6PlusPortraitUp = useMedia(
    `(min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px)`
  );
  const isPostIphone6PortraitUp = useMedia(
    `(min-width: ${POST_IPHONE6_PORTRAIT_UP}px)`
  );
  const isPhonePortraitUp = useMedia(`(min-width: ${PHONE_PORTRAIT_UP}px)`);

  const calculateImgWidth = breakpointChecks => {
    if (breakpointChecks[0]) {
      return window.innerWidth / 3 - 32;
    } else if (breakpointChecks[1]) {
      return window.innerWidth / 3 - 16;
    } else if (breakpointChecks[2]) {
      return window.innerWidth / 2 - 32;
    } else if (breakpointChecks[3]) {
      return window.innerWidth / 2 - 32;
    } else if (breakpointChecks[4]) {
      return window.innerWidth / 2 - 24;
    }
  };

  const [imgWidth, setImgWidth] = useState(
    calculateImgWidth(
      [
        SMALL_DEVICES_LANDSCAPE_UP,
        PHONE_LANDSCAPE_UP,
        POST_IPHONE6_PLUS_PORTRAIT_UP,
        POST_IPHONE6_PORTRAIT_UP,
        PHONE_PORTRAIT_UP
      ].map(breakpoint => window.innerWidth >= breakpoint)
    )
  );

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  const handleOnClick = (e, image) => {
    setCurrentImage(image);

    setTimeout(() => {
      setIsLightboxOpen(true);
      document.body.className += " unscrollable";
    }, 100);
  };

  const handleOnClose = e => {
    setIsLightboxOpen(false);
    document.body.className = document.body.className.replace(
      /\bunscrollable\b/g,
      ""
    );
  };

  useEffect(() => {
    setImgWidth(
      calculateImgWidth([
        isSmallDevicesLandscapeUp,
        isPhoneLandscapeUp,
        isPostIphone6PlusPortraitUp,
        isPostIphone6PortraitUp,
        isPhonePortraitUp
      ])
    );
  }, [
    isSmallDevicesLandscapeUp,
    isPhoneLandscapeUp,
    isPostIphone6PlusPortraitUp,
    isPostIphone6PortraitUp,
    isPhonePortraitUp
  ]);

  return (
    <Fragment>
      <StyledGridAlbum>
        <StyledMasonryGrid>
          {images.map((image, i) => (
            <ImageTile
              image={image}
              key={i}
              imgWidth={imgWidth}
              handleOnClick={handleOnClick}
            />
          ))}
        </StyledMasonryGrid>
      </StyledGridAlbum>
      <Lightbox isOpened={isLightboxOpen} handleOnClose={handleOnClose}>
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          style={{ maxWidth: "80%", maxHeight: "80%" }}
        />
      </Lightbox>
    </Fragment>
  );
};

export default GridAlbum;
