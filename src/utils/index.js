import {
  formatDate,
  formatTime,
  getCalendarIsoString,
  getMeridiem,
  getTimeZoneAbbr
} from "./date";

const getInnerHeight = () =>
  navigator.userAgent.match(/iphone|ipod|ipad/i) &&
  !navigator.userAgent.match(/CriOS|FxiOS/i)
    ? Math.abs(window.orientation) === 90
      ? window.screen.width
      : window.screen.height
    : window.innerHeight;

export {
  formatDate,
  formatTime,
  getCalendarIsoString,
  getInnerHeight,
  getMeridiem,
  getTimeZoneAbbr
};
