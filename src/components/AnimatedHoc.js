import React from "react";
import { animated, useSpring, config } from "react-spring";

const AnimatedHoc = Component => ({ animation, ...props }) => {
  if (!animation) {
    return <Component {...props} />;
  }

  const style = useSpring({
    ...(animation && !animation.to && !animation.from && !animation.delay
      ? {
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)"
          },
          from: {
            opacity: 0,
            transform: "translate3d(0, 2em, 0)"
          },
          delay: 500
        }
      : {
          to: {
            transform: `${animation.to.transform}`,
            opacity: `${animation.to.opacity}`
          },
          from: {
            transform: `${animation.from.transform}`,
            opacity: `${animation.from.opacity}`
          },
          delay: animation.delay || 0
        }),
    config: animation.config || config.slow,
    reverse: animation.reverse || false,
    reset: animation.reset || false
  });

  return (
    <animated.div
      style={{
        ...style,
        height: animation.height,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }}
    >
      <Component {...props} />
    </animated.div>
  );
};

export default AnimatedHoc;
