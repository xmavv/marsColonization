import styled from "styled-components";

const Img = styled.img`
  display: inline;
  width: 3rem;
  aspect-ratio: 1/1;
`;

const Quantity = styled.span`
  color: ${(props) => props.color};
`;

interface ResourceProps {
  type: "coins" | "energy" | "food" | "water" | "oxygen" | "temperature";
  children: string;
}

const colors = {
  coins: "#F39E09",
  energy: "#FABE2C",
  food: "#B9CD2A",
  water: "#62DDFC",
  oxygen: "#F5F5F5",
  temperature: "#FF405C",
};

function Resource({ type, children }: ResourceProps) {
  const color = colors[type];

  return (
    <li>
      <Img src={`resources/${type}.png`} alt="" />
      <Quantity color={color}>{children}</Quantity>
    </li>
  );
}

export default Resource;
