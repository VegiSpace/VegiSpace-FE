import styled from "styled-components";
import { borderRadius, colors } from "styles/options";

const ImcompleteContainter = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.7rem 0;
`;

const ImgWrapper = styled.div`
  margin-right: 0.6rem;
`;

const ProgressWrapper = styled.div`
  width: 100%;
`;

const ProgressBackground = styled.div`
  position: absolute;
  width: 32rem;
  height: 0.8rem;
  background-color: ${colors.grey[100]};
  border-radius: ${borderRadius.normal};
`;

const ProgressMain = styled.div`
  position: relative;
  width: 50%;
  height: 0.8rem;
  background-color: ${colors.primary[300]};
  border-radius: ${borderRadius.normal};
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0;
`;
const DetailWrapper = styled.div`
  margin: 0.3rem 0;
`;
const ItemWrapper = styled.div``;

const DeliveryInfoContainer = styled.div``;

export {
  ImcompleteContainter,
  ItemInfoContainer,
  ImgWrapper,
  ProgressWrapper,
  ProgressBackground,
  ProgressMain,
  StepWrapper,
  DetailWrapper,
  ItemWrapper,
  DeliveryInfoContainer,
};
