import styled from "styled-components";
import ButtonCta from "../ui/ButtonCta";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { pageAnimation } from "../ui/pageAnimation";

const StyledHomepage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;

  div > * {
    margin: 5rem;
  }
`;

const ButtonUsers = styled(Link)`
  font-size: 1.5rem;
  font-family: "Krona one", sans-serif;
  padding: 2rem;
  background-image: linear-gradient(var(--color-complementary), #00c3ff);
  border-radius: 2rem;
  text-transform: uppercase;
  font-weight: bold;

  box-shadow: 0 1rem 5rem var(--color-complementary);

  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-1rem);
  }
`;

function Homepage() {
  const navigate = useNavigate();

  return (
    <StyledHomepage {...pageAnimation}>
      <div>
        <ButtonCta
          rotate="5deg"
          to="/register"
          onClick={() => navigate("/register")}
        >
          register
        </ButtonCta>
        <ButtonCta
          rotate="-12deg"
          to="/login"
          onClick={() => navigate("/login")}
        >
          login
        </ButtonCta>
      </div>

      <ButtonUsers to="/users">players table</ButtonUsers>
    </StyledHomepage>
  );
}

export default Homepage;
