import React, { FC, PropsWithChildren, ReactNode } from "react";
import * as Title from "./Title";
import * as SubTitle from "./SubTitle";
import * as Body from "./Body";
import * as Caption from "./Caption";

interface TypoProps {
  //text: string;
  children: ReactNode;
  typoType:
    | "Title1"
    | "Title2"
    | "Title3"
    | "Title4"
    | "SubTitle1"
    | "SubTitle2"
    | "Body1"
    | "Body2"
    | "Body3"
    | "Body4"
    | "Body5"
    | "Caption1"
    | "Caption2"
    | "Caption3"
    | "Caption4";
}

type ParentProps = TypoProps;
type ChildProps = Pick<TypoProps, "children">;

const Typo = ({ typoType, ...props }: ParentProps) => {
  return (
    <>
      {typoType === "Title1" && <Title.Title1 {...(props as ChildProps)} />}
      {typoType === "Title2" && <Title.Title2 {...(props as ChildProps)} />}
      {typoType === "Title3" && <Title.Title3 {...(props as ChildProps)} />}
      {typoType === "Title4" && <Title.Title4 {...(props as ChildProps)} />}

      {typoType === "SubTitle1" && (
        <SubTitle.SubTitle1 {...(props as ChildProps)} />
      )}
      {typoType === "SubTitle2" && (
        <SubTitle.SubTitle2 {...(props as ChildProps)} />
      )}
      {typoType === "Body1" && <Body.Body1 {...(props as ChildProps)} />}
      {typoType === "Body2" && <Body.Body2 {...(props as ChildProps)} />}
      {typoType === "Body3" && <Body.Body3 {...(props as ChildProps)} />}
      {typoType === "Body4" && <Body.Body4 {...(props as ChildProps)} />}
      {typoType === "Body5" && <Body.Body5 {...(props as ChildProps)} />}

      {typoType === "Caption1" && (
        <Caption.Caption1 {...(props as ChildProps)} />
      )}
      {typoType === "Caption2" && (
        <Caption.Caption2 {...(props as ChildProps)} />
      )}
      {typoType === "Caption3" && (
        <Caption.Caption3 {...(props as ChildProps)} />
      )}
      {typoType === "Caption4" && (
        <Caption.Caption4 {...(props as ChildProps)} />
      )}
    </>
  );
};
export { Typo };

export type { TypoProps, ParentProps, ChildProps };
/*
export type TypoTypes = FC<PropsWithChildren> &
  Title.Title1Type &
  Title.Title2Type &
  Title.Title3Type &
  Title.Title4Type &
  SubTitle.SubTitle1Type &
  SubTitle.SubTitle2Type &
  Body.Body1Type &
  Body.Body2Type &
  Body.Body3Type &
  Body.Body4Type &
  Body.Body5Type &
  Caption.Caption1Type &
  Caption.Caption2Type &
  Caption.Caption3Type &
  Caption.Caption4Type;

export const Typo = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

Typo.Title1 = Title.Title1;
Typo.Title2 = Title.Title2;
Typo.Title3 = Title.Title3;
Typo.Title4 = Title.Title4;

Typo.SubTitle1 = SubTitle.SubTitle1;
Typo.SubTitle2 = SubTitle.SubTitle2;

Typo.Body1 = Body.Body1;
Typo.Body2 = Body.Body2;
Typo.Body3 = Body.Body3;
Typo.Body4 = Body.Body4;
Typo.Body5 = Body.Body5;

Typo.Caption1 = Caption.Caption1;
Typo.Caption2 = Caption.Caption2;
Typo.Caption3 = Caption.Caption3;
Typo.Caption4 = Caption.Caption4;
*/
