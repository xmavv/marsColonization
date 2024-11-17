import styled from "styled-components";
import Resource from "./Resource";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  font-size: 1rem;
  padding: 1rem;

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
        <Resource type="coins">COINS</Resource>
        <Resource type="energy">ENERGY</Resource>
        <Resource type="food">FOOD</Resource>
        <Resource type="water">WATER</Resource>
        <Resource type="oxygen">OXYGEN</Resource>
        <Resource type="temperature">TEMPERATURE</Resource>
      </Ul>

      <div>
        <button>log out</button>
      </div>
    </StyledHeader>
  );
}

export default Header;
