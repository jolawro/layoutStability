import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { Link } from "react-router-dom";

const pushForward = `
  position: relative;
  z-index: 1;
`;

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

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(/hero1.jpg);
    background-size: cover;
    opacity: 0.4;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 23px;
  ${pushForward};
`;

export const HomeSubtitle = styled.h2`
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 46px;
  ${pushForward};
`;

export const HomeLink = styled(Link)`
  color: ${fromTheme.base("primary")};
  line-height: 60px;
  background-color: ${fromTheme.bg("tertiary")};
  padding: 0 30px;
  border-radius: 30px;
  ${pushForward};
`;
