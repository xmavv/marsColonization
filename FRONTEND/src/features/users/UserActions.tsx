import styled from "styled-components";
import ButtonLogOut from "../../ui/ButtonLogOut";
import ButtonDeleteAccount from "../../ui/ButtonDeleteAccount";

const StyledUserActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

function UserActions() {
  return (
    <StyledUserActions>
      <ButtonLogOut />
      <ButtonDeleteAccount />
    </StyledUserActions>
  );
}

export default UserActions;
