import { Level } from "../../ui/Level";
import Resource from "../resources/Resource";
import Table from "../../ui/Table";
import { User } from "./User";

function UserRow({ user }: { user: User }) {
  const {
    username,
    level,
    coins,
    oxygen,
    temperature,
    done_tasks: tasks,
  } = user;

  return (
    <Table.Row>
      <div>{username}</div>
      <div>
        <Level>{level}</Level>
      </div>
      <div>
        <Resource type="coins">{coins}</Resource>
      </div>
      <div>
        <Resource type="oxygen">{oxygen}</Resource>
      </div>
      <div>
        <Resource type="temperature">{temperature}</Resource>
      </div>
      <div>{tasks}/1000</div>
    </Table.Row>
  );
}

export default UserRow;
