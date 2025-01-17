import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ButtonRed, Img } from "./ButtonRed";
import styled from "styled-components";

const StyledButtonLogout = styled(ButtonRed)`
  padding: 1rem 2rem;
`;

function ButtonLogOut() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/homepage", { replace: true });
  }

  return (
    <StyledButtonLogout onClick={handleLogout}>
      <span>log out</span>
      <Img src="/utils/logout.png" alt="" />
    </StyledButtonLogout>
  );
}

export default ButtonLogOut;
