import Table from "../../ui/Table";
import { Task } from "./Task";
import TaskRow from "./TaskRow";

const task1: Task = {
  id: 1,
  name: "space adventure",
  description: "space adventure at the end ",
  coins: 1234,
  workers: 123,
  durtation: 2000,
  type: "food",
  resources: 123,
};

const task2: Task = {
  id: 1,
  name: "space adventure",
  description: "space  at the end ",
  coins: 521,
  workers: 532,
  durtation: 53,
  type: "oxygen",
  resources: 53,
};

const task3: Task = {
  id: 1,
  name: "space adventure",
  description:
    "space adventure at thdwwwwwwwwwwwwwwwwwwe dsdsdsdsdssssssssssssssssssssssend ",
  coins: 21,
  workers: 5312,
  durtation: 531,
  type: "oxygen",
  resources: 632,
};

const task4: Task = {
  id: 1,
  name: "space adventure",
  description: "space adventdwadsure at the end ",
  coins: 2121,
  workers: 52,
  durtation: 42,
  type: "water",
  resources: 12,
};

const task5: Task = {
  id: 1,
  name: "xdd ahah",
  description: "space dwadwawdwadwa at the end ",
  coins: 6732,
  workers: 632,
  durtation: 63,
  type: "energy",
  resources: 241,
};

const tasks = [
  task1,
  task2,
  task3,
  task4,
  task5,
  task1,
  task2,
  task3,
  task4,
  task5,
  task1,
  task2,
  task3,
  task4,
  task5,
  task1,
  task2,
  task3,
  task4,
  task5,
  task1,
  task2,
  task3,
  task4,
  task5,
];

function TaskTable() {
  return (
    <Table columns="4fr 6fr 2fr 2fr 2fr 2fr 1fr">
      <Table.Header>
        <div>title</div>
        <div>description</div>
        <div>resources</div>
        <div>coins</div>
        <div>workers</div>
        <div>duraion</div>
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
