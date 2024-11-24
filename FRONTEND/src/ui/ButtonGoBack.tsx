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
`;

const Img = styled.img`
  width: 3rem;
  aspect-ratio: 1/1;
`;

function ButtonGoBack() {
  const navigate = useNavigate();

  return (
    <StyledButtonGoBack title="go back" onClick={() => navigate(-1)}>
      <Img src="/utils/goback.png" alt="" />
    </StyledButtonGoBack>
  );
}

export default ButtonGoBack;
