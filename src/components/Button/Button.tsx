import { ButtonHTMLAttributes, ReactNode } from "react";
// import StyledDefault from "./Button.styles";
import styled,{css} from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //text: string;
  children: ReactNode;
}

interface ColorProps extends ButtonProps{
  color:"green"|"black"|"white"|"yellow"
}

interface BorderProps extends ButtonProps{
  border:"square"|"round"
}

interface HeightProps extends ButtonProps{
  height:36|48
}

const colorStyles = css<{ color: ColorProps["color"] }>`
  ${({ color }) =>
    color === "green" &&
    css`
      color: white;
      background-color: #8dbf88;
    `}

  ${({ color }) =>
    color === "black" &&
    css`
      color: #8dbf88;
      background-color: black;
    `}

      ${({ color }) =>
    color === "white" &&
    css`
      color: black;
      background-color: white;
    `}

          ${({ color }) =>
    color === "yellow" &&
    css`
      color: black;
      background-color: #FFE03F;
    `}
`;


const borderStyles = css<{ border: BorderProps["border"] }>`
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


const heightStyles = css<{ height: HeightProps["height"] }>`
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

const Default = styled.button<{ color: DefaultProps["color"] }>`
  /*공통 스타일*/
  border-radius: 12px;
  width: 324px;
  height: 48px;
  border: none;
  ${colorStyles}
`;

const Secondary = styled.button<{
  border: SecondaryProps["border"],
  color: SecondaryProps["color"]
}>`
  /*공통 스타일*/
  border-radius: 12px;
  width: 324px;
  height: 48px;
  border: none;
  ${colorStyles}
  ${borderStyles}
`;

const Mini = styled.button<{
  color: MiniProps["color"];
  height: MiniProps["height"];
  border: MiniProps["border"];
}>`
  width: 140px;
  border: none;
  ${colorStyles}
  ${heightStyles}
  ${borderStyles}
`;

type DefaultProps = ColorProps
type SecondaryProps = ColorProps & BorderProps
type MiniProps = ColorProps  & HeightProps & BorderProps

const ButtonDefault = ({
  color,
  children,
  ...props
}: DefaultProps): JSX.Element => <Default color={color}>{children}</Default>;

const ButtonSecondary = ({
  border,
  color,
  children,
  ...props
}: SecondaryProps): JSX.Element => (
  <Secondary border={border} color={color}>
    {children}
  </Secondary>
);

const ButtonMini = ({
  color,
  border,
  height,
  children,
  ...props
}: MiniProps): JSX.Element => (
  <Mini height={height} color={color} border={border}>
    {children}
  </Mini>
);

export {
  ButtonDefault,
  DefaultProps,
  ButtonSecondary,
  SecondaryProps,
  ButtonMini,
  MiniProps,
};
