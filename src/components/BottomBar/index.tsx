import { useLocation, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  MainIconBlack,
  ShopIconBlack,
  RecipeIconBlack,
  OrderIconBlack,
  MypageIconBlack,
  MainIconGreen,
  ShopIconGreen,
  RecipeIconGreen,
  OrderIconGreen,
  MypageIconGreen,
} from "../../assets/icons";

const noBottomTabURL: string[] = ["/login", "/signup"];

const BottomTab = () => {
  const { pathname } = useLocation();
  const isNoBottomTab = noBottomTabURL.includes(pathname);
  console.log(isNoBottomTab);
  return !isNoBottomTab ? (
    <StyledBottomTab>
      <NavLink
        to="/"
        children={({ isActive }) => {
          return <>{isActive ? <MainIconGreen /> : <MainIconBlack />}</>;
        }}
      ></NavLink>
      <NavLink
        to="/shop"
        children={({ isActive }) => {
          return <>{isActive ? <ShopIconGreen /> : <ShopIconBlack />}</>;
        }}
      ></NavLink>
      <NavLink
        to="/recipe"
        children={({ isActive }) => {
          return <>{isActive ? <RecipeIconGreen /> : <RecipeIconBlack />}</>;
        }}
      ></NavLink>
      <NavLink
        to="/order"
        children={({ isActive }) => {
          return <>{isActive ? <OrderIconGreen /> : <OrderIconBlack />}</>;
        }}
      ></NavLink>
      <NavLink
        to="/mypage"
        children={({ isActive }) => {
          return <>{isActive ? <MypageIconGreen /> : <MypageIconBlack />}</>;
        }}
      ></NavLink>
    </StyledBottomTab>
  ) : null;
};

export default BottomTab;

const StyledBottomTab = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 375px;
  width: 100%;
  background-color: white;
`;

const NavStyle = styled(NavLink)`
  color: white;
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  margin: 5px;
  outline: invert;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: aquamarine;
  }
  &:active {
    color: aqua;
    position: relative;
    top: 2px;
  }
`;
