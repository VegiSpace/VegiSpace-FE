import styled from "styled-components";
import { borderRadius, colors } from "styles/options";

const FreqUsedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  width: 100%;
  margin: 1.4rem 0;
`;

const FreqUsedCard = styled.div`
  height: 5.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${borderRadius.square};
  border: 1px solid ${colors.grey[100]};
  margin-right: 1.5rem;
`;

const FreqUsedTitle = styled.div`
  width: 12rem;
  padding: 2.3rem 1.5rem;
`;

export { FreqUsedCard, FreqUsedContainer, FreqUsedTitle };
