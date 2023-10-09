import React from "react";
import { Story, Meta } from "@storybook/react";
import { SearchBar, SearchBarProps } from "./SearchBar";

const meta: Meta = {
  title: "Search Bar",
  args: {
    query: "주문한 상품을 찾아보세요",
    placeholder: "주문한 상품을 찾아보세요",
  },
};

export default meta;

export const Primary = {
  render: (args: SearchBarProps) => <SearchBar.Default {...args} />,
  args: {
    outlined: true,
    rightIcon: true,
    leftIcon: false,
  },
  argTypes: {
    leftIcon: { control: { type: "boolean" } },
    rightIcon: { control: { type: "boolean" } },
    outlined: { control: { type: "boolean" } },
  },
};

export const Seperate = {
  render: (args: SearchBarProps) => <SearchBar.Seperate {...args} />,
  args: {
    outlined: true,
    rightIcon: true,
    leftIcon: false,
  },
  argTypes: {
    leftIcon: { control: { type: "boolean" } },
    rightIcon: { control: { type: "boolean" } },
    outlined: { control: { type: "boolean" } },
  },
};
