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

export const HeroImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
