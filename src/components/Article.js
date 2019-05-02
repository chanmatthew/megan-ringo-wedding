import React from "react";
import styled from "@emotion/styled";

const StyledArticle = styled.article`
  position: absolute;
  width: ${props => (props.wide ? "769px" : "671px")};
  height: 100vh;
  min-height: 1024px;
  left: ${props => (props.left ? "0" : "auto")};
  right: ${props => (props.right ? "0" : "auto")};
  top: ${props => (props.view ? `${props.view * 1024}px` : "auto")};
  margin-top: ${props => (props.view ? `${props.view * 10}em` : "auto")};
`;

const Article = props => <StyledArticle {...props} />;

export default Article;
