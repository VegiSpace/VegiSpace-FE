import styled, { css } from "styled-components";
import { ChildProps } from "./Button";
import { colors, borderRadius } from "../../styles/options";

const DefaultStyles = css`
  border: none;
  justify-content: center;
  align-items: center;
`;

const ColorStyles = css<{ color: ChildProps["color"] }>`
  ${({ color }) =>
    color === "green" &&
    css`
      color: ${colors.neutral["0"]};
      background-color: ${colors.primary["300"]};
    `}

  ${({ color }) =>
    color === "black" &&
    css`
      color: ${colors.primary["300"]};
      background-color: ${colors.neutral["1000"]};
    `}

      ${({ color }) =>
    color === "white" &&
    css`
      color: ${colors.neutral["1000"]};
      background-color: ${colors.neutral["0"]};
    `}


              ${({ color }) =>
    color === "yellow" &&
    css`
      color: ${colors.neutral["1000"]};
      background-color: ${colors.teritary["25"]};
    `}
`;

const DisabledStyles = css<{
  disabled: ChildProps["disabled"];
  color: ChildProps["color"];
}>`
  ${({ color, disabled }) =>
    color === "green" &&
    disabled &&
    css`
      color: ${colors.primary["25"]};
      background-color: ${colors.primary["100"]};
    `}

  ${({ color, disabled }) =>
    color === "black" &&
    disabled &&
    css`
      color: ${colors.primary["25"]};
      background-color: ${colors.grey["500"]};
    `}


              ${({ color }) =>
    color === "yellow" &&
    css`
      color: black;
      background-color: ${colors.teritary["25"]};
    `}
`;

const BorderStyles = css<{ border: ChildProps["border"] }>`
  ${({ border }) =>
    border === "square" &&
    css`
      border-radius: ${borderRadius.square};
    `}

  ${({ border }) =>
    border === "round" &&
    css`
      border-radius: ${borderRadius.round};
    `}
`;

const HeightStyles = css<{ height: ChildProps["height"] }>`
  ${({ height }) =>
    height === 36 &&
    css`
      height: 36px;
    `}

  ${({ height }) =>
    height === 48 &&
    css`
      height: 48px;
    `}
`;

const TextColorStyles = css<{ color: ChildProps["color"] }>`
  ${({ color }) =>
    color === "green" &&
    css`
      color: ${colors.primary["300"]};
    `}

  ${({ color }) =>
    color === "black" &&
    css`
      color: ${colors.neutral["1000"]};
    `}

      ${({ color }) =>
    color === "white" &&
    css`
      color: ${colors.neutral["0"]};
    `}


              ${({ color }) =>
    color === "yellow" &&
    css`
      color: ${colors.teritary["25"]};
    `};
`;

const StyledPrimary = styled.button<{
  color: ChildProps["color"];
  disabled: ChildProps["disabled"];
}>`
  /*공통 스타일*/
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  width: 32.4rem;
  height: 4.8rem;
  ${DefaultStyles}
  ${ColorStyles}
  ${DisabledStyles}
`;

const StyledSecondary = styled.button<{
  border: ChildProps["border"];
  color: ChildProps["color"];
}>`
  /*공통 스타일*/

  width: 324px;
  height: 48px;
  ${DefaultStyles}
  ${ColorStyles}
  ${BorderStyles}
`;

const StyledMini = styled.button<{
  color: ChildProps["color"];
  height: ChildProps["height"];
  border: ChildProps["border"];
}>`
  width: 140px;
  ${DefaultStyles}
  ${ColorStyles}
  ${HeightStyles}
  ${BorderStyles}
`;

const StyledText = styled.button<{
  color: ChildProps["color"];
}>`
  text-decoration: underline;
  ${DefaultStyles}
  ${TextColorStyles}
`;

export {
  ColorStyles,
  DisabledStyles,
  BorderStyles,
  HeightStyles,
  StyledPrimary,
  StyledSecondary,
  StyledMini,
  StyledText,
};
