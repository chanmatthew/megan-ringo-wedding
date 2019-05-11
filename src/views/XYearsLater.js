import React from "react";
import styled from "@emotion/styled";

import Article from "../components/Article";
import Text from "../components/Text";
import Heading from "../components/Heading";
import Span from "../components/Span";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1em;
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  top: 8em;
`;

const GridColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
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
            alt="Megan on Ringo's Shoulders"
          />
          <GridImg
            src="/img/photos/couple_by_water.jpg"
            alt="Megan and Ringo at a Shoreline"
          />
          <GridImg
            src="/img/photos/couple_at_wedding.jpg"
            alt="Megan and Ringo Attending a Friend's Wedding"
          />
        </GridColumn>
        <GridColumn>
          <GridImg
            src="/img/photos/couple_selfie_in_jerseys.jpg"
            alt="Megan and Ringo's Brooklyn Nets Jersey Selfie"
          />
          <GridImg
            src="/img/photos/couple_on_rooftop.jpg"
            alt="Megan and Ringo at a Nighttime Rooftop Gathering"
          />
          <GridImg
            src="/img/photos/couple_at_graduation.jpg"
            alt="Ringo Attending Megan's Graduation from NYU Stern"
          />
        </GridColumn>
        <GridColumn>
          <GridImg
            src="/img/photos/couple_at_beach.jpg"
            alt="Megan and Ringo at a Beach"
          />
          <GridImg src="/img/photos/couple_by_reef.jpg" alt="couple_by_reef" />
          <GridImg
            src="/img/photos/couple_at_bridge.jpg"
            alt="Megan and Ringo at the Foot of the Golden Gate Bridge"
          />
        </GridColumn>
      </Grid>
    </Article>
    <Article right view={view} wide={!invert}>
      <Heading withGraphic top="20em" align="left">
        <Span size="0.7">8 YEARS</Span>
        <br />
        <Span size="1">LATER...</Span>
      </Heading>
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
