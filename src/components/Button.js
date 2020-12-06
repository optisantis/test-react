import React from "react";
import styled from "styled-components";
import { colors } from "../styles";

export default ({ title, onClick }) => <Button onClick={onClick}>{title}</Button>;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  background-color: ${colors.antagonisticCerulean};
  color: ${colors.rationalNavy};
  padding: 0.8em 2em;
  margin: 2em;
  cursor: pointer;
`;
