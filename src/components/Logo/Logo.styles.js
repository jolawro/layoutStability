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
  top: 2px;
  font-size: 22px;
  color: ${fromTheme.base("primary")};
`;

export const LogoSubtitle = styled.span`
  font-weight: 300;
`;

export const LogoImage = styled.img`
  margin-left: 20px;
  // width: 44px;
  // height: 44px;
  // background-color: ${fromTheme.bg("primary")};
`;
