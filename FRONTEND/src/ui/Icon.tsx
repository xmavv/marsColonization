import styled from "styled-components";
import { Type } from "./Resource";

const StyledIcon = styled.img`
  display: inline-block;
  width: 2.5rem;
  aspect-ratio: 1/1;

  margin: 0 0.5rem;
`;

function Icon({ type }: { type: Type }) {
  return <StyledIcon src={`/resources/${type}.png`} alt="" />;
}

export default Icon;
