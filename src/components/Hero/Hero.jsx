import React, { useState, useEffect } from "react";
import { HeroContainer, HeroText, HeroTextContainer, HeroImage, HeroStability } from "./Hero.styles";
import DisturbFilter from "./DisturbFilter";
import hero from "./hero.jpg";
import { Invisible } from "../Icon/Icons";

const Hero = () => {
  const [shiftScore, setShiftScore] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(function() {
    let totalScore = 0;
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        console.log(entry);
        setShiftScore(totalScore + entry.value);
      }
    });
    observer.observe({ type: "layoutShift", buffered: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <HeroContainer>
      <DisturbFilter frequency={shiftScore / 10} />
      <HeroImage src={imageLoaded ? hero.src : hero.preSrc} alt="Hero" intrinsicsize="1400 x 700" />
      <Invisible>
        <img src={hero.src} onLoad={() => setImageLoaded(true)} alt="Hero" />
      </Invisible>
      <HeroTextContainer>
        <HeroText>
          Layout is <HeroStability stable={!shiftScore}>{shiftScore ? "Unstable" : "Stable"}</HeroStability>
        </HeroText>
      </HeroTextContainer>
    </HeroContainer>
  );
};

export default Hero;
