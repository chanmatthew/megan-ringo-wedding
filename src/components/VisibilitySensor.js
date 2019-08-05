import React, { useState } from "react";
import VSensor from "react-visibility-sensor";

const VisibilitySensor = ({ once, children, onVisible, ...rest }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <VSensor
      active={isActive}
      onChange={isVisible => {
        if (isVisible) {
          onVisible();

          if (once) {
            setIsActive(false);
          }
        }
      }}
      {...rest}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  );
};

VisibilitySensor.defaultProps = {
  onVisible: () => {}
};

export default VisibilitySensor;
