import styled from "styled-components";
import { Type } from "../features/resources/Resource";

const StyledIcon = styled.img`
  display: inline-block;
  width: 2.5rem;
  aspect-ratio: 1/1;

  z-index: inherit;
  margin: 0 0.5rem;
`;

function Icon({ type }: { type: Type }) {
  return <StyledIcon src={`/resources/${type}.png`} alt="" />;
}

export default Icon;
