import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  ,
  ,
  SMALL_DEVICES_LANDSCAPE_UP,
  ,
  ,
  TABLET_LANDSCAPE_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledGuest = styled.div`
  position: relative;
  display: block;
  letter-spacing: 0.05em;
  background-color: rgba(240, 240, 245, 0.7);
  color: rgba(54, 63, 84, 0.7);
  border-radius: 0.25em;
  padding: ${props =>
    props.removed
      ? "0 1.8em 0 0.8em"
      : props.mounted
      ? "0 1.8em 0 0.8em"
      : "0 1.8em 0 0.8em"};
  margin-bottom: ${props =>
    props.removed ? "0" : props.mounted ? "0.5em" : "0"};
  float: left;
  clear: both;
  max-width: 100%;
  height: ${props => (props.removed ? "0" : props.mounted ? "2.2em" : "0")};
  line-height: 2.2em;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: ${props => (props.removed ? "0" : props.mounted ? "1" : "0")};
  overflow: hidden;
  user-select: none;
  transform-origin: center top;
  transition: opacity 0.2s ease, height 0.2s ease, padding 0.2s ease,
    margin 0.2s ease;
  font-size: 0.875rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.25rem;
  }

  &:hover {
    color: rgba(54, 63, 84, 1);
    background-color: rgba(240, 240, 245, 1);
    cursor: pointer;
  }
`;

const StyledRemoveButton = styled.span`
  font-weight: 300;
  position: absolute;
  right: 0.4em;
  width: 1.25em;
  text-align: center;
  transform: rotate3d(0, 0, 1, 45deg);
`;

class Guest extends Component {
  state = {
    mounted: false,
    removed: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mounted: true
      });
    }, 50);
  }

  render() {
    const { mounted, removed } = this.state;
    const { handleRemoveGuest, guestName, guestId } = this.props;

    return (
      <StyledGuest
        ref={node => (this.guestRef = node)}
        mounted={mounted}
        removed={removed}
        onTransitionEnd={() => {
          if (removed) {
            handleRemoveGuest(guestId);
          }
        }}
        onClick={() => this.setState({ removed: true })}
      >
        {guestName}
        <StyledRemoveButton>+</StyledRemoveButton>
      </StyledGuest>
    );
  }
}

export default Guest;
