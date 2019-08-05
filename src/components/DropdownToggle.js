import React, { Component } from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";

const StyledDropdownToggle = styled.span`
  color: ${props => (props.isNavbarDark ? "#152540" : "white")};
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.1875rem;
  padding: 0.4em 0.8em;
  transition: opacity 0.2s ease;
  opacity: ${props => (props.active ? "1" : "0.8")};
  cursor: default;
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
  font-size: 1.2rem;
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

  &:hover {
    background-color: rgba(240, 240, 240, 1);
  }
`;

class DropdownToggle extends Component {
  state = {
    opened: false
  };

  handleToggleOpen = opened => {
    this.setState({ opened });
  };

  render() {
    const { isNavbarDark, name, items, handleLinkClick, active } = this.props;
    const { opened } = this.state;

    return (
      <StyledDropdownToggle
        isNavbarDark={isNavbarDark}
        active={active}
        onMouseEnter={() => this.handleToggleOpen(true)}
        onMouseLeave={() => this.handleToggleOpen(false)}
        opened={opened}
      >
        {name}
        <StyledDropdown opened={opened}>
          {items.map((item, i) => (
            <StyledDropdownLink
              key={item.id}
              to={item.link}
              onClick={() => {
                this.handleToggleOpen(false);
                handleLinkClick(item.link);
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
