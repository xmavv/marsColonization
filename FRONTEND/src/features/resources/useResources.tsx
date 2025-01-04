import { useQuery } from "@tanstack/react-query";
import { getResources } from "../../services/apiResources";

export function useResources() {
  const { data, isLoading } = useQuery({
    queryKey: ["resources"],
    queryFn: () => getResources(19),
  });

  return { data, isLoading };
}
