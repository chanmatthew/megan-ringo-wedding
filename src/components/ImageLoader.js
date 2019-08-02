import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";

const StyledImageLoader = styled.div`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  transition: filter 1s ease;
  filter: ${props => (!props.isLoaded ? "blur(3px)" : "unset")};
  background-image: url(${props => props.src});
  background-position: ${props => props.backgroundPosition || "center"};
  background-origin: border-box;
  background-size: ${props => props.backgroundSize || "cover"};
  border-radius: ${props => props.borderRadius};
  mix-blend-mode: ${props => props.mixBlendMode};

  ${props =>
    props.isCover &&
    `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `}
`;

const ImageLoader = ({
  className,
  placeholder,
  image,
  height,
  minHeight,
  width,
  minWidth,
  borderRadius,
  title,
  isCover,
  mixBlendMode,
  isVisible,
  backgroundPosition,
  backgroundSize
}) => {
  const [loadState, setLoadState] = useState({
    src: placeholder,
    isLoaded: false
  });

  const img = new Image();

  const loadImage = () => {
    setLoadState({
      src: img.src,
      isLoaded: true
    });
  };

  useEffect(() => {
    if (isVisible && !loadState.isLoaded) {
      img.addEventListener("load", loadImage, false);

      img.src = image;
    }

    return () => {
      if (isVisible && loadState.isLoaded) {
        img.removeEventListener("load", loadImage, false);
      }
    };
  }, [isVisible]);

  return (
    <StyledImageLoader
      className={className}
      mixBlendMode={mixBlendMode}
      isCover={isCover}
      title={title}
      width={width}
      minWidth={minWidth}
      height={height}
      minHeight={minHeight}
      borderRadius={borderRadius}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
      {...loadState}
    />
  );
};

export default ImageLoader;
