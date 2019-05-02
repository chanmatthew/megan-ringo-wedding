import React from "react";
import styled from "@emotion/styled";

import Article from "../components/Article";
import Graphic from "../components/Graphic";
import Text from "../components/Text";
import Heading from "../components/Heading";
import Span from "../components/Span";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1em;
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  top: 8em;
`;

const GridColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 1em;

  &:nth-of-type(even) {
    padding-top: 2em;
  }

  &:nth-of-type(odd) {
    padding-bottom: 2em;
  }
`;

const GridImg = styled.img`
  border-radius: 0.3em;
`;

const XYearsLater = ({ view, invert }) => (
  <section>
    <Article left view={view} wide={invert}>
      <Grid>
        <GridColumn>
          <GridImg
            src="/img/photos/couple_on_shoulders.jpg"
            alt="couple_on_shoulders"
          />
          <GridImg
            src="/img/photos/couple_by_water.jpg"
            alt="couple_by_water"
          />
          <GridImg
            src="/img/photos/couple_at_wedding.jpg"
            alt="couple_at_wedding"
          />
        </GridColumn>
        <GridColumn>
          <GridImg
            src="/img/photos/couple_selfie_in_jerseys.jpg"
            alt="couple_selfie_in_jerseys"
          />
          <GridImg
            src="/img/photos/couple_on_rooftop.jpg"
            alt="couple_on_rooftop"
          />
          <GridImg
            src="/img/photos/couple_at_graduation.jpg"
            alt="couple_at_graduation"
          />
        </GridColumn>
        <GridColumn>
          <GridImg
            src="/img/photos/couple_at_beach.jpg"
            alt="couple_at_beach"
          />
          <GridImg src="/img/photos/couple_by_reef.jpg" alt="couple_by_reef" />
          <GridImg
            src="/img/photos/couple_at_bridge.jpg"
            alt="couple_at_bridge"
          />
        </GridColumn>
      </Grid>
    </Article>
    <Article right view={view} wide={!invert}>
      <Heading top="20em" align="left">
        <Span size="0.7">8 YEARS</Span>
        <br />
        <Span size="1">LATER...</Span>
      </Heading>
      <Graphic
        top="20em"
        right="4.2em"
        opacity="0.3"
        transform="scale3d(0.4, 0.4, 1)"
        src="/img/graphics/heart_outline.svg"
        alt="heart_outline"
      />
      <Graphic
        top="23em"
        right="4.5em"
        opacity="0.5"
        transform="scale3d(0.8, 0.8, 1)"
        src="/img/graphics/heart_filled.svg"
        alt="heart_filled"
      />
      <Graphic
        top="26em"
        right="4.2em"
        opacity="0.3"
        transform="scale3d(0.4, 0.4, 1)"
        src="/img/graphics/heart_outline.svg"
        alt="heart_outline"
      />
      <Text top="15em">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Article>
  </section>
);

export default XYearsLater;
