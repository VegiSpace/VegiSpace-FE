import styled, { css } from "styled-components";
import { colors } from "../../styles/options";

const StyledInputContainer = styled.div`
  width: fit-content;
`;

const StyledInputTitle = styled.label`
  color: ${colors.grey[500]};
`;

const StyledInputWrapper = styled.div<{ focused: string; isValid: boolean }>`
  ${({ focused, isValid }) =>
    focused === "false" &&
    isValid === true &&
    css`
      border-bottom: 2px solid ${colors.primary["25"]};
    `}

  ${({ focused, isValid }) =>
    focused === "false" &&
    isValid === false &&
    css`
      border-bottom: 2px solid ${colors.warning["25"]};
    `}

      ${({ focused, isValid }) =>
    focused === "true" &&
    isValid === true &&
    css`
      border-bottom: 2px solid ${colors.primary["300"]};
    `}
          ${({ focused, isValid }) =>
    focused === "true" &&
    isValid === false &&
    css`
      border-bottom: 2px solid ${colors.warning["25"]};
    `}
  margin: 0.4rem 0;
  width: 32.6rem;
  height: 1.6rem;
  padding-top: 0.4rem;
  padding-bottom: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  border: none;
  margin-left: 0.6rem;
  margin-right: 0.8rem;
  width: 100%;
  color: ${colors.neutral[1000]};
`;

const StyledInputCaptionWrapper = styled.div<{ isValid: boolean }>`
  ${({ isValid }) =>
    isValid
      ? css`
          display: none;
        `
      : css`
          display: block;
          color: ${colors.warning["25"]};
        `}
`;

export {
  StyledInputContainer,
  StyledInputTitle,
  StyledInputWrapper,
  StyledInput,
  StyledInputCaptionWrapper,
};
