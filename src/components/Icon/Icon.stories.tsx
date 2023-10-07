import React from "react";
import { Meta } from "@storybook/react";
import { Icon, IconProps } from "../Icon";

const meta: Meta = {
  title: "Icon/Field",
  args: {
    width: 16,
    height: 16,
  },
};

export default meta;

export const Lock = {
  render: (args: IconProps) => (
    <>
      <Icon.Lock {...args} />
    </>
  ),

  argTypes: {
    width: { control: { type: "range", min: 1, max: 50, step: 1 } },
    height: { control: { type: "range", min: 1, max: 50, step: 1 } },
  },
};

export const Visibility = {
  render: (args: IconProps) => (
    <>
      <Icon.VisibilityIcon {...args} />
    </>
  ),

  argTypes: {
    width: { control: { type: "range", min: 1, max: 50, step: 1 } },
    height: { control: { type: "range", min: 1, max: 50, step: 1 } },
  },
};
