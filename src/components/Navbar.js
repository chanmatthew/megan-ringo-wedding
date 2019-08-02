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

const BTWN_TABLET_PORTRAIT_LANDSCAPE_UP = 896;

const StyledNavbar = styled("nav")`
  display: flex;
  justify-content: center;
`;

const StyledNavList = styled("ul")`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledNavListItem = styled("li")`
  text-transform: uppercase;
`;

const StyledLink = styled(({ isNavbarDark, active, ...props }) => (
  <Link {...props} />
))`
  text-decoration: none;
  color: ${props => (props.isNavbarDark ? "#152540" : "white")};
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.1875rem;
  padding: 0.4em 0.8em;
  transition: opacity 0.2s ease;
  opacity: ${props => (props.active ? "1" : "0.8")};
  position: relative;

  &:not(:last-child) {
    margin-right: 1.3em;
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
      {navigationItems.map(item => (
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
              to={item.link}
              onClick={() => handleLinkClick(item.link)}
              isNavbarDark={isNavbarDark}
              active={activeLink === item.link}
            >
              {item.label}
            </StyledLink>
          )}
        </StyledNavListItem>
      ))}
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
