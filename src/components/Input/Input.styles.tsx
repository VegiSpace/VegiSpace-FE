import styled, { css } from "styled-components";
import { colors } from "../../styles/options";
import { InputContainerProps, FocusProps } from ".";
import { error } from "console";

const StyledInputContainer = styled.div`
  width: fit-content;
`;

const StyledInputTitle = styled.label`
  color: ${colors.grey[500]};
`;

const StyledInputWrapper = styled.div<{
  focused: string;
  isValid: InputContainerProps["isValid"];
}>`
  border-bottom: 2px solid ${colors.grey["500"]};
  ${({ focused, isValid }) =>
    focused === "false" &&
    isValid === true &&
    css`
      border-bottom: 2px solid ${colors.grey["500"]};
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
  height: 3.4rem;
  padding-top: 0.4rem;
  padding-bottom: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  border: none;
  /*margin-left: 0.6rem;
  margin-right: 0.8rem;*/
  width: 100%;
  color: ${colors.neutral[1000]};
`;

const StyledInputErrorWrapper = styled.div<{
  isValid: InputContainerProps["isValid"];
}>`
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

const StyledInputCaptionWrapper = styled.div`
  color: ${colors.grey["500"]};
`;

export {
  StyledInputContainer,
  StyledInputTitle,
  StyledInputWrapper,
  StyledInput,
  StyledInputErrorWrapper,
  StyledInputCaptionWrapper,
};
