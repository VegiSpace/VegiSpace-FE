import React from "react";
import { Story,Meta } from "@storybook/react";
import {
  Button,
  DefaultProps,
  SecondaryProps,
  MiniProps,
  TextProps,
} from "./Button";

const meta: Meta = {
  title: "Button",
  args: {
    children: "Click Me!",
  },
};

export default meta;

export const Primary = {
  render: (args: DefaultProps) => <Button.Default {...args} />,
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
  render: (args: SecondaryProps) => <Button.Secondary {...args} />,
  args: {
    border: "square",
    color: "white",
  },
  argTypes: {
    border: { control: "inline-radio", options: ["square", "round"] },
    color: { control: "inline-radio", options: ["white", "yellow", "green"] },
  },
};

export const Mini = {
  render: (args: MiniProps) => <Button.Mini {...args} />,
  args: {
    color: "green",
    height: 48,
    border: "round",
  },
  argTypes: {
    color: { control: "inline-radio", options: ["white", "green"] },
    height: { control: "inline-radio", options: [36, 48] },
    border: { control: "inline-radio", options: ["square", "round"] },
  },
};

export const Text = {
  render: (args: TextProps) => <Button.Text {...args} />,
  args: {
    color: "green",
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["white", "green", "yellow", "black"],
    },
  },
};