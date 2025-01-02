import Spinner from "../../ui/Spinner";
import { useWorkers } from "./useWorkers";
import Worker, { WorkerType } from "./Worker";

const workerTypes: WorkerType[] = [
  "hydrologist",
  "chemist",
  "electrician",
  "biologist",
  "meteorologist",
];

function WorkersList() {
  const { data: workers, isLoading } = useWorkers();

  if (isLoading) return <Spinner />;

  return (
    <>
      {workerTypes.map((worker) => (
        <Worker type={worker} quantity={workers[`${worker}s`]} />
      ))}
    </>
  );
}

export default WorkersList;
