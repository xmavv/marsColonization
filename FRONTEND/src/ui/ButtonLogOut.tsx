import styled from "styled-components";

const StyledButtonLogOut = styled.button`
  padding: 1rem 2rem;

  background-color: rgba(255, 0, 0, 0.5);
  border-radius: var(--radius-small);

  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const Img = styled.img`
  margin-left: 0.5rem;
  display: inline;
  width: 1.5rem;
  aspect-ratio: 1/1;
`;

function ButtonLogOut() {
  return (
    <StyledButtonLogOut>
      <span>log out</span>
      <Img src="/header/logout.png" alt="" />
    </StyledButtonLogOut>
  );
}

export default ButtonLogOut;
