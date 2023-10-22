import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header, BottomTab } from "../components";

const DefaultLayout = () => {
  return (
    <StyledDefaultLayout>
      <Header />
      <Outlet />
      <BottomTab />
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;

const StyledDefaultLayout = styled.div`
  max-width: 375px;
  width: 100%;
  min-height: 100vh;
  max-height: fit-content;
  margin: auto;

  background-color: white;
`;
