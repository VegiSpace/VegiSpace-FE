import { ButtonDefault, ButtonSecondary } from "./Button/Button";
import { InputWrapper } from "./Input/Input";
import GlobalStyle from "./global";
//const App = (): JSX.Element => <Button text="App" />;

const App=():JSX.Element=>{return (
  <><GlobalStyle />
  <ButtonDefault color="green">Default Green</ButtonDefault>
  <ButtonDefault color="black">Default Black</ButtonDefault>
  <ButtonSecondary border="square" color="yellow">
    Default Black
  </ButtonSecondary><ButtonSecondary border="square" color="white">
      Secondary sqaure
    </ButtonSecondary><ButtonSecondary border="round" color="white">
      Secondary round
    </ButtonSecondary><InputWrapper
      label="비밀번호"
      name="password"
      id="password"
      width="half"
      type="password"
      error={false}
      value={"password"}
      placeholder="하하하" 
      
      /*value={value}*/
      /></>

);}

export default App;
