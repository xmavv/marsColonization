import styled from "styled-components";
import ButtonCta from "../ui/ButtonCta";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { pageAnimation } from "../ui/pageAnimation";

import { getUsers } from "../services/apiUsers";

const StyledHomepage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;

  div > * {
    margin: 5rem;
  }
`;

const ButtonUsers = styled.button`
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
  const handleClick = async () => {
    const data = await getUsers();
    console.log(data);
  };

  return (
    <StyledHomepage {...pageAnimation}>
      <div>
        <ButtonCta rotate="5deg" onClick={handleClick}>
          register
        </ButtonCta>
        <ButtonCta rotate="-12deg" to="/login">
          login
        </ButtonCta>
      </div>

      <ButtonUsers>
        <Link to="/users">players table</Link>
      </ButtonUsers>
    </StyledHomepage>
  );
}

export default Homepage;
