import { SearchBar } from "components/SearchBar/SearchBar";
import * as St from "./style";

interface ISearch {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ query, setQuery }: ISearch) => {
  return (
    <St.SearchContainer>
      <SearchBar.Seperate
        query={query}
        setQuery={setQuery}
        leftIcon={false}
        rightIcon={true}
        placeholder="주문한 상품을 찾아보세요"
        outlined={true}
      />
    </St.SearchContainer>
  );
};

export default Search;
