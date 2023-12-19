import { Typo } from "components";
import styled from "styled-components";
import { borderRadius, colors } from "styles/options";
import { DeliveryThumbImg } from "assets";
import { DeliveryComplete, DeliveryImcomplete } from "./Delivery";

const Histories = [
  {
    title: "202X년 XX월 XX일 (X)",
    isDone: false,
    delivery: {
      item: {
        name: "일주일 3일 이용권",
        price: 9000,
        count: 1,
        srcImg: DeliveryThumbImg,
      },
      step: 1,
    },
  },
  {
    title: "202X년 XX월 XX일 (X)",
    isDone: true,
  },
  { title: "202X년 XX월 XX일 (X)", isDone: true },
  { title: "202X년 XX월 XX일 (X)", isDone: true },
  { title: "202X년 XX월 XX일 (X)", isDone: true },
  { title: "202X년 XX월 XX일 (X)", isDone: true },
  { title: "202X년 XX월 XX일 (X)", isDone: true },
];

const History = () => {
  return (
    <>
      <Typo typoType="SubTitle1">이용 내역</Typo>
      <SectionLine />
      {Histories.map(({ title, isDone, ...rest }, idx) => (
        <HistoryCardContainer key={idx}>
          <Typo typoType="Body2">{title}</Typo>
          {isDone ? <DeliveryComplete /> : <DeliveryImcomplete {...rest} />}
        </HistoryCardContainer>
      ))}
    </>
  );
};

export default History;

const SectionLine = styled.hr`
  color: black;
  background-color: black;
  width: 100%;
  height: 0.125rem;
  margin: 0.5rem 0;
`;

const HistoryCardContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid ${colors.grey[300]};
  padding: 1.5rem 0;
`;
