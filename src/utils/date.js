import { MONTHS, WEEKDAYS } from "../enums";

function pad(number) {
  if (number < 10) {
    return `0${number}`;
  }

  return number;
}

function truncate(str) {
  return str.substring(0, 3);
}

export const formatDate = date => {
  return `${truncate(WEEKDAYS[date.getDay()])}, ${truncate(
    MONTHS[date.getMonth()]
  )} ${date.getDate()}`;
};

export const getTimeZoneAbbr = () => {
  return new Date()
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ")[2];
};

export const formatHours = date => {
  let hours = date.getHours(),
    minutes = date.getMinutes(),
    meridiemHours = hours % 12,
    prefixedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${meridiemHours ? meridiemHours : 12}:${prefixedMinutes}`;
};

export const getMeridiem = date => {
  return date.getHours() >= 12 ? "pm" : "am";
};

export const getCalendarIsoString = date => {
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(
    date.getUTCDate()
  )}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(
    date.getUTCSeconds()
  )}Z`;
};
