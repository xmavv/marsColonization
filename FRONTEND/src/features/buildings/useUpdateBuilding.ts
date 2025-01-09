import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBuilding as updateBuildingApi } from "../../services/apiBuildings";
import { useAuth } from "../../contexts/AuthContext";

export function useUpdateBuilding(buildingType: string) {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: updateBuilding, isPending } = useMutation({
    mutationFn: (level: number) =>
      updateBuildingApi(user?.id as number, buildingType, level),

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      queryClient.invalidateQueries({ queryKey: ["building", buildingType] });
    },
    onError: () => {
      console.log("nie masz wystarczajaco resourcow!");
    },
  });

  return { updateBuilding, isPending };
}
