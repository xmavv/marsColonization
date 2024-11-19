import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButtonCta = styled.button`
  font-size: 2rem;
  font-family: "Krona One", sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  width: 100%;
  padding: 2.5rem 2rem;

  color: var(--color-complementary);
  border: 5px solid var(--color-primary);
  background-color: var(--color-primary-bg);
  border-radius: var(--radius-small);
  box-shadow: 0 1rem 5rem var(--color-primary);

  transition: all 0.3s ease;

  &:hover {
    color: black;
    transform: scale(1.1);
    background-color: var(--color-primary);
  }
`;

interface ButtonCtaProps {
  children: string;
  to?: string;
  onClick?: () => void;
}

function ButtonCta({ children, to, onClick }: ButtonCtaProps) {
  if (to === undefined)
    return <StyledButtonCta onClick={onClick}>{children}</StyledButtonCta>;

  return (
    <StyledButtonCta>
      <Link to={to}>{children}</Link>
    </StyledButtonCta>
  );
}

export default ButtonCta;
