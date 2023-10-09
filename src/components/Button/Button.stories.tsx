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
  tags: ["autodocs"],
  args: {
    children: "Click Me!",
    color: "green",
  },
  argTypes: {
    children: {
      description: "부모인 버튼 태그 내부의 하위컴포넌트",
      table: {
        category: "Button",
        type: { summary: "string" },
      },
    },
    disabled: {
      description: "버튼 기능 비활성화 상태 지정",
      table: {
        category: "Button.Default",
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    color: {
      description: "버튼 색상 지정",
      table: {
        category: "Button",
        type: { summary: "green | black | white | yellow" },
        // 추가
      },
      options: ["white", "yellow", "green"],
      control: {
        type: "select",
      },
    },
    border: {
      description: "버튼 둥금 여부 지정",
      table: {
        category: ["Button.Secondary", "Button.Mini"],
        type: { summary: "square | round" },
        // 추가
      },
      options: ["square", "round"],
      control: {
        type: "select",
      },
    },
    height: {
      description: "버튼 높이 지정",
      table: {
        category: "Button.Mini",
        type: { summary: "36 | 48" },
        // 추가
      },
      options: [36, 48],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args: DefaultProps) => <Button.Default {...args} />,
  args: {
    color: "green",
    disabled: false,
  },
  argTypes: {
    color: { control: "select", options: ["green", "black"] },
    disabled: { control: { type: "boolean" } },
  },
};

export const Secondary = {
  render: (args: SecondaryProps) => <Button.Secondary {...args} />,
  args: {
    border: "square",
    color: "green",
  },
  argTypes: {
    border: { control: "select", options: ["square", "round"] },
    color: { control: "select", options: ["white", "yellow", "green"] },
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
    color: { control: "select", options: ["white", "green"] },
    height: { control: "select", options: [36, 48] },
    border: { control: "select", options: ["square", "round"] },
  },
};

export const Text = {
  render: (args: TextProps) => <Button.Text {...args} />,
  args: {
    color: "green",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["white", "green", "yellow", "black"],
    },
  },
};