import React from "react";
import styled from "@emotion/styled/macro";
import { animated, useSpring, config } from "react-spring";
import { useMedia } from "../hooks";
import { MIN_WIDTH_BREAKPOINTS, PARALLAX_LAYER_HEIGHT } from "../enums";

const [, , , , , , , TABLET_PORTRAIT_UP] = MIN_WIDTH_BREAKPOINTS;

const AnimatedArticle = styled(({ isTabletPortraitUp, height, ...props }) => (
  <animated.div {...props} />
))`
  position: relative;
  height: ${props => props.height || PARALLAX_LAYER_HEIGHT}px;

  ${props =>
    props.isTabletPortraitUp &&
    `
    vertical-align: top;
    display: table-cell;
    width: 50%;
  `}
`;

const Article = ({
  left,
  right,
  reverse,
  reset,
  height,
  className,
  children
}) => {
  const isTabletPortraitUp = useMedia(`(min-width: ${TABLET_PORTRAIT_UP}px)`);

  const yTransform = {};

  if (left) {
    yTransform.to = "0%";
    yTransform.from = "10%";
  } else if (right) {
    yTransform.to = "0%";
    yTransform.from = "-10%";
  }

  const style = useSpring({
    to: { transform: `translate3d(0, ${yTransform.to}, 0)` },
    from: { transform: `translate3d(0, ${yTransform.from}, 0)` },
    config: config.slow,
    reverse: reverse || false,
    reset: reset || false
  });

  return (
    <AnimatedArticle
      className={className}
      isTabletPortraitUp={isTabletPortraitUp}
      height={height}
      style={isTabletPortraitUp ? style : null}
    >
      <article>{children}</article>
    </AnimatedArticle>
  );
};

export default Article;
