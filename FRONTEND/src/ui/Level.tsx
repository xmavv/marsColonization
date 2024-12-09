import styled from "styled-components";

export const Level = styled.span<{color?: string}>`
  margin: 0 0.5rem;
  color: ${props => props.color};
`;

Level.defaultProps= {color: '#21dc21'};
