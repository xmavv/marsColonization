import Table from "../../ui/Table";
import { User } from "./User";
import UserRow from "./UserRow";

const user1: User = {
  id: 2,
  username: "xmavv",
  password: "xd",
  level: 2,
};

const user2: User = {
  id: 1,
  username: "tesa44",
  password: "xd",
  level: 5,
};

const users = [
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
];

function UserTable() {
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
