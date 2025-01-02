import { useQuery } from "@tanstack/react-query";
import { getWorkers } from "../../services/apiWorkers";

export function useWorkers() {
  const { data, isLoading } = useQuery({
    queryKey: ["workers"],
    queryFn: () => getWorkers(19),
  });

  return { data, isLoading };
}
