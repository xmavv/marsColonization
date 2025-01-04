import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser as createUserApi } from "../../services/apiUsers";
import { useNavigate } from "react-router-dom";

export function useCreateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createUser, isPending } = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => createUserApi(username, password),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/login");
    },
  });

  return { createUser, isPending };
}
