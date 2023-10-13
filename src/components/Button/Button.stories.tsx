import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button, ButtonProps } from ".";

const meta: Meta = {
  title: "Button",
  tags: ["autodocs"],
  args: {
    children: "Click Me!",
  },
  argTypes: {
    children: {
      description: "부모인 버튼 태그 내부의 하위컴포넌트",
      table: {
        /*category: "Button",*/
        type: { summary: "string" },
      },
    },
    btnType: {
      description: "버튼 타입 지정",
      table: {
        /*category: "Button",*/
        type: { summary: "primary | secondary | mini | text" },
        // 추가
      },
      options: ["primary", "secondary", "mini", "text"],
      control: {
        type: "select",
      },
    },
    onClick: {
      description: "버튼 클릭 이벤트 핸들러",
      table: {
        /*category: "Button",*/
        type: { summary: "()=>void" },
        // 추가
      },
    },
    disabled: {
      description: "버튼 기능 비활성화 상태 지정",
      table: {
        /*category: "Button.Default",*/
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    color: {
      description: "버튼 색상 지정",
      table: {
        /*category: "Button",*/
        type: { summary: "green | black | white | yellow" },
        // 추가
      },
      options: ["white", "yellow", "green", "black"],
      control: {
        type: "select",
      },
    },
    border: {
      description: "버튼 둥금 여부 지정",
      table: {
        /*category: ["Button.Secondary", "Button.Mini"],*/
        type: { summary: "square | round" },
        defaultValue: { summary: "square" },
      },
      options: ["square", "round"],
      control: {
        type: "select",
      },
    },
    height: {
      description: "버튼 높이 지정",
      table: {
        /*category: "Button.Mini",*/
        type: { summary: "36 | 48" },
        defaultValue: { summary: 48 },
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

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnType: "primary",
  color: "green",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnType: "secondary",
  border: "square",
  color: "green",
};

export const Mini = Template.bind({});
Mini.args = {
  btnType: "mini",
  border: "square",
  height: 48,
  color: "green",
};

export const Text = Template.bind({});
Text.args = {
  btnType: "text",
  color: "green",
};
