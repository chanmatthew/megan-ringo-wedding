import React, { Component } from "react";
import styled from "@emotion/styled";

import { AppContext } from "../AppProvider";
import Main from "../components/Main";
import Article from "../components/Article";
import LabelSection from "../components/LabelSection";

const StyledActionLink = styled.a`
  font-size: 1.75rem;
  color: #3498db;
  text-decoration: none;
  margin-left: ${props => (props.margin ? props.margin : "0")};

  &:hover {
    opacity: 0.6;
  }
`;

class WhenWhere extends Component {
  componentDidMount() {
    this.props.handleIsNavbarDark(false);
  }

  render() {
    return (
      <Main>
        <Article left view="0">
          <LabelSection
            top="10em"
            left="2.5em"
            category="Date"
            title="SAT, OCT 16"
          />
          <LabelSection
            top="24em"
            left="2.5em"
            category="Time"
            title="6:00 - 11:00 PM"
          >
            <StyledActionLink href="" target="_blank" rel="noreferrer">
              Add to Google Calendar
            </StyledActionLink>
          </LabelSection>
          <LabelSection
            top="38em"
            left="2.5em"
            category="Location"
            title="ROYAL QUEEN RESTAURANT"
          >
            40-21 Main Street, 3rd Fl. <br />
            Flushing, NY 11354
            <StyledActionLink
              margin="0.5em"
              href="https://www.google.com/maps/place/40-21+Main+St+3rd+Fl,+Flushing,+NY+11354/@40.7590825,-73.8316249,17z/data=!3m1!4b1!4m5!3m4!1s0x89c26011e70977b7:0xbb1733c952b00151!8m2!3d40.7590825!4d-73.8294362"
              target="_blank"
              rel="noreferrer"
            >
              View Location
            </StyledActionLink>
          </LabelSection>
        </Article>
        <Article right view="0" wide={true}>
          <img
            src="/img/photos/wedding_poster.png"
            alt="Megan and Ringo Posing With a Kiss on a Movie Poster"
          />
        </Article>
      </Main>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ handleIsNavbarDark }) => (
      <WhenWhere {...props} handleIsNavbarDark={handleIsNavbarDark} />
    )}
  </AppContext.Consumer>
);
