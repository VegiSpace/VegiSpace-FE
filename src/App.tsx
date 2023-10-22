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
