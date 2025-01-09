import styled from "styled-components";
import Resource, { Type } from "../features/resources/Resource";
import ButtonLogOut from "./ButtonLogOut";
import { Level } from "./Level";
import { useResources } from "../features/resources/useResources";
import Spinner from "./Spinner";
import { useAuth } from "../contexts/AuthContext";

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

const Nickname = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: white;
`;

const Ul = styled.ul`
  display: flex;
  gap: 2rem;
`;

function Header() {
  const { data: resources, isLoading } = useResources();
  const { user } = useAuth();

  if (isLoading) return <Spinner />;
  const { coins, energy, food, oxygen, temperature, water } = resources;

  return (
    <StyledHeader>
      <div>
        <Nickname>{user?.username}</Nickname>
        <Level>{user?.level}</Level>
      </div>

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
