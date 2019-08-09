import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { GAPS } from "../../helpers/constants/gaps";

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: ${GAPS.m};
  background-color: ${fromTheme.base("subtle")};
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
  font-size: 30px;
  color: ${fromTheme.bg("tertiary")}
  animation: squiggly-anim 0.34s linear infinite;

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
