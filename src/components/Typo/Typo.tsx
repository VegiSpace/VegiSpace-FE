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
import * as Pargraph from "./Pargraph";

export const Typo: FC<PropsWithChildren> &
  Title1Type &
  Title2Type &
  Title3Type &
  Title4Type &
  Pargraph.PargraphType = ({ children }) => {
  return <>{children}</>;
};

Typo.Title1 = Title1;
Typo.Title2 = Title2;
Typo.Title3 = Title3;
Typo.Title4 = Title4;
Typo.Pargraph1 = Pargraph.Pargraph1;
