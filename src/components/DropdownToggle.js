import React, { Component } from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";
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

const StyledDropdownToggle = styled.span`
  color: ${props => (props.isNavbarDark ? "#152540" : "white")};
  font-size: 0.875rem;
  padding: 0.4em 0.8em;
  transition: opacity 0.2s ease;
  opacity: ${props => (props.active ? "1" : "0.8")};
  cursor: default;
  position: relative;
  white-space: nowrap;
  letter-spacing: 0.12rem;

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 0.875rem;
    letter-spacing: 0.1875rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.15rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.35rem;
  }

  ${"" /* &:not(:last-child) {
    margin-right: 1.3em;
  } */}

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
    opacity: ${props => (props.active && !props.opened ? "1" : "0")};
    transition: opacity 0.4s ease;
  }
`;

const StyledDropdown = styled.div`
  position: absolute;
  background-color: rgba(250, 250, 250, 1);
  left: 50%;
  top: calc(100% + 0.7em);
  transform: translate3d(-50%, ${props => (props.opened ? "0" : "1em")}, 0);
  border-radius: 0.2em;
  padding: 0.6em 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  opacity: ${props => (props.opened ? "1" : "0")};
  pointer-events: ${props => (props.opened ? "auto" : "none")};
  transition: transform 0.4s ease, opacity 0.4s ease;

  &::before {
    position: absolute;
    content: "";
    top: -0.49em;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    border-left: 0.5em solid transparent;
    border-right: 0.5em solid transparent;
    border-bottom: 0.5em solid rgba(250, 250, 250, 1);
  }

  &::after {
    position: absolute;
    content: "";
    background-color: transparent;
    width: 100%;
    height: 0.7em;
    bottom: 100%;
  }
`;

const StyledDropdownLink = styled(({ ...props }) => <Link {...props} />)`
  font-size: 0.875rem;
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: rgba(21, 37, 64, 1);
  letter-spacing: 0.1875rem;
  padding: 0 1.2em;
  line-height: 2.4em;
  transition: opacity 0.2s ease;
  white-space: nowrap;

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: rgba(240, 240, 240, 1);
  }
`;

class DropdownToggle extends Component {
  toggleRef = null;
  dropdownRef = null;

  state = {
    opened: false
  };

  componentDidMount() {
    document.addEventListener("touchstart", e => this.handleOutsideClick(e));
  }

  componentWillUnmount() {
    document.removeEventListener("touchstart", e => this.handleOutsideClick(e));
  }

  handleToggleOpen = opened => {
    this.setState({ opened });
  };

  handleOutsideClick = e => {
    if (
      this.state.opened &&
      e.target !== this.dropdownRef &&
      e.target !== this.toggleRef
    ) {
      this.handleToggleOpen(false);
    }
  };

  render() {
    const { isNavbarDark, name, items, active } = this.props;
    const { opened } = this.state;

    return (
      <StyledDropdownToggle
        isNavbarDark={isNavbarDark}
        active={active}
        onMouseEnter={() => this.handleToggleOpen(true)}
        onMouseLeave={() => this.handleToggleOpen(false)}
        onTouchStart={() =>
          opened ? this.handleToggleOpen(false) : this.handleToggleOpen(true)
        }
        opened={opened}
        ref={node => (this.toggleRef = node)}
      >
        {name}
        <StyledDropdown opened={opened} ref={node => (this.dropdownRef = node)}>
          {items.map((item, i) => (
            <StyledDropdownLink
              key={item.id}
              to={item.link}
              onClick={() => {
                this.handleToggleOpen(false);
              }}
            >
              {item.label}
            </StyledDropdownLink>
          ))}
        </StyledDropdown>
      </StyledDropdownToggle>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ isNavbarDark }) => (
      <DropdownToggle {...props} isNavbarDark={isNavbarDark} />
    )}
  </AppContext.Consumer>
);
