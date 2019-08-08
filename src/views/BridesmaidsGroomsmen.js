import React, { Component } from "react";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";
import Card from "../components/Card";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledMain = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledPageHeaderImage = styled.div`
  width: 100%;
  background-image: ${props => `url(${props.src})` || "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(246, 233, 203, 1);
  position: relative;
  height: 15.125em;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    height: 18.125em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    position: absolute;
    background-color: transparent;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    height: 20.125em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    height: 23.125em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    height: 25.125em;
  }
`;

const StyledPageTitle = styled.h1`
  font-size: 1.25rem;
  position: absolute;
  left: 50%;
  bottom: 0.8em;
  padding: 0.5em 1em;
  letter-spacing: 0.083em;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(54, 63, 84, 1);
  transform: translate3d(-50%, 50%, 0);
  box-shadow: 0 5px 10px 0 rgba(37, 41, 82, 0.1);
  white-space: nowrap;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.625rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 2rem;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    flex-direction: row;
  }
`;

const StyledCardContainer = styled.article`
  width: 100%;
  background-color: ${props => props.color};
  padding: 3.25em 0em 1em 0em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    padding: 4.25em 0.5em 1em 0.5em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    padding: 5.25em 0.5em 1em 0.5em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    padding: 5.25em 0.5em 1em 0.5em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    width: 50%;
    padding: 22.25em 0.5em 1em 0.5em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    padding: 25.25em 1em 1em 1em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    padding: 28.25em 1.5em 1em 1.5em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    padding: 31.25em 1.5em 1em 1.5em;
  }
`;

const StyledContainerHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.color};
  text-align: center;
  margin-bottom: 1.5em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 3.2rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 3.8rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 3.8rem;
    margin-bottom: 2em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 4.375rem;
  }
`;

const StyledCardRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledSpecialTitle = styled.div`
  position: absolute;
  font-size: 1rem;
  letter-spacing: 0.1em;
  top: -2em;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  white-space: nowrap;
  color: ${props => props.color};
  display: flex;
  align-items: center;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 0.75rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.25rem;
  }
`;

const StyledCrown = styled.div`
  height: 1.75em;
  width: 1.75em;
  background-image: ${props => `url(${props.src})` || "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 0.5em;
`;

const bridesmaids = [
  [{ name: "Michelle", maidOfHonor: true }],
  [{ name: "Shirley" }, { name: "Alexia" }],
  [{ name: "Tracy" }, { name: "Cathy" }],
  [{ name: "Priscilla" }]
];

const groomsmen = [
  [{ name: "Richard", bestMan: true }],
  [{ name: "Mario" }, { name: "Tommy" }],
  [{ name: "David" }, { name: "Jackson" }],
  [{ name: "Ken" }, { name: "Matthew" }]
];

class BridesmaidsGroomsmen extends Component {
  componentDidMount() {
    const { handleIsBrandDark, handleIsNavbarDark } = this.props;
    handleIsBrandDark(false);
    handleIsNavbarDark(false);
  }

  render() {
    return (
      <StyledMain>
        <StyledPageHeaderImage src="/img/photos/bridesmaids_groomsmen_header.png">
          <StyledPageTitle>MEET THE...</StyledPageTitle>
        </StyledPageHeaderImage>
        <StyledSection>
          <StyledCardContainer color="rgba(246, 233, 203, 1)">
            <StyledContainerHeading color="rgba(128, 149, 184, 1)">
              BRIDESMAIDS
            </StyledContainerHeading>
            {bridesmaids.map((row, i) => (
              <StyledCardRow key={`bridesmaid__row--${i}`}>
                {row.map((bridesmaid, i) => (
                  <Card
                    key={`bridesmaid.name--${i}`}
                    src={`/img/photos/bridesmaids/${bridesmaid.name}.png`}
                    name={bridesmaid.name}
                  >
                    {bridesmaid.maidOfHonor ? (
                      <StyledSpecialTitle color="rgba(128, 149, 184, 1)">
                        MAID OF{" "}
                        <StyledCrown src={`/img/graphics/crown_moh.svg`} />{" "}
                        HONOR
                      </StyledSpecialTitle>
                    ) : null}
                  </Card>
                ))}
              </StyledCardRow>
            ))}
          </StyledCardContainer>
          <StyledCardContainer color="rgba(128, 149, 184, 1)">
            <StyledContainerHeading color="rgba(246, 233, 203, 1)">
              GROOMSMEN
            </StyledContainerHeading>
            {groomsmen.map((row, i) => (
              <StyledCardRow key={`groomsman--${i}`}>
                {row.map((groomsman, i) => (
                  <Card
                    key={`groomsman.name--${i}`}
                    src={`/img/photos/groomsmen/${groomsman.name}.png`}
                    name={groomsman.name}
                  >
                    {groomsman.bestMan ? (
                      <StyledSpecialTitle color="rgba(246, 233, 203, 1)">
                        BEST <StyledCrown src={`/img/graphics/crown_bm.svg`} />{" "}
                        MAN
                      </StyledSpecialTitle>
                    ) : null}
                  </Card>
                ))}
              </StyledCardRow>
            ))}
          </StyledCardContainer>
        </StyledSection>
      </StyledMain>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <BridesmaidsGroomsmen
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
