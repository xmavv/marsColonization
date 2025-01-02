import styled from "styled-components";
import IconPlus from "../../ui/IconPlus";
import Table from "../../ui/Table";
import { Task } from "./Task";
import Resource from "../resources/Resource";
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
  const { name, description, type, resources, coins, workers, duration } = task;

  return (
    <Table.Row>
      <div>{name}</div>
      <Description>{description}</Description>
      <div>
        <Resource type={type}>{`${resources}`}</Resource>
      </div>
      <div>
        <Resource type="coins">{`${coins}`}</Resource>
      </div>
      <div>
        <Resource type="workers">{`${workers}`}</Resource>
      </div>
      <div>
        <Resource type="duration">{formatDuration(duration)}</Resource>
      </div>
      <Button>
        <IconPlus />
      </Button>
    </Table.Row>
  );
}

export default TaskRow;
