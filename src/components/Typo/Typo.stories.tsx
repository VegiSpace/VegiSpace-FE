import React from "react";
import { Story, Meta, StoryFn } from "@storybook/react";
import { Typo } from "./Typo";

const meta: Meta = {
  title: "Typography",
  tags: ["autodocs"],

  args: {
    children: "베지스페이스로 만들어가는 나만의 채식 공간!",
  },
  argTypes: {
    typoType: {
      description: "텍스트 타입 지정",
      table: {
        /*category: "Button",*/
        type: {
          summary:
            "Title1 | Title2 | Title3 | Title4| SubTitle1 | SubTitle2 | Body1 | Body2 | Body3 | Body4 | Caption1 | Caption2 | Caption3 | Caption4",
        },
        // 추가
      },
      options: [
        "Title1",
        "Title2",
        "Title3",
        "Title4",
        "SubTitle1",
        "SubTitle2",
        "Body1",
        "Body2",
        "Body3",
        "Body4",
        "Caption1",
        "Caption2",
        "Caption3",
        "Caption4",
      ],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Typo> = (args) => <Typo {...args} />;

export const Title1 = Template.bind({});
Title1.args = {
  typoType: "Title1",
};
export const Title2 = Template.bind({});
Title2.args = {
  typoType: "Title2",
};

export const Title3 = Template.bind({});
Title3.args = {
  typoType: "Title3",
};

export const Title4 = Template.bind({});
Title4.args = {
  typoType: "Title4",
};

export const SubTitle1 = Template.bind({});
SubTitle1.args = {
  typoType: "SubTitle1",
};

export const SubTitle2 = Template.bind({});
SubTitle2.args = {
  typoType: "SubTitle2",
};

export const Body1 = Template.bind({});
Body1.args = {
  typoType: "Body1",
};
export const Body2 = Template.bind({});
Body2.args = {
  typoType: "Body2",
};

export const Body3 = Template.bind({});
Body3.args = {
  typoType: "Body3",
};

export const Body4 = Template.bind({});
Body4.args = {
  typoType: "Body4",
};

export const Body5 = Template.bind({});
Body5.args = {
  typoType: "Body5",
};
export const Caption1 = Template.bind({});
Caption1.args = {
  typoType: "Caption1",
};
export const Caption2 = Template.bind({});
Caption2.args = {
  typoType: "Caption2",
};

export const Caption3 = Template.bind({});
Caption3.args = {
  typoType: "Caption3",
};

export const Caption4 = Template.bind({});
Caption4.args = {
  typoType: "Caption4",
};
