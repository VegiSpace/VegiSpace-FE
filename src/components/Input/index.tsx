import { FormEvent, InputHTMLAttributes, ReactNode, useState } from "react";
// import StyledDefault from "./Button.styles";
import {
  StyledInputContainer,
  StyledInputTitle,
  StyledInputWrapper,
  StyledInput,
  StyledInputErrorWrapper,
  StyledInputCaptionWrapper,
} from "./Input.styles";
import { Typo } from "../Typo";
import { Lock, Visible } from "../Icon";
import { InputComponentProps, InputStateControlProps } from "../../types/Auth";

interface IconProps {
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
}

interface FocusProps {
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
  focused: boolean;
}

export type InputContainerProps = InputComponentProps &
  InputStateControlProps &
  IconProps;

const InputContainer = ({
  label,
  isValid,
  errorHandler,
  captionMessage,
  onChange,
  value,
  disabled,
  showLeftIcon,
  showRightIcon,

  ...inputProps
}: InputContainerProps) => {
  const [focused, setFocused] = useState(false);
  //console.log(isValid, "InputContainer", label, errorHandler);

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <StyledInputContainer>
      {label && <InputTitle label={label} />}
      <InputWrapper
        onChange={onChange}
        focused={focused}
        setFocused={setFocused}
        showLeftIcon={showLeftIcon}
        showRightIcon={showRightIcon}
        value={value}
        disabled={disabled}
        isValid={isValid ?? true}
        {...inputProps}
      />

      <InputCaption
        captionMessage={captionMessage}
        isValid={isValid ?? true}
        errorHandler={errorHandler}
      />
    </StyledInputContainer>
  );
};

const InputTitle = ({ label }: Pick<InputContainerProps, "label">) => {
  return <StyledInputTitle>{label}</StyledInputTitle>;
};

const InputWrapper = ({
  onChange,
  focused,
  setFocused,
  name,
  type,
  placeholder,
  showLeftIcon,
  showRightIcon,
  isValid,
  disabled,
  required,

  value,
}: Partial<InputContainerProps> & FocusProps) => {
  //console.log(isValid, "input Wrapper", name);
  return (
    <>
      <StyledInputWrapper focused={`${focused}`} isValid={isValid ?? true}>
        {showLeftIcon && <Lock type="white" />}
        <StyledInput
          type={type}
          placeholder={placeholder}
          name={name}
          required={required}
          onChange={onChange}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
        />

        {showRightIcon && <Visible type="white" />}
      </StyledInputWrapper>
    </>
  );
};

const InputCaption = ({
  captionMessage,
  isValid,
  errorHandler,
}: Partial<InputContainerProps>) => {
  //console.log(isValid, errorHandler, "input cation");
  return (
    <>
      {captionMessage && errorHandler !== undefined && (
        <StyledInputErrorWrapper isValid={isValid ?? true}>
          <Typo typoType="Caption3">{captionMessage}</Typo>
        </StyledInputErrorWrapper>
      )}
      {captionMessage && errorHandler === undefined && (
        <StyledInputCaptionWrapper>
          <Typo typoType="Caption3">{captionMessage}</Typo>
        </StyledInputCaptionWrapper>
      )}
    </>
  );
};

export { InputContainer, InputTitle, InputWrapper, InputCaption };

export type { FocusProps, IconProps };
