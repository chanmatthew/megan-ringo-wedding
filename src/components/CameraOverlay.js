import React from "react";
import styled from "@emotion/styled/macro";

const StyledCameraOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 7em 2.8em 2.8em 2.8em;
  opacity: 0.6;
  user-select: none;
`;

const StyledCameraGraphic = styled.img`
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  transform: rotate3d(0, 0, 1, ${props => props.rotate}deg);
`;

const StyledRecordContainer = styled.div`
  position: absolute;
  top: 1.5em;
  left: 3em;
  display: flex;
  align-items: center;
`;

const StyledRecord = styled.span`
  font-size: 2.25rem;
  color: rgba(255, 255, 255, 1);
  margin-right: 0.3em;
`;

const StyledRecordDot = styled.div`
  background-color: rgba(255, 113, 113, 1);
  height: 2em;
  width: 2em;
  border-radius: 50%;
`;

const CameraOverlay = () => (
  <StyledCameraOverlay>
    <StyledCameraGraphic
      src="/img/graphics/camera_corner.svg"
      alt="Top Left Camera Corner"
    />
    <StyledCameraGraphic
      src="/img/graphics/camera_corner.svg"
      alt="Top Right Camera Corner"
      right="0"
      rotate="90"
    />
    <StyledCameraGraphic
      src="/img/graphics/camera_corner.svg"
      alt="Bottom Left Camera Corner"
      bottom="0"
      rotate="-90"
    />
    <StyledCameraGraphic
      src="/img/graphics/camera_corner.svg"
      alt="Bottom Right Camera Corner"
      bottom="0"
      right="0"
      rotate="180"
    />
    <StyledRecordContainer>
      <StyledRecord>REC</StyledRecord>
      <StyledRecordDot />
    </StyledRecordContainer>
    <StyledCameraGraphic
      src="/img/graphics/camera_battery.svg"
      alt="Camera Battery"
      top="1.5em"
      right="3em"
    />
  </StyledCameraOverlay>
);

export default CameraOverlay;
