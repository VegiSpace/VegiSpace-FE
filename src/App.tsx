import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Main,
  Login,
  Signup,
  Shop,
  Recipe,
  Order,
  Mypage,
  AuthHelper,
} from "./pages";
import { DefaultLayout } from "./templates";

const App = (): JSX.Element => {
  const temp = () => {};
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/order" element={<Order />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/find" element={<AuthHelper />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

/*

  const [query, setQuery] = useState("");
    <>
      <Button
        btnType="primary"
        disabled={false}
        color="green"
        onClick={() => console.log("Click Me")}
      >
        Click Me
      </Button>
      <Button
        btnType="primary"
        disabled={false}
        color="black"
        onClick={() => console.log("Default Black")}
      >
        Default Black
      </Button>
      <Button
        btnType="secondary"
        border="round"
        color="green"
        onClick={() => console.log("Secondary sqaure")}
      >
        Secondary sqaure
      </Button>
      <Button
        btnType="mini"
        height={36}
        border="round"
        color="green"
        onClick={() => console.log(" Mini round greend")}
      >
        Mini round
      </Button>
      <Button
        btnType="text"
        color="green"
        onClick={() => console.log("Text green")}
      >
        Text green
      </Button>

      <Typo typoType="Title1">Jacob's Playground</Typo>
      <Typo typoType="Title2">Jacob's Playground</Typo>
      <Typo typoType="Title3">Jacob's Playground</Typo>
      <Typo typoType="Title4">Jacob's Playground</Typo>
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
*/
