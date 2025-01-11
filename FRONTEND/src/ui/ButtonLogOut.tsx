import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const StyledButtonLogOut = styled.button`
  font-family: "Krona One", sans-serif;
  padding: 1rem 2rem;

  background-color: rgba(255, 0, 0, 0.5);
  border-radius: var(--radius-small);

  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const Img = styled.img`
  margin-left: 0.5rem;
  display: inline;
  width: 1.5rem;
  aspect-ratio: 1/1;
`;

function ButtonLogOut() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/homepage", { replace: true });
  }

  return (
    <StyledButtonLogOut onClick={handleLogout}>
      <span>log out</span>
      <Img src="/utils/logout.png" alt="" />
    </StyledButtonLogOut>
  );
}

export default ButtonLogOut;
