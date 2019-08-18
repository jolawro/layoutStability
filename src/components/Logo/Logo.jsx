import React from "react";
import { LogoContainer, LogoTitle, LogoSubtitle, LogoImage } from "./Logo.styles";
import { ReactComponent as LogoSVG }  from './logo.svg';

export const Logo = () => (
  <LogoContainer>
    <LogoImage>
      <LogoSVG />
    </LogoImage>
    <LogoTitle>
      Layout
      <LogoSubtitle>Stability</LogoSubtitle>
    </LogoTitle>
  </LogoContainer>
);
