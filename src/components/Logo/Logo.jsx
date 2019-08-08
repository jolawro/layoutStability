import React from "react";
import { LogoContainer, LogoTitle, LogoSubtitle, LogoImage } from "./Logo.styles";

export const Logo = () => (
  <LogoContainer>
    <LogoImage src="logo.svg" alt="logo" />
    <LogoTitle>
      Layout
      <LogoSubtitle>Stability</LogoSubtitle>
    </LogoTitle>
  </LogoContainer>
);
