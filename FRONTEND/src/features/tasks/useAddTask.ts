import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask as addTaskApi } from "../../services/apiTasks";
import { useAuth } from "../../contexts/AuthContext";

export function useAddTask() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: addTask, isPending } = useMutation({
    mutationFn: (taskId: number) => addTaskApi(user?.id as number, taskId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { addTask, isPending };
}
