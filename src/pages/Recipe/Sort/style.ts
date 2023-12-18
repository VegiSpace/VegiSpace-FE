import styled from "styled-components";
import { borderRadius, colors } from "styles/options";

const SortContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SortItem = styled.span`
  padding: 1rem;
  color: white;
  background-color: ${colors.primary[300]};
  border-radius: ${borderRadius.square};
`;

export { SortContainer, SortItem };
