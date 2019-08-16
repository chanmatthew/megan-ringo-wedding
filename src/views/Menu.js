import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "@reach/router";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const description =
  "See what will be on the menu at Megan and Ringo's wedding ceremony.";

const StyledMain = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
`;

const StyledPageHeaderImage = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${props => props.src || "none"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(21, 37, 64, 1);
  height: 15em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    height: 20em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    height: 25em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    height: 31.375em;
  }
`;

const StyledPageTitle = styled.h1`
  position: absolute;
  left: 50%;
  bottom: 0;
  padding: 0.5em 1em;
  letter-spacing: 0.083em;
  background-color: white;
  color: rgba(54, 63, 84, 1);
  transform: translate3d(-50%, 50%, 0);
  box-shadow: 0 5px 10px 0 rgba(37, 41, 82, 0.1);
  white-space: nowrap;
  font-size: 1.25rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.625rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 2rem;
  }
`;

const StyledPageSection = styled.section`
  background-color: white;
  padding: 5.625em 0 4.625em;

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    padding: 5.625em 0;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    padding: 7.625em 2em;
  }
`;

const StyledMenu = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1em;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-bottom: 2em;
  }
`;

const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5em;
  margin-bottom: 3em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    padding: 0 1em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    padding: 0 1.5em;
    margin-bottom: 4em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    padding: 0 2em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    padding: 0 1.5em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    padding: 0 2em;
  }
`;

const StyledMenuItemImg = styled.div`
  background-image: url(${props => props.src || "none"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(21, 37, 64, 1);
  border-radius: 50%;
  margin-bottom: 1.5em;
  box-shadow: 0 5px 10px 0 rgba(37, 41, 82, 0.3);
  height: 6.25em;
  width: 6.25em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    height: 7.25em;
    width: 7.25em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    height: 8.25em;
    width: 8.25em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    height: 7.25em;
    width: 7.25em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    height: 8.25em;
    width: 8.25em;
  }
`;

const StyledMenuItemName = styled.span`
  text-transform: uppercase;
  font-size: 0.875rem;
  text-align: center;
  letter-spacing: 0.1em;
  color: #152540;
  line-height: 1.2em;
  width: 10em;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.25rem;
  }
`;

const StyledFootnote = styled.div`
  background-color: #152540;
  color: rgba(246, 233, 203, 1);
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
  padding: 0.4em 0.8em;
  line-height: 1.2em;
  max-width: 20em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    max-width: 24em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    max-width: 26em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    max-width: 28em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1rem;
    max-width: 30em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.25rem;
  }
`;

const StyledLink = styled(Link)`
  color: rgba(246, 233, 203, 1);
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const menuItems = [
  { name: "Whole Roasted Suckling Pig", url: "whole_roasted_suckling_pig" },
  { name: "Sashimi Platter", url: "sashimi_platter" },
  { name: "Chinese Cold Platter", url: "chinese_cold_platter" },
  { name: "French Style Grilled Lobster", url: "french_style_grilled_lobster" },
  { name: "Steamed Shrimp", url: "steamed_shrimp" },
  {
    name: "Stir Fried Sliced Conch and Clam",
    url: "stir_fried_sliced_conch_and_clam"
  },
  {
    name: "Braised Crab Meat & Fish Chowder",
    url: "braised_crab_meat_and_fish_chowder"
  },
  { name: "Steamed King Crab", url: "steamed_king_crab" },
  { name: "Abalone with Oyster Sauce", url: "abalone_with_oyster_sauce" },
  {
    name: "Crispy Chicken with Garlic Sauce",
    url: "crispy_chicken_with_garlic_sauce"
  },
  { name: "Steamed Fresh Fish", url: "steamed_fresh_fish" },
  { name: "Sweet Sticky Rice", url: "sweet_sticky_rice" },
  { name: "E-Fu Noodle", url: "e-fu_noodle" },
  { name: "Cake / Dessert", url: "cake_dessert" }
];

class Menu extends Component {
  componentDidMount() {
    const { handleIsBrandDark, handleIsNavbarDark } = this.props;
    handleIsBrandDark(false);
    handleIsNavbarDark(false);
  }

  render() {
    return (
      <StyledMain>
        <Helmet>
          <title>Megan and Ringo's Wedding - The Menu</title>
          <meta name="description" content={description} />
          <meta content={description} property="og:description" />
          <link rel="canonical" href="https://meganandringo.com/menu" />
        </Helmet>
        <StyledPageHeaderImage src="/img/photos/menu_header.jpg">
          <StyledPageTitle>THE MENU</StyledPageTitle>
        </StyledPageHeaderImage>
        <StyledPageSection>
          <StyledMenu>
            {menuItems.map((item, i) => (
              <StyledMenuItem key={`menu__item--${i}`}>
                <StyledMenuItemImg src={`/img/photos/menu/${item.url}.jpg`} />
                <StyledMenuItemName>{item.name}</StyledMenuItemName>
              </StyledMenuItem>
            ))}
          </StyledMenu>
          <StyledFootnote>
            If you have any concerns regarding the menu, feel free to add it to
            your message in the{" "}
            <StyledLink to="/rsvp" state={{ fromMenu: true }}>
              RSVP
            </StyledLink>
            .
          </StyledFootnote>
        </StyledPageSection>
      </StyledMain>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <Menu
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
