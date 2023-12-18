import styled from "styled-components";
import { borderRadius, colors } from "styles/options";

const CardContainer = styled.div<{ isGreen: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.8rem;
  background-color: ${(props) =>
    props.isGreen ? colors.neutral[0] : colors.primary[300]};
  border-radius: ${borderRadius.normal};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 1.4rem 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 1.6rem;
`;

const TimeWrapper = styled.div<{ isGreen: boolean }>`
  width: 8.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isGreen ? colors.primary[300] : colors.neutral[0]};
  padding: 0.4rem 0.8rem;
  border-radius: ${borderRadius.square};
  color: ${(props) =>
    props.isGreen ? colors.neutral[0] : colors.neutral[1000]};
`;

export { CardContainer, InfoContainer, TimeWrapper };
