import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import GridAlbum from "./GridAlbum";
import SlidingAlbum from "./SlidingAlbum";
import { AppContext } from "../AppProvider";

const description =
  "Browse the photo album to relive all of the memories and adventures with friends and family that have led to Megan and Ringo's wedding.";

const Album = ({
  isGreaterThanTablet,
  handleIsBrandDark,
  handleIsNavbarDark
}) => {
  useEffect(() => {
    handleIsBrandDark(true);
    handleIsNavbarDark(true);
  }, []);

  return (
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
};

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <Album
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
