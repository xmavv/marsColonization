import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButtonCta = styled.button<{ rotate: string }>`
  font-size: 2.5rem;
  font-family: "Krona One", sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  position: relative;
  width: 38rem;
  padding: 4rem 2rem;

  color: black;
  background-image: linear-gradient(
    var(--color-primary),
    var(--color-primary-2)
  );
  box-shadow: 0 1rem 5rem var(--color-primary);

  rotate: ${(props) => props.rotate};

  transition: all 0.3s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: var(--color-complementary);

    transition: all 0.3s ease;
  }

  &::before {
    bottom: -1rem;
    left: 6px;

    width: 100%;
    height: 1rem;

    transform: skewX(45deg);
  }

  &::after {
    top: 7px;
    right: -1rem;

    width: 1rem;
    height: 100%;

    transform: skewY(45deg);
  }

  &:hover {
    transform: translate(1rem, 1rem);

    &::after {
      width: 0.5rem;
      right: -0.5rem;
      top: 3px;
    }

    &::before {
      height: 0.5rem;
      bottom: -0.5rem;
      left: 3px;
    }
  }
`;

interface ButtonCtaProps {
  children: string;
  to?: string;
  rotate: string;
  onClick?: () => void;
}

function ButtonCta({ children, to, rotate, onClick }: ButtonCtaProps) {
  if (to === undefined)
    return (
      <StyledButtonCta rotate={rotate} onClick={onClick}>
        {children}
      </StyledButtonCta>
    );

  return (
    <StyledButtonCta rotate={rotate}>
      <Link to={to}>{children}</Link>
    </StyledButtonCta>
  );
}

export default ButtonCta;
