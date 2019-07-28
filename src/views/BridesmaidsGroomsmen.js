import React, { Component } from "react";
import styled from "@emotion/styled";

import { AppContext } from "../AppProvider";
import Main from "../components/Main";
import Card from "../components/Card";

const StyledPageHeaderImage = styled.div`
  position: absolute;
  width: 100%;
  height: 25.125em;
  background-image: ${props => `url(${props.src})` || "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledPageTitle = styled.h1`
  font-size: 2rem;
  position: absolute;
  left: 50%;
  bottom: 0.8em;
  padding: 0.5em 1em;
  letter-spacing: 0.083em;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(54, 63, 84, 1);
  transform: translate3d(-50%, 50%, 0);
  box-shadow: 0 5px 10px 0 rgba(37, 41, 82, 0.1);
`;

const StyledSection = styled.section`
  display: flex;
`;

const StyledCardContainer = styled.article`
  width: 50%;
  padding: 31.25em 1.5em 7em 1.5em;
  background-color: ${props => props.color};
`;

const StyledContainerHeading = styled.h2`
  font-size: 4.375rem;
  font-weight: bold;
  color: ${props => props.color};
  text-align: center;
  margin-bottom: 2em;
`;

const StyledCardRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledSpecialTitle = styled.div`
  position: absolute;
  font-size: 1.25rem;
  top: -2em;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  white-space: nowrap;
  color: ${props => props.color};
  display: flex;
  align-items: center;
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
      <Main>
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
      </Main>
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
