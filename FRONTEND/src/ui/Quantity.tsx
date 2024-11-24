import styled from "styled-components";

export const Quantity = styled.span<{ color: string; size?: string }>`
  font-size: ${(props) => (props.size ? props.size : "inherit")};
  color: ${(props) => props.color};
`;
