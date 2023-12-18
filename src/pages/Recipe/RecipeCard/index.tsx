import { ClockBlack, ClockWhite, RecipeThumbImg } from "assets";
import { Typo } from "components";
import { borderRadius, colors } from "styles/options";
import styled from "styled-components";

const Recipes = [
  {
    key: 0,
    title: "레시피",
    food: "고구마, 양배추 & 가지",
    detail:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    time: "20~30분",
    srcImg: RecipeThumbImg,
  },
  {
    key: 1,
    title: "레시피",
    food: "고구마, 양배추 & 가지",
    detail:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    time: "20~30분",
    srcImg: RecipeThumbImg,
  },
  {
    key: 2,
    title: "레시피",
    food: "고구마, 양배추 & 가지",
    detail:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    time: "20~30분",
    srcImg: RecipeThumbImg,
  },
  {
    key: 3,
    title: "레시피",
    food: "고구마, 양배추 & 가지",
    detail:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    time: "20~30분",
    srcImg: RecipeThumbImg,
  },
  {
    key: 4,
    title: "레시피",
    food: "고구마, 양배추 & 가지",
    detail:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    time: "20~30분",
    srcImg: RecipeThumbImg,
  },
];

const RecipeCard = () => {
  return (
    <div>
      {Recipes.map(({ title, food, detail, time, srcImg, key }) => (
        <CardContainer key={key} isGreen={Boolean((key + 1) % 2)}>
          <img src={srcImg} alt={title} />
          <InfoContainer>
            <Typo typoType="SubTitle2">
              {title}#{key + 1}
            </Typo>
            <Typo typoType="Body4">{food}</Typo>
            <Typo typoType="Body4">{detail}</Typo>
            <TimeWrapper isGreen={Boolean((key + 1) % 2)}>
              <img
                src={(key + 1) % 2 ? ClockWhite : ClockBlack}
                alt={`clock img ${key % 2}`}
              />
              <Typo typoType="Caption1">{time}</Typo>
            </TimeWrapper>
          </InfoContainer>
        </CardContainer>
      ))}
    </div>
  );
};

export default RecipeCard;

const CardContainer = styled.div<{ isGreen: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.8rem;
  background-color: ${(props) =>
    props.isGreen ? colors.neutral[0] : colors.primary[300]};
  border-radius: ${borderRadius.normal};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 1.4rem 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 1.6rem;
`;

const TimeWrapper = styled.div<{ isGreen: boolean }>`
  width: 8.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isGreen ? colors.primary[300] : colors.neutral[0]};
  padding: 0.4rem 0.8rem;
  border-radius: ${borderRadius.square};
  color: ${(props) =>
    props.isGreen ? colors.neutral[0] : colors.neutral[1000]};
`;
