import React, { useMemo, memo } from "react";
import styled from "@emotion/styled/macro";
import { animated, useSpring, config } from "react-spring";

const getFloatValue = (right, left) =>
  right ? "right" : left ? "left" : "none";

const StyledSkewPanel = styled.div`
  position: absolute;
  height: 100%;
  width: ${props => props.skewWidth};
  max-width: ${props => props.maxSkewWidth};
  transform: translate3d(${props => (props.right ? "-100%" : "0")}, 0, 0);
  top: 0;
  left: ${props => (props.right ? "100%" : props.left ? "0" : "auto")};
`;

const StyledSkew = styled.div`
  transform: ${props =>
    props.skewOffset &&
    `skew(${
      props.right ? "-6deg" : props.left ? "6deg" : "0deg"
    }, 0deg) translate3d(${props.skewOffset}, 0, 0)`};
  background-color: ${props => props.backgroundColor};
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledContent = styled.div`
  float: ${props => getFloatValue(props.right, props.left)};
  color: ${props => props.color || "white"};
  position: relative;
  width: 100%;
`;

const AnimatedSkewPanel = styled(
  ({ left, right, height, contentWidth, maxContentWidth, ...props }) => (
    <animated.article {...props} />
  )
)`
  position: relative;
  float: ${props => getFloatValue(props.right, props.left)};
  height: ${props => props.height || "auto"};
  width: ${props => props.contentWidth || "auto"};
  max-width: ${props => props.maxContentWidth || "none"};
`;

const SkewPanel = ({
  className,
  backgroundColor,
  height,
  contentWidth,
  maxContentWidth,
  skewWidth,
  maxSkewWidth,
  skewOffset,
  left,
  right,
  color,
  children
}) => {
  const xTransform = {};

  if (left) {
    xTransform.from = "-50%";
    xTransform.to = "0%";
  } else if (right) {
    xTransform.from = "50%";
    xTransform.to = "0%";
  }

  const style = useSpring({
    from: { transform: `translate3d(${xTransform.from}, 0, 0)` },
    to: { transform: `translate3d(${xTransform.to}, 0, 0)` },
    config: config.slow
  });

  return (
    <AnimatedSkewPanel
      className={className}
      right={right}
      left={left}
      height={height}
      contentWidth={contentWidth}
      maxContentWidth={maxContentWidth}
      style={style}
    >
      <StyledSkewPanel
        right={right}
        left={left}
        skewWidth={skewWidth}
        maxSkewWidth={maxSkewWidth}
      >
        <StyledSkew
          right={right}
          left={left}
          skewOffset={skewOffset}
          backgroundColor={backgroundColor}
        />
      </StyledSkewPanel>
      <StyledContent right={right} left={left} color={color}>
        {children}
      </StyledContent>
    </AnimatedSkewPanel>
  );
};

export const BaseStyledSkewPanel = StyledSkewPanel;
export const BaseStyledSkew = StyledSkew;

export default SkewPanel;
