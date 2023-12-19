import { ClockBlack, ClockWhite, RecipeThumbImg } from "assets";
import { Typo } from "components";
import * as St from "./style";
import Recipes from "./DummyData";

const RecipeCard = () => {
  return (
    <>
      {Recipes.map(({ title, food, detail, time, srcImg, key }) => (
        <St.CardContainer key={key} isGreen={Boolean((key + 1) % 2)}>
          <img src={srcImg} alt={title} />
          <St.InfoContainer>
            <Typo typoType="SubTitle2">
              {title}#{key + 1}
            </Typo>
            <Typo typoType="Body4">{food}</Typo>
            <Typo typoType="Body4">{detail}</Typo>
            <St.TimeWrapper isGreen={Boolean((key + 1) % 2)}>
              <img
                src={(key + 1) % 2 ? ClockWhite : ClockBlack}
                alt={`clock img ${key % 2}`}
              />
              <Typo typoType="Caption1">{time}</Typo>
            </St.TimeWrapper>
          </St.InfoContainer>
        </St.CardContainer>
      ))}
    </>
  );
};

export default RecipeCard;
