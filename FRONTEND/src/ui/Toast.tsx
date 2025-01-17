import { Slide, ToastContainer } from "react-toastify";
import styled from "styled-components";

const StyledContainer = styled(ToastContainer)`
  .Toastify__toast-theme--colored.Toastify__toast--error,
  .Toastify__toast-theme--colored.Toastify__toast--info,
  .Toastify__toast-theme--colored.Toastify__toast--success {
    font-family: "Krona one";
    font-size: 1.5rem;
  }

  .Toastify__toast-theme--colored.Toastify__toast--error,
  .Toastify__toast-theme--colored.Toastify__toast--info {
    background-color: var(--color-primary);
  }
  .Toastify__toast-theme--colored.Toastify__toast--success {
    background-color: #3ada3f;
  }
`;

function Toast() {
  return (
    <StyledContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      limit={3}
      closeOnClick={true}
      theme="colored"
      transition={Slide}
    />
  );
}

export default Toast;
