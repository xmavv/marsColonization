import styled from "styled-components";
import ButtonCta from "../ui/ButtonCta";

const StyledHomepage = styled.div`
  padding: 10rem;

  &:has(button:hover) button:not(:hover) {
    transform: scale(0.8);
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
