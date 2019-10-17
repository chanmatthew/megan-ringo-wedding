import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const { REACT_APP_WEATHER_API_KEY } = process.env;

const [, , , , , , BETWEEN_SMALL_DEVICES_TABLET_UP] = MIN_WIDTH_BREAKPOINTS;

const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  justify-content: center;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    justify-content: flex-start;
  }
`;

const WeatherIcon = styled.img`
  margin-right: 0.3em;
  height: 1em;
`;

const Temperature = styled.span`
  margin-right: 0.5em;
`;

class Weather extends Component {
  state = {
    temperature: null,
    condition: {
      sunny: false,
      cloudy: false,
      overcast: false,
      rainy: false,
      snowy: false
    }
  };

  getForecast = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?zip=11354,us&appid=${REACT_APP_WEATHER_API_KEY}`
    );

    return await response.json();
  };

  kelvinToFahrenheit = temp => {
    return Math.round((temp - 273.15) * 1.8 + 32);
  };

  componentDidMount() {
    this.getForecast()
      .then(data => {
        const start = Date.UTC(2019, 9, 26, 22, 0, 0) / 1000;
        const end = Date.UTC(2019, 9, 27, 3, 0, 0) / 1000;
        data.list.some(item => {
          if (item.dt >= start && item.dt <= end) {
            this.setState({
              temperature: `${this.kelvinToFahrenheit(item.main.temp)}\u00B0F`,
              condition: {
                sunny:
                  !item.rain && !item.snow && item.clouds.all <= 20
                    ? true
                    : false,
                cloudy:
                  !item.rain &&
                  !item.snow &&
                  item.clouds.all > 20 &&
                  item.clouds.all <= 60
                    ? true
                    : false,
                overcast:
                  !item.rain && !item.snow && item.clouds.all > 60
                    ? true
                    : false,
                rainy: !item.snow && item.rain ? true : false,
                snowy: !item.rain && item.snow ? true : false
              }
            });
            return true;
          }
          return false;
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { temperature } = this.state;
    const { sunny, cloudy, overcast, rainy, snowy } = this.state.condition;

    return (
      <WeatherContainer>
        {sunny ? <WeatherIcon src="/img/graphics/sunny.svg" /> : null}
        {cloudy ? <WeatherIcon src="/img/graphics/cloudy.svg" /> : null}
        {overcast ? <WeatherIcon src="/img/graphics/overcast.svg" /> : null}
        {rainy ? <WeatherIcon src="/img/graphics/rainy.svg" /> : null}
        {snowy ? <WeatherIcon src="/img/graphics/snowy.svg" /> : null}
        {temperature ? <Temperature>{temperature}</Temperature> : null}
        {this.props.children}
      </WeatherContainer>
    );
  }
}

export default Weather;
