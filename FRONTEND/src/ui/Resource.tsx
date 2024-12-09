import styled from "styled-components";
import Icon from "../ui/Icon";
import { Quantity } from "./Quantity";

const StyledResource = styled.span`
  display: flex;
  align-items: center;
`;

export type Type =
  | "coins"
  | "energy"
  | "food"
  | "water"
  | "oxygen"
  | "temperature"
  | "workers"
  | "duration";
interface ResourceProps {
  type: Type;
  children: string;
  size?: string;
}

const colors = {
  coins: "#F39E09",
  energy: "#FABE2C",
  food: "#B9CD2A",
  water: "#62DDFC",
  oxygen: "#F5F5F5",
  temperature: "#FF405C",
  workers: "#97D9F0",
  duration: "white",
} as const;

function Resource({ type, children, size }: ResourceProps) {
  const color = colors[type];

  return (
    <StyledResource>
      <Icon type={type} />
      <Quantity color={color} size={size}>
        {type === "coins" ? `${children} $` : children}
      </Quantity>
    </StyledResource>
  );
}

export default Resource;
