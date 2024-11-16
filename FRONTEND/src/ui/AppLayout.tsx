import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: hidden;

  background-image: url("bg.png");
  background-size: cover;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
