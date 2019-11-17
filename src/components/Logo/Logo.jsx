import React from "react";
import { LogoContainer, LogoTitle, LogoSubtitle, LogoImage } from "./Logo.styles";
import { ReactComponent as SVGLogo } from "./logo.svg";

export const Logo = () => (
  <LogoContainer>
    <LogoImage>
      <SVGLogo />
    </LogoImage>
    <LogoTitle>
      Layout
      <LogoSubtitle>Stability</LogoSubtitle>
    </LogoTitle>
  </LogoContainer>
);
