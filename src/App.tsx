import { ButtonDefault, ButtonSecondary } from "./Button/Button";
import { InputWrapper } from "./Input/Input";
import GlobalStyle from "./styles/global";
import { Typo } from "./components/Typo";
//const App = (): JSX.Element => <Button text="App" />;

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <ButtonDefault color="green">Default Green</ButtonDefault>
      <ButtonDefault color="black">Default Black</ButtonDefault>
      <ButtonSecondary border="square" color="yellow">
        Default Black
      </ButtonSecondary>
      <ButtonSecondary border="square" color="white">
        Secondary sqaure
      </ButtonSecondary>
      <ButtonSecondary border="round" color="white">
        Secondary round
      </ButtonSecondary>
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
    </>
  );
};

export default App;
