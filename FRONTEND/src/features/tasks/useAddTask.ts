import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask as addTaskApi } from "../../services/apiTasks";

export function useAddTask() {
  const queryClient = useQueryClient();

  const { mutate: addTask, isPending } = useMutation({
    mutationFn: (taskId: number) => addTaskApi(19, taskId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["resources"] });
    },
  });

  return { addTask, isPending };
}
