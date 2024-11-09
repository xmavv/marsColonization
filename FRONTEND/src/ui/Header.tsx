import Resource from "./Resource";

function Header() {
  return (
    <header>
      <div>
        <span>NICKNAME</span>
        <span>LEVEL 5</span>
      </div>

      <ul>
        <Resource type="coins">COINS</Resource>
        <Resource type="energy">ENERGY</Resource>
        <Resource type="food">FOOD</Resource>
        <Resource type="water">WATER</Resource>
        <Resource type="oxygen">OXYGEN</Resource>
        <Resource type="temperature">TEMP</Resource>
      </ul>
    </header>
  );
}

export default Header;
