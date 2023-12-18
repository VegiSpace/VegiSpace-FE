import { useState } from "react";
import Search from "./Search";
import styled from "styled-components";
import { Typo } from "components";
import FreqUsed from "./FreqUsed";
import History from "./History";

const Order = () => {
  const [query, setQuery] = useState("");

  return (
    <OrderSection>
      <Search query={query} setQuery={setQuery} />
      <Typo typoType="SubTitle1">자주 주문한 상품</Typo>
      <FreqUsed />
      <Typo typoType="SubTitle1">이용 내역</Typo>
      <SectionLine />
      <History />
    </OrderSection>
  );
};

export default Order;

const OrderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
`;

const SectionLine = styled.hr`
  color: black;
  background-color: black;
  width: 100%;
  height: 0.125rem;
`;
