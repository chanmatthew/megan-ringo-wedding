import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import { MIN_WIDTH_BREAKPOINTS, WEATHER_API_URL } from "../enums";
import { kelvinToFahrenheit } from "../utils";

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
    condition: null
  };

  getForecast = async () => {
    const response = await fetch(WEATHER_API_URL);

    return await response.json();
  };

  componentDidMount() {
    this.getForecast()
      .then(data => {
        const start = Date.UTC(2019, 9, 26, 22, 0, 0) / 1000;
        const end = Date.UTC(2019, 9, 27, 3, 0, 0) / 1000;
        data.list.some(item => {
          if (item.dt >= start && item.dt <= end) {
            let condition = "";
            if (
              !item.rain &&
              !item.snow &&
              item.clouds.all > 20 &&
              item.clouds.all <= 60
            ) {
              condition = "cloudy";
            } else if (!item.rain && !item.snow && item.clouds.all > 60) {
              condition = "overcast";
            } else if (!item.snow && item.rain) {
              condition = "rainy";
            } else if (!item.rain && item.snow) {
              condition = "snowy";
            } else {
              condition = "sunny";
            }

            this.setState({
              temperature: `${kelvinToFahrenheit(item.main.temp)}\u00B0F`,
              condition
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
    const { temperature, condition } = this.state;

    return (
      <WeatherContainer>
        {condition ? (
          <WeatherIcon src={`/img/graphics/${condition}.svg`} />
        ) : null}
        {temperature ? <Temperature>{temperature}</Temperature> : null}
        {this.props.children}
      </WeatherContainer>
    );
  }
}

export default Weather;
