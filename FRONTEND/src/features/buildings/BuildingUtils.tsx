import styled from "styled-components";

export const Button = styled.button`
  font-family: "Krona One", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;

  width: 100%;
  padding: 1rem 3rem;
  margin-top: 1.5rem;
  border-radius: 4rem;

  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.07);
  }

  &:disabled:hover {
    cursor: not-allowed;
    filter: grayscale(1);
  }
`;

export const CenterContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  justify-content: center;

  z-index: 10;
  transition: transform 0.3s ease;
`;

export const P = styled.p`
  font-size: 2rem;
  padding: 1rem;
`;
