import React, { Component } from "react";
import { Router } from "@reach/router";
import Loadable from "react-loadable";

import { AppProvider } from "./AppProvider";
import SiteHeader from "./components/SiteHeader";

const AsyncHomepage = Loadable({
  loader: () => import("./views/Homepage"),
  loading: () => <span />
});

const AsyncOurStory = Loadable({
  loader: () => import("./views/OurStory"),
  loading: () => <span />
});

const AsyncWhenWhere = Loadable({
  loader: () => import("./views/WhenWhere"),
  loading: () => <span />
});

const AsyncRSVP = Loadable({
  loader: () => import("./views/RSVP"),
  loading: () => <span />
});

class App extends Component {
  render() {
    return (
      <AppProvider>
        <SiteHeader />
        <Router>
          <AsyncHomepage path="/" />
          <AsyncOurStory path="our-story" />
          <AsyncWhenWhere path="when-where" />
          <AsyncRSVP path="rsvp" />
        </Router>
      </AppProvider>
    );
  }
}

export default App;
