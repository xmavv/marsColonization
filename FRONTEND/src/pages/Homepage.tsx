import styled from "styled-components";
import ButtonCta from "../ui/ButtonCta";
import { Link } from "react-router-dom";

const StyledHomepage = styled.div`
  * {
    margin: 10rem 4rem;
  }
`;

const Users = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;

const UsersLink = styled(Link)`
  font-family: "Krona one", sans-serif;
  padding: 2rem;
  background-color: var(--color-complementary);
  border-radius: 2rem;
  text-transform: uppercase;
  font-weight: bold;

  box-shadow: 0 1rem 5rem var(--color-complementary);

  transition: background-color 0.5s ease;
  &:hover {
  }
`;

function Homepage() {
  return (
    <StyledHomepage>
      <ButtonCta rotate="5deg" to="/register">
        register
      </ButtonCta>
      <ButtonCta rotate="-12deg" to="/login">
        login
      </ButtonCta>

      <Users>
        <UsersLink to="/users">players table</UsersLink>
      </Users>
    </StyledHomepage>
  );
}

export default Homepage;
