import React from "react";

import Article from "../components/Article";
import Graphic from "../components/Graphic";
import Text from "../components/Text";

const Introduction = ({ view, invert }) => (
  <section>
    <Article left view={view} wide={invert}>
      <Graphic
        top="20em"
        left="3em"
        src="/img/graphics/megan_and_ringo.svg"
        alt="megan_and_ringo"
      />
      <Graphic top="6em" src="/img/graphics/leaves.svg" alt="leaves" />
      <Graphic
        top="29em"
        right="0"
        transform="scale3d(-1, 1, 1)"
        src="/img/graphics/leaves.svg"
        alt="leaves"
      />
      <Graphic
        top="27em"
        left="3em"
        transform="scale3d(0.7, 0.7, 1) rotate3d(0, 0, 1, -30deg)"
        src="/img/graphics/heart_filled.svg"
        alt="heart_filled"
      />
      <Graphic
        top="34em"
        left="17em"
        src="/img/graphics/heart_filled.svg"
        alt="heart_filled"
      />
      <Graphic
        top="17em"
        left="30em"
        transform="rotate3d(0, 0, 1, 10deg)"
        src="/img/graphics/heart_filled.svg"
        alt="heart_filled"
      />
      <Graphic
        top="33em"
        left="5em"
        transform="scale3d(0.5, 0.5, 1) rotate3d(0, 0, 1, 20deg)"
        src="/img/graphics/heart_outline.svg"
        alt="heart_outline"
      />
      <Graphic
        top="12em"
        left="21em"
        transform="scale3d(0.7, 0.7, 1) rotate3d(0, 0, 1, -25deg)"
        src="/img/graphics/heart_outline.svg"
        alt="heart_outline"
      />
      <Text top="21em" left="7%">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Article>
    <Article right view={view} wide={!invert}>
      <img src="/img/photos/couple_drinking.png" alt="couple_drinking" />
    </Article>
  </section>
);

export default Introduction;
