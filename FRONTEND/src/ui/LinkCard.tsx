import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinkCard = styled.div<{ image: string }>`
  width: 20rem;
  height: 25rem;
  border-radius: 2rem;

  background-image: url(${(props) => `/cards/${props.image}.png`});
  background-size: cover;
  overflow: hidden;
`;

const Name = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;

  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  backdrop-filter: grayscale(1) brightness(50%);
  transition: all 0.3s ease;

  &:hover {
    backdrop-filter: grayscale(0) brightness(1);
  }
`;

interface LinkCardProps {
  to: string;
  children: string;
}

function LinkCard({ to, children }: LinkCardProps) {
  return (
    <StyledLinkCard image={to}>
      <Link to={to}>
        <Name>{children}</Name>
      </Link>
    </StyledLinkCard>
  );
}

export default LinkCard;
