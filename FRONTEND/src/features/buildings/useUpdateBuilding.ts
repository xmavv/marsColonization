import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBuilding as updateBuildingApi } from "../../services/apiBuildings";

export function useUpdateBuilding(buildingType: string) {
    const queryClient = useQueryClient();

    const {mutate: updateBuilding, isPending} = useMutation({
        mutationFn: (level: number) => updateBuildingApi(19, buildingType, level), 

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['resources']});
            queryClient.invalidateQueries({queryKey: ['building', buildingType]});
    },
        onError: () => {
            console.log('nie masz wystarczajaco resourcow!');
        }});

    return {updateBuilding, isPending};
}