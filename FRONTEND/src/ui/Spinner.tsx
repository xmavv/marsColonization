import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    to {
      transform: rotate(1turn);
    }
`;

const Spinner = styled.div`
  margin: 0.5rem auto;

  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #3ada3f;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;

  animation: ${rotate} 1s infinite linear;
`;

export const SpinnerMini = styled(Spinner)`
  width: 25px;
`;

export default Spinner;
