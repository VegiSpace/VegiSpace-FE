import { Typo } from "components";
import styled from "styled-components";
import { CTAButton } from "assets";

const CTAs = [
  { srcSet: CTAButton },
  { srcSet: CTAButton },
  { srcSet: CTAButton },
  { srcSet: CTAButton },
  { srcSet: CTAButton },
];

const CTA = () => {
  return (
    <>
      <CTAContainer>
        <TitleWrapper>
          <Typo typoType="SubTitle2">밀키트로 시작하는 간편한 채식!</Typo>
          <Typo typoType="Body3">원하는 만큼만 받아보세요.</Typo>
          <Typo typoType="Body3">많이 먹을 수록 몸도 fresh, 가격도 fresh!</Typo>
        </TitleWrapper>
        <ButtonWrapper>
          {CTAs.map(({ srcSet }, idx) => (
            <picture key={idx}>
              <source srcSet={srcSet} type="image/webp" />
              <ImageWrapper src={srcSet} alt="CTA 이용권" loading="lazy" />
            </picture>
          ))}
        </ButtonWrapper>
      </CTAContainer>
    </>
  );
};

export default CTA;

const CTAContainer = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  height: 7.6rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 1.2rem;
`;

const ButtonWrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ImageWrapper = styled.img`
  width: 100%;
  object-fit: cover;
`;
