import React from "react";
import styled from "@emotion/styled/macro";

import AnimatedHoc from "./AnimatedHoc";

const StyledText = styled.p`
  font-size: ${props => props.size || "1.25rem"};
  letter-spacing: ${props => props.letterSpacing || "0.02em"};
  line-height: 1.25;
  color: ${props => props.color || "#363f54"};
  text-align: ${props => props.align || "left"};
`;

const Text = props => <StyledText {...props} />;

export default AnimatedHoc(Text);
