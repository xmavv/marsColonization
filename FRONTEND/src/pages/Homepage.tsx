import styled from "styled-components";
import ButtonCta from "../ui/ButtonCta";

const StyledHomepage = styled.div`
  * {
    margin: 10rem 4rem;
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
    </StyledHomepage>
  );
}

export default Homepage;
