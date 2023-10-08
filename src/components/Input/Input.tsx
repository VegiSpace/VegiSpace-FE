import { FormEvent, InputHTMLAttributes, ReactNode, useState } from "react";
// import StyledDefault from "./Button.styles";
import {
  StyledInputContainer,
  StyledInputTitle,
  StyledInputWrapper,
  StyledInput,
  StyledInputCaptionWrapper,
} from "./Input.styles";
import { Typo } from "../Typo";
import { Icon } from "../Icon";
import { InputProps, InputStateControlProps } from "../../templates/signup";

interface widthProps {
  width: "full" | "half" | "mini";
}

interface IconProps {
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
}

export type InputContainerProps = InputProps & InputStateControlProps;

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
}: InputContainerProps & IconProps) => {
  const [focused, setFocused] = useState(false);
  console.log(isValid, "InputContainer", label);

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

      <InputCaption captionMessage={captionMessage} isValid={isValid ?? true} />
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
}: Partial<InputContainerProps> &
  IconProps & {
    /*handleFocus: () => void;*/
    setFocused: React.Dispatch<React.SetStateAction<boolean>>;
    focused: boolean;
  }) => {
  console.log(isValid, "input Wrapper", name);
  return (
    <>
      <StyledInputWrapper
        focused={focused.toString()}
        isValid={isValid ?? true}
      >
        {showLeftIcon && <Icon.Lock />}
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

          /*onFocus={() => console.log("Focused on input")}
        onBlur={() => console.log("Triggered because this input lost focus")}
          onBlur={handleFocus}
          onFocus={() => name === "confirmPassword" && setFocused(true)}
          focused={focused.toString()}*/
        />

        {showRightIcon && <Icon.VisibilityIcon />}
      </StyledInputWrapper>
    </>
  );
};

const InputCaption = ({
  captionMessage,
  isValid,
}: Partial<InputContainerProps>) => {
  console.log(isValid, "input cation");
  return (
    <>
      <StyledInputCaptionWrapper isValid={isValid ?? true}>
        <Typo.Caption3>{captionMessage}</Typo.Caption3>
      </StyledInputCaptionWrapper>
    </>
  );
};

export { InputContainer };

