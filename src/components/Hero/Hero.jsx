import React from "react";
import { HeroContainer, HeroText, HeroTextContainer, HeroImage } from "./Hero.styles";
import hero from "./hero.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src={hero.src} alt="Hero" />
      <HeroTextContainer>
        <HeroText>
          Very important <strong>message</strong>
        </HeroText>
      </HeroTextContainer>
    </HeroContainer>
  );
};

export default Hero;
