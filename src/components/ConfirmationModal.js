import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";

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
  max-height: 80%;
  max-width: 70%;
  border-radius: 0.25em;
  background-color: white;
  opacity: ${props => (props.opened ? "1" : "0")};
  box-shadow: 0 5px 10px 10px rgba(37, 41, 82, 0.1);
  transform: ${props =>
    props.opened ? "translate3d(0, 0, 0)" : "translate3d(0, 100px, 0)"};
  transition: transform 0.5s ease, opacity 0.5s ease;
`;

const StyledCloseButton = styled.button`
  outline: none;
  border: none;
  font-family: "Futura PT";
  font-size: 4rem;
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

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const StyledModalTitle = styled.h2`
  font-family: "Futura PT Demi";
  font-size: 2rem;
  letter-spacing: 0.083em;
  color: rgba(54, 63, 84, 1);
  text-align: center;
  margin: 1em 0;
`;

const StyledModalBody = styled.div`
  overflow-y: auto;
  margin-bottom: 3em;
  padding: 0 2em;
`;

const StyledModalMessage = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.02em;
  margin-bottom: 2.2em;
  color: rgba(54, 63, 84, 0.7);
  text-align: center;
  line-height: 1.2em;
`;

const StyledModalStrongMessage = styled.strong`
  color: rgba(54, 63, 84, 1);
`;

const StyledModalGrid = styled.div`
  font-size: 1.25rem;
  letter-spacing: 0.02em;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 1em;
  grid-column-gap: 2em;
  padding-bottom: 0.25em;
`;

const StyledModalGridLabel = styled.p`
  text-transform: uppercase;
  line-height: 1.44em;
  opacity: 0.7;
`;

const StyledModalGridValue = styled.div`
  font-size: 1.5rem;
  line-height: 1.2em;
  word-wrap: break-word;
  overflow: hidden;
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
