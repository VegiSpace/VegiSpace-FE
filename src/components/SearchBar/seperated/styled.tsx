import styled, { css } from "styled-components";
import { colors } from "../../../styles/options";
import { SearchBarProps } from "../SearchBar";

const StyledForm = styled.form<{
  outlined: SearchBarProps["outlined"];
  rightIcon: SearchBarProps["leftIcon"];
  leftIcon: SearchBarProps["rightIcon"];
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 32.8rem;
  height: 4.4rem;
  padding: 1.2rem;
  align-items: center;
  gap: 1.2rem;
  ${({ rightIcon }) =>
    !rightIcon &&
    css`
      padding-right: 0;
    `}
  ${({ leftIcon }) =>
    !leftIcon &&
    css`
      padding-left: 0;
    `}
`;
const StyledInput = styled.input<{ outlined: SearchBarProps["outlined"] }>`
  border: none;
  width: 100%;
  border-radius: 5px;

  color: ${colors.grey[500]};
  padding: 1.4rem 1.7rem;
  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid ${colors.neutral[1000]};
    `}
`;

const StyledButton = styled.button``;

export { StyledForm, StyledInput, StyledButton };
