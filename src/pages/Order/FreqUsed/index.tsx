import { Typo } from "components";
import * as St from "./styled";
import { FreqUseds, IFreqUsed } from "./DummyData";

const FreqUsed = () => {
  return (
    <St.FreqUsedContainer>
      {FreqUseds.map(({ title, srcImg }: IFreqUsed, idx: number) => (
        <St.FreqUsedCard key={idx}>
          <img src={srcImg} alt={title} />
          <St.FreqUsedTitle>
            <Typo typoType="Body3">{title}</Typo>
          </St.FreqUsedTitle>
        </St.FreqUsedCard>
      ))}
    </St.FreqUsedContainer>
  );
};

export default FreqUsed;
