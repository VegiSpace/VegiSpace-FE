import { useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import Sort from "./Sort";
import RecipeCard from "./RecipeCard";

const Recipe = () => {
  const [query, setQuery] = useState("");

  return (
    <RecipeSection>
      <Search query={query} setQuery={setQuery} />
      <Sort />
      <RecipeCard />
    </RecipeSection>
  );
};

export default Recipe;

const RecipeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
`;
