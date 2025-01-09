import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ResourcesToUpdate,
  updateResources as updateResourcesApi,
} from "../../services/apiResources";
import { useAuth } from "../../contexts/AuthContext";

export function useUpdateResources() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: updateResources, isPending } = useMutation({
    mutationFn: (resourcesToUpdate: ResourcesToUpdate) =>
      updateResourcesApi(user?.id as number, resourcesToUpdate),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { updateResources, isPending };
}
