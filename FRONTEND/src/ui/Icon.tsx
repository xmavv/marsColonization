import styled from "styled-components";

const StyledIcon = styled.img`
  display: inline-block;
  width: 2.5rem;
  aspect-ratio: 1/1;

  margin: 0 0.5rem;
`;

interface IconProps {
  type: "coins" | "energy" | "food" | "water" | "oxygen" | "temperature";
}

function Icon({ type }: IconProps) {
  return <StyledIcon src={`/resources/${type}.png`} alt="" />;
}

export default Icon;
