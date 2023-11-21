import { InputComponentProps } from "../../types/Auth";

const LoginInputs: InputComponentProps[] = [
  {
    id: 1,
    name: "email",
    type: "text",
    placeholder: "이메일 주소",
    label: "",
    required: true,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "비밀 번호",
    label: "",
    required: true,
  },
];

export { LoginInputs };
