import React, { Component } from "react";
import { Router } from "@reach/router";
import Loadable from "react-loadable";

import { AppProvider } from "./AppProvider";
import SiteHeader from "./components/SiteHeader";

const AsyncOurStory = Loadable({
  loader: () => import("./views/OurStory"),
  loading: () => <span />
});

class App extends Component {
  render() {
    return (
      <AppProvider>
        <SiteHeader />
        <Router>
          <AsyncOurStory path="/" />
        </Router>
      </AppProvider>
    );
  }
}

export default App;
