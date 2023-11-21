import styled from "styled-components";
import { colors } from "styles/options";

export const BannerSlider = styled.section`
  position: relative;
`;
export const PagingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15px;
  z-index: 1000;
  width: 100%;

  gap: 1.6rem;

  cursor: default;
`;
export const PagingButton = styled.div<{ isselected: boolean }>`
  width: 0.8rem;
  height: 0.8rem;

  border-radius: 50%;

  background: ${({ isselected }) =>
    isselected ? colors.primary["300"] : colors.grey["300"]};
`;
