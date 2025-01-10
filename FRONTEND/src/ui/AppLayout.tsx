import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.main`
  font-family: "Krona One", sans-serif;
  position: relative;

  background-image: url("/backgrounds/bg-app.gif");
  background-size: cover;

  > div {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    overflow: hidden;

    backdrop-filter: blur(1rem);
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <div>
        <Header />
        <Outlet />
      </div>
    </StyledAppLayout>
  );
}

export default AppLayout;
