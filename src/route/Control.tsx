import { Main, Login } from "pages";
import { Storage } from "constant";
interface PublicRouteProps {
  Component: JSX.Element;
  restricted?: boolean;
}
type PrivateRouteProps = Omit<PublicRouteProps, "restricted">;

const PublicRoute = ({ Component, restricted = false }: PublicRouteProps) => {
  const isLogin = localStorage.getItem(Storage.USER_ACCESS_TOKEN);
  return isLogin && restricted ? <Main /> : Component;
};
const PrivateRoute = ({ Component }: PrivateRouteProps) => {
  const isLogin = localStorage.getItem(Storage.USER_ACCESS_TOKEN);
  return isLogin ? Component : <Login />;
};

export { PublicRoute, PrivateRoute };
