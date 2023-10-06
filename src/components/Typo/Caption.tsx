import React, { FC, PropsWithChildren, memo } from "react";
import { styled } from "styled-components";

export const Caption1: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledCaption1>{children}</StyledCaption1>;
});

const StyledCaption1 = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
`;

export type Caption1Type = { Caption1: typeof Caption1 };

export const Caption2: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledCaption2>{children}</StyledCaption2>;
});

const StyledCaption2 = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
export type Caption2Type = { Caption2: typeof Caption2 };

export const Caption3: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledCaption3>{children}</StyledCaption3>;
});

const StyledCaption3 = styled.span`
  font-size: 2.8rem;
  font-weight: bold;
`;
export type Caption3Type = { Caption3: typeof Caption3 };

export const Caption4: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledCaption4>{children}</StyledCaption4>;
});

const StyledCaption4 = styled.span`
  font-size: 2.4rem;
  font-weight: bold;
`;
export type Caption4Type = { Caption4: typeof Caption4 };
