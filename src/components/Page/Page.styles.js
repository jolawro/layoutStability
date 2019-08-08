import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";
import { pixelToRem } from "../../helpers/pixelsToRem";
import { BREAKPOINT } from "../../helpers/constants/breakpoints";

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
  font-family: Dosis;
  font-size: ${pixelToRem(14)};
  line-height: 20px;
  margin: 0;
  text-transform: capitalize;
  display: flex;
  width: 100%;
  font-weight: bold;
  color: ${fromTheme.base("primary")};
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
  font-size: ${pixelToRem(18)};
  letter-spacing: 1px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.main`
  flex-grow: 1;
  background-color: ${fromTheme.bg("primary")};
`;

export const Header = styled.header`
  height: 85px;
  background-color: ${fromTheme.bg("tertiary")};
`;

export const Footer = styled.footer`
  height: ${FOOTER_SIZE};
  background-color: #000;
`;

export const FooterLinks = styled.div`
  height: calc(${FOOTER_SIZE} - ${HEADER_SIZE});
  background-color: #333;
`;
