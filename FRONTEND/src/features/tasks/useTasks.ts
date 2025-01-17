import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/apiTasks";
import { useAuth } from "../../contexts/AuthContext";

export function useTasks() {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(user?.id as number),
  });

  return { data, isLoading };
}
