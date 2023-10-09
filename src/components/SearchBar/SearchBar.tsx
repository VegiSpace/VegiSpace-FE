import react, { useState, FormEvent } from "react";
import SearchBarDefault from "./Default";
import SearchBarSeperated from "./Seperated";

interface SearchBarProps {
  query: string;
  setQuery?: react.Dispatch<react.SetStateAction<string>>;
  leftIcon: boolean;
  rightIcon: boolean;
  placeholder?: string;
  outlined?: boolean;
}

const SearchBar = {
  Default: SearchBarDefault,
  Seperate: SearchBarSeperated,
};

export { SearchBar };

export type { SearchBarProps };
