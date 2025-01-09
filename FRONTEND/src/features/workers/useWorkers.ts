import { useQuery } from "@tanstack/react-query";
import { getWorkers } from "../../services/apiWorkers";
import { useAuth } from "../../contexts/AuthContext";

export function useWorkers() {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["workers"],
    queryFn: () => getWorkers(user?.id as number),
  });

  return { data, isLoading };
}
