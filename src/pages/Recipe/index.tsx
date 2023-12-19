import { useState } from "react";
import Search from "./Search";
import Sort from "./Sort";
import RecipeCard from "./RecipeCard";
import * as St from "./style";

const Recipe = () => {
  const [query, setQuery] = useState("");

  return (
    <St.RecipeSection>
      <Search query={query} setQuery={setQuery} />
      <Sort />
      <RecipeCard />
    </St.RecipeSection>
  );
};

export default Recipe;
