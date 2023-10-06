import React, { FC, PropsWithChildren } from "react";
import {
  Title1Type,
  Title2Type,
  Title3Type,
  Title4Type,
  Title1,
  Title2,
  Title3,
  Title4,
} from "./Title";
import { SubTitle1, SubTitle1Type, SubTitle2, SubTitle2Type } from "./SubTitle";
import {
  Body1,
  Body1Type,
  Body2,
  Body2Type,
  Body3,
  Body3Type,
  Body4,
  Body4Type,
  Body5,
  Body5Type,
} from "./Body";

type TypoTypes = FC<PropsWithChildren> &
  Title1Type &
  Title2Type &
  Title3Type &
  Title4Type &
  SubTitle1Type &
  SubTitle2Type &
  Body1Type &
  Body2Type &
  Body3Type &
  Body4Type &
  Body5Type;

export const Typo: TypoTypes = ({ children }) => {
  return <>{children}</>;
};

Typo.Title1 = Title1;
Typo.Title2 = Title2;
Typo.Title3 = Title3;
Typo.Title4 = Title4;

Typo.SubTitle1 = SubTitle1;
Typo.SubTitle2 = SubTitle2;

Typo.Body1 = Body1;
Typo.Body2 = Body2;
Typo.Body3 = Body3;
Typo.Body4 = Body4;
Typo.Body5 = Body5;
