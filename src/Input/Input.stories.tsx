import {Meta} from "@storybook/react";
import {InputWrapper,InputWrapperProps} from "./Input";


const meta:Meta={
    title:"Input",
    args:{
        label:"항목 이름",
        placeholder:"배경 글자"
    }
}

export default meta;

export const Primary = {
  render: (args: InputWrapperProps) => <InputWrapper {...args} />,
  args: {
    error: true,
    width:"full"
  },
  argTypes: {
    error: { control: "boolean" },
    width: { control: "inline-radio", options: ["full", "half","mini"] },
  },
};