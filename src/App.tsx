import React, { FormEvent, useState } from "react";
import {
  Button,
  ButtonDefault,
  ButtonSecondary,
  ButtonText,
} from "./components/Button/Button";
import { InputContainer } from "./components/Input/Input";
import { Icon } from "./components/Icon";
import { Typo } from "./components/Typo";

interface InputCommonProps {
  id?: number;
  name: string;
  type: "text" | "password";
  placeholder: string;
  label: string;
}
interface InputValidProps {
  pattern?: string;
  required?: boolean;
  errorMessage?: string;
  errorHandler: (value: string) => boolean;
}

export type InputProps = InputCommonProps & InputValidProps;

export interface UserFormInputProps {
  [idx: string]: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface InputStateControlProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: UserFormInputProps[keyof UserFormInputProps];
}

export type InputContainerProps = InputProps & InputStateControlProps;

export function IsEmail(value: string) {
  const regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  console.log(value, regExp.test(value));
  if (value === undefined || value === "") {
    return true;
  } else {
    return regExp.test(value) ? true : false; //조건 충족 시 true 반환
  }
}

const App = (): JSX.Element => {
  const [values, setValues] = useState<UserFormInputProps>({
    username: "",
    password: "",
    confirmPassword: "",
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

  const inputs: InputProps[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "안녕하세요hello123",
      errorMessage: "이름은 3~16자로 구성되며 특수문자 사용이 불가능합니다.",
      errorHandler: IsEmail,
      label: "사용자 이름",
      required: true,
    },
    /*{
      id: 2,
      name: "password",
      type: "password",
      placeholder: "안녕하세요hello123",
      errorMessage:
        "비밀번호는 8~20자로 구성되며 최소 1개의 글자, 1개의 숫자, 1개의 특수문자로 구성되어야 합니다.",
      label: "비밀번호",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },*/
  ];
  return (
    <>
      <Button.Default disabled={false} color="green">
        Click Me
      </Button.Default>
      <Button.Default disabled={false} color="black">
        Default Black
      </Button.Default>
      <Button.Secondary border="square" color="white">
        Secondary sqaure
      </Button.Secondary>
      <Button.Secondary border="round" color="white">
        Secondary round
      </Button.Secondary>
      <Button.Text color="green">Secondary round</Button.Text>
      <form onSubmit={handleSubmit}>
        {inputs.map(({ id, name, ...args }: InputProps) => (
          <InputContainer
            key={id}
            name={name}
            value={values[name]}
            onChange={onChange}
            {...args}
          />
        ))}
        <button onClick={() => console.log(values)}>submit</button>
      </form>

      <Typo.Title1>Jacob's Playground</Typo.Title1>
      <Typo.Title2>Jacob's Playground</Typo.Title2>
      <Typo.Title3>Jacob's Playground</Typo.Title3>
      <Typo.Title4>Jacob's Playground</Typo.Title4>

      <Typo.Body1>Jacob's Playground</Typo.Body1>
      <Typo.Body2>Jacob's Playground</Typo.Body2>
      <Typo.Body3>Jacob's Playground</Typo.Body3>
      <Typo.Body4>Jacob's Playground</Typo.Body4>

      <Typo.Caption1>Jacob's Playground</Typo.Caption1>
      <Typo.Caption2>Jacob's Playground</Typo.Caption2>
      <Icon.Lock width={100} height={100} />
    </>
  );
};

export default App;
