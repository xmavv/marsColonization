import styled from "styled-components";
import UserData from "../features/users/UserData";
import ResourcesList from "../features/resources/ResourcesList";
import UserActions from "../features/users/UserActions";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  font-family: "Kumar One", sans-serif;
  padding: 1.2rem;

  background-color: rgba(0, 0, 0, 0.85);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
`;

function Header() {
  return (
    <StyledHeader>
      <UserData />

      <ResourcesList />

      <UserActions />
    </StyledHeader>
  );
}

export default Header;
