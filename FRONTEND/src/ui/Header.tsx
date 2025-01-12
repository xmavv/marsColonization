import styled from "styled-components";
import Resource from "../features/resources/Resource";
import ButtonLogOut from "./ButtonLogOut";
import { useResources } from "../features/resources/useResources";
import Spinner from "./Spinner";
import UserData from "./UserData";

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

const Ul = styled.ul`
  display: flex;
  gap: 2rem;
`;

function Header() {
  const { data: resources, isLoading } = useResources();

  if (isLoading) return <Spinner />;
  const { coins, energy, food, oxygen, temperature, water } = resources;

  return (
    <StyledHeader>
      <UserData />

      <Ul>
        <li>
          <Resource type={"coins"}>{coins}</Resource>
        </li>
        <li>
          <Resource type={"energy"}>{energy}</Resource>
        </li>
        <li>
          <Resource type={"food"}>{food}</Resource>
        </li>
        <li>
          <Resource type={"water"}>{water}</Resource>
        </li>
        <li>
          <Resource type={"oxygen"}>{oxygen}</Resource>
        </li>
        <li>
          <Resource type={"temperature"}>{temperature}</Resource>
        </li>
      </Ul>

      <ButtonLogOut />
    </StyledHeader>
  );
}

export default Header;
