import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";

import DropdownToggle from "./DropdownToggle";

import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledNavbar = styled("nav")`
  display: flex;
  justify-content: flex-end;
`;

const StyledNavList = styled("ul")`
  display: flex;
`;

const StyledNavListItem = styled("li")`
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 0.1em;

    @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
      margin-right: 0.7em;
    }

    @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
      margin-right: 1em;
    }

    @media only screen and (min-width: ${DESKTOP_UP}px) {
      margin-right: 1.3em;
    }
  }
`;

const StyledLink = styled(({ isNavbarDark, active, ...props }) => (
  <Link {...props} />
))`
  text-decoration: none;
  color: ${props => (props.isNavbarDark ? "#152540" : "white")};
  font-size: 1rem;
  padding: 0.2em 0.4em;
  transition: opacity 0.2s ease;
  opacity: ${props => (props.active ? "1" : "0.8")};
  position: relative;
  white-space: nowrap;
  letter-spacing: 0.12rem;

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1rem;
    letter-spacing: 0.1875rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.2rem;
    padding: 0.3em 0.6em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.4rem;
    padding: 0.4em 0.8em;
  }

  &:hover {
    opacity: 1;
  }

  &::after {
    position: absolute;
    content: "";
    border-bottom: 2px solid
      ${props => (props.isNavbarDark ? "#152540" : "white")};
    width: 40%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    bottom: -0.1em;
    opacity: ${props => (props.active ? "1" : "0")};
    transition: opacity 0.4s ease;
  }
`;

const Navbar = ({
  activeLink,
  handleLinkClick,
  isNavbarDark,
  navigationItems
}) => (
  <StyledNavbar>
    <StyledNavList>
      {navigationItems.map(item =>
        !item.hidden ? (
          <StyledNavListItem key={item.id}>
            {item.dropdownItems ? (
              <DropdownToggle
                name={item.label}
                items={item.dropdownItems}
                handleLinkClick={handleLinkClick}
                active={
                  item.dropdownItems.filter(dItem => dItem.link === activeLink)
                    .length > 0
                }
              />
            ) : (
              <StyledLink
                to={`${process.env.PUBLIC_URL}${item.link}`}
                onClick={() => handleLinkClick(item.link)}
                isNavbarDark={isNavbarDark}
                active={activeLink === item.link}
              >
                {item.label}
              </StyledLink>
            )}
          </StyledNavListItem>
        ) : null
      )}
    </StyledNavList>
  </StyledNavbar>
);

export default props => (
  <AppContext.Consumer>
    {({ isNavbarDark, navigationItems }) => (
      <Navbar
        {...props}
        isNavbarDark={isNavbarDark}
        navigationItems={navigationItems}
      />
    )}
  </AppContext.Consumer>
);
