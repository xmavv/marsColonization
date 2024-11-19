import styled from "styled-components";
import ButtonCta from "../ui/ButtonCta";

const StyledHomepage = styled.div`
  *:first-child {
    margin-bottom: 2rem;
  }

  &:has(button:hover) button:not(:hover) {
    transform: scale(0.9);
  }
`;

function Homepage() {
  return (
    <StyledHomepage>
      <ButtonCta to="/register">register</ButtonCta>
      <ButtonCta to="/login">login</ButtonCta>
    </StyledHomepage>
  );
}

export default Homepage;
