import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../contexts/AuthContext";
import { getUser } from "../../services/apiUsers";

export function useUser() {
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(user?.username as string),
  });

  return { data, isLoading };
}
