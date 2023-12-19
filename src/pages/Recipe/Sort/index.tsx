import * as St from "./style";

const Sorts = ["추천순", "빠른 순", "준비물 최소 순", "비건식"];

const Sort = () => {
  return (
    <St.SortContainer>
      {Sorts.map((sort, idx) => (
        <St.SortItem key={idx}>{sort}</St.SortItem>
      ))}
    </St.SortContainer>
  );
};

export default Sort;
