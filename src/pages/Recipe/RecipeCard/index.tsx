import { RecipeThumbImg } from "assets";
import styled from "styled-components";

const Recipes = [
  {
    title: "레시피",
    food: "고구마, 양배추 & 가지",
    detail:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    time: "20~30분",
    srcImg: RecipeThumbImg,
  },
  {
    title: "레시피",
    food: "고구마, 양배추 & 가지",
    detail:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    time: "20~30분",
    srcImg: RecipeThumbImg,
  },
  {
    title: "레시피",
    food: "고구마, 양배추 & 가지",
    detail:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    time: "20~30분",
    srcImg: RecipeThumbImg,
  },
  {
    title: "레시피",
    food: "고구마, 양배추 & 가지",
    detail:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    time: "20~30분",
    srcImg: RecipeThumbImg,
  },
  {
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
      {Recipes.map(({ title, food, detail, time, srcImg }, idx) => (
        <CardContainer key={idx}>
          <img src={srcImg} alt={title} />
          <InfoContainer>
            <p>
              {title}#{idx + 1}
            </p>
            <p>{food}</p>
            <p>{detail}</p>
            <p>{time}</p>
          </InfoContainer>
        </CardContainer>
      ))}
    </div>
  );
};

export default RecipeCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.8rem 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 1.6rem;
`;
