import {
  MainBlack,
  ShopBlack,
  RecipeBlack,
  OrderBlack,
  MypageBlack,
  MainActive,
  ShopActive,
  RecipeActive,
  OrderActive,
  MypageActive,
  LockBlack,
} from "../../assets";

const NavLinkData = [
  {
    to: "/",
    activeIcon: <MainActive />,
    inactiveIcon: <MainBlack />,
  },
  {
    to: "/shop",
    activeIcon: <ShopActive />,
    inactiveIcon: <ShopBlack />,
  },
  {
    to: "/recipe",
    activeIcon: <RecipeActive />,
    inactiveIcon: <RecipeBlack />,
  },
  {
    to: "/order",
    activeIcon: <OrderActive />,
    inactiveIcon: <OrderBlack />,
  },
  {
    to: "/mypage",
    activeIcon: <MypageActive />,
    inactiveIcon: <MypageBlack />,
  },
];

const noBottomTabURL: string[] = ["/login", "/signup", "/find"];

export { NavLinkData, noBottomTabURL };
