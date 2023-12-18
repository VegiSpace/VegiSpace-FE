import react, { FormEvent } from "react";
import { SearchBarProps } from "./SearchBar";
import { Search } from "../Icon";
import styled, { css } from "styled-components";
import { colors } from "../../styles/options";

const SearchBarDefault = ({
  leftIcon,
  rightIcon,
  placeholder,
  outlined,
  query,
  setQuery,
}: SearchBarProps) => {
  const handleSumit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(query);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setQuery?.(value);
  };

  return (
    <StyledForm onSubmit={handleSumit} outlined={outlined}>
      {leftIcon && (
        <button>
          {" "}
          <Search type="black" />
        </button>
      )}

      <StyledInput onChange={handleInputChange} placeholder={placeholder} />
      {rightIcon && (
        <button>
          {" "}
          <Search type="black" />
        </button>
      )}
    </StyledForm>
  );
};

export default SearchBarDefault;

const StyledForm = styled.form<{ outlined: SearchBarProps["outlined"] }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 32.8rem;
  height: 4.4rem;
  padding: 1rem 1.2rem;
  align-items: center;
  gap: 1.2rem;
  border-radius: 5px;

  background: ${colors.neutral[0]};

  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid ${colors.neutral[1000]};
    `}
`;
const StyledInput = styled.input`
  border: none;
  width: 100%;
  color: ${colors.grey[500]};
`;
