import React from "react";
import { animated, useSpring, config } from "react-spring";
import { useMedia } from "../hooks";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [, , , , , , , TABLET_PORTRAIT_UP] = MIN_WIDTH_BREAKPOINTS;

const Article = ({ left, right, reverse, reset, className, children }) => {
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
    <animated.div
      className={className}
      style={isTabletPortraitUp ? style : null}
    >
      <article>{children}</article>
    </animated.div>
  );
};

export default Article;
