import { useState } from "react";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { useUpdateWorkers } from "../workers/useUpdateWorkers";
import { useWorkers } from "../workers/useWorkers";
import { Task } from "./Task";
import TaskRow from "./TaskRow";
import { useAddTask } from "./useAddTask";
import { useTasks } from "./useTasks";

const workersTypes = {
  temperature: "meteorologists",
  food: "biologists",
  oxygen: "chemists",
  water: "hydrologists",
  energy: "electricians",
};

function TaskTable() {
  const [executingTask, setExecutinTask] = useState(-1);

  const { data: tasks, isLoading } = useTasks();
  const { addTask, isPending: isPendingTask } = useAddTask();

  const { data: { data: workers } = {}, isLoading: isLoadingWorkers } =
    useWorkers();
  const { updateWorkers, isPending } = useUpdateWorkers();

  function handleExecuteTask(task: Task) {
    const workerType = workersTypes[task.type];
    const taskWorkers = task.workers;

    const workersToUpdate = { [workerType]: workers[workerType] - taskWorkers };

    if (workers[workerType] < taskWorkers) {
      console.log("nie mozesz tego zrobic ");

      return;
    }

    updateWorkers(workersToUpdate);
    setExecutinTask(task.id);
    document.title = `marsColonization - ⭐ executing task ${task.id} `;

    setTimeout(() => {
      addTask(task.id);
      setExecutinTask(-1);
      document.title = `marsColonization`;
    }, task.duration * 1000);
  }

  if (isLoading || isLoadingWorkers) return <Spinner />;

  return (
    <Table columns="4fr 6fr 2fr 2fr 2fr 2fr 1fr">
      <Table.Header>
        <div>title</div>
        <div>description</div>
        <div title="resources to claim after task is done">resources</div>
        <div title="coins to claim after task is done">coins</div>
        <div title="workers to get rid of forever">workers</div>
        <div>duration</div>
        <div>execute</div>
      </Table.Header>

      <Table.Body
        height="70vh"
        data={tasks}
        render={(task) => (
          <TaskRow
            key={task.id}
            task={task as Task}
            onClick={() => handleExecuteTask(task as Task)}
            isExecuting={task.id === executingTask}
          />
        )}
      ></Table.Body>
    </Table>
  );
}

export default TaskTable;
