import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { GAPS } from "../../helpers/constants/gaps";

export const HeroContainer = styled.div`
  position: relative;
  margin-bottom: ${GAPS.m};
  background-color: ${fromTheme.base("subtle")};

  &::after {
    content: "";
    display: block;
    padding-top: ${Math.floor((300 / 700) * 100)}%;
  }
`;

export const HeroTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroText = styled.h3`
  font-size: 42px;
  font-weight: 300;
  color: ${fromTheme.base("secondary")};
`;

export const HeroStability = styled.strong`
  font-weight: bold;
  color: ${({ stable }) => (stable ? "inherit" : "#e2234c")};
  animation: ${({ stable }) => (stable ? "none" : "squiggly-anim 0.34s linear infinite")};

  @keyframes squiggly-anim {
    0% {
      filter: url("#squiggly-0");
    }
    25% {
      filter: url("#squiggly-1");
    }
    50% {
      filter: url("#squiggly-2");
    }
    75% {
      filter: url("#squiggly-3");
    }
    100% {
      filter: url("#squiggly-4");
    }
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
