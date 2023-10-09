import React, { FormEvent, useState } from "react";
import { InputContainer } from "../components/Input/Input";
import { IsEmail } from "../utiles/validation";

const inputs: InputProps[] = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "안녕하세요hello123",
    label: "사용자 이름",
    required: true,
    captionMessage: "안녕하세요hello123",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "email@ccc.com",
    captionMessage: "잘못된 email 형식입니다",
    label: "email",
    errorHandler: IsEmail,
    required: true,
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Confirm Password",
    captionMessage: "Passwords don't match!",
    label: "" /**라벨 없는 경우 */,
    required: true,
  },
];

interface InputCommonProps {
  id?: number;
  name: string;
  type: "text" | "password" | "email";
  placeholder: string;
  label: string;
  required?: boolean;
}
interface InputValidProps {
  disabled?: boolean;
  captionMessage?: string;
  errorHandler?: (value: string) => boolean;
  isValid?: boolean;
}

export type InputProps = InputCommonProps & InputValidProps;

export interface UserFormInputProps {
  [idx: string]: string;
  username: string;
  email: string;
  password: string;
}

export interface InputStateControlProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: UserFormInputProps[keyof UserFormInputProps];
}

const SignUp = () => {
  const [values, setValues] = useState<UserFormInputProps>({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    setValues({ ...values, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map(({ id, name, errorHandler, ...args }: InputProps) => (
        <InputContainer
          key={id}
          name={name}
          value={values[name]}
          onChange={onChange}
          showLeftIcon={true}
          showRightIcon={true}
          isValid={errorHandler?.(values[name]) ?? true}
          disabled={false}
          errorHandler={errorHandler}
          {...args}
        />
      ))}
      <button onClick={() => console.log(values)}>submit</button>
    </form>
  );
};

export default SignUp;
