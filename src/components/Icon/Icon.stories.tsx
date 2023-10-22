import React from "react";
import { Meta } from "@storybook/react";
import {
  Lock as LockIcon,
  Visible as VisibleIcon,
  Search as SearchIcon,
  Back as BackIcon,
  Cart as CartIcon,
  Exit as ExitIcon,
  Invisible as InvisibleIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  IconProps,
} from "../Icon";

const meta: Meta = {
  title: "Icon",
  tags: ["autodocs"],
  args: {
    width: 16,
    height: 16,
    type: "black",
  },
  argTypes: {
    width: {
      description: "너비 지정",
      table: {
        defaultValue: { summary: 16 },
        type: { summary: "16 | 20 | 24" },
        control: { type: "range", min: 1, max: 50, step: 1 },
      },
    },
    height: {
      description: "너비 지정",
      table: {
        defaultValue: { summary: 16 },
        type: { summary: "16 | 20 | 24" },
        control: { type: "range", min: 1, max: 50, step: 1 },
      },
    },
    type: {
      description: "색상 타입 지정",
      table: {
        /*category: "Button.Mini",*/
        type: { summary: "black | white" },
        defaultValue: { summary: "black" },
        // 추가
      },
      options: ["black", "white"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

export const Back = (args: IconProps) => (
  <>
    <BackIcon {...args} />
  </>
);

export const Cart = (args: IconProps) => (
  <>
    <CartIcon width={16} height={16} type="black" />
  </>
);
export const Exit = (args: IconProps) => (
  <>
    <ExitIcon width={16} height={16} type="black" />
  </>
);

export const Invisible = (args: IconProps) => (
  <>
    <Invisible width={16} height={16} type="black" />
  </>
);
export const Lock = (args: IconProps) => (
  <>
    <LockIcon width={16} height={16} type="black" />
  </>
);
export const Notifications = (args: IconProps) => (
  <>
    <NotificationsIcon width={16} height={16} type="black" />
  </>
);

export const Search = (args: IconProps) => (
  <>
    <SearchIcon width={16} height={16} type="black" />
  </>
);

export const Settings = (args: IconProps) => (
  <>
    <SettingsIcon width={16} height={16} type="black" />
  </>
);

export const Visible = (args: IconProps) => (
  <>
    <VisibleIcon width={16} height={16} type="black" />
  </>
);
