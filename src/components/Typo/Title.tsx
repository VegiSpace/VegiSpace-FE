import React, { FC, PropsWithChildren, memo } from "react";
import { styled } from "styled-components";

export const Title1: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledTitle1>{children}</StyledTitle1>;
});

const StyledTitle1 = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
`;

export type Title1Type = { Title1: typeof Title1 };

export const Title2: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledTitle2>{children}</StyledTitle2>;
});

const StyledTitle2 = styled.h2`
  font-size: 3rem;
  font-weight: bold;
`;
export type Title2Type = { Title2: typeof Title2 };

export const Title3: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledTitle3>{children}</StyledTitle3>;
});

const StyledTitle3 = styled.h3`
  font-size: 2.8rem;
  font-weight: bold;
`;
export type Title3Type = { Title3: typeof Title3 };

export const Title4: FC<PropsWithChildren> = memo(({ children }) => {
  return <StyledTitle4>{children}</StyledTitle4>;
});

const StyledTitle4 = styled.h4`
  font-size: 2.4rem;
  font-weight: bold;
`;
export type Title4Type = { Title4: typeof Title4 };
