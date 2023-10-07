import { FormEvent, InputHTMLAttributes, ReactNode, useState } from "react";
// import StyledDefault from "./Button.styles";
import styled, { css } from "styled-components";
import { colors, borderRadius } from "../../styles/options";
import { Icon } from "../Icon";
import { InputContainerProps } from "../../App";

interface widthProps {
  width: "full" | "half" | "mini";
}

const StyledInputTitle = styled.label`
  color: black;
`;

const StyledInput = styled.input<{
  focused: string;
}>``;
const StyledInputError = styled.span``;

const StyledInputWrapper = styled.div``;

const StyledInputContainer = styled.div``;
const InputContainer = (props: InputContainerProps) => {
  const [focused, setFocused] = useState(false);

  const { label, errorHandler, errorMessage, onChange, value, ...inputProps } =
    props;

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <StyledInputContainer>
      <InputTitle label={label} />
      <InputWrapper
        onChange={onChange}
        focused={focused}
        handleFocus={handleFocus}
        setFocused={setFocused}
        errorMessage={errorMessage}
        value={value}
        {...inputProps}
      />
      {!errorHandler(value) && <InputError errorMessage={errorMessage} />}
    </StyledInputContainer>
  );
};

const InputTitle = ({ label }: Pick<InputContainerProps, "label">) => {
  return <StyledInputTitle>{label}</StyledInputTitle>;
};
// {name, type, placeholder,pattern, required, errorMessage, onChange, value}:
const InputWrapper = ({
  onChange,
  handleFocus,
  focused,
  setFocused,
  name,
  type,
  placeholder,
  pattern,
  required,

  value,
}: Partial<InputContainerProps> & {
  handleFocus: () => void;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
  focused: boolean;
}) => {
  return (
    <>
      <StyledInputWrapper>
        <Icon.Lock />
        <StyledInput
          type={type}
          placeholder={placeholder}
          name={name}
          pattern={pattern}
          required={required}
          onChange={onChange}
          value={value}
          /*onFocus={() => console.log("Focused on input")}
        onBlur={() => console.log("Triggered because this input lost focus")}*/
          onBlur={handleFocus}
          onFocus={() => name === "confirmPassword" && setFocused(true)}
          focused={focused.toString()}
        />
        <Icon.VisibilityIcon />
      </StyledInputWrapper>
    </>
  );
};

const InputError = ({
  errorMessage,
}: Pick<InputContainerProps, "errorMessage">) => {
  return <StyledInputError>{errorMessage}</StyledInputError>;
};

export { InputContainer };
export type { InputContainerProps };
