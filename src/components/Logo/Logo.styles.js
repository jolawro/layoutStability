import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const LogoTitle = styled.h1`
  font-weight: bold;
  margin-left: 10px;
  position: relative;
  top: 3px;
  font-size: 22px;
`;

export const LogoSubtitle = styled.span`
  font-weight: 100;
`;

export const LogoImage = styled.img`
  margin-left: 20px;
  width: 50px;
  height: 50px;
  background-color: ${fromTheme.bg("primary")};
`;
