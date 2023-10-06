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
import {colors, borderRadius} from "../../styles/options";


const DefaultStyles = css`
  border: none;
  justify-content: center;
  align-items: center;

`;

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


              ${({ color }) =>
    color === "yellow" &&
    css`
      color: black;
      background-color: #ffe03f;
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


              ${({ color }) =>
    color === "yellow" &&
    css`
      color: black;
      background-color:  ${colors.teritary["25"]};
`}`



const BorderStyles = css<{ border: BorderProps["border"] }>`
  ${({ border }) =>
    border === "square" &&
    css`
      border-radius:${borderRadius.square};
    `}

  ${({ border }) =>
    border === "round" &&
    css`
      border-radius: ${borderRadius.round};
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


const TextColorStyles = css<{ color: ColorProps["color"] }>`
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
      
    color: ${colors.teritary["25"]}`};
`;

const Default = styled.button<{
  color: DefaultProps["color"];
  disabled: DisabledProps["disabled"];
}>`
  /*공통 스타일*/
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  width: 32.4rem;
  height: 4.8rem;
  ${DefaultStyles}
  ${ColorStyles}
  ${DisabledStyles}
`;

const Secondary = styled.button<{
  border: SecondaryProps["border"];
  color: SecondaryProps["color"];
}>`
  /*공통 스타일*/

  width: 324px;
  height: 48px;
  ${DefaultStyles}
  ${ColorStyles}
  ${BorderStyles}
`;

const Mini = styled.button<{
  color: MiniProps["color"];
  height: MiniProps["height"];
  border: MiniProps["border"];
}>`
  width: 140px;
  ${DefaultStyles}
  ${ColorStyles}
  ${HeightStyles}
  ${BorderStyles}
`;

const Text = styled.button<{
  color: MiniProps["color"];}>`
  text-decoration : underline;
  ${DefaultStyles}
  ${TextColorStyles}



`;

export { ColorStyles,DisabledStyles, BorderStyles, HeightStyles, Default, Secondary, Mini , Text};
