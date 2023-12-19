import styled from "styled-components";
import { borderRadius, colors } from "styles/options";

const CompleteContainer = styled.div`
  color: ${colors.neutral[0]};
  background-color: ${colors.primary[300]};
  padding: 0.5rem 0.7rem;
  border-radius: ${borderRadius.square};
  width: fit-content;
`;

export { CompleteContainer };
