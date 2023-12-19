import styled from "styled-components";
import { colors } from "styles/options";

const SectionLine = styled.hr`
  color: black;
  background-color: black;
  width: 100%;
  height: 0.125rem;
  margin: 0.5rem 0;
`;

const HistoryCardContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid ${colors.grey[300]};
  padding: 1.5rem 0;
`;

export { SectionLine, HistoryCardContainer };
