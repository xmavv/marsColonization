import { useMutation } from "@tanstack/react-query";
import { createUser as createUserApi } from "../../services/apiUsers";

export function useCreateUser() {
  const { mutate: createUser, isPending } = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => createUserApi(username, password),
  });

  return { createUser, isPending };
}
