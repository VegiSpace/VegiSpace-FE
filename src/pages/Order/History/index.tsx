import { Typo } from "components";
import styled from "styled-components";
import { borderRadius, colors } from "styles/options";

const Histories = [
  {
    title: "202X년 XX월 XX일 (X)",
    isDone: false,
    delivery: {
      item: {
        name: "일주일 3일 이용권",
        price: 9000,
        count: 1,
        srcImg: "dsgfasd",
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

const DeliveryComplete = () => {
  return (
    <CompleteContainer>
      <Typo typoType="SubTitle2">배송 완료</Typo>
    </CompleteContainer>
  );
};

const History = () => {
  return (
    <>
      {Histories.map(({ title, isDone, ...rest }, idx) => (
        <HistoryCardContainer key={idx}>
          <Typo typoType="Body2">{title}</Typo>
          {isDone ? <DeliveryComplete /> : <div>배송 미완료</div>}
        </HistoryCardContainer>
      ))}
    </>
  );
};

export default History;

const HistoryCardContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid ${colors.grey[300]};
  padding: 1.5rem 0;
`;

const CompleteContainer = styled.div`
  color: ${colors.neutral[0]};
  background-color: ${colors.primary[300]};
  padding: 0.5rem 0.7rem;
  border-radius: ${borderRadius.square};
  width: fit-content;
`;
