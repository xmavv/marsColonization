import styled from "styled-components";
import Resource from "./Resource";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  font-size: 1rem;
  padding: 1rem;
`;

const Nickname = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: blue;
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
        <Resource type="temperature">TEMP</Resource>
      </Ul>

      <div>
        <button>log out</button>
      </div>
    </StyledHeader>
  );
}

export default Header;
