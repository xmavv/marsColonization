import { Slide, ToastContainer } from "react-toastify";
import styled from "styled-components";

const StyledContainer = styled(ToastContainer)`
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
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Slide}
      style={{ fontSize: "1.5rem" }}
    />
  );
}

export default Toast;
