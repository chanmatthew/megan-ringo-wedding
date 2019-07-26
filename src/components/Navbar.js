import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

import { AppContext } from "../AppProvider";
import DropdownToggle from "./DropdownToggle";

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

const ceremonyLinks = [
  { name: "WHEN & WHERE", to: "/when-where" },
  { name: "BRIDESMAIDS & GROOMSMEN", to: "/bridesmaids-groomsmen" }
];

const Navbar = ({ activeLink, handleLinkClick, isNavbarDark }) => (
  <nav>
    <ul>
      <StyledLink
        to="/our-story"
        onClick={() => handleLinkClick("/our-story")}
        isNavbarDark={isNavbarDark}
        active={activeLink === "/our-story"}
      >
        OUR STORY
      </StyledLink>
      <DropdownToggle
        name="THE CEREMONY"
        links={ceremonyLinks}
        handleLinkClick={handleLinkClick}
        active={ceremonyLinks.filter(link => link.to === activeLink).length > 0}
      />
      <StyledLink
        to="/album"
        onClick={() => handleLinkClick("/album")}
        isNavbarDark={isNavbarDark}
        active={activeLink === "/album"}
      >
        ALBUM
      </StyledLink>
      <StyledLink
        to="/rsvp"
        onClick={() => handleLinkClick("/rsvp")}
        isNavbarDark={isNavbarDark}
        active={activeLink === "/rsvp"}
      >
        RSVP
      </StyledLink>
    </ul>
  </nav>
);

export default props => (
  <AppContext.Consumer>
    {({ isNavbarDark }) => <Navbar {...props} isNavbarDark={isNavbarDark} />}
  </AppContext.Consumer>
);
