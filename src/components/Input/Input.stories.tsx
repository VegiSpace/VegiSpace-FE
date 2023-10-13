import { Meta, StoryFn } from "@storybook/react";
import { InputContainer, InputContainerProps } from ".";
import { IsEmail } from "../../utiles/validation";

export default {
  component: InputContainer,
  title: "Field Input",
} as Meta;

const Template: StoryFn<InputContainerProps> = (args) => (
  <InputContainer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  id: 1,
  name: "username",
  type: "text",
  placeholder: "Placeholder",
  label: "사용자 이름",
  required: true,
  captionMessage: "이름을 입력하시오",
  value: "김사용자",
  showLeftIcon: true,
  showRightIcon: true,
  errorHandler: undefined,
};

export const Inactive = Template.bind({});

Inactive.args = {
  id: 1,
  name: "username",
  type: "text",
  placeholder: "Placeholder",
  label: "사용자 이름",
  required: true,
  isValid: true,
  captionMessage: "이름을 입력하시오",
  value: "김사용자",
  showLeftIcon: false,
  showRightIcon: false,
  errorHandler: undefined,
};

export const Disabled = Template.bind({});

Disabled.args = {
  id: 1,
  name: "username",
  type: "text",
  placeholder: "Placeholder",
  label: "사용자 이름",
  required: true,
  isValid: true,
  captionMessage: "이름을 입력하시오",
  value: "김사용자",
  showLeftIcon: true,
  showRightIcon: false,
  errorHandler: undefined,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  id: 1,
  name: "username",
  type: "email",
  placeholder: "Placeholder",
  label: "사용자 이메일",
  required: true,
  isValid: false,
  captionMessage: "올바른 이메일 주소를 입력하시오",
  value: "ewha",
  showLeftIcon: true,
  showRightIcon: true,
  errorHandler: IsEmail,
};

/*
export const Active = Template.bind({});
Active.args = {
  id: 1,
  name: "username",
  type: "email",
  placeholder: "Placeholder",
  label: "사용자 이메일",
  required: true,
  isValid: true,
  value: "vegispace@ewhain.net",
  showLeftIcon: false,
  showRightIcon: false,
};
*/
