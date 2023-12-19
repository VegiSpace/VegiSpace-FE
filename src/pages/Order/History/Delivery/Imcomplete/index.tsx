import { Typo } from "components";
import * as St from "./style";

const Imcomplete = ({ delivery }: any) => {
  const { item, step } = delivery;

  return (
    <St.ImcompleteContainter>
      <St.ItemInfoContainer>
        <St.ImgWrapper>
          <img src={item.srcImg} alt={item.name} />
        </St.ImgWrapper>

        <St.ItemWrapper>
          <p>
            {" "}
            <Typo typoType="Body4">{item.name}</Typo>
          </p>
          <St.DetailWrapper>
            <span>
              <Typo typoType="Body4">{item.price}원 </Typo>
            </span>
            <span>{item.count}개</span>
          </St.DetailWrapper>
        </St.ItemWrapper>
      </St.ItemInfoContainer>
      <St.DeliveryInfoContainer>
        <St.ProgressWrapper>
          <St.ProgressBackground />
          <St.ProgressMain />
        </St.ProgressWrapper>
        <St.StepWrapper>
          <span>배송 준비 중</span>
          <span>배송 중</span>
          <span>배송 완료</span>
        </St.StepWrapper>
      </St.DeliveryInfoContainer>
    </St.ImcompleteContainter>
  );
};

export default Imcomplete;
