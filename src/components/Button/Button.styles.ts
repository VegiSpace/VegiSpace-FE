import styled,{css} from "styled-components";
import {
  ColorProps,
  BorderProps,
  HeightProps,
  DefaultProps,
  SecondaryProps,
  MiniProps,
  DisabledProps,
} from "./Button";
import {colors} from "../../styles/options";


const ColorStyles = css<{ color: ColorProps["color"] }>`
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
`;

const DisabledStyles = css<{
  disabled: DisabledProps["disabled"];
  color: ColorProps["color"];
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
`;



const BorderStyles = css<{ border: BorderProps["border"] }>`
  ${({ border }) =>
    border === "square" &&
    css`
      border-radius: 4px;
    `}

  ${({ border }) =>
    border === "round" &&
    css`
      border-radius: 30px;
    `}
`;

const HeightStyles = css<{ height: HeightProps["height"] }>`
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

const Default = styled.button<{
  color: DefaultProps["color"];
  disabled: DisabledProps["disabled"]}>`
  /*공통 스타일*/
  border-radius: 1.2rem;
  width: 32.4rem;
  height: 4.8rem;
  border: none;
  justify-content: center;
  ${ColorStyles}
  ${DisabledStyles}
`;

const Secondary = styled.button<{
  border: SecondaryProps["border"];
  color: SecondaryProps["color"];
}>`
  /*공통 스타일*/
  border-radius: 12px;
  width: 324px;
  height: 48px;
  border: none;
  ${ColorStyles}
  ${BorderStyles}
`;

const Mini = styled.button<{
  color: MiniProps["color"];
  height: MiniProps["height"];
  border: MiniProps["border"];
}>`
  width: 140px;
  border: none;
  ${ColorStyles}
  ${HeightStyles}
  ${BorderStyles}
`;
/*
const ButtonDefault = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;*/

export { ColorStyles,DisabledStyles, BorderStyles, HeightStyles, Default, Secondary, Mini };
