import React, { Component } from "react";
import styled from "@emotion/styled";

import { AppContext } from "../AppProvider";
import Main from "../components/Main";
import Article from "../components/Article";
import LabelSection from "../components/LabelSection";
import {
  formatDate,
  formatTime,
  getCalendarIsoString,
  getMeridiem,
  getTimeZoneAbbr
} from "../utils";

const StyledActionLink = styled.a`
  font-size: 1.75rem;
  color: #3498db;
  text-decoration: none;
  margin-left: ${props => (props.margin ? props.margin : "0")};

  &:hover {
    opacity: 0.6;
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
      return `${this.streetAddress}, ${this.neighborhood}, ${this.state} ${
        this.zipCode
      }`;
    },
    get googleMapsUrl() {
      return `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(
        this.name + ", " + this.fullAddress
      )}`;
    }
  },
  timeZoneAbbr: getTimeZoneAbbr(),
  start: new Date(Date.UTC(2019, 9, 16, 22, 0, 0)),
  end: new Date(Date.UTC(2019, 9, 17, 3, 0, 0)),
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
      <Main>
        <Article left view="0">
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
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <WhenWhere
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
