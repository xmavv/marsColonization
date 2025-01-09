import { useEffect, useRef, useState } from "react";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { useUpdateWorkers } from "../workers/useUpdateWorkers";
import { useWorkers } from "../workers/useWorkers";
import { Task } from "./Task";
import TaskRow from "./TaskRow";
import { useAddTask } from "./useAddTask";
import { useTasks } from "./useTasks";
import { useChangeTitle } from "../../hooks/useChangeTitle";
import { toast } from "react-toastify";

const workersTypes = {
  temperature: "meteorologists",
  food: "biologists",
  oxygen: "chemists",
  water: "hydrologists",
  energy: "electricians",
};

function TaskTable() {
  const [executingTask, setExecutinTask] = useState(-1);
  const timeoutRef = useRef(0);

  //database info
  const { data: tasks, isLoading } = useTasks();
  const { addTask, isPending: isPendingTask } = useAddTask();

  const { data: { data: workers } = {}, isLoading: isLoadingWorkers } =
    useWorkers();
  const { updateWorkers, isPending } = useUpdateWorkers();

  //handler functions
  function handleExecuteTask(task: Task) {
    const workerType = workersTypes[task.type];
    const taskWorkers = task.workers;

    const workersToUpdate = { [workerType]: workers[workerType] - taskWorkers };

    if (workers[workerType] < taskWorkers) {
      toast.error("nie mozesz tego zrobic! masz za malo zasobow!", {
        theme: "colored",
      });

      return;
    }

    updateWorkers(workersToUpdate);
    setExecutinTask(task.id);
    toast.success("task is being executed! dont leave this page!", {
      theme: "colored",
    });

    document.title = `marsColonization - ⭐ executing task ${task.id} `;

    timeoutRef.current = setTimeout(() => {
      addTask(task.id);
      setExecutinTask(-1);
      toast.success("you have successfully done task!", { theme: "colored" });

      document.title = `marsColonization - ⭐ tasks`;
    }, task.duration * 1000);
  }

  //hooks
  useChangeTitle("tasks");

  // useEffect(() => {
  //   window.onclose = function () {
  //     if (executingTask !== -1) {
  //       alert(
  //         "jezeli teraz wyjdziesz to stracisz workersow i nie uzyskasz zasobow!"
  //       );
  //     }
  //   };

  //   // return () => clearTimeout(timeoutRef.current);
  // }, [executingTask]);

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
