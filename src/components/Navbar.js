import React, { Component } from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

import { AppContext } from "../AppProvider";

const StyledLink = styled(({ isNavbarDark, ...props }) => <Link {...props} />)`
  text-decoration: none;
  color: ${props => (props.isNavbarDark ? "#152540" : "white")};
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.1875rem;
  padding: 0.4em 0.8em;
  transition: opacity 0.2s ease;

  &:not(:last-child) {
    margin-right: 1.3em;
  }

  &:hover {
    opacity: 0.6;
  }

  &.active {
    position: relative;
  }

  &.active::after {
    position: absolute;
    content: "";
    border-bottom: 2px solid
      ${props => (props.isNavbarDark ? "#152540" : "white")};
    width: 40%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    bottom: -0.1em;
  }
`;

class Navbar extends Component {
  state = {
    activeLink: ""
  };

  componentDidMount() {
    this.setState({
      activeLink: window.location.pathname
    });
  }

  handleLinkClick = link => {
    this.setState({
      activeLink: link
    });
  };

  render() {
    const { activeLink } = this.state;

    return (
      <nav>
        <ul>
          <StyledLink
            to="/"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => this.handleLinkClick("/")}
            isNavbarDark={this.props.isNavbarDark}
          >
            OUR STORY
          </StyledLink>
          <StyledLink
            to="/when-where"
            className={activeLink === "/when-where" ? "active" : ""}
            onClick={() => this.handleLinkClick("/when-where")}
            isNavbarDark={this.props.isNavbarDark}
          >
            WHEN & WHERE
          </StyledLink>
          <StyledLink
            to="/album"
            className={activeLink === "/album" ? "active" : ""}
            onClick={() => this.handleLinkClick("/album")}
            isNavbarDark={this.props.isNavbarDark}
          >
            ALBUM
          </StyledLink>
          <StyledLink
            to="/rsvp"
            className={activeLink === "/rsvp" ? "active" : ""}
            onClick={() => this.handleLinkClick("/rsvp")}
            isNavbarDark={this.props.isNavbarDark}
          >
            RSVP
          </StyledLink>
        </ul>
      </nav>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ isNavbarDark }) => <Navbar {...props} isNavbarDark={isNavbarDark} />}
  </AppContext.Consumer>
);
