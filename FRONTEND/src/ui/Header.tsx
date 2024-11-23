import styled from "styled-components";
import Resource, { Type } from "./Resource";
import ButtonLogOut from "./ButtonLogOut";

const types = [
  "coins",
  "energy",
  "food",
  "water",
  "oxygen",
  "temperature",
] as Type[];

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  padding: 1.2rem;

  background-color: rgba(0, 0, 0, 0.85);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
`;

const Nickname = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: white;
`;

const Level = styled.span`
  margin: 0 0.5rem;
  color: green;
`;

const Ul = styled.ul`
  display: flex;
  gap: 1rem;
`;

function Header() {
  return (
    <StyledHeader>
      <div>
        <Nickname>NICKNAME</Nickname>
        <Level>LEVEL 5</Level>
      </div>

      <Ul>
        {types.map((resourceType: Type) => (
          <li>
            <Resource type={resourceType}>
              {resourceType.toUpperCase()}
            </Resource>
          </li>
        ))}
      </Ul>

      <ButtonLogOut />
    </StyledHeader>
  );
}

export default Header;
