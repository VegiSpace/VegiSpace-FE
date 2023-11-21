import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "constant";
import {
  Main,
  Login,
  Signup,
  Shop,
  Recipe,
  Order,
  Mypage,
  AuthHelper,
} from "pages";
import { DefaultLayout } from "templates";
import { PrivateRoute, PublicRoute } from "./Control";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path={RoutePath.Main}
            element={PublicRoute({ Component: <Main /> })}
          />
          <Route
            path={RoutePath.Login}
            element={PublicRoute({
              Component: <Login />,
              restricted: true,
            })}
          />
          <Route
            path={RoutePath.Signup}
            element={PublicRoute({
              Component: <Signup />,
              restricted: true,
            })}
          />
          <Route
            path={RoutePath.Shop}
            element={PrivateRoute({ Component: <Shop /> })}
          />
          <Route
            path={RoutePath.Recipe}
            element={PrivateRoute({ Component: <Recipe /> })}
          />
          <Route
            path={RoutePath.Order}
            element={PrivateRoute({ Component: <Order /> })}
          />
          <Route
            path={RoutePath.Mypage}
            element={PrivateRoute({ Component: <Mypage /> })}
          />
          <Route
            path={RoutePath.AuthHelper}
            element={PublicRoute({
              Component: <AuthHelper />,
              restricted: true,
            })}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
