import React from "react";
import { LockIconWhite, VisibilityIconWhite } from "../../assets/icons";
import { css } from "styled-components";

interface IconProps {
  width?: number;
  height?: number;
}

interface FieldIconProps {
  type: "white" | "black";
}

const Icon = {
  Lock: function Lock({ width, height }: IconProps) {
    return <LockIconWhite width={width ?? "16"} height={height ?? "16"} />;
  },
  VisibilityIcon: function Visibility({ width, height }: IconProps) {
    return (
      <VisibilityIconWhite
        width={width?.toString() ?? "16"}
        height={height?.toString() ?? "16"}
      />
    );
  },
};

export { Icon };

export type { IconProps };
