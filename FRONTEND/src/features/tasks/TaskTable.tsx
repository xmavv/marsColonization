import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { Task } from "./Task";
import TaskRow from "./TaskRow";
import { useTasks } from "./useTasks";

function TaskTable() {
  const { data: tasks, isLoading } = useTasks();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="4fr 6fr 2fr 2fr 2fr 2fr 1fr">
      <Table.Header>
        <div>title</div>
        <div>description</div>
        <div>resources</div>
        <div>coins</div>
        <div>workers</div>
        <div>duration</div>
        <div>do task</div>
      </Table.Header>

      <Table.Body
        height="70vh"
        data={tasks}
        render={(task) => <TaskRow key={task.id} task={task as Task} />}
      ></Table.Body>
    </Table>
  );
}

export default TaskTable;
