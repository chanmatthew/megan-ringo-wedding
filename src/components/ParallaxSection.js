import React, { Fragment, cloneElement } from "react";
import { Spring } from "react-spring/renderprops";
import { ParallaxLayer } from "react-spring/renderprops-addons";

import VisibilitySensor from "./VisibilitySensor";

const ParallaxSection = ({
  offset,
  speed,
  factor,
  delay,
  isFadeIn,
  style,
  children
}) => (
  <ParallaxLayer offset={offset} speed={speed} factor={factor} style={style}>
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) =>
        isFadeIn ? (
          <Spring delay={delay} to={{ opacity: isVisible ? 1 : 0 }} native>
            {props => (
              <div style={{ ...props, height: "100%", width: "100%" }}>
                {cloneElement(children, {
                  style: props,
                  isVisible: isVisible,
                  baseFactor: factor
                })}
              </div>
            )}
          </Spring>
        ) : (
          <Fragment>
            {cloneElement(children, {
              isVisible: isVisible,
              baseFactor: factor
            })}
          </Fragment>
        )
      }
    </VisibilitySensor>
  </ParallaxLayer>
);
export default ParallaxSection;
