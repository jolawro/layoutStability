import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { GAPS } from "../../helpers/constants/gaps";

export const CookiesContainer = styled.div`
  position: fixed;
  top: -${GAPS.s};
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

  transition: transform .5s;
  transform: translateY(${({cookiesVisible}) => cookiesVisible ? GAPS.s : 0})

`;
