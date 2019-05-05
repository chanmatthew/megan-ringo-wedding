import React from "react";
import styled from "@emotion/styled";

const StyledDivider = styled.div`
  position: absolute;
  top: ${props => (props.top ? props.top : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};
  left: ${props => (props.left ? props.left : "auto")};
  right: ${props => (props.right ? props.right : "auto")};

  &::before {
    position: absolute;
    content: "";
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(60, 98, 162, 1),
      rgba(237, 211, 151, 1),
      rgba(255, 255, 255, 1)
    );
    opacity: 0.2;
    height: 5px;
    width: 100%;
    left: -130%;
    transform: rotate3d(0, 0, 1, -190deg);
    bottom: 40%;
  }

  &::after {
    position: absolute;
    content: "";
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(60, 98, 162, 1),
      rgba(237, 211, 151, 1),
      rgba(255, 255, 255, 1)
    );
    opacity: 0.2;
    height: 5px;
    width: 100%;
    left: 30%;
    transform: rotate3d(0, 0, 1, -10deg);
    top: 40%;
  }
`;

const Divider = props => <StyledDivider {...props} />;

export default Divider;
