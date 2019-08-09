import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { GAPS } from "../../helpers/constants/gaps";

export const ICON_SIZES = {
  s: "10px",
  m: "16px"
};

export const IconSVGContainer = styled.svg`
  display: block;
  width: ${({ size }) => ICON_SIZES[size]};
  height: ${({ size }) => ICON_SIZES[size]};
  fill: ${fromTheme.base("primary")};
`;

export const CircleIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${GAPS.s};
  height: ${GAPS.s};
  border: 0;
  border-radius: 50%;
  outline: 0;
  background-color: ${fromTheme.bg("tertiary")};
  cursor: pointer;
  trnasition: transform 0.2s;

  &:hover ${IconSVGContainer} {
    transform: scale(1.1);
  }
`;
