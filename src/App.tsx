import React, { FormEvent, useState } from "react";
import { Button } from "./components/Button/Button";
import { InputContainer } from "./components/Input/Input";
import { Icon } from "./components/Icon";
import { Typo } from "./components/Typo";
import SignUp from "../src/templates/signup";


const App = (): JSX.Element => {
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
      <Icon.Lock width={100} height={100} />

      <SignUp />
    </>
  );
};

export default App;
