import React from "react";
import { HeroContainer, HeroText, HeroTextContainer, HeroImage, HeroStability } from "./Hero.styles";
import DisturbFilter from "./DisturbFilter";
import hero from "./hero.jpg";
import { useLayoutObserver } from "../../hooks/useLayoutObserver";

const Hero = () => {
  const entries = useLayoutObserver();
  const shiftScore = entries.reduce((acc, curr) => acc + curr, 0);

  return (
    <HeroContainer>
      <DisturbFilter frequency={shiftScore / 10} />
      <HeroImage src={hero.src} alt="Hero" />
      <HeroTextContainer>
        <HeroText>
          Layout is <HeroStability stable={!shiftScore}>{shiftScore ? "Unstable" : "Stable"}</HeroStability>
        </HeroText>
      </HeroTextContainer>
    </HeroContainer>
  );
};

export default Hero;
