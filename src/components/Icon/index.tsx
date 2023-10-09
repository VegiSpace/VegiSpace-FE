import React from "react";
import {
  LockIconWhite,
  VisibilityIconWhite,
  SearchIcon,
} from "../../assets/icons";
import styled, { css } from "styled-components";

interface IconProps {
  width?: number;
  height?: number;
}

interface FieldIconProps {
  type: "white" | "black";
}

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: fit-content;
`;
const Icon = {
  Lock: function Lock({ width, height }: IconProps) {
    return (
      <StyledIconContainer>
        <LockIconWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      </StyledIconContainer>
    );
  },
  Visibility: function Visibility({ width, height }: IconProps) {
    return (
      <StyledIconContainer>
        <VisibilityIconWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      </StyledIconContainer>
    );
  },
  SearchIcon: function Search({ width, height }: IconProps) {
    return (
      <StyledIconContainer>
        <SearchIcon
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      </StyledIconContainer>
    );
  },
};

export { Icon };

export type { IconProps };
