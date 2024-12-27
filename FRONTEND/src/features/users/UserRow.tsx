import { Level } from "../../ui/Level";
import Resource from "../../ui/Resource";
import Table from "../../ui/Table";
import { User } from "./User";

function UserRow({ user }: { user: User }) {
  return (
    <Table.Row>
      <div>{user.username}</div>
      <div>
        <Level>{user.level}</Level>
      </div>
      <div>
        <Resource type="coins">42</Resource>
      </div>
      <div>
        <Resource type="oxygen">10</Resource>
      </div>
      <div>
        <Resource type="temperature">-50</Resource>
      </div>
      <div>12/1000</div>
    </Table.Row>
  );
}

export default UserRow;
