import styled from "styled-components";

const StyledTableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10%;
`;

function TableWrapper({ children }: { children: React.ReactNode }) {
  return <StyledTableWrapper>{children}</StyledTableWrapper>;
}

export default TableWrapper;
