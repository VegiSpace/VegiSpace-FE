import {
  ButtonDefault,
  ButtonSecondary,
  ButtonText,
} from "./components/Button/Button";
import { InputWrapper } from "./components/Input/Input";
import { Typo } from "./components/Typo";

const App = (): JSX.Element => {
  return (
    <>
      <ButtonDefault disabled={false} color="green">
        Click Me
      </ButtonDefault>
      <ButtonDefault disabled={false} color="black">
        Default Black
      </ButtonDefault>
      <ButtonSecondary border="square" color="white">
        Secondary sqaure
      </ButtonSecondary>
      <ButtonSecondary border="round" color="white">
        Secondary round
      </ButtonSecondary>
      <ButtonText color="green">Secondary round</ButtonText>
      <InputWrapper
        label="비밀번호"
        value="입력값"
        name="password"
        id="password"
        width="half"
        type="text"
        error={true}
        placeholder="하하하"

        /*value={value}*/
      />

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
    </>
  );
};

export default App;
