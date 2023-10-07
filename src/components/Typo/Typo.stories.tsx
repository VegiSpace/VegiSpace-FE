import React from "react";
import { Story, Meta } from "@storybook/react";
import { TypoTypes, Typo } from "./Typo";

const meta: Meta = {
  title: "Typography",
  args: {
    text: "베지스페이스로 만들어가는 나만의 채식 공간!",
  },
};

export default meta;

export const Title1 = {
  render: (args: TypoTypes) => <Typo.Title1>{meta.args?.text}</Typo.Title1>,
};

export const Title2 = {
  render: (args: TypoTypes) => <Typo.Title2>{meta.args?.text}</Typo.Title2>,
};
export const Title3 = {
  render: (args: TypoTypes) => <Typo.Title3>{meta.args?.text}</Typo.Title3>,
};
export const Title4 = {
  render: (args: TypoTypes) => <Typo.Title4>{meta.args?.text}</Typo.Title4>,
};

export const SubTitle1 = {
  render: (args: TypoTypes) => (
    <Typo.SubTitle1>{meta.args?.text}</Typo.SubTitle1>
  ),
};

export const SubTitle2 = {
  render: (args: TypoTypes) => (
    <Typo.SubTitle2>{meta.args?.text}</Typo.SubTitle2>
  ),
};
export const Body1 = {
  render: (args: TypoTypes) => <Typo.Body1>{meta.args?.text}</Typo.Body1>,
};
export const Body2 = {
  render: (args: TypoTypes) => <Typo.Body2>{meta.args?.text}</Typo.Body2>,
};

export const Body3 = {
  render: (args: TypoTypes) => <Typo.Body3>{meta.args?.text}</Typo.Body3>,
};
export const Body4 = {
  render: (args: TypoTypes) => <Typo.Body4>{meta.args?.text}</Typo.Body4>,
};
export const Body5 = {
  render: (args: TypoTypes) => <Typo.Body5>{meta.args?.text}</Typo.Body5>,
};

export const Caption1 = {
  render: (args: TypoTypes) => <Typo.Caption1>{meta.args?.text}</Typo.Caption1>,
};

export const Caption2 = {
  render: (args: TypoTypes) => <Typo.Caption2>{meta.args?.text}</Typo.Caption2>,
};
export const Caption3 = {
  render: (args: TypoTypes) => <Typo.Caption3>{meta.args?.text}</Typo.Caption3>,
};
export const Caption4 = {
  render: (args: TypoTypes) => <Typo.Caption4>{meta.args?.text}</Typo.Caption4>,
};
