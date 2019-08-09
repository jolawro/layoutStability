import styled from "styled-components";
import { GAPS } from "../../helpers/constants/gaps";
import { Heading } from "../Page/Page.styles";

export const P = styled.p`
  margin: ${GAPS.xs} 0;
  line-height: 1.5;
`;

export const SectionHeading = styled(Heading).attrs({
  tag: "h4"
})`
  text-align: center;
`;
