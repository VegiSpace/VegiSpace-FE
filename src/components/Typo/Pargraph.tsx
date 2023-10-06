import React, { FC, PropsWithChildren, memo } from "react";

export const Pargraph1: FC<PropsWithChildren> = memo(({ children }) => {
  return <p>{children}</p>;
});

export type PargraphType = { Pargraph1: typeof Pargraph1 };
