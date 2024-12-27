import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButtonGoBack = styled.button`
  position: fixed;
  bottom: 1.8rem;
  right: 2rem;

  padding: 1rem;
  border-radius: 1rem;

  background-image: linear-gradient(
    var(--color-primary),
    var(--color-primary-2)
  );
  box-shadow: 0 0 1rem black;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

const Img = styled.img`
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  width: 3rem;
  aspect-ratio: 1/1;
`;

function ButtonGoBack() {
  const navigate = useNavigate();

  return (
    <StyledButtonGoBack title="go back" onClick={() => navigate("/app")}>
      <Img src="/utils/goback.png" alt="" />
    </StyledButtonGoBack>
  );
}

export default ButtonGoBack;
