import { SearchBar } from "components/SearchBar/SearchBar";
import * as St from "./style";

interface ISearch {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ query, setQuery }: ISearch) => {
  return (
    <St.SearchContainer>
      <SearchBar.Default
        query={query}
        setQuery={setQuery}
        leftIcon={true}
        rightIcon={false}
        placeholder="레시피, 재료 등"
        outlined={true}
      />
    </St.SearchContainer>
  );
};

export default Search;
