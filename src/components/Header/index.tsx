import { useLocation } from "react-router-dom";
import styled from "styled-components";

const noHeaderURL: string[] = [];

const Header = () => {
  const { pathname } = useLocation();
  const isNoHeader = noHeaderURL.includes(pathname);
  return !isNoHeader ? <StyledHeader>Header</StyledHeader> : null;
};

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  background-color: pink;
`;
