import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateWorkers as updateWorkersApi,
  workersToUpdate,
} from "../../services/apiWorkers";
import { useAuth } from "../../contexts/AuthContext";

export function useUpdateWorkers() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: updateWorkers, isPending } = useMutation({
    mutationFn: (workersToUpdate: workersToUpdate) =>
      updateWorkersApi(user?.id as number, workersToUpdate),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workers"] });
      queryClient.invalidateQueries({ queryKey: ["resources"] });
    },
  });

  return { updateWorkers, isPending };
}
