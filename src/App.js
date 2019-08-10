import React, { useState, useEffect } from "react";
import { Router, Location } from "@reach/router";
import Loadable from "react-loadable";
import { animated, config } from "react-spring";
import { Transition } from "react-spring/renderprops";
import styled from "@emotion/styled/macro";
import { Parallax } from "react-spring/renderprops-addons";

import { useMedia, useLocation } from "./hooks";
import { MIN_WIDTH_BREAKPOINTS, PARALLAX_LAYER_HEIGHT } from "./enums";
import { AppProvider } from "./AppProvider";
import SiteHeader from "./components/SiteHeader";

const [, , , , , , , TABLET_PORTRAIT_UP, ,] = MIN_WIDTH_BREAKPOINTS;

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

const AsyncBridesmaidsGroomsmen = Loadable({
  loader: () => import("./views/BridesmaidsGroomsmen"),
  loading: () => <span />
});

const AsyncRSVP = Loadable({
  loader: () => import("./views/RSVP"),
  loading: () => <span />
});

const StyledParallaxContainer = styled.div`
  min-height: 100vh;
`;

const StyledParallax = styled(
  ({ isOverflowY, parallaxBackground, ...props }) => <Parallax {...props} />
)`
  overflow: ${props =>
    props.isOverflowY ? "visible" : "hidden scroll"} !important;

  & > div {
    overflow: ${props => props.isOverflowY && "visible !important"};
    height: ${props => props.isOverflowY && "100% !important"};
  }
`;

const calculatePages = (currentPath, isGreaterThanTablet, baseFactor) => {
  switch (currentPath) {
    case "/when-where":
      return isGreaterThanTablet
        ? window.innerHeight > PARALLAX_LAYER_HEIGHT
          ? 1
          : baseFactor
        : 2 * baseFactor;
    case "/":
    case "/album":
    case "/rsvp":
    case "/bridesmaids-groomsmen":
      return window.innerHeight > PARALLAX_LAYER_HEIGHT ? 1 : baseFactor;
    default:
      return baseFactor * (isGreaterThanTablet ? 7.0375 : 8.0375);
  }
};

let isLoading = true;

const App = () => {
  const isGreaterThanTablet = useMedia(
    `(min-width: ${TABLET_PORTRAIT_UP}px)`,
    window.innerWidth >= TABLET_PORTRAIT_UP
  );

  const currentLocation = useLocation();

  const [baseFactor, setBaseFactor] = useState(
    PARALLAX_LAYER_HEIGHT / window.innerHeight
  );

  const [pages, setPages] = useState(
    calculatePages(window.location.pathname, isGreaterThanTablet, baseFactor)
  );

  const [isOverflowY, setIsOverflowY] = useState(
    currentLocation.location.pathname !== "/our-story" &&
      currentLocation.location.pathname !== "/when-where"
  );

  let parallaxRef = null;

  let update = () => {
    let factor = PARALLAX_LAYER_HEIGHT / window.innerHeight;

    setBaseFactor(factor);
    setPages(
      calculatePages(window.location.pathname, isGreaterThanTablet, factor)
    );
  };

  let updateRaf = () => {
    window.requestAnimationFrame(update);

    //  Some browsers don't fire on maximize.
    setTimeout(update, 150);
  };

  useEffect(() => {
    if (isLoading) {
      window.addEventListener("resize", updateRaf, false);

      isLoading = false;
    }

    setPages(
      calculatePages(
        currentLocation.location.pathname,
        isGreaterThanTablet,
        baseFactor
      )
    );

    setIsOverflowY(
      currentLocation.location.pathname !== "/our-story" &&
        currentLocation.location.pathname !== "/when-where"
    );

    return () => {
      window.removeEventListener("resize", updateRaf, false);
    };
  }, [currentLocation, isGreaterThanTablet]);

  return (
    <StyledParallaxContainer>
      <StyledParallax
        ref={ref => (parallaxRef = ref)}
        pages={pages}
        isOverflowY={isOverflowY}
        native
      >
        <AppProvider>
          <SiteHeader />
          <Location>
            {({ location }) => (
              <Transition
                unique
                reset
                // reset
                native={!isGreaterThanTablet}
                items={location}
                keys={location.pathname.split("/")[1]}
                delay={300}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                config={config.gentle}
              >
                {(loc, state) => style => (
                  <animated.div style={style}>
                    <Router
                      location={state === "update" ? location : loc}
                      primary={false}
                      basepath={process.env.PUBLIC_URL}
                    >
                      <AsyncHomepage path="/" />
                      <AsyncOurStory
                        path="our-story"
                        baseFactor={baseFactor}
                        isGreaterThanTablet={isGreaterThanTablet}
                      />
                      <AsyncWhenWhere path="when-where" />
                      <AsyncBridesmaidsGroomsmen path="bridesmaids-groomsmen" />
                      <AsyncRSVP path="rsvp" />
                    </Router>
                  </animated.div>
                )}
              </Transition>
            )}
          </Location>
        </AppProvider>
      </StyledParallax>
    </StyledParallaxContainer>
  );
};

export default App;
