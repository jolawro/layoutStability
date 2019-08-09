import React from "react";
import { CircleIconContainer } from "./Icon.styles";
import Icon from ".";

export const CircleIcon = ({ name }) => (
  <CircleIconContainer>
    <Icon name={name} size="m" />
  </CircleIconContainer>
);

export default CircleIcon;
