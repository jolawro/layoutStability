import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";

export const ICON_SIZES = {
  s: "8px",
  m: "16px"
};

export const IconSVGContainer = styled.svg`
  display: block;
  width: ${({ size }) => ICON_SIZES[size]};
  height: ${({ size }) => ICON_SIZES[size]};
  fill: ${fromTheme.base("primary")};
`;

export const CircleIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${fromTheme.bg("secondary")};
  font-weight: 100;
  margin-left: 10px;
`;
