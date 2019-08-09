import React from "react";
import { SpinnerContainer, SpinnerIcon } from "./Spinner.styles";
import Icon from "../Icon/Icon";

export const Spinner = () => (
  <SpinnerContainer>
    <SpinnerIcon>
      <Icon name="i-two-arrows-refresh" size="l" />
    </SpinnerIcon>
  </SpinnerContainer>
);

export default Spinner;
