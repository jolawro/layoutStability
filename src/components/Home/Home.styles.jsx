import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${fromTheme.base("quaternary")};
`;

export const HomeTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 23px;
`;

export const HomeSubtitle = styled.h2`
  font-size: 25px;
  font-weight: 100;
  margin-bottom: 46px;
`;

export const HomeLink = styled(Link)`
  color: ${fromTheme.base("secondary")};
  line-height: 60px;
  background-color: ${fromTheme.bg("tertiary")};
  padding: 0 30px;
  border-radius: 30px;
`;
