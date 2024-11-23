import Icon from "../ui/Icon";
import styled from "styled-components";

const Quantity = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;
export type Type =
  | "coins"
  | "energy"
  | "food"
  | "water"
  | "oxygen"
  | "temperature";
interface ResourceProps {
  type: Type;
  children: string;
}

const colors = {
  coins: "#F39E09",
  energy: "#FABE2C",
  food: "#B9CD2A",
  water: "#62DDFC",
  oxygen: "#F5F5F5",
  temperature: "#FF405C",
} as const;

function Resource({ type, children }: ResourceProps) {
  const color = colors[type];

  return (
    <div>
      <Icon type={type} />
      <Quantity color={color}>{children}</Quantity>
    </div>
  );
}

export default Resource;
