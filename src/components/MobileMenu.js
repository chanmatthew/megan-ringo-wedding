import React, { useMemo } from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled/macro";
import { animated, useSpring, config } from "react-spring";

import { AppContext } from "../AppProvider";

const StyledMobileMenu = styled("div")`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavList = styled("ul")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 320px;
`;

const NavListItem = styled(animated.li)`
  margin-bottom: 1.625em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LinkLabel = styled("span")`
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.1875;
  color: #152540;
  display: block;
  text-transform: uppercase;
  margin-bottom: 0.3em;
`;

const LinkDesc = styled("span")`
  display: block;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
  color: #657590;
  text-transform: uppercase;
`;

const MobileMenu = ({ isToggled, navigationItems, onNavItemClick }) => {
  const memoizedNavigationItems = useMemo(
    () =>
      navigationItems.reduce(
        (acc, item) =>
          acc.concat(item.dropdownItems ? item.dropdownItems : item),
        []
      ),
    [navigationItems]
  );

  const styles = memoizedNavigationItems.map((item, i) =>
    useSpring({
      to: {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      },
      from: {
        opacity: "0",
        transform: "translate3d(0, 2em, 0)"
      },
      delay: 1000 + 200 * i,
      config: config.slow,
      reverse: !isToggled,
      reset: isToggled,
      immediate: !isToggled
    })
  );
  return (
    <StyledMobileMenu>
      <NavList>
        {memoizedNavigationItems.map(({ label, desc, link, id }, i) => (
          <NavListItem key={id} style={styles[i]}>
            <StyledLink to={link} onClick={onNavItemClick}>
              <LinkLabel>{label}</LinkLabel>
              <LinkDesc>{desc}</LinkDesc>
            </StyledLink>
          </NavListItem>
        ))}
      </NavList>
    </StyledMobileMenu>
  );
};

export default props => (
  <AppContext.Consumer>
    {({ navigationItems }) => (
      <MobileMenu {...props} navigationItems={navigationItems} />
    )}
  </AppContext.Consumer>
);
