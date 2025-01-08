import Spinner from "../../ui/Spinner";
import { useWorkers } from "./useWorkers";
import Worker, { WorkerType } from "./Worker";
import { useChangeTitle } from "../../hooks/useChangeTitle";

const workerTypes: WorkerType[] = [
  "hydrologist",
  "chemist",
  "electrician",
  "biologist",
  "meteorologist",
];

function WorkersList() {
  const { data: { data: workers, buyCosts } = {}, isLoading } = useWorkers();

  useChangeTitle("workers");

  if (isLoading) return <Spinner />;

  return (
    <>
      {workerTypes.map((worker) => (
        <Worker
          type={worker}
          quantity={workers[`${worker}s`]}
          cost={buyCosts[`${worker}s`].COINS}
        />
      ))}
    </>
  );
}

export default WorkersList;
