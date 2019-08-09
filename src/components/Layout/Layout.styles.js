import styled from "styled-components";
import { GAPS } from "../../helpers/constants/gaps";
import { Heading } from "../Page/Page.styles";

export const P = styled.p`
  margin: ${GAPS.xs} 0;
  line-height: 1.5;
  text-align: justify;
`;

export const SectionHeading = styled(Heading).attrs({
  tag: "h4"
})`
  font-size: 18px;
  text-align: center;
`;
