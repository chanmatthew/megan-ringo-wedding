import React, { Component } from "react";

export const AppContext = React.createContext();

export class AppProvider extends Component {
  handleIsBrandDark = isBrandDark => {
    this.setState({ isBrandDark });
  };

  handleIsNavbarDark = isNavbarDark => {
    this.setState({ isNavbarDark });
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
