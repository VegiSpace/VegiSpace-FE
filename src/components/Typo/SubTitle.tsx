import React, { FC, PropsWithChildren, memo } from "react";
import { styled } from "styled-components";

export const SubTitle1: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledSubTitle1>{children}</StyledSubTitle1>;
});

export type SubTitle1Type = { SubTitle1: typeof SubTitle1 };

const StyledSubTitle1 = styled.h4`
  font-size: 2rem;
  font-weight: bold;
`;

export const SubTitle2: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledSubTitle2>{children}</StyledSubTitle2>;
});

export type SubTitle2Type = { SubTitle2: typeof SubTitle2 };

const StyledSubTitle2 = styled.h5`
  font-size: 1.8rem;
  font-weight: bold;
`;
