import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { GAPS } from "../../helpers/constants/gaps";

export const CookiesContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${GAPS.s};
  font-size: 16px;
  background-color: ${fromTheme.base("secondary")};
  color: ${fromTheme.bg("tertiary")};
  cursor: pointer;
`;
