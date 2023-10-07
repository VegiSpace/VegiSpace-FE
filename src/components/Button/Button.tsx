import { ButtonHTMLAttributes, ReactNode } from "react";
import { Default, Secondary, Mini, Text } from "./Button.styles";
import { Typo } from "../Typo";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //text: string;
  children: ReactNode;
}

export interface DisabledProps extends ButtonProps {
  disabled: false | true;
}

export interface ColorProps extends ButtonProps {
  color: "green" | "black" | "white" | "yellow";
}

export interface BorderProps extends ButtonProps {
  border: "square" | "round";
}

export interface HeightProps extends ButtonProps {
  height: 36 | 48;
}

type DefaultProps = DisabledProps & ColorProps;
type SecondaryProps = ColorProps & BorderProps;
type MiniProps = ColorProps & HeightProps & BorderProps;
type TextProps = ColorProps;

const ButtonDefault = ({
  color,
  disabled,
  children,
  ...props
}: DefaultProps): JSX.Element => (
  <Default disabled={disabled} color={color}>
    <Typo.SubTitle2>{children}</Typo.SubTitle2>
  </Default>
);

const ButtonSecondary = ({
  border,
  color,
  children,
  ...props
}: SecondaryProps): JSX.Element => (
  <Secondary border={border} color={color}>
    <Typo.Body3>{children}</Typo.Body3>
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

const ButtonText = ({ color, children, ...props }: TextProps): JSX.Element => (
  <Text color={color}>
    <Typo.Body1>{children}</Typo.Body1>
  </Text>
);

export { ButtonDefault, ButtonSecondary, ButtonMini, ButtonText };

export type { DefaultProps, SecondaryProps, MiniProps, TextProps };
