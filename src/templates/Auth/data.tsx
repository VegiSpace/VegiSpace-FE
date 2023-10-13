import { InputComponentProps } from "../../types/Auth";

const LoginInputs: InputComponentProps[] = [
  {
    id: 1,
    name: "id",
    type: "text",
    placeholder: "아이디",
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
