import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { GAPS } from "../../helpers/constants/gaps";

export const CookiesContainer = styled.div`
  // position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${GAPS.s};
  font-size: 16px;
  background-color: ${fromTheme.base("secondary")};
  color: ${fromTheme.bg("tertiary")};
  cursor: pointer;

  display: ${({ cookiesVisible }) => (cookiesVisible ? "flex" : "none")};
`;
