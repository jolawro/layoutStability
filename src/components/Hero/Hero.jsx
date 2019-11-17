import React, { useState } from "react";
import { HeroContainer, HeroText, HeroTextContainer, HeroImage } from "./Hero.styles";
import hero from "./hero.jpg";
import { Invisible } from "../Icon/Icons";

const Hero = () => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <HeroContainer>
      <HeroImage src={isImageLoaded ? hero.src : hero.preSrc} alt="Hero" />
      <Invisible>
        <img src={hero.src} onLoad={() => setImageLoaded(true)} alt="hero"/>
      </Invisible>
      <HeroTextContainer>
        <HeroText>
          Very important <strong>message</strong>
        </HeroText>
      </HeroTextContainer>
    </HeroContainer>
  );
};

export default Hero;
