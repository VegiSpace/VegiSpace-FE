import { ButtonHTMLAttributes, ReactNode } from "react";
import {
  StyledPrimary,
  StyledSecondary,
  StyledMini,
  StyledText,
} from "./Button.styles";
import { Typo } from "../Typo";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //text: string;
  children: ReactNode;
  btnType: "primary" | "secondary" | "mini" | "text";
  color: "green" | "black" | "white" | "yellow";
  border?: "square" | "round";
  disabled?: false | true;
  height?: 36 | 48;
  onClick?: () => void;
}

type ParentProps = ButtonProps;
type ChildProps = Pick<
  ButtonProps,
  "children" | "color" | "border" | "disabled" | "height" | "onClick"
>;
const Primary = ({
  color,
  disabled,
  children,
  onClick,
  ...props
}: ChildProps): JSX.Element => (
  <StyledPrimary
    disabled={disabled ?? false}
    color={color}
    onClick={onClick ?? undefined}
  >
    <Typo typoType="SubTitle2">{children}</Typo>
  </StyledPrimary>
);

const Secondary = ({
  border,
  color,
  children,
  onClick,
  ...props
}: ChildProps): JSX.Element => (
  <StyledSecondary
    border={border ?? "square"}
    color={color}
    onClick={onClick ?? undefined}
  >
    <Typo typoType="Body3">{children}</Typo>
  </StyledSecondary>
);

const Mini = ({
  color,
  border,
  height,
  children,
  onClick,
  ...props
}: ChildProps): JSX.Element => (
  <StyledMini
    height={height ?? 48}
    color={color}
    border={border ?? "square"}
    onClick={onClick ?? undefined}
  >
    <Typo typoType="Body1">{children}</Typo>
  </StyledMini>
);

const Text = ({
  color,
  children,
  onClick,
  ...props
}: ChildProps): JSX.Element => (
  <StyledText color={color} onClick={onClick ?? undefined}>
    <Typo typoType="Body1">{children}</Typo>
  </StyledText>
);

const Button = ({ btnType, ...props }: ParentProps) => {
  return (
    <>
      {btnType === "primary" && <Primary {...(props as ChildProps)} />}

      {btnType === "secondary" && <Secondary {...(props as ChildProps)} />}

      {btnType === "mini" && <Mini {...(props as ChildProps)} />}
      {btnType === "text" && <Text {...(props as ChildProps)} />}
    </>
  );
};

export { Button };

export type { ChildProps };
