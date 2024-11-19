import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LogoType from "./LogoType";

const StyledHomeLayout = styled.main`
  /* https://www.newgrounds.com/art/view/will/space-pixel-studies */
  background-image: url("backgrounds/bg-homepage.gif");
  background-size: cover;
  background-position: center;

  position: relative;

  height: 100vh;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Blur = styled.div`
  width: 100%;
  height: 100%;

  backdrop-filter: blur(1rem);
`;

const Authors = styled.p`
  font-size: 1.5rem;
  padding: 2rem;

  position: absolute;
  bottom: 0;
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
