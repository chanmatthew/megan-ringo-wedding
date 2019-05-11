import React, { Component } from "react";

import { AppContext } from "../AppProvider";
import Main from "../components/Main";
import Introduction from "./Introduction";
import XYearsLater from "./XYearsLater";
import SheSaidYes from "./SheSaidYes";

class OurStory extends Component {
  componentDidMount() {
    this.props.handleIsBrandDark(true);
    this.props.handleIsNavbarDark(false);
  }

  render() {
    return (
      <Main>
        <Introduction view="0" />
        <XYearsLater view="1" invert />
        <SheSaidYes view="2" />
      </Main>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <OurStory
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
