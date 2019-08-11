import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";
import Article from "../components/Article";
import LabelSection from "../components/LabelSection";
import {
  formatDate,
  formatTime,
  getCalendarIsoString,
  getMeridiem,
  getTimeZoneAbbr
} from "../utils";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  ,
  ,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const description =
  "The wedding ceremony of Megan and Ringo will be held at the Royal Queen Restaurant, a sophisticated Chinese restaurant and event space located in Flushing, NY, on October 26, 2019 from 6:00 PM to 11:00 PM EST.";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const StyledArticle = styled(({ backgroundColor, ...props }) => (
  <Article {...props} />
))`
  background-color: ${props => props.backgroundColor || "white"};
  width: 100%;
  min-height: 23.4em;
  flex: 1;
`;

const StyledActionLink = styled.a`
  color: #3498db;
  text-decoration: none;
  display: block;

  &:hover {
    opacity: 0.6;
  }
`;

const StyledEventDetailsContainer = styled.div`
  margin: 3em 0;
  text-align: center;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    margin: 4em 0;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    margin: 5em 0;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    margin: 4em 1em 0 1em;
    text-align: left;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    margin: 5em 2.2em 0 2.2em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    margin: 6em 2.7em 0 2.7em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    margin: 7em 3.1em 0 3.1em;
  }
`;

const StyledImg = styled.img`
  color: white;
  vertical-align: middle;
  width: 100%;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    width: 26em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 31em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    width: 38em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    width: 46em;
  }
`;

const event = {
  name: "Wedding Ceremony - Megan and Ringo",
  details: "For details, link here: https://meganandringo.com",
  location: {
    name: "Royal Queen Restaurant",
    streetAddress: "40-21 Main Street, 3rd Fl.",
    neighborhood: "Flushing",
    state: "New York",
    zipCode: "11354",
    get fullAddress() {
      return `${this.streetAddress}, ${this.neighborhood}, ${this.state} ${this.zipCode}`;
    },
    get googleMapsUrl() {
      return `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(
        this.name + ", " + this.fullAddress
      )}`;
    }
  },
  timeZoneAbbr: getTimeZoneAbbr(),
  start: new Date(Date.UTC(2019, 9, 26, 22, 0, 0)),
  end: new Date(Date.UTC(2019, 9, 27, 3, 0, 0)),
  get formattedDate() {
    return formatDate(this.start);
  },
  get formattedTimeSlot() {
    return `${formatTime(this.start)} - ${formatTime(this.end)} ${getMeridiem(
      this.end
    )}`;
  },
  get googleCalendarUrl() {
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${
      this.name
    }&dates=${getCalendarIsoString(this.start)}/${getCalendarIsoString(
      this.end
    )}&details=${this.details}&location=${this.location.name}, ${
      this.location.fullAddress
    }&sf=true&output=xml`.replace(/\s/g, "+");
  }
};

class WhenWhere extends Component {
  componentDidMount() {
    this.props.handleIsBrandDark(true);
    this.props.handleIsNavbarDark(false);
  }

  render() {
    return (
      <StyledMain>
        <Helmet>
          <title>Megan and Ringo's Wedding - The Ceremony</title>
          <meta name="description" content={description} />
          <meta content={description} property="og:description" />
          <link rel="canonical" href="https://meganandringo.com/when-where" />
        </Helmet>
        <StyledArticle left>
          <StyledEventDetailsContainer>
            <LabelSection
              top="10em"
              left="2.5em"
              category="Date"
              title={event.formattedDate.toUpperCase()}
            />
            <LabelSection
              top="24em"
              left="2.5em"
              category="Time"
              subtitle={`(${event.timeZoneAbbr})`}
              title={event.formattedTimeSlot.toUpperCase()}
            >
              <StyledActionLink
                href={event.googleCalendarUrl}
                target="_blank"
                rel="noreferrer"
              >
                Add to Google Calendar
              </StyledActionLink>
            </LabelSection>
            <LabelSection
              top="38em"
              left="2.5em"
              category="Location"
              title={event.location.name.toUpperCase()}
            >
              {event.location.streetAddress} <br />
              {event.location.neighborhood}, {event.location.state}{" "}
              {event.location.zipCode}
              <StyledActionLink
                margin="0.5em"
                href={event.location.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Location
              </StyledActionLink>
            </LabelSection>
          </StyledEventDetailsContainer>
        </StyledArticle>
        <StyledArticle right backgroundColor="rgba(21, 37, 64, 1)">
          <StyledImg
            src="/img/photos/wedding_poster.jpg"
            alt="Megan and Ringo Posing With a Kiss on a Movie Poster"
          />
        </StyledArticle>
      </StyledMain>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <WhenWhere
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
