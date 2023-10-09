import React, { FormEvent, useState } from "react";
import { Button } from "./components/Button/Button";
import SearchBarDefault from "./components/SearchBar/Default";
import SearchBarSeperated from "./components/SearchBar/Seperated";
import { Icon } from "./components/Icon";
import { Typo } from "./components/Typo";
import SignUp from "../src/templates/signup";

const App = (): JSX.Element => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Button.Default disabled={false} color="green">
        Click Me
      </Button.Default>
      <Button.Default disabled={false} color="black">
        Default Black
      </Button.Default>
      <Button.Secondary border="square" color="white">
        Secondary sqaure
      </Button.Secondary>
      <Button.Secondary border="round" color="white">
        Secondary round
      </Button.Secondary>
      <Button.Text color="green">Secondary round</Button.Text>

      <Typo.Title1>Jacob's Playground</Typo.Title1>
      <Typo.Title2>Jacob's Playground</Typo.Title2>
      <Typo.Title3>Jacob's Playground</Typo.Title3>
      <Typo.Title4>Jacob's Playground</Typo.Title4>

      <Typo.Body1>Jacob's Playground</Typo.Body1>
      <Typo.Body2>Jacob's Playground</Typo.Body2>
      <Typo.Body3>Jacob's Playground</Typo.Body3>
      <Typo.Body4>Jacob's Playground</Typo.Body4>

      <Typo.Caption1>Jacob's Playground</Typo.Caption1>
      <Typo.Caption2>Jacob's Playground</Typo.Caption2>
      <Icon.SearchIcon width={100} height={100} />
      <SearchBarDefault
        leftIcon={false}
        rightIcon={true}
        placeholder={"주문한 상품을 찾아보세요"}
        outlined={true}
        query={query}
        setQuery={setQuery}
      />
      <SearchBarSeperated
        leftIcon={true}
        rightIcon={false}
        placeholder={"주문한 상품을 찾아보세요"}
        query={query}
        setQuery={setQuery}
        outlined={true}
      />
    </>
  );
};

export default App;
