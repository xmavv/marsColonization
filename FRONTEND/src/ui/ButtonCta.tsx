import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButtonCta = styled.button`
  font-size: 2rem;
  font-family: "Krona One", sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  width: 25rem;
  margin: 1rem;
  padding: 2.5rem 2rem;

  background-color: #ff00fb;
  border-radius: 2rem;
  box-shadow: 0 1rem 5rem #ff00fb;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2rem) scale(1.2);
  }
`;

interface ButtonCtaProps {
  children: string;
  to: string;
}

function ButtonCta({ children, to }: ButtonCtaProps) {
  return (
    <StyledButtonCta>
      <Link to={to}>{children}</Link>
    </StyledButtonCta>
  );
}

export default ButtonCta;
