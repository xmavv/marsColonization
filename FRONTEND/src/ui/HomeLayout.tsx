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
`;

const Wrapper = styled.div`
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
  font-weight: bold;
  padding: 2rem;

  color: var(--color-primary-2);

  position: absolute;
  bottom: 0;
  left: 0;
`;

function HomeLayout() {
  return (
    <StyledHomeLayout>
      <Blur>
        <Wrapper>
          <LogoType />
          <Outlet />
          {/* <Authors>authors: xmavv, tesa44</Authors> */}
        </Wrapper>
      </Blur>
    </StyledHomeLayout>
  );
}

export default HomeLayout;
