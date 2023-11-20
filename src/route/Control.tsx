import { Main, Login } from "pages";
import { useLoginToken } from "store";
interface PublicRouteProps {
  Component: JSX.Element;
  restricted?: boolean;
}
type PrivateRouteProps = Omit<PublicRouteProps, "restricted">;

const PublicRoute = ({ Component, restricted = false }: PublicRouteProps) => {
  const accessToken = useLoginToken();
  const isLogin = accessToken;
  return isLogin && restricted ? <Main /> : Component;
};
const PrivateRoute = ({ Component }: PrivateRouteProps) => {
  //console.log(JSON.parse(localStorage.getItem(Storage.USER_ACCESS_TOKEN)));
  const accessToken = useLoginToken();
  const isLogin = accessToken;

  return isLogin ? Component : <Login />;
};

export { PublicRoute, PrivateRoute };
