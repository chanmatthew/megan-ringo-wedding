import React from "react";

import Article from "../components/Article";
import Graphic from "../components/Graphic";
import Text from "../components/Text";
import Heading from "../components/Heading";
import Divider from "../components/Divider";
import Span from "../components/Span";

const SheSaidYes = ({ view, invert }) => (
  <section>
    <Article left view={view} wide={invert}>
      <Heading top="10em" left="7%" align="left">
        <Span size="0.7">SHE SAID</Span>
        <br />
        <Span size="1">YES!</Span>
      </Heading>
      <Graphic
        top="10em"
        right="4.2em"
        opacity="0.3"
        transform="scale3d(0.4, 0.4, 1)"
        src="/img/graphics/heart_outline.svg"
        alt="heart_outline"
      />
      <Graphic
        top="13em"
        right="4.5em"
        opacity="0.5"
        transform="scale3d(0.8, 0.8, 1)"
        src="/img/graphics/heart_filled.svg"
        alt="heart_filled"
      />
      <Graphic
        top="16em"
        right="4.2em"
        opacity="0.3"
        transform="scale3d(0.4, 0.4, 1)"
        src="/img/graphics/heart_outline.svg"
        alt="heart_outline"
      />
      <Text top="12em" left="7%" width="80%" quote>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </Text>
      <Divider top="36.5em" left="50%">
        <Graphic
          position="static"
          opacity="0.5"
          transform="scale3d(0.4, 0.4, 1) translate3d(-125%, 0, 0);"
          src="/img/graphics/ring.svg"
          alt="ring"
        />
      </Divider>
      <Text top="21em" right="7%" align="right" width="80%" quote>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </Text>
    </Article>
    <Article right view={view} wide={!invert}>
      <img src="/img/photos/proposal.png" alt="proposal" />
    </Article>
  </section>
);

export default SheSaidYes;
