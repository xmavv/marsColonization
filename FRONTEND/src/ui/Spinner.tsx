import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    to {
      transform: rotate(1turn);
    }
`;

const Spinner = styled.div`
  margin: 4.5rem auto;

  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-primary);
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;

  animation: ${rotate} 1s infinite linear;
`;

export const SpinnerMini = styled(Spinner)`
  margin: 0.9rem auto;
  width: 25px;
  background: #3ada3f;
`;

export default Spinner;
