import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiUsers";

export function useLogin() {
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => loginApi(username, password),
  });

  return { login, isPending };
}
