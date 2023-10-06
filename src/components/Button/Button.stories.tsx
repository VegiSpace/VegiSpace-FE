import React from "react";
import { Story,Meta } from "@storybook/react";
import {
  ButtonDefault,
  DefaultProps,
  ButtonSecondary,
  SecondaryProps,
  ButtonMini,
  MiniProps
} from "./Button";


const meta: Meta = {
  title: "Button",
  args: {
    children: "Click Me!",
  },
};

export default meta;

export const Primary = {
  render: (args: DefaultProps) => <ButtonDefault {...args} />,
  args: {
    color: "green",
    disabled: false,
  },
  argTypes: {
    color: { control: "inline-radio", options: ["green", "black"] },
    disabled: { control: { type: "boolean" } },
  },
};

export const Secondary = {
  render: (args: SecondaryProps) => <ButtonSecondary {...args} />,
  args: {
    border: "square",
    color: "white",
  },
  argTypes: {
    border: { control: "inline-radio", options: ["square", "round"] },
    color: { control: "inline-radio", options: ["white","yellow", "green"] },
  },
};

export const Mini = {
  render: (args: MiniProps) => <ButtonMini {...args} />,
  args: {
    color: "white",
    height: 48,
    border:"round"
  },
  argTypes: {
    color: { control: "inline-radio", options: ["white", "green"] },
    height: { control: "inline-radio", options: [36, 48] },
    border: { control: "inline-radio", options: ["square", "round"] },
  },
};