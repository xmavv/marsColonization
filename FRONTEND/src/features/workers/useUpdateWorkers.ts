import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateWorkers as updateWorkersApi,
  workersToUpdate,
} from "../../services/apiWorkers";

export function useUpdateWorkers() {
  const queryClient = useQueryClient();

  const { mutate: updateWorkers, isPending } = useMutation({
    mutationFn: (workersToUpdate: workersToUpdate) =>
      updateWorkersApi(19, workersToUpdate),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workers"] });
    },
  });

  return { updateWorkers, isPending };
}
