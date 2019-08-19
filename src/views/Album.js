import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import GridAlbum from "./GridAlbum";
import SlidingAlbum from "./SlidingAlbum";

const description =
  "Browse the photo album to relive all of the memories and adventures with friends and family that have led to Megan and Ringo's wedding.";

const Album = ({ isGreaterThanTablet }) => (
  <Fragment>
    <Helmet>
      <title>Megan and Ringo's Wedding - Album</title>
      <meta name="description" content={description} />
      <meta content={description} property="og:description" />
      <link rel="canonical" href="https://meganandringo.com/album" />
    </Helmet>
    {isGreaterThanTablet ? (
      <SlidingAlbum></SlidingAlbum>
    ) : (
      <GridAlbum></GridAlbum>
    )}
  </Fragment>
);

export default Album;
