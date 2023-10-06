import React, { FC, PropsWithChildren, memo } from "react";
import { styled } from "styled-components";

export const Body1: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledBody1>{children}</StyledBody1>;
});

const StyledBody1 = styled.span`
  font-size: 2rem;
  font-weight: normal;
`;

export type Body1Type = { Body1: typeof Body1 };

export const Body2: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledBody2>{children}</StyledBody2>;
});

const StyledBody2 = styled.span`
  font-size: 1.8rem;
  font-weight: normal;
`;
export type Body2Type = { Body2: typeof Body2 };

export const Body3: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledBody3>{children}</StyledBody3>;
});

const StyledBody3 = styled.span`
  font-size: 1.6rem;
  font-weight: normal;
`;
export type Body3Type = { Body3: typeof Body3 };

export const Body4: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledBody4>{children}</StyledBody4>;
});

const StyledBody4 = styled.span`
  font-size: 1.4rem;
  font-weight: normal;
`;
export type Body4Type = { Body4: typeof Body4 };

export const Body5: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledBody5>{children}</StyledBody5>;
});

const StyledBody5 = styled.span`
  font-size: 1.3rem;
  font-weight: normal;
`;
export type Body5Type = { Body5: typeof Body5 };
