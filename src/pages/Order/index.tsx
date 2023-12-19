import { useState } from "react";
import * as St from "./style";
import { Typo } from "components";
import FreqUsed from "./FreqUsed";
import History from "./History";
import Search from "./Search";

const Order = () => {
  const [query, setQuery] = useState("");

  return (
    <St.OrderSection>
      <Search query={query} setQuery={setQuery} />
      <Typo typoType="SubTitle1">자주 주문한 상품</Typo>
      <FreqUsed />

      <History />
    </St.OrderSection>
  );
};

export default Order;
