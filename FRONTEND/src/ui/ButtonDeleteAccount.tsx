import { useNavigate } from "react-router-dom";
import { ButtonRed, Img } from "./ButtonRed";
import { useDeleteUser } from "../features/authentication/useDeleteUser";

function ButtonDeleteAccount() {
  const { deleteUser, isPending } = useDeleteUser();
  const navigate = useNavigate();

  function handleRemoveAccount() {
    const isConfirmed = confirm(
      "are you sure, that you want to delete your account?"
    );

    if (isConfirmed) {
      deleteUser();
      navigate("/homepage"), { replace: true };
    }
  }

  return (
    <ButtonRed onClick={handleRemoveAccount} disabled={isPending}>
      <Img src="/utils/remove.png" alt="" />
    </ButtonRed>
  );
}

export default ButtonDeleteAccount;
