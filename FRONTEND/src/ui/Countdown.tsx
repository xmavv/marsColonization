import styled from "styled-components";

export const Countdown = styled.div<{ countdown: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.countdown}%;
  height: 100%;

  background-color: ${(props) => props.color};
  opacity: 0.95;

  transition: width 0.5s linear;
`;
