import React, { Component } from "react";

export const AppContext = React.createContext();

export class AppProvider extends Component {
  handleIsBrandDark = bool => {
    this.setState({
      isBrandDark: bool
    });
  };

  handleIsNavbarDark = bool => {
    this.setState({
      isNavbarDark: bool
    });
  };

  state = {
    isBrandDark: true,
    isNavbarDark: true,
    handleIsBrandDark: this.handleIsBrandDark,
    handleIsNavbarDark: this.handleIsNavbarDark
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
