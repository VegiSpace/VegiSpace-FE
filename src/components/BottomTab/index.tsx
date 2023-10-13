import { useLocation, NavLink } from "react-router-dom";
import { StyledBottomTab } from "./styled";
import { NavLinkData, noBottomTabURL } from "./data";

const BottomTab = () => {
  const { pathname } = useLocation();
  const isNoBottomTab = noBottomTabURL.includes(pathname);
  console.log(isNoBottomTab);
  return !isNoBottomTab ? (
    <StyledBottomTab>
      {NavLinkData.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.to}
          children={({ isActive }) => {
            return <>{isActive ? item.activeIcon : item.inactiveIcon}</>;
          }}
        ></NavLink>
      ))}
    </StyledBottomTab>
  ) : null;
};

export default BottomTab;
