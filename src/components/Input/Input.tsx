import { InputHTMLAttributes, ReactNode } from "react";
// import StyledDefault from "./Button.styles";
import styled, { css } from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  //text: string;

  name: string;
  id: string;
  type: string;
  value: string | number;
  error?: boolean;
  placeholder: string;
  label?: string;
  //children?: ReactNode;
}

interface widthProps {
  width: "full" | "half" | "mini";
}

type InputWrapperProps = InputProps & widthProps;

const widthStyles = css<{ width: InputWrapperProps["width"] }>`
  ${({ width }) =>
    width === "full" &&
    css`
      width: 328px;
    `}
  ${({ width }) =>
    width === "half" &&
    css`
      width: 149px;
    `}
      ${({ width }) =>
    width === "mini" &&
    css`
      width: 104px;
    `}
`;

const errorStyles = css<{ error: InputWrapperProps["error"] }>`
  ${({ error }) =>
    error &&
    css`
      border-color: red;
      color: red;
      &::placeholder {
        color: red;
      }
    `}

  ${({ error }) =>
    !error &&
    css`
      border-color: #717171;
    `}
`;

const StyledWrapper = styled.div``;

const StyledContainer = styled.div<{
  error: InputWrapperProps["error"];
  width: InputWrapperProps["width"];
}>`
  /*공통 스타일*/
  height: 34px;
  border: 0.5px solid;

  padding: 8px 12px;
  ${errorStyles}
  ${widthStyles}
`;

const StyledLabel = styled.label`
  color: black;
  font-size: 10px;
  margin-bottom: 5px;
`;

const StyledInput = styled.input<{ error: InputWrapperProps["error"] }>`
  /*공통 스타일*/
  box-sizing: border-box;
  color: black;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  ${errorStyles}
`;

const InputWrapper = ({
  error,
  width,
  label,
  ...props
}: InputWrapperProps): JSX.Element => (
  <StyledWrapper>
    <StyledLabel>* {label}</StyledLabel>
    <StyledContainer error={error} width={width}>
      <Input error={error} {...props} />
    </StyledContainer>
  </StyledWrapper>
);

const Input = ({
  placeholder,
  type,
  value,
  error,
  name,
  id,
}: InputProps): JSX.Element => (
  <StyledInput
    error={error}
    placeholder={placeholder}
    type={type}
    value={value}
    name={name}
    id={id}
  />
);

export { InputWrapper };
export type { InputWrapperProps };
