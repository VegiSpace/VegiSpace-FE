import { FormEvent, ChangeEvent } from "react";

export interface InputCommonProps {
  id?: number;
  name: string;
  type: "text" | "password" | "email";
  placeholder: string;
  label: string;
  required?: boolean;
}
export interface InputValidProps {
  disabled?: boolean;
  captionMessage?: string;
  errorHandler?: (value: string) => boolean;
  isValid?: boolean;
}

export type InputComponentProps = InputCommonProps & InputValidProps;

export interface UserFormInputProps {
  [idx: string]: string;
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginFormInputProps {
  [idx: string]: string;
  id: UserFormInputProps["id"];
  password: UserFormInputProps["password"];
}

export interface SignupFormInputProps {
  [idx: string]: string;
  email: UserFormInputProps["email"];
  username: UserFormInputProps["username"];
  password: UserFormInputProps["password"];
}

export interface InputStateControlProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: UserFormInputProps[keyof UserFormInputProps];
}
