import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { pixelToRem } from "../../helpers/pixelsToRem";
import { BREAKPOINT } from "../../helpers/constants/breakpoints";
import { GAPS } from "../../helpers/constants/gaps";

export const Container = styled.div`
  width: 1220px;
  display: block;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: ${BREAKPOINT}) {
    width: 80vw;
    max-width: 800px;
  }
`;

export const Heading = styled.h1`
  margin: ${GAPS.m} 0 ${GAPS.s};
  font-family: Dosis;
  font-weight: bold;
  font-size: ${pixelToRem(21)};
  line-height: 1.5;
  letter-spacing: 1px;
`;

export const ContentContainer = styled(Container)`
  max-width: 716px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${fromTheme.bg("tertiary")};
  margin-bottom: -60px;
`;

export const MainHeading = styled(Heading)`
  margin: 80px 0 110px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  color: ${fromTheme.base("primary")};
`;

export const Content = styled.main`
  flex-grow: 1;
  padding-bottom: ${GAPS.m};
  background-color: ${fromTheme.bg("primary")};
  position: relative;
`;

export const Header = styled.header`
  height: 85px;
  background-color: ${fromTheme.bg("tertiary")};
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${fromTheme.base("secondary")};
  height: ${GAPS.l};
`;

export const FooterCopyright = styled.div`
  color: ${fromTheme.base("subtle")};
`;
