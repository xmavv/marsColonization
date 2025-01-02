import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { User } from "./User";
import UserRow from "./UserRow";
import { useUsers } from "./useUsers";

function UserTable() {
  const { data: users, isLoading } = useUsers();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="2fr 1fr 2fr 2fr 2fr 2fr">
      <Table.Header>
        <div>username</div>
        <div>level</div>
        <div>coins</div>
        <div>oxygen</div>
        <div>temperature</div>
        <div>tasks</div>
      </Table.Header>

      <Table.Body
        height="50vh"
        data={users}
        render={(user) => <UserRow key={user.id} user={user as User} />}
      ></Table.Body>
    </Table>
  );
}

export default UserTable;
