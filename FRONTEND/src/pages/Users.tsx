import UserTable from "../features/users/UserTable";
import ButtonGoBack from "../ui/ButtonGoBack";
import TableWrapper from "../ui/TableWrapper";

function Users() {
  return (
    <>
      <TableWrapper>
        <UserTable />
      </TableWrapper>
      <ButtonGoBack />
    </>
  );
}

export default Users;
