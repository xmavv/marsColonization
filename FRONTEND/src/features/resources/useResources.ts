import { useQuery } from "@tanstack/react-query";
import { getResources } from "../../services/apiResources";
import { useAuth } from "../../contexts/AuthContext";

export function useResources() {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["resources"],
    queryFn: () => getResources(user?.id as number),
  });

  return { data, isLoading };
}
