import React, { Component } from "react";
import styled from "@emotion/styled";

import { AppContext } from "../AppProvider";
import Main from "../components/Main";
import CameraOverlay from "../components/CameraOverlay";

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 67.5em;
  background-image: url(${props => props.src || "none"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(21, 37, 64, 1);
`;

const StyledMission = styled.div`
  position: absolute;
  top: 42%;
  left: 2.8em;
`;

const StyledMissionTitle = styled.p`
  font-size: 2.25rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
`;

const StyledMissionBody = styled.p`
  font-size: 5rem;
  font-family: "Futura PT Extra";
`;

const StyledColoredSpan = styled.span`
  color: ${props => props.color};
`;

const StyledMissionFooter = styled.p`
  font-size: 1.5rem;
  font-family: "Futura PT Demi";
  color: rgba(255, 255, 255, 1);
  text-align: right;
  letter-spacing: 0.05em;
`;

class Homepage extends Component {
  componentDidMount() {
    const { handleIsBrandDark, handleIsNavbarDark } = this.props;
    handleIsBrandDark(false);
    handleIsNavbarDark(false);
  }

  render() {
    return (
      <Main>
        <StyledHero src="/img/photos/bridge_in_forest.png">
          <CameraOverlay />
          <StyledMission>
            <StyledMissionTitle>WE'RE GETTING MARRIED!</StyledMissionTitle>
            <StyledMissionBody>
              <StyledColoredSpan color="rgba(128, 149, 184, 1)">
                #
              </StyledColoredSpan>
              <StyledColoredSpan color="rgba(246, 233, 203, 1)">
                MINGOWEDDING
              </StyledColoredSpan>
            </StyledMissionBody>
            <StyledMissionFooter>
              10&#183;16&#183;19 | NEW YORK
            </StyledMissionFooter>
          </StyledMission>
        </StyledHero>
      </Main>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <Homepage
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
