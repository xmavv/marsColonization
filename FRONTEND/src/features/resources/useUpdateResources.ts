import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ResourcesToUpdate, updateResources as updateResourcesApi} from "../../services/apiResources";

export function useUpdateResources() {
    const queryClient = useQueryClient();

    const {mutate: updateResources, isPending} = useMutation({
        mutationFn: (resourcesToUpdate: ResourcesToUpdate) => updateResourcesApi(19, resourcesToUpdate), 

        onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['resources']});
    }});

    return {updateResources, isPending};
}