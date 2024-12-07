import styled from "styled-components";
import IconPlus from "../../ui/IconPlus";
import Table from "../../ui/Table";
import { Task } from "./Task";
import Resource from "../../ui/Resource";
import { formatDuration } from "../../utils/helpers";

const Button = styled.button`
  transition: transform 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.2);
  }
`;

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

function TaskRow({ task }: { task: Task }) {
  return (
    <Table.Row>
      <div>{task.name}</div>
      <Description>{task.description}</Description>
      <div>
        <Resource type={task.type}>{`${task.resources}`}</Resource>
      </div>
      <div>
        <Resource type="coins">{`${task.coins}`}</Resource>
      </div>
      <div>
        <Resource type="workers">{`${task.workers}`}</Resource>
      </div>
      <div>
        <Resource type="duration">{formatDuration(task.durtation)}</Resource>
      </div>
      <Button>
        <IconPlus />
      </Button>
    </Table.Row>
  );
}

export default TaskRow;
