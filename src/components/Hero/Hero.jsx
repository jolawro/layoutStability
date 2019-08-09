import React, { useState, useEffect } from "react";
import { HeroContainer, HeroText, HeroTextContainer, HeroImage } from "./Hero.styles";
import DisturbFilter from "./DisturbFiler";

const Hero = ({ imageSrc }) => {
  const [shiftScore, setShiftScore] = useState(0);
  useEffect(function() {
    let totalScore = 0;
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        console.log(entry);
        setShiftScore(totalScore + entry.value);
      }
    });
    // observer.observe({ type: "layoutShift", buffered: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <HeroContainer>
      <DisturbFilter frequency={shiftScore / 10} />
      <HeroImage src={imageSrc} alt="Hero" intrinsicsize="1400 x 700" />
      <HeroTextContainer>
        <HeroText>Unstable</HeroText>
      </HeroTextContainer>
    </HeroContainer>
  );
};

export default Hero;
