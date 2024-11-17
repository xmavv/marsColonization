import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LogoType from "./LogoType";

const StyledHomeLayout = styled.main`
  background-image: url("backgrounds/bg-homepage.jpg");
  background-size: cover;
  background-position: center;

  height: 100vh;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 5rem 0;
`;

const Blur = styled.div`
  width: 100%;
  height: 100%;

  backdrop-filter: blur(1rem);
`;

const Authors = styled.p`
  font-size: 1.5rem;
`;

function HomeLayout() {
  return (
    <StyledHomeLayout>
      <Blur>
        <Wrapper>
          <LogoType />
          <Outlet />
          <Authors>authors: mateusz oleksy and mateusz tesarewicz</Authors>
        </Wrapper>
      </Blur>
    </StyledHomeLayout>
  );
}

export default HomeLayout;
