import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled/macro";

const StyledLightbox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.isOpened ? "1" : "0")};
  background: ${props =>
    props.isOpened ? "rgba(234,243,254,0.8)" : "rgba(234,243,254,0)"};
  pointer-events: ${props => (props.isOpened ? "auto" : "none")};
  transition: background-color 1s ease;
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

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const modalRoot = document.getElementById("modal-root");

const Lightbox = ({ isOpened, handleOnClose, children }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    modalRoot.appendChild(el.current);

    return () => {
      modalRoot.removeChild(el.current);
    };
  }, []);

  return createPortal(
    <StyledLightbox isOpened={isOpened}>
      <StyledCloseButton onClick={handleOnClose}>+</StyledCloseButton>
      {children}
    </StyledLightbox>,
    el.current
  );
};

export default Lightbox;
