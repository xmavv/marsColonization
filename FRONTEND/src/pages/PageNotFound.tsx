import styled from "styled-components";
import { pageAnimation } from "../ui/pageAnimation";

import { motion } from "framer-motion";
import LogoType from "../ui/LogoType";
import ButtonCta from "../ui/ButtonCta";

const StyledPageNotFound = styled(motion.div)`
  /* https://www.newgrounds.com/art/view/will/space-pixel-studies */
  background-image: url("backgrounds/bg-homepage.gif");
  background-size: cover;
  background-position: center;
  color: var(--color-primary);

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  font-size: 3rem;

  > p {
    padding-bottom: 5rem;
  }
`;

function PageNotFound() {
  return (
    <StyledPageNotFound {...pageAnimation}>
      <LogoType />
      <p>this page does not exist!</p>
      <ButtonCta rotate="0" to="/homepage">
        go back
      </ButtonCta>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
