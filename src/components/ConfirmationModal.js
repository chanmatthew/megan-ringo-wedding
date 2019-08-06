import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled/macro";

import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  BASE_UP,
  PHONE_PORTRAIT_UP,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.opened ? "rgba(44, 53, 74, 0.8)" : "rgba(44, 53, 74, 0)"};
  pointer-events: ${props => (props.opened ? "auto" : "none")};
  transition: background-color 1s ease;
`;

const StyledModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.25em;
  background-color: white;
  opacity: ${props => (props.opened ? "1" : "0")};
  box-shadow: 0 5px 10px 10px rgba(37, 41, 82, 0.1);
  transform: ${props =>
    props.opened ? "translate3d(0, 0, 0)" : "translate3d(0, 100px, 0)"};
  transition: transform 0.5s ease, opacity 0.5s ease;
  max-width: 95%;
  max-height: 95%;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    max-height: 80%;
    max-width: 90%;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    max-width: 80%;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    max-width: 70%;
  }
`;

const StyledCloseButton = styled.button`
  outline: none;
  border: none;
  font-family: "Futura PT";
  font-weight: 300;
  line-height: 0.7em;
  position: absolute;
  top: 0.1em;
  right: 0.1em;
  width: 0.7em;
  border-radius: 50%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
  color: rgba(54, 63, 84, 1);
  opacity: 0.5;
  user-select: none;
  transform: rotate3d(0, 0, 1, 45deg);
  transition: all 0.2s ease;
  font-size: 3.125rem;

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 4rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const StyledModalTitle = styled.h2`
  font-family: "Futura PT Demi";
  letter-spacing: 0.083em;
  color: rgba(54, 63, 84, 1);
  text-align: center;
  margin: 1em 0;
  font-size: 1.375rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.625rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 2rem;
  }
`;

const StyledModalBody = styled.div`
  overflow-y: auto;
  margin-bottom: 3em;
  padding: 0 1em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    padding: 0 2em;
  }
`;

const StyledModalMessage = styled.p`
  letter-spacing: 0.02em;
  color: rgba(54, 63, 84, 0.7);
  text-align: center;
  line-height: 1.4;
  margin-bottom: 1.5em;
  font-size: 1rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-bottom: 2.2em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    line-height: 1.2;
    font-size: 1.25rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.5rem;
  }
`;

const StyledModalStrongMessage = styled.strong`
  color: rgba(54, 63, 84, 1);
`;

const StyledModalGrid = styled.div`
  letter-spacing: 0.02em;
  display: grid;
  padding-bottom: 0.25em;
  grid-template-columns: 1fr;
  grid-gap: 0;
  font-size: 0.875rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 0.9375rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    grid-template-columns: auto 1fr;
    grid-row-gap: 1em;
    grid-column-gap: 2em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.05rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.125rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.25rem;
  }
`;

const StyledModalGridLabel = styled.p`
  text-transform: uppercase;
  line-height: 1.44em;
  opacity: 0.7;
`;

const StyledModalGridValue = styled.div`
  line-height: 1.2em;
  word-wrap: break-word;
  overflow: hidden;
  font-size: 1.1rem;
  margin-bottom: 1em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.5rem;
  }
`;

const StyledModalList = styled.ul`
  list-style: none;
`;

const modalRoot = document.getElementById("modal-root");

const labels = [
  "First Name",
  "Last Name",
  "E-Mail Address",
  "Names of Guests",
  "Message"
];

class ConfirmationModal extends Component {
  el = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const {
      opened,
      handleCloseModal,
      firstName,
      lastName,
      emailAddress,
      guests,
      message
    } = this.props;

    return createPortal(
      <StyledModalBackdrop opened={opened} onClick={handleCloseModal}>
        <StyledModal opened={opened} onClick={e => e.stopPropagation()}>
          <StyledCloseButton onClick={handleCloseModal}>+</StyledCloseButton>
          <StyledModalTitle>
            RSVP SENT <span>&#10003;</span>
          </StyledModalTitle>
          <StyledModalBody>
            <StyledModalMessage>
              Thank you{" "}
              <StyledModalStrongMessage>{firstName}</StyledModalStrongMessage>{" "}
              for RSVP'ing to Megan and Ringo's wedding ceremony! <br />A
              receipt of the following information has been sent to your e-mail:
            </StyledModalMessage>
            <StyledModalGrid>
              <StyledModalGridLabel>{labels[0]}</StyledModalGridLabel>
              <StyledModalGridValue>{firstName}</StyledModalGridValue>
              <StyledModalGridLabel>{labels[1]}</StyledModalGridLabel>
              <StyledModalGridValue>{lastName}</StyledModalGridValue>
              <StyledModalGridLabel>{labels[2]}</StyledModalGridLabel>
              <StyledModalGridValue>{emailAddress}</StyledModalGridValue>
              <StyledModalGridLabel>{labels[3]}</StyledModalGridLabel>
              <StyledModalGridValue>
                <StyledModalList>
                  {guests.length > 0
                    ? guests.map((guest, i) => (
                        <li key={`${guest}--${i}`}>{guest}</li>
                      ))
                    : "-"}
                </StyledModalList>
              </StyledModalGridValue>
              <StyledModalGridLabel>{labels[4]}</StyledModalGridLabel>
              <StyledModalGridValue>{message || "-"}</StyledModalGridValue>
            </StyledModalGrid>
          </StyledModalBody>
        </StyledModal>
      </StyledModalBackdrop>,
      this.el
    );
  }
}

export default ConfirmationModal;
