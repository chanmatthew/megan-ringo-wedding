import React, { Fragment, useState } from "react";
import styled from "@emotion/styled/macro";
import SVG from "react-inlinesvg";
import Loadable from "react-loadable";
import { useSpring, config, animated } from "react-spring";

const AsyncMobileMenu = Loadable({
  loader: () => import("./MobileMenu"),
  loading: () => <span />
});

const StyledMobileToggle = styled("button")`
  display: flex;
  align-items: center;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const StyledHeartOutline = styled.div`
  margin-right: 0.5em;

  > svg {
    width: 36px;
  }

  ${props =>
    props.isToggled &&
    `
    z-index: 1;
  `}
`;

const StyledCaret = styled.div`
  color: ${props => (props.isToggled ? "#a6afc4;" : "#FFFFFF")};
  transition: transform 250ms ease-in-out;
  display: flex;
  align-items: center;

  svg {
    width: 12px;
  }

  ${props =>
    props.isToggled &&
    `
    z-index: 1;
    transform: rotate(180deg);
  `}
`;

const MobileNavbar = ({ isToggled, openMenu, closeMenu }) => {
  const { menuY } = useSpring({
    from: { menuY: 0 },
    menuY: isToggled ? 1 : 0,
    config: config.slow
  });

  return (
    <Fragment>
      <StyledMobileToggle onClick={isToggled ? closeMenu : openMenu}>
        <StyledHeartOutline
          className={isToggled ? "" : "no-fill"}
          isToggled={isToggled}
        >
          <SVG
            src="/img/graphics/heart_outline.svg"
            alt="Blue-Gold Heart - Outline"
          />
        </StyledHeartOutline>
        <StyledCaret isToggled={isToggled}>
          <SVG src="/img/graphics/caret.svg" alt="Caret" />
        </StyledCaret>
      </StyledMobileToggle>
      <animated.div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          opacity: menuY.interpolate({ output: [0, 1] }),
          transform: menuY
            .interpolate({ range: [0, 1], output: ["-100vh", "0"] })
            .interpolate(y => `translate3d(0, ${y}, 0)`)
        }}
      >
        <AsyncMobileMenu isToggled={isToggled} onNavItemClick={closeMenu} />
      </animated.div>
    </Fragment>
  );
};

export default MobileNavbar;
