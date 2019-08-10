import React, { useEffect, useMemo } from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled/macro";
import { animated, useSpring, config } from "react-spring";

import { AppContext } from "../AppProvider";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledMobileMenu = styled("div")`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-top: 4.25em;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    padding-top: 5.25em;
  }
`;

const NavList = styled("ul")`
  max-width: 10.75em;
  padding-bottom: 3.25em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    max-width: 12.75em;
    padding-bottom: 4.25em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    max-width: 14.75em;
    padding-bottom: 5.25em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    max-width: 18.75em;
    padding-bottom: 6.25em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    max-width: 22.75em;
    padding-bottom: 7.25em;
  }
`;

const NavListItem = styled(animated.li)`
  display: block;
  margin-bottom: 1.625em;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    margin-bottom: 2em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-bottom: 2.625em;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LinkLabel = styled("span")`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.1875;
  color: #152540;
  display: block;
  text-transform: uppercase;
  margin-bottom: 0.05em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.6rem;
    margin-bottom: 0.1em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 1.8rem;
    margin-bottom: 0.2em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 2.4rem;
    margin-bottom: 0.2em;
  }
`;

const LinkDesc = styled("span")`
  display: block;
  font-size: 0.875rem;
  line-height: 1.3;
  color: #657590;
  text-transform: uppercase;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.25rem;
  }
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

  let mobileMenuRef = null;

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

  useEffect(() => {
    if (isToggled) {
      mobileMenuRef.scrollTop = 0;
    }
  }, [isToggled]);

  return (
    <StyledMobileMenu ref={ref => (mobileMenuRef = ref)}>
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
