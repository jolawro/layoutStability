import styled from "styled-components";
import { fromTheme } from "../../helpers/constants/colors";

export const SpinnerIcon = styled.div`
  margin: 0;
  width: 40px;
  height: 40px;
  color: ${fromTheme.base("subtle")};
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
