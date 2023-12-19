import { Typo } from "components";
import * as St from "./style";
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
      <St.SectionLine />
      {Histories.map(({ title, isDone, ...rest }, idx) => (
        <St.HistoryCardContainer key={idx}>
          <Typo typoType="Body2">{title}</Typo>
          {isDone ? <DeliveryComplete /> : <DeliveryImcomplete {...rest} />}
        </St.HistoryCardContainer>
      ))}
    </>
  );
};

export default History;
