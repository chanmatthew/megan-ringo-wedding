import React, { Component } from "react";
import styled from "@emotion/styled";

import Brand from "./Brand";
import Navbar from "./Navbar";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 1.5em;
  position: relative;
  z-index: 1;
`;

class SiteHeader extends Component {
  state = {
    activeLink: "/"
  };

  componentDidMount() {
    this.setState({
      activeLink: window.location.pathname
    });
  }

  componentDidUpdate() {
    window.onpopstate = () => {
      this.setState({
        activeLink: window.location.pathname
      });
    };
  }

  handleLinkClick = link => {
    this.setState({
      activeLink: link
    });
  };

  render() {
    return (
      <Header>
        <Brand handleLinkClick={this.handleLinkClick} />
        <Navbar
          activeLink={this.state.activeLink}
          handleLinkClick={this.handleLinkClick}
        />
      </Header>
    );
  }
}

export default SiteHeader;
