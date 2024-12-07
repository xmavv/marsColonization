import { createContext, useContext } from "react";
import { Task } from "../features/tasks/Task";
import { User } from "../features/user/User";
import styled from "styled-components";

const TableContex = createContext({ columns: "" });

interface TableProps {
  columns: string;
  children: React.ReactNode;
}

interface BodyProps {
  data: Task[] | User[];
  render: (element: Task | User) => React.ReactNode;
}

interface Children {
  children: React.ReactNode;
}

const StyledTable = styled.div`
  font-size: 1.2rem;
  font-weight: 100;

  text-transform: uppercase;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50px;

  padding: 3rem 4rem;
`;

const StyledBody = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 70vh;
`;

const CommonRow = styled.div<{ columns: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2rem;
  align-items: center;

  padding: 0.5rem 0;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1rem 0;
  border-bottom: 1px solid white;
`;

const StyledRow = styled(CommonRow)`
  &:not(:last-child) {
    border-bottom: 1px solid white;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  transition: background-color 0.1s ease;
`;

function Table({ columns, children }: TableProps) {
  return (
    <TableContex.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContex.Provider>
  );
}

function Header({ children }: Children) {
  const { columns } = useContext(TableContex);

  return (
    <StyledHeader role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}

function Body({ data, render }: BodyProps) {
  return <StyledBody>{data.map(render)}</StyledBody>;
}

function Row({ children }: Children) {
  const { columns } = useContext(TableContex);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
