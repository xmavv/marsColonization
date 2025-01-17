import styled from "styled-components";

export const ButtonRed = styled.button`
  font-family: "Krona One", sans-serif;
  padding: 1rem;

  background-color: rgba(255, 0, 0, 0.5);
  border-radius: var(--radius-small);

  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

export const Img = styled.img`
  margin-left: 0.5rem;
  display: inline;
  width: 1.5rem;
  aspect-ratio: 1/1;
`;
