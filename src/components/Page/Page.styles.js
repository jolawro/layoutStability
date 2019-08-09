import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { pixelToRem } from "../../helpers/pixelsToRem";
import { BREAKPOINT } from "../../helpers/constants/breakpoints";
import { GAPS } from "../../helpers/constants/gaps";

const HEADER_SIZE = "60px";
const FOOTER_SIZE = "200px";

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
  font-size: ${pixelToRem(18)};
  line-height: 1.5;
  letter-spacing: 1px;
`;

export const ContentContainer = styled(Container)`
  max-width: 716px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
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
  padding-bottom: ${GAPS.l};
  background-color: ${fromTheme.bg("primary")};
`;

export const Header = styled.header`
  height: 85px;
  background-color: ${fromTheme.bg("tertiary")};
`;

export const Footer = styled.footer`
  height: ${FOOTER_SIZE};
  background-color: ${fromTheme.base("secondary")};
`;

export const FooterLinks = styled.div`
  height: calc(${FOOTER_SIZE} - ${HEADER_SIZE});
  background-color: #333;
`;
