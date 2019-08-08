import React from "react";
import { IconSVGContainer, CircleIconContainer } from "./Icon.styles";

const Icon = ({ name, size = "m" }) => {
  return (
    <IconSVGContainer size={size}>
      <use xlinkHref={`#${name}`} />
    </IconSVGContainer>
  );
};

export const CircleIcon = ({ name }) => (
  <CircleIconContainer>
    <Icon name={name} size="s" />
  </CircleIconContainer>
);

export default Icon;
