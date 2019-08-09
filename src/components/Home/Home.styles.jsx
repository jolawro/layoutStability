import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { Link } from "react-router-dom";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${fromTheme.base("secondary")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${fromTheme.bg("tertiary")};
`;

export const HomeTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const HomeSubtitle = styled.h1`
  font-size: 25px;
  font-weight: 100;
  margin-bottom: 40px;
`;

export const HomeLink = styled(Link)`
  color: ${fromTheme.base("subtle")};
  text-decoration: underline;
`;
