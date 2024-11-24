import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.main`
  font-family: "Krona One", sans-serif;

  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: hidden;

  background-image: url("/backgrounds/bg-app.png");

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
